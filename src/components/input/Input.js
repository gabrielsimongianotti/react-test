import React from 'react';
import { Input, Label } from 'reactstrap';
//example
{/*

    <Input
      label="Pesquisa"
      type="test"
      list="browsers"
      option={["1","2"]}
      onFunction={this.search}
    />

*/}
function Inputs(props) {
  const { label = "label", type = "test", list = "",option=[],onFunction=(eventInput)=>{console.log(eventInput.target.value)} } = props

  return (
    <>
      <Label>
        {label}
      </Label>
      <Input data-testid="form-input" type={type} list={list} onChange={onFunction} />
      <datalist data-testid="form-option" id={list}>
      {option.map((name, intKey) =><option  key={intKey}  value={name} />)}
      </datalist>
     
    </>
  );
}
export default Inputs;