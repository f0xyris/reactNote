import React from 'react'
import './note-list-item.sass';


const NoteListItem = ({id, label, onDelete, onChangeLabel, onChecked}) => {
    return (
        <form className="noteListItem">
            <span>{id + 1}.</span>
            <input className="noteInput" type = "text" value = {label} onChange={onChangeLabel}/>
            <input onChange = {onChecked} className="noteCheckBox" type="checkbox" />
            <button 
                onClick={onDelete} 
                type="button"
                className="btn btn-outline-danger btn-sm float-right"
            >
                <i className="fa fa-trash-o" />
            </button>
        </form>
    )
}
 
export default NoteListItem;
