import React, { Component } from 'react';
import './App.css';
import { ProductList, ErrorView } from "./components";
import Loading from './components/Loading';

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
    fetch('https://api.treez.io/v1.0/dispensary/goe/menu/product_list?type=all&offset=0&limit=600')
      .then(response => response.json())
      .then(data => {
        // just for fun -> i will handle this error from your super api ;)
        if (data && data.error) {
          this.setState({ errData: data.error, error: true, loading: false})
        } else {
          this.setState({ data, loading: false })
        }
      })
      .catch(e => this.setState({ errData: e, error: true, loading: false }));
  }

  render() {
    const { error, errData, loading, data } = this.state;
    const product_list = (data && data.product_list) || [];
    const hasError = error || (data && data.error);

    return (
      <div>
        <Loading loading = {loading}>
          <ErrorView 
            hasError = {hasError} 
            errData = {errData}
          >
            <ProductList data = {product_list} />
          </ErrorView>
        </Loading>
      </div>
    );
  }
}

export default App;