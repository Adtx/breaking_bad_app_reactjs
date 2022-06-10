import React, { useState, useRef, useEffect } from 'react';

export default function SearchBar({ updateURIQuery }) {
  const [keywork, setKeywork] = useState('');
  const inputField = useRef(null);

  function handleSubmit(ev) {
    ev.preventDefault();
    updateURIQuery(keywork);
  }

  // Instead of this effect could have just added an 'autoFocus' attribute to the input element
  useEffect(() => {
    inputField.current.focus();
  },);
  

  return (
      <div id="search-bar">
        <form onSubmit={ handleSubmit }>
          <input ref={inputField} type="text" placeholder='Search characters...' value={keywork} onChange={e => setKeywork(e.target.value)} />
        </form>
      </div>
  )
  
  
  
  
  /*  return (
      <div id="search-bar">
        <form >
          <input type="text" placeholder='Search for a character' onChange={e => updateURIQuery(e.target.value)} />
        </form>
      </div>
  ) */
}
