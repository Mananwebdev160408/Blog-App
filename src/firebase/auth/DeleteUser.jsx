import { auth } from "../firebase";
import { deleteUser } from "firebase/auth";

let user=auth.currentUser

async function DeleteUser() {
    if(user){
       try {
        await deleteUser(user)
        return {status:true , message:'Successfully deleted your account' , error:null}
    } catch (error) {
        return {status:false , message:'plz try again lates', error:error}
    } 
    }else{
        return { status: false, message: 'No user is currently logged in', error: 'NO_USER' };
    }
    
}
export default DeleteUser