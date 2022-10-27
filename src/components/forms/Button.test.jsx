import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";
import Button from "./Button";

describe("Group of test for Button ", () => {
  beforeEach(() => {
    jest.spyOn(console, "error");
    jest.spyOn(console, "warn");
  });

  afterEach(() => {
    expect(console.error).not.toBeCalled();
    expect(console.warn).not.toBeCalled();
  });

  it("should render with required PropTypes", async () => {
    // arrange
    const buttonText = "TEXTO BOTON";
    const ButtonContent = () => {
      return <p>{buttonText}</p>;
    };
    // act
    const { getByText } = render(<Button buttonContent={<ButtonContent />} />);
    screen.debug();

    // assert
    expect(getByText(buttonText)).toBeInTheDocument();
  });

  it("should have a custom class", () => {
    // arrange
    const customClass = "text-black";
    const textoBoton = "Boton";
    // act
    const { getByText } = render(
      <Button
        buttonContent={<div>{textoBoton}</div>}
        buttonClassName={customClass}
      />
    );
    const BotonSeleccionado = getByText(textoBoton).parentElement;

    // assert
    expect(BotonSeleccionado.className).toMatch(/text-black/);
  });

  it("should trigger a custom action onClick event", () => {
    // arrange
    const textoBoton = "Boton";
    let contador = 0;
    const incrementar = jest.fn(() => {
      contador++;
    });

    // act
    const { getByText } = render(
      <Button
        buttonContent={<div>{textoBoton}</div>}
        buttonAcction={incrementar}
      />
    );
    const BotonSeleccionado = getByText(textoBoton).parentElement;
    fireEvent.click(BotonSeleccionado);

    // assert
    expect(incrementar).toHaveBeenCalledTimes(1);
    expect(contador).toBe(1);
  });
});
