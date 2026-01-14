import { createContext, useReducer } from "react";


     export  const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
  const PostListReducer =(currPostList, action ) =>{
let newPostList =currPostList;
 
if(action.type ==="DELETE_POST"){
 newPostList = currPostList.filter(post => post.id !== action.payload.postId);

}
  
else if (action.type ==="ADD_POST"){
   newPostList =[action.payload, ...currPostList]
}
 return newPostList;
  
  };


const PostListProvider = ({ children }) => {
  const [postList,dispatchpostList] = useReducer(PostListReducer,[]);

const addPost =(userid,postTitle,postbody,reactions,tags) =>{
 
  
dispatchpostList({
  type :'ADD_POST',
  payload :{
 
 id:Date.now(),
title :postTitle,
body :postbody,
reactions :reactions,
 userid :userid,
 tags:tags,

  }
})

};


const deletePost = (postId) =>{
 dispatchpostList({
type : "DELETE_POST",
payload : {
  postId,
},

 });

};
 
  return(
    <PostList.Provider value={{postList,addPost,deletePost}}>{children}

    </PostList.Provider>
  );
};



export default PostListProvider;
