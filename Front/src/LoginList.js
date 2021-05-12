import React from 'react';

import axios from 'axios';

export default class LoginList extends React.Component {
  state = {
    email: [],
    password: []
  }

  componentDidMount() {
    axios.get(`http://localhost:3001/login?emailUser=gabiteste@gmail.com&senhaUser=teste1234`)
      .then(res => {
        const email = res.data;
        const password = res.data;
        this.setState({ email });
        this.setState({ password });
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