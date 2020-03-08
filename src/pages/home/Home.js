import React, { Component } from 'react';

import Input from "../../components/input/Input.js"
export default class home extends Component {
  render() {
    return (
      <>
      <h4>Home</h4>
      <Input
        label="Pesquisa"
        type="test"
        list="browsers"
        option={["1","2"]}
      />
      </>
    );
  }
}
