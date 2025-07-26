import React, { useState, useRef, useEffect } from "react";
import Button from "./Button";
import { Editor } from "@tinymce/tinymce-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import UpdatePost from "../firebase/post/Updatepost";
import CreatePost from "../firebase/post/CreatePost";

function PostForm({ post }) {
  const [img, setimg] = useState([]);
  let Contref = useRef();

  let navigate = useNavigate();
  let { register, handleSubmit, getValues, setValue } = useForm({
    defaultValues: {
      title: post ? post.title : "New post",
      content: post ? post.content : "",
      featuredImageFile: post ? post.featuredImageFile : null,
    },
  });
  async function postsubmit(data) {
    if (post) {
      let slug = post.slug;
      let result = await UpdatePost(slug, { ...data });
      if (result.status === true) navigate("/");
    } else {
      let result = await CreatePost({ ...data });
      if (result.status === true) {
        navigate("/");
        console.log("reached");
      } else {
        console.log("not working");
        console.log("reached");
      }
    }
  }
  useEffect(() => {
    register("content", { required: true });
  }, [register]);
  //TODO: try removing register form dependency array

  return (
    <>
      <form onSubmit={handleSubmit(postsubmit)}>
        <div className="max-h-[100vh] max-w-[100vw]">
          <nav className="px-8 py-10 flex justify-between items-center">
            <button className='w-[80px] h-[30px] rounded-[100px] text-[18px] font-semibold bg-orange-700 cursor-pointer text-white border-none hover:scale-103 hover:translate-y-[-1px] transition-all duration-200 'onClick={()=>{
              navigate('/')
            }}>
        ← Back
    </button>
            <button
              className="w-[80px] h-[30px] rounded-[100px] text-[18px] font-semibold bg-orange-700 cursor-pointer text-white border-none hover:scale-103 hover:translate-y-[-1px] transition-all duration-200 "
              type="submit"
            >
              {post ? <h1>Update →</h1> : <h1>Post →</h1>}
            </button>
          </nav>
          <main>
            <div className="w-full  h-30 flex ">
              <section className=" flex justify-center w-[100vw]  items-center">
                <label
                  htmlFor="text"
                  className="leading-7  text-white text-2xl"
                >
                  Title{" "}
                </label>
                <h1 className="text-white text-2xl">→</h1>
                <input
                  type="text"
                  id="text"
                  name="text"
                  placeholder="Enter title for your post"
                  {...register("title", {
                    required: true,
                  })}
                  className="w-2xl bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </section>
              
            </div>
            <div>
              <div className="w-full  flex h-[420px] mt-12 ">
                <section className=" h-full w-3/5 pl-7 flex justify-center items-center ">
                  <Editor
                    initialValue={getValues("content")}
                    onEditorChange={(value) => setValue("content", value)}
                    ref={Contref}
                    apiKey="canis1yqacun09yjsa8zrbein4evno3ut759l1oh9c2ydq28"
                    init={{
                      plugins: [
                        // Core editing features
                        "anchor",
                        "autolink",
                        "charmap",
                        "codesample",
                        "emoticons",
                        "image",
                        "link",
                        "lists",
                        "media",
                        "searchreplace",
                        "table",
                        "visualblocks",
                        "wordcount",
                        // Your account includes a free trial of TinyMCE premium features
                        // Try the most popular premium features until Jul 19, 2025:
                        "checklist",
                        "mediaembed",
                        "casechange",
                        "formatpainter",
                        "pageembed",
                        "a11ychecker",
                        "tinymcespellchecker",
                        "permanentpen",
                        "powerpaste",
                        "advtable",
                        "advcode",
                        "editimage",
                        "advtemplate",
                        "ai",
                        "mentions",
                        "tinycomments",
                        "tableofcontents",
                        "footnotes",
                        "mergetags",
                        "autocorrect",
                        "typography",
                        "inlinecss",
                        "markdown",
                        "importword",
                        "exportword",
                        "exportpdf",
                      ],
                      toolbar:
                        "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
                      tinycomments_mode: "embedded",
                      tinycomments_author: "Author name",
                      mergetags_list: [
                        { value: "First.Name", title: "First Name" },
                        { value: "Email", title: "Email" },
                      ],
                      ai_request: (request, respondWith) =>
                        respondWith.string(() =>
                          Promise.reject("See docs to implement AI Assistant")
                        ),
                    }}
                  />
                </section>
                <section className=" h-full w-2/5 flex justify-center items-center">
                  <div className="flex flex-col w-2/3 items-start space-y-2">
                    <label
                      htmlFor="file-upload"
                      className="text-sm font-medium text-white"
                    >
                      Upload File
                    </label>
                    <input
                      type="file"
                      id="file-upload"
                      className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-all"
                    />
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </form>
    </>
  );
}

export default PostForm;
