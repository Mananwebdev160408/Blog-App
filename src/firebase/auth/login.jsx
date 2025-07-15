import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";


async function Login({ email, password }) {

  try {
    let UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    let user = UserCredential.user;
    let providerId=user.providerData[0].providerId
    if (user) {
      
      return {status:true,message:'logged in successfully' , providerId:providerId}
    } else {
      return {status:false,message:'please try again later' , providerId:providerId}
    }
  } catch (error) {
    console.log(error);
    return {status:false}
  }
}
export default Login
