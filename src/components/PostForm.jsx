import React, {useState} from 'react';
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = (props) => {
    const [post, setPost] = useState({title: '', body: ''});

    function add(e){
        e.preventDefault();
        props.createPost({...post, id: Date.now()});
        setPost({title: '', body: ''});
    }

    return (
        <form style={{display: "flex", flexDirection: "column"}}>
            <MyInput
                type="text"
                placeholder="Название поста"
                value={post.title}
                onChange={event => setPost({...post, title: event.target.value})}/>
            <MyInput
                type="text"
                placeholder="Описание поста"
                value={post.body}
                onChange={event => setPost({...post, body: event.target.value})}/>
            <MyButton onClick={add}>Добавить пост</MyButton>
        </form>
    );
};

export default PostForm;