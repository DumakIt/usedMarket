import { atom, selector } from "recoil";
import { getNewAccessToken } from "../libraries/getNewAccessToken";

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const restoreAccessTokenLoadable = selector({
  key: "restoreAccessTokenLoadable",
  get: async () => {
    const newAccessToken = await getNewAccessToken();
    return newAccessToken;
  },
});

export const withAuthBooleanState = atom({
  key: "withAuthBoolean",
  default: false,
});
