import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Loader } from "./Loader";

describe("Loader", () => {
  it("should render without crashing", () => {
    const { container } = render(<Loader />);
    const loader = container.querySelector(".loading-container");
    expect(loader).toBeInTheDocument();
  });
  it("should render with all elements", () => {
    const { container } = render(<Loader />);
    const loaderContainer = container.querySelector(".loading-container");
    const ldsRipple = container.querySelector(".lds-ripple");
    expect(loaderContainer).toBeInTheDocument();
    expect(ldsRipple).toBeInTheDocument();
  });
});
