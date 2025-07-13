import { getDoc,doc } from "firebase/firestore";
import { database } from "../firebase";

async function GetPost(slug) {
    try {
        let document=await getDoc(doc(database,'posts',slug))
        if(document.exists()){
            return {id:document.id,...document.data()}
        }
        else{
            return null
        }
    } catch (error) {
        console.log(error)
    }
}