import React, { Component } from 'react';
import './note-add.sass';

export default class NoteAdd extends Component {

    state = {
      val: ''
    };

    onLabelChange = (e) => {
      const val = e.target.value;
      this.setState({
        val
      })
    };

    onSubmit = (e) => {
      e.preventDefault();
      this.props.onAddItem(this.state.val);
      this.setState({
        val: ''
      })
    };

    render() {
        return (
            <div>
                <form className="todo-add d-flex"
                    onSubmit = {this.onSubmit}
                >
                    <input onChange = {this.onLabelChange} type="text"
                            className="form-control search-input"
                            placeholder="Dont forget something ipmortant, note it here... " 
                            value = {this.state.val} />
                    <button onClick= {this.onSubmit} type="button"
                            className="btn btn-outline-secondary btn-add">Add</button>
                </form>
            </div>
        )
    }
}
