import React, { Component } from 'react';
import { Label, Alert, InputGroupAddon, Button, InputGroup } from 'reactstrap';
import { FaSearch } from "react-icons/fa";
import { connect } from 'react-redux';

import Input from "../../components/input/Input.js"
import { getSearch, getEndPoint } from "./HomeService.js"

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      error: "",
      options: [],
      symbol: []
    }
    this.search = this.search.bind(this);
    this.endPoint = this.endPoint.bind(this)
  }

  search(word) {
    const { dispatch } = this.props;
    const wordValue = word.target.value
    dispatch({ type: "ADD_INPUT", title: wordValue })

    getSearch(wordValue)
      .then(response => {
        console.log(response)
        let key, apiOptions = [], apiSymbol = []
        for (key in response.bestMatches) {
          apiOptions.push(response.bestMatches[key]['2. name'])
          apiSymbol.push(response.bestMatches[key]['1. symbol'])
        }
        if (apiOptions.length > 0) {
          this.setState({
            ...this.state,
            options: apiOptions,
            symbol: apiSymbol
          })
        }
        if (response["Note"] !== undefined) {
          this.setState({
            ...this.state,
            error: response["Note"],
            options: [],
            symbol: []
          })
        }
        if (response["Error Message"] !== undefined) {
          this.setState({
            ...this.state,
            error: response["Error Message"],
            options: [],
            symbol: []
          })
        }
      })
      .catch(error => {
        this.setState({
          ...this.state,
          error: `Error state ${error.request.status}`,
          options: [],
          symbol: []
        })
      })
  }

  endPoint() {

    const { storeValue, dispatch } = this.props;
    getEndPoint(this.findSymbol(storeValue.input)).
      then(response => {
        console.log(response)
        if (response["Error Message"] !== undefined) {
          this.setState({
            ...this.state,
            error: response["Error Message"]
          })
        }
        if (response["Note"] === undefined) {
          this.props.history.push('/details')
          dispatch({ type: "ADD_INPUT", title: response })
        }
        if (response["Note"] !== undefined) {
          this.setState({
            ...this.state,
            error: response["Note"],
            options: [],
            symbol: []
          })
        }
      }).catch(error => {
        this.setState({
          ...this.state,
          error: `Error state ${error.request.status}`,
          options: [],
          symbol: []
        })
      })
  }

  findSymbol(data) {
    const { symbol, options } = this.state;
    let id = "";
    let intOptions = 0;

    for (intOptions in options) {
      console.log(symbol[intOptions])
      if (data === options[intOptions]) {
        id = symbol[intOptions]
      }
    }

    return id
  }

  render() {
    return (
      <>
        <Label>Pesquisa</Label>
        <InputGroup>
          <Input
            // label="Pesquisa "
            type="test"
            list="browsers"
            option={this.state.options}
            onFunction={this.search}
          />
          <InputGroupAddon addonType="append">
            <Button color="success" onClick={this.endPoint}><FaSearch /></Button>
          </InputGroupAddon>
        </InputGroup>
        {this.state.error !== "" ?
          <>
            <br />
            <Alert color="danger">
              {this.state.error}
            </Alert>
          </>
          : null}
      </>
    );
  }
}

const mapStateToProps = store => ({
  storeValue: store
});

export default connect(mapStateToProps)(Home);