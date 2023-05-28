import React, {useMemo, useRef, useState} from 'react'
import './styles/app.css'
import PostList from "./components/PostList";
import MyButton from "./components/UI/button/MyButton";
import MyInput from "./components/UI/input/MyInput";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/select/MySelect";
import postForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: 1,title: "Javascript", body: "JS - это яп"},
        {id: 2,title: "C#", body: "C# - это яп"},
        {id: 3,title: "C++", body: "C++ - это яп"},
        {id: 4,title: "Ruby", body: "Ruby - это яп"},
        {id: 5,title: "Go", body: "GO - это яп"},
        {id: 6,title: "PHP", body: "PHP - это яп"},
    ])

    const [filter, setFilter] = useState({sort: '', query: ''})

    const removePost = (post) =>{
        setPosts(posts.filter(p => post.id !== p.id))
    }
    const createPost = (post) => {
        setPosts([...posts, post]);
    }

    //сортировка и фильтрация
    const searchedPosts = useMemo(()=>{
        if(filter.sort){
            return  [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(()=>{
        return searchedPosts.filter(post=>post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [searchedPosts, filter.query])


  return (
      <div className="App">
          <PostForm createPost={createPost}/>
          <hr style={{margin: '15px 0'}}/>
          <PostFilter filter={filter} setFilter={setFilter}/>
          <PostList removePost={removePost} posts={sortedAndSearchedPosts}/>
      </div>
  );
}

export default App;
