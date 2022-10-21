import { useState } from 'react'

import styles from './search.module.scss'

interface ISearchHeader {
  onSearch: (query: string) => Promise<void>
}

const SearchHeader = ({ onSearch }: ISearchHeader) => {
  const [keyword, setKeyword] = useState('')

  const handleKeywordChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setKeyword(e.currentTarget.value)
  }

  const handleKeywordSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
    onSearch(keyword)
  }

  return (
    <form onSubmit={handleKeywordSubmit} className={styles.search}>
      <input
        value={keyword}
        onChange={handleKeywordChange}
        placeholder='Search with keyword'
        className={styles.input}
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default SearchHeader
