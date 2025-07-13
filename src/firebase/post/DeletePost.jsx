import { deleteDoc } from "firebase/firestore";
import { database } from "../firebase";



async function DeletePost(slug,navigate) {
    
    if(slug){
        try {
            await deleteDoc(doc(database,'posts',slug))
            navigate('/all-post')
            return {status:true}
            
            
        } catch (error) {
            console.log(error)
            return {status:false}
        }
        
        
    }
    else{
        console.log('something went wrong while deleting the post, slug form useParams() not found')
    }
}
export default DeletePost