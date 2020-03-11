import React from "react";
import { render, waitForElement, fireEvent } from "@testing-library/react"
import Input from '../components/input/Input'

describe('test for imput component', () => {
  it("input text", async () => {
    const { getByTestId, getByText } = render(
      <Input
        label="Pesquisa"
        type="test"
        list="browsers"
        option={["a1", "a2"]}
      />
    )
    const imputNode = await waitForElement(
      () => getByTestId("form-input")
    )
    const newValue = "acer"
    fireEvent.change(
      imputNode,
      { target: { value: newValue } }
    )
    expect(imputNode.value).toEqual(newValue)
  })

  it("input text failed", async () => {
    const { getByTestId, getByText } = render(
      <Input
        label="Pesquisa"
        type="number"
        list="browsers"
        option={["a1", "a2"]}
      />
    )
    let imputNode = await waitForElement(
      () => getByTestId("form-input")
    )
    const newValue = "ty"
    fireEvent.click(imputNode);
    fireEvent.change(
      imputNode,
      { target: { value: newValue } }
    )
    await imputNode.onChange
    imputNode = await waitForElement(
      () => getByTestId("form-input")
    )

    expect(imputNode.value).toEqual(newValue)
  })

  it("generating options", async () => {
    const { getByTestId, getByText } = render(
      <Input
        label="Pesquisa"
        type="test"
        list="browsers"
        option={["a1", "a2"]}
      />
    )

    const optionsNode = await waitForElement(() => getByTestId("form-option"))
    let optionsValidate = false

    if (optionsNode.innerHTML.indexOf("a2") !== -1 && optionsNode.innerHTML.indexOf("a1") !== -1) {
      optionsValidate = true
    }
    expect(optionsValidate).toEqual(true)
  })
})
