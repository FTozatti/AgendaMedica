import React from 'react';

import axios from 'axios';

export default class LoginList extends React.Component {
  state = {
    email: [],
    password: []
  }

  /*
  componentDidMount() {
    axios.get(`https://api.github.com/users/GabrielaPozetti`)
      .then(res => {
        console.log(res.data)
        const email = res.data;
        const password = res.data;
        this.setState({ email });
        this.setState({ password });
      })
  }
*/

handleChange = event => {
  this.setState({ email: event.target.value });
  this.setState({ password: event.target.value });
}

handleSubmit = event => {
  event.preventDefault();

  const user = {
    email: this.state.email,
    password: this.state.password
  };

  axios.post(`http://localhost:3001/login?emailUser=gabiteste@gmail.com&senhaUser=teste1234`, { user })
    .then(res => {
      console.log(res);
      console.log(res.data);
    })
}

  render() {
    return (
      <ul>
        { this.state.email.map(email => <li>{email.name}</li>)}
        { this.state.password.map(password => <li>{password.name}</li>)}
      </ul>
    )
  }
}