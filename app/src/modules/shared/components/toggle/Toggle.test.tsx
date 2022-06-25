import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Toggle } from "./Toggle";

describe("Toggle", () => {
  it("should render without crashing", () => {
    const { container } = render(
      <Toggle
        label="Label"
        onChange={() => jest.fn()}
        checked={true}
        name="test_1"
      />
    );
    const property = container.querySelector(".toggle-container");
    expect(property).toBeInTheDocument();
  });
  it("should render with all elements", () => {
    const { container } = render(
      <Toggle
        label="Label"
        onChange={() => jest.fn()}
        checked={true}
        name="test_1"
      />
    );
    const toggleContainer = container.querySelector(".toggle-container");
    const toggleLabel = container.querySelector(".toggle-label");
    const toggle = container.querySelector(".toggle");
    const toggleCheckbox = container.querySelector(".toggle__checkbox");
    const toggleInnerLabel = container.querySelector(".toggle__inner-label");

    expect(toggleContainer).toBeInTheDocument();
    expect(toggleLabel).toBeInTheDocument();
    expect(toggle).toBeInTheDocument();
    expect(toggleCheckbox).toBeInTheDocument();
    expect(toggleInnerLabel).toBeInTheDocument();
    expect(toggleLabel).toHaveTextContent("Label");
  });
  it("should call the callback function on toggle change", () => {
    const handleOnChange = jest.fn();
    const { container } = render(
      <Toggle
        label="Label"
        onChange={handleOnChange}
        checked={true}
        name="test_1"
      />
    );
    fireEvent.click(
      container.querySelector(`#toggle__checkbox_test_1`) as HTMLInputElement,
      {
        target: { value: false },
      }
    );
    expect(handleOnChange).toHaveBeenCalledWith(false, "test_1");
  });
});
