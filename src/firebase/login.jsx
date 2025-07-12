import { auth } from "./firebase";
import { useNavigate } from "react-router";
import { signInWithEmailAndPassword } from "firebase/auth";

async function Login({ email, password }, navigate) {
  let navigate = useNavigate();
  try {
    let UserCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    let user = UserCredential.user;
    if (user) {
      navigate("/");
      return {status:true,message:'logged in successfully'}
    } else {
      return {status:false,message:'please try again later'}
    }
  } catch (error) {
    console.log(error);
  }
}
export default Login
