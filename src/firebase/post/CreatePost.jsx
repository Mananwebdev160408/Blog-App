import { setDoc,doc } from "firebase/firestore";
import { database, storage } from "../firebase";

import { auth } from "../firebase";
import { getDownloadURL, uploadBytes } from "firebase/storage";

async function CreatePost({title,content,featuredImageFile},navigate){
    
    let user=auth.currentUser
    let slugger=(value)=>{
        return value.replace(/ /g,'-')
    }
    let slug=slugger(title)
    if(user){
        try {
            let imgRef=ref(storage,`posts/${user.uid}/${Date.now()}__${featuredImageFile.name}`)
            await uploadBytes(imgRef,featuredImageFile)
            let imgURL= await getDownloadURL(imgRef)
            await setDoc(doc(database,'posts',slug),{
            title,
            content,
            slug,
            authorId:user.uid,
            createdAt:new Date(),
            featuredImg:imgURL

        })
        navigate(`/all-post/${slug}`)
    } catch (error) {
        console.log(error)
    }
    }
    else{
        return {status:false , message:'user is not authenticated'}
    }
}
export default CreatePost