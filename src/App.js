import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      data: [],
      error: false,
      errData: null,
    }
  }

  componentDidMount() {
    fetch('https://api.treez.io/v1.0/dispensary/goe/menu/product_list?type=all&offset=0&limit=600"')
      .then(response => response.json())
      .then(data => {
        // just for fun -> i will handle this error from your super api ;)
        if (data && data.error) {
          this.setState({ errData: data.error, error: true})
        } else {
          this.setState({ data, loading: false })
        }
      })
      .catch(e => this.setState({ errData: e, error: true }));
  }

  render() {
    const { error, errData, loading, data } = this.state;

    if (error || (data && data.error)) {
      return (
        <div>
          <h1>SOMETHING WENT WRONG!</h1>
          <p>{errData}</p>
        </div>
      )
    }

    if (loading) {
      return (
        <div>
          <h1>LOADING, PLEASE WAIT...</h1>
        </div>
      )
    }
    
    if (!loading && !error && data.length !== 0) {
      return (
        <div className="App">
          {/* here will be super styled list for you <3 */}
          {`here is data - ${data}`} 
        </div>
      );
    }
  }
}

export default App;
