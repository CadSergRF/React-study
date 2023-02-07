import React from 'react'
import MyInput from './UI/inputs/MyInput'
import Myselect from './UI/select/Myselect'

const PostFilter = ({filter, setFilter}) => {
  return (
    <div>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({...filter, query: e.target.value})}
        placeholder='Поиск...'
      />
      <Myselect
        value={filter.sort}
        onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
        defaultOption='Сортировка по...'
        options={[
          { value: 'title', name: 'по названию' },
          { value: 'body', name: 'по описанию' }
        ]}
      />
    </div>
  )
}

export default PostFilter