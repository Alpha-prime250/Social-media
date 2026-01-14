import { useContext } from "react";
import Post from "./post";
import { PostList as PostListdata } from "./Post-list-store";
import Welcome from "./welcome";


 const PostList=() =>{
   const {postList} = useContext(PostListdata);
   
  return ( 
  <>

   {postList.length === 0 && <Welcome/>}

  {postList.map((post) => ( 
    <Post key ={post.id} post={post}/>
    ))}
     </>
  );

};
export default PostList;