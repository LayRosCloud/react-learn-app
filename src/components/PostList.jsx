import React, {useState} from 'react';
import PostItem from "./PostItem";

const PostList = ({removePost, posts}) => {

    if(!posts.length){
        return <h1>Список пуст...</h1>
    }

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Список постов</h1>
            {posts.map((post,index)=>
                <PostItem removePost={removePost} item={post} key={post.id} index={index + 1}/>
            )}
        </div>
    );
};

export default PostList;