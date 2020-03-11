import React, { Component } from 'react';
import { Button, Row, Col, Label } from "reactstrap";
import { connect } from "react-redux";

import Graphic from '../../components/graphic/Graphic.js';
import Input from "../../components/input/Input.js"

class details extends Component {
  constructor(props) {
    super(props)
    this.startData = this.startData.bind(this)
    this.endData = this.endData.bind(this)
  }

  startData(inputData) {
    const data = inputData.target.value
    const { dispatch } = this.props
    dispatch({ type: "ADD_START_DATA", title: data })
  }

  endData(inputData) {
    const data = inputData.target.value
    const { dispatch } = this.props
    dispatch({ type: "ADD_END_DATA", title: data })
  }

  render() {
    const { storeValue } = this.props
    return (
      <>
     
        <Row>
          <Col>
            <Button href="/">Come back</Button>
          </Col>
          <Col>
            <Input
             data-testid="form-row"
              label="Initial date"
              type="date"
              onFunction={this.startData}
            />
          </Col>
          <Col>
            <Input
              label="Last date"
              type="date"
              onFunction={this.endData}
            />
          </Col>
        </Row>
        <br />
        <Label>{storeValue.input}</Label>
        <br />
        <Graphic />
      </>
    );
  }
}

const mapStateToProps = store => ({
  storeValue: store
})

export default connect(mapStateToProps)(details);