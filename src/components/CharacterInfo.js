import React, { useState } from 'react';

export default function CharacterInfo({ character }) {

    const [active, setActive] = useState(false);

    function toggleActive() {
        setActive(prevActive => !prevActive);
    }

    
    return (
        <>
            {active && (
                <div className="character-info" onClick={toggleActive}>
                    <h3><strong>{character.name}</strong></h3>
                    <hr />
                    <ul>
                        {/* <li>Name: {character.name}</li> */}
                        <li>Birthday: {character.birthday}</li>
                        <li>Occupation: {character.occupation.length > 1 ?
                                                    <ul>{character.occupation.map((oc, ind) => <li key={ind}>{oc}</li>)}</ul> :
                                                    character.occupation
                                        }
                        </li>
                        <li>Status: {character.status}</li>
                        <li>Nickname: {character.nickname}</li>
                        <li>Portrayed: {character.portrayed}</li>
                    </ul>
                </div>
            )}
    
            {!active && (
                <div className="character" onClick={toggleActive}>
                    <img src={character.img} alt={character.name} />
                </div>
            )}
        </>
    )
}
