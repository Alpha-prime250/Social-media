import {  useContext, useRef } from "react";
import { PostList } from "./Post-list-store";


const CreatePost = () => {

 const{addPost} = useContext(PostList);

  const useridElement = useRef();
  const postTitleElement  = useRef();
  const postbodyElement  =  useRef();
  const reactionsElement  =  useRef();
  const  tagsElement = useRef();


 const handleSubmit = (event) => {
  event.preventDefault();
  const userid = useridElement.current.value;
  const  postTitle = postTitleElement.current.value;
  const postbody=  postbodyElement .current.value;
  const  reactions = reactionsElement.current.value;
  const  tags =  tagsElement.current.value.split(" ")

addPost(userid,postTitle,postbody,reactions,tags);

useridElement.current.value ="";
 postTitleElement.current.value ="";
postbodyElement .current.value ="";
 reactionsElement.current.value =""
tagsElement.current.value ="";


 };

  return(

     <form className="Create-post" onSubmit={handleSubmit} >
  <div className="mb-3">
    <label htmlFor="userid" className="form-label">
    
    Enter your user id
    </label>

    <input 
    type="text"

    ref={useridElement }
     className="form-control" 
     id="userid"
    placeholder="your user id"
    />
  
  </div>


  <div className="mb-3">
    <label forname="title" className="form-label">
    
    Post Title
    </label>

    <input type="text"
     ref={postTitleElement }
     className="form-control" 
     id="title"
    placeholder="How are you feeling today ..."
    />
  
  </div>
 

  
  <div className="mb-3">
    <label htmlFor="body" className="form-label">
    
    Post Content
    </label>

    <textarea

     type="text"
      ref={postbodyElement }
     className="form-control" 
     id="body"
    placeholder="Tell us more about post"
    />
  
  </div>
  <div className="mb-3">
    <label forname="reaction" className="form-label">
    
    Number of reactions
    </label>

    <input type="text"
     ref={reactionsElement}
     className="form-control" 
     id="reaction"
    placeholder="How  many people reacted to your post"
    />
  
  </div>


   <div className="mb-3">
    <label forname="tags" className="form-label">
    
    Enter your Hastags here
    </label>

    <input type="text"
     ref={tagsElement }
     className="form-control" 
     id="tags"
    placeholder="Please enter tag "
    />
  
  </div>
  <button type="submit" className="btn btn-primary">Post</button>
</form>
  )
};

export default CreatePost;


    