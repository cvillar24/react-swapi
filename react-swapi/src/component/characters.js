import React from 'react';
import axios from 'axios';

export default class Characters extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://swapi.dev/api/people/?search=Skywalker`)
      .then(res => {
          console.log(res.data.results);
        const persons = res.data.results;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.name}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}
