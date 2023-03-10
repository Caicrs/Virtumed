import { LocalStorageKeys } from "../types/LocalStorageKeys";
import { LocalStorageHelper } from "./LocalStorageHelper";
import { RoutePath } from "../types/routes";

export const Auth = {
    profile: (): any => {
        const thisProfile = LocalStorageHelper.get(LocalStorageKeys.PROFILE)
        return thisProfile
    },
    user: (): any => {
        const thisUser = LocalStorageHelper.get(LocalStorageKeys.USER)
        return thisUser
    },
    token: (): any => {
        const token = LocalStorageHelper.get(LocalStorageKeys.TOKEN)
        return token 
    },
    isAuth: (): boolean => {
        const token = LocalStorageHelper.get(LocalStorageKeys.TOKEN)
        const user = LocalStorageHelper.get(LocalStorageKeys.USER)
        return token !== null && user !== null
    },
    logout: (): void => {
        LocalStorageHelper.clear()
        window.location.replace(RoutePath.HOME)
    }
}