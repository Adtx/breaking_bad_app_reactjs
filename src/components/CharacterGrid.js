import React from 'react';
import CharacterInfo from './CharacterInfo';
import spinner from '../img/spinner.gif'

export default function CharacterGrid({ isLoading, items }) {

    return (
        <>
            {isLoading && (
                <div className="spinner-container">
                    <img src={spinner} alt="" />
                    <h2>Fetching data...</h2>
                </div>
            )}

            {!isLoading && (

                <div id="character-grid">
                    {items.map(item => (
                        <CharacterInfo key={item.char_id} character={item} />
                    ))}
                </div>
            )}
        </>
    )
}
