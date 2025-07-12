import { auth } from "../firebase";
import { signInAnonymously } from "firebase/auth";

async function GuestSignin() {
   try {
     let UserCredential = await signInAnonymously(auth)
    let user=UserCredential.user
    let providerId=user.providerData[0].providerId
    if(user){
        return {status:true , providerId:providerId , message:'Guest Account Created successfully'}
    }else{
        return {status :false , providerId:providerId , message: 'please try again later' }
    }
   } catch (error) {
        console.log(error)
   }
}
export default GuestSignin