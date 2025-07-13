import { collection, getDocs } from "firebase/firestore";
import { database } from "../firebase";

async function ListPosts() {
  try {
    let group = await getDocs(collection(database, "posts"));
    let postsList = group.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return postsList;
  } catch (error) {
    console.log(error);
    return []
  }
}
export default ListPosts