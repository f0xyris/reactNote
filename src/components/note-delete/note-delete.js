import React from 'react';
import './note-delete.sass';

const NoteDelete = ({onDeleteItems}) => {
    return ( <div className="note-delete">
    <button onClick = {onDeleteItems} type="button"
                className="btn btn-outline-danger btn-delete">Delete</button>
</div> );
}
 
export default NoteDelete;