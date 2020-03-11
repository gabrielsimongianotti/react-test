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
        let key, apiOptions = [], apiSymbol = []
        for (key in response.bestMatches) {
          apiOptions.push(response.bestMatches[key]['2. name'])
          apiSymbol.push(response.bestMatches[key]['1. symbol'])
        }
        if (apiOptions.length > 0) {
          this.setState({
            ...this.state,
            options: apiOptions,
            symbol: apiSymbol,
            error: ""
          })
        }
        if (response["Note"] !== undefined) {
          this.setState({
            ...this.state,
            error: response["Note"],
          })
        }
        if (response["Error Message"] !== undefined) {
          this.setState({
            ...this.state,
            error: response["Error Message"],
          })
        }
      })
      .catch(error => {
        this.setState({
          ...this.state,
          error: `Error state ${error.request.status}`,
        })
      })
  }

  endPoint() {
    const { storeValue, dispatch } = this.props;
    getEndPoint(this.findSymbol(storeValue.input)).
      then(response => {
        if (response["Error Message"] !== undefined) {
          this.setState({
            ...this.state,
            error: response["Error Message"]
          })
        }
        else if (response["Note"] !== undefined) {
          this.setState({
            ...this.state,
            error: response["Note"],
          })
        }
        else {
          dispatch({ type: "ADD_DATAS", title: response })
          this.props.history.push('/details')
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
      if (data === options[intOptions]) {
        id = symbol[intOptions]
      }
      if (intOptions === options.length) {
        id = symbol[intOptions]
      }
    }

    return id
  }

  render() {
    return (
      <>
        <Label>Research</Label>
        <InputGroup>
          <Input
            type="test"
            list="browsers"
            option={this.state.options}
            onFunction={this.search}
          />
          <InputGroupAddon addonType="append">
            <Button data-testid="form-button" color="secondary" onClick={this.endPoint}><FaSearch /></Button>
          </InputGroupAddon>
        </InputGroup>
        {this.state.error !== "" ?
          <>
            <br />
            <Alert data-testid="form-error" color="danger">
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