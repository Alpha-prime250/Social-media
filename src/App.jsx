import Header from './Header';
import Footer from './footer';
import Sidebar from './side-bar';
import CreatePost from './createpost';
import Post from './post';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from './PostList';
import { useState } from 'react';
import PostListProvider from './Post-list-store';


function App() {

  const [selectedtab,setSelectedtab] = useState("home");
  return (
    <PostListProvider>
  <div  className="app-container">
    <Sidebar 
     selectedtab={selectedtab}
     setSelectedtab={setSelectedtab}
     >

     </Sidebar>
    <div className="content">
<Header></Header>
 {selectedtab === "home" ?( <PostList></PostList>) 
 :(<CreatePost></CreatePost>)
 }
 <Footer></Footer>
</div>
   
         </div> 
    </PostListProvider>
  );
}

export default App;