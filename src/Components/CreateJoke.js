import React, { Component } from 'react';
import AddButton from './AddButton';

class CreateJoke extends Component {

    state = {
        joke: '',
    };

    render() {
        return (
            <div>
                <input 
                    value={this.state.joke} 
                    style={{width: '35vw'}}
                    onChange={ (e) => this.handleInput(e.target.value)}/>

                <div>

                    <AddButton action={ () => this.props.onJokeAdd(this.state.joke)}></AddButton>
                    
                </div>

            </div>
        )
    }

    handleInput(e) {
        this.setState({
            joke: e,
        })
    }
}
export default CreateJoke