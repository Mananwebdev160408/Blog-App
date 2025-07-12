import { doc, setDoc } from "firebase/firestore";
import { auth, database } from "./firebase";
import { useNavigate } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
async function Signup({ email, password, name, BirthDate }, navigate) {
  let navigate = useNavigate();
  try {
    let UserCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    let User = UserCredential.user;
    if (User) {
      await setDoc(doc(database, "users", User.uid), {
        name: name,
        email: email,
        createdAt: new Date(),
        dateofbirth: BirthDate,
      });
      navigate("/");
      return {status:true,message:'account created successfully'}
      //TODO:update state in store after setting up redux which is already installed
    } else {
      return {status:false,message:'please try again later'}
    }
  } catch (error) {
    console.log(error);
  }
}
export default Signup;
