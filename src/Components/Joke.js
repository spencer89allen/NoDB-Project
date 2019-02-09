import React, { Component } from 'react';
import axios from 'axios';

class Joke extends Component {

    state = {
        isEditing: false,
        editInput: this.props.name,
        currentJoke: this.props.name
    }

    componentWillReceiveProps(props) {
        this.setState({
            editInput: props.name,
            currentJoke: props.name,
        });
    }

    handleEdit() {
        this.setState({
            isEditing: true,
        })
    }

    handleUpdateInput(value) {
        this.setState({
            editInput: value
        })
    }

    updateJoke(event) {
        event.preventDefault();

        axios.put(`/api/jokes/${this.props.index}`, { text: this.state.editInput })
            .then(response => {
                this.setState({
                    isEditing: false,
                    currentJoke: response.data,
                    editInput: response.data,
                });
            });
    }

    render() {
        


        return (

            <div>

                <ul className="favItem">
                    {!this.state.isEditing
                        ? (
                            <div>

                                <li>{this.state.currentJoke}</li>

                                <button onClick={this.props.deleteJoke}>Delete</button>

                                <button onClick={ () => this.handleEdit()}>Edit Joke</button>

                            </div>
                        )
                        : (
                            <form onSubmit={() => console.log('submitted')}>

                                <input value={this.state.editInput} onChange={ (e) => this.handleUpdateInput(e.target.value)}/>

                                <button onClick={e => this.updateJoke(e)}>Post</button>
                                <button type="button">Cancel</button>

                            </form>
                        )
                    }

                    

                </ul>

            </div>
        )
    }

}

export default Joke;