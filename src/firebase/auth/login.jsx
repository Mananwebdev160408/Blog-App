import { auth } from "../firebase";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";


async function Login({ email, password }) {
  let navigate = useNavigate();
  try {
    let UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    let user = UserCredential.user;
    let providerId=user.providerData[0].providerId
    if (user) {
      navigate("/");
      return {status:true,message:'logged in successfully' , providerId:providerId}
    } else {
      return {status:false,message:'please try again later' , providerId:providerId}
    }
  } catch (error) {
    console.log(error);
  }
}
export default Login
