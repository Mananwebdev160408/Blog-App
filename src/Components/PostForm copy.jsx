import React,{useState,useRef, useEffect} from "react";
import Button from "./Button";
import { Editor } from "@tinymce/tinymce-react";
import {useForm} from 'react-hook-form'
import { useNavigate } from "react-router";
import UpdatePost from "../firebase/post/Updatepost";
import CreatePost from "../firebase/post/CreatePost";

function PostForm({post}) {
  const [img, setimg] = useState([])
  let Contref=useRef()

  
  let navigate=useNavigate()
  let {register,handleSubmit,getValues,setValue}=useForm({defaultValues:{
    
    title:post?post.title:'',
    content:post?post.content:'',
    featuredImageFile:post?post.featuredImageFile:null
  }
  })
  async function postsubmit(data) {
    if(post){
      let slug=post.slug
      let result=await UpdatePost(slug,{...data})
      if(result.status===true) navigate('/')
    }
  else{
    let result=await CreatePost({...data})
    if(result.status===true) {
      navigate('/')
      console.log('reached')
    }
    else{
      console.log('not working')
      console.log('reached')
    }
  }
  }
  useEffect(()=>{
    register('content',{required:true})
  },[register])
  //TODO: try removing register form dependency array
  
  return (
    <div className="h-screen max-w-screen ">
      <form onSubmit={handleSubmit(postsubmit)}>
      <nav className="px-8 py-10 flex justify-between items-center">
        <Button>← Back</Button>
        <button className='w-[80px] h-[30px] rounded-[100px] text-[18px] font-semibold bg-orange-700 cursor-pointer text-white border-none hover:scale-103 hover:translate-y-[-1px] transition-all duration-200 'type="submit" onClick={()=>{
          console.log('clicked')
        }}>
        {
          post?<h1>Update →</h1>:<h1>Post →</h1>
          }
    </button>
      </nav>

      <div className="grid grid-cols-12 h-[80vh] w-full grid-rows-4   px-6 ">
        <div className="col-span-6 flex justify-center items-center">
          <div className="relative  flex justify-between mx-5 items-center mb-9 w-2xl">
            <label htmlFor="text" className="leading-7  text-white text-2xl">
              Title{" "}
            </label>
            <h1 className="text-white text-2xl">→</h1>
            <input
              type="text"
              id="text"
              name="text"
              placeholder="Enter title for your post"
              {...register('title',{
                required:true
              })}
              className="w-xl bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
        </div>

        
        <div className="flex justify-between mx-16 w-[88vw]  h-[60vh]">
          <div className="px-11  py-4">
            <label className="text-gray-400 font-medium text-[20px] px-3">
              {" "}
              Content→{" "}
            </label>
            <div className="h-96 border bg-amber-400 w-[50vw] rounded-3xl ">
              <Editor
              defaultValue={getValues('content')}
              onEditorChange={(value)=>setValue('content',value)}
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
                initialValue="Welcome to TinyMCE!"
              />
            </div>
          </div>
          <div className="  w-xl flex justify-center items-center">
            <div className="bg-amber-300 p-8 rounded-xl shadow-xl max-w-md w-full">
              <h2 className="text-2xl font-semibold text-gray-800 text-center mb-6">
                Upload Your File
              </h2>

              <div className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-amber-800 rounded-xl hover:border-blue-500 transition-all duration-300">
                <svg
                  className="w-16 h-16 text-blue-500 mb-4 transition-all duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                   
                    
                    d="M12 4v16m8-8H4"
                  />
                </svg>

                <input id="file-upload" type="file" className="hidden" value={img} onChange={(e)=>setimg(e.target.files[0])}
                {...register('featuredImgFile',{required:post?false:false})}
                />

                <label
                  htmlFor="file-upload"
                  className="text-gray-600 cursor-pointer text-center hover:text-blue-600 transition-all duration-300"
                >
                  <span className="block text-xl font-medium">
                    Drag & Drop your file here
                  </span>
                  <span className="block text-sm text-gray-900">
                    Or click to browse
                  </span>
                </label>

               
              </div>

              <button
                id="upload-btn"
               
                className="w-full mt-6 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition-all duration-300"
                disabled
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </div>
    
    </form>
    </div>
  );
}

export default PostForm;
