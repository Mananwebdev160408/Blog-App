import { signOut } from "firebase/auth";
import { auth } from "../firebase";

async function Signout() {
    try {
        await signOut(auth)
        return {
            status:true,
            message:'Successfully Logged out'
        }
    } catch (error) {
        return {
            error:error,
            status:false,
            message:'please try again later'
        }
    }
}
export default Signout