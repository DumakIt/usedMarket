import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  ApolloLink,
  fromPromise,
} from "@apollo/client";
import { createUploadLink } from "apollo-upload-client";
import {
  accessTokenState,
  restoreAccessTokenLoadable,
  withAuthBooleanState,
} from "../stores";
import { onError } from "@apollo/client/link/error";
import { getNewAccessToken } from "../libraries/getNewAccessToken";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { useEffect } from "react";

interface IApolloSettingProps {
  children: JSX.Element;
}

const GLOBAL_STATE = new InMemoryCache();

export default function ApolloSetting(props: IApolloSettingProps): JSX.Element {
  const [, setWithAuthBoolean] = useRecoilState(withAuthBooleanState);
  const [accessToken, setAccessToken] = useRecoilState(accessTokenState);
  const accessTokenLoadable = useRecoilValueLoadable(
    restoreAccessTokenLoadable
  );

  useEffect(() => {
    void accessTokenLoadable.toPromise().then((newAccessToken) => {
      setAccessToken(newAccessToken ?? "");
      setWithAuthBoolean(true);
    });
  }, []);

  const errorLink = onError(({ graphQLErrors, operation, forward }) => {
    if (typeof graphQLErrors !== "undefined") {
      for (const err of graphQLErrors) {
        if (err.extensions.code === "UNAUTHENTICATED") {
          return fromPromise(
            getNewAccessToken().then((newAccessToken) => {
              setAccessToken(newAccessToken ?? "");
              operation.setContext({
                headers: {
                  ...operation.getContext().headers,
                  Authorization: `Bearer ${newAccessToken ?? ""}`,
                },
              });
            })
          ).flatMap(() => forward(operation));
        }
      }
    }
  });

  const uploadLink = createUploadLink({
    uri: "https://backend-practice.codebootcamp.co.kr/graphql",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    credentials: "include",
  });

  const client = new ApolloClient({
    link: ApolloLink.from([errorLink, uploadLink]),
    cache: GLOBAL_STATE,
  });

  return <ApolloProvider client={client}>{props.children}</ApolloProvider>;
}
