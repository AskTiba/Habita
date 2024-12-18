// import statusCodes along with GoogleSignin
import {
  GoogleSignin,
  statusCodes,
} from "@react-native-google-signin/google-signin";

// Somewhere in your code
export const signIn = async () => {
  try {
    await GoogleSignin.hasPlayServices();
    const userData = await GoogleSignin.signIn();
    console.log(JSON.stringify(userData, null, 2));
    // console.log("User Data:", userData);

    if (isSuccessuserData(userData)) {
      setState({ userInfo: userData.data });
    } else {
      // sign in was cancelled by user
    }
  } catch (error) {
    if (isErrorWithCode(error)) {
      switch (error.code) {
        case statusCodes.IN_PROGRESS:
          // operation (eg. sign in) already in progress
          break;
        case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
          // Android only, play services not available or outdated
          break;
        default:
        // some other error happened
      }
    } else {
      // an error that's not related to google sign in occurred
    }
  }
};
