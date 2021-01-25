import React from 'react';
import NoteListItem from '../note-list-item';

import './note-list.sass';


const NoteList = ({notes, onDelete, onChangeLabel, onChecked}) => {
    const elements = notes.map((item, idx) => {
        const {id, label} = item;

        return (
            <li className="list-group-item" key={id}>
                <NoteListItem 
                    label={label}
                    id={idx}
                    onDelete = {() => onDelete(id)}
                    onChangeLabel = {(e)  => onChangeLabel(e, id)}
                    onChecked = {() => onChecked(id)}
                />
            </li>   
        )
        
    });

    return (
        <ul className="list-group-flush note-list">
            {elements}
        </ul>
    )        
}
 
export default NoteList;