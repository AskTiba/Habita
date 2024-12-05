import auth from "@react-native-firebase/auth";

export const signUpWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    throw error;
  }
};

export const signInWithEmailPassword = async (
  email: string,
  password: string
) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password
    );
    return userCredential.user;
  } catch (error: any) {
    throw error;
  }
};
