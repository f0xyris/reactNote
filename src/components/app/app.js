import React, {Component} from 'react';
import NoteList from '../note-list';
import NoteAdd from '../note-add';
import NoteDelete from '../note-delete';

import './app.sass';



export default class App extends Component {

    maxId = 1;

    state = {
        notes: [
            this.createNoteItem('Need to make something special'),
            this.createNoteItem('Make aswesome react note-app'),
            this.createNoteItem('Drink coffee and play some games'),
            this.createNoteItem('Sleep 3 hours and repeat'),
        ],
        val: ''
    };
    
    createNoteItem(label) {
        return {
          label,
          checked: false,
          id: this.maxId++
        }
    };

    onDelete = (id) => {
        this.setState(({notes}) => {
          const idx = notes.findIndex((el) => el.id === id);
          const newArr = [...notes.slice(0, idx), ...notes.slice(idx + 1)];
          return {
            notes: newArr
          }
        });
    };

    onChangeLabel = (e, id) => {
        this.setState(({notes}) => {
            const idx = notes.findIndex((el) => el.id === id);
            const oldItem = notes[idx];
            const newValue = e.target.value;
            const newItem = {...oldItem, label: newValue};
            const newArr = [...notes.slice(0, idx), newItem, ...notes.slice(idx + 1)]
            return {
                notes: newArr
            }
        });
    };

    onAddItem = (text) => {
        const newItem = this.createNoteItem(text)
        this.setState(({notes}) => {
        const newArr = [...notes, newItem];
        if(newItem.label === '') {
            return {
                error: true
            }
        } else {
            return {
                notes: newArr
            }
        }
        });
    };

    onChecked = (id) => {
        this.setState(({notes}) => {
            const idx = notes.findIndex((el) => el.id === id);
            const oldItem = notes[idx];
            const newItem = {...oldItem, checked: !oldItem.checked};
            const newArr = [...notes.slice(0, idx), newItem, ...notes.slice(idx + 1)]
            return {
                notes: newArr
            }
        });
    };

    onDeleteItems = () => {
        this.setState(({notes}) => { 
            const checkedItems = notes.filter(item => item.checked === false);
            return {
                notes: checkedItems
            }
        });
    };

    render() { 
        return (
            <div className="note-app">
                <div className="container note-container">
                    <NoteAdd onAddItem = {this.onAddItem}/>
                    <NoteList 
                        notes = {this.state.notes}
                        onDelete = {this.onDelete}
                        onChangeLabel = {this.onChangeLabel}
                        onChecked = {this.onChecked}
                    />
                    <NoteDelete onDeleteItems = {this.onDeleteItems}/>
                </div>
            </div>
        );
    }
}