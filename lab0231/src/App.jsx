import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [input, setInput] = useState("")
  const [books, setBooks] = useState([])
  const addBook = () => {
    let uuid = self.crypto.randomUUID();
    let newBook = {
      id: uuid,
      done: false,
      title: input,
      author: input
    }
    setBooks(e=>[...e, newBook])
  }
  return (
    <>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Shelf — личный трекер чтения</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link
    href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
    rel="stylesheet"
  />
  <div className="app">
    <div className="app-header">
      <div className="brand">
        <div className="brand-mark">S</div>
        <div className="brand-name">Shelf</div>
      </div>
    </div>
    <section className="screen active" id="screen-shelf">
      <p className="greeting">Добрый вечер</p>
      <div className="add-book-row">
        <input
          className="input"
          id="bookInput"
          placeholder="Название книги..."
          onChange={e=>setInput(e.target.value)}
        />
        <button className="btn" id="addBtn" onClick={addBook}>
          Добавить на полку
        </button>
      </div>
      <div className="list-toolbar">
        <span className="toolbar-title">Книги</span>
        <div className="filter-chip">
          <input type="checkbox" id="filterCheckbox" />
          <label htmlFor="filterCheckbox">
            <span className="dot" />
            Только непрочитанные
          </label>
        </div>
      </div>
      <div className="book-list" id="bookList">
        {books.map(b=>(
          <div className="book-row" data-id={b.id}>
          <div className="book-cover" style={{ background: "#4f6b52" }}>
          </div>
          <div className="book-info">
            <p className={`book-title ${b.done == true ? "done":""}`}>{b.title}</p>
            <div className="book-author">{b.author}</div>
          </div>
          <div className="read-check checked" data-role="toggle">
            <span className="check-circle">✓</span>
            <span className="read-label">{b.state}</span>
          </div>
          <button
            className="delete-btn"
            data-role="delete"
            title="Убрать с полки"
          >
            ✕
          </button>
        </div>
        ))}
      </div>
    </section>
  </div>
</>
)
}

export default App
