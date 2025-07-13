import { updateDoc } from "firebase/firestore";
import { database } from "../firebase";
import { auth } from "../firebase";

async function UpdatePost(slug, { title, content, slug, imgURL }) {
  let user = auth.currentUser;
  if (user) {
    try {
      await updateDoc(doc(database, "posts", slug), {
        title,
        content,
        slug,
        featuredImg: imgURL,
      });
      return {status:true,message:`Updated successfully`}
    } catch (error) {
        console.log(error)
    }
  }
  else{
    return {status:false,message:`user isn't authorized`}
  }
}

export default UpdatePost;
