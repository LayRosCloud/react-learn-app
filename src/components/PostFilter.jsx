import React, {useMemo, useState} from 'react';
import MySelect from "./UI/select/MySelect";
import MyInput from "./UI/input/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={event => setFilter({...filter, query: event.target.value})}
                placeholder="поиск..."
            />

            <MySelect
                value={filter.sort}
                onChange={value => setFilter({...filter, sort: value})}
                defaultValue="Сортировка по: "
                options={[
                    {value: 'title', name: 'Названию'},
                    {value: 'body', name: 'Описанию'},
                ]}/>
        </div>
    );
};

export default PostFilter;