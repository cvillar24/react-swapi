import React from 'react';
import axios from 'axios';

export default class Characters extends React.Component {
  state = {
    characters: [],
    name: '',
    params: {}
  }

  handleChange = event => {
      this.setState({
          name: event.target.value
      });
  }

  handleSubmit = event => {
      event.preventDefault();

      const user = {
          name: this.state.name
      };
      axios.get(`https://swapi.dev/api/people/?search=Skywalker`)
      .then(res => {
          console.log(res.data.results);
        const characters = res.data.results;
        this.setState({ characters });
      })
  }


  render() {
    return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Character:
            <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <button type="submit">Search</button>
            </form>
        
            <ul>
            {
            this.state.characters
                .map(character =>
                <li key={character.name}>{character.name}</li>
                )
            }
            </ul>
      </div>
    )
  }
}
