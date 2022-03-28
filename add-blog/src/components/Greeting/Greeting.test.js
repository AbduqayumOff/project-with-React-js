import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting Component", () => {
  test("renders 'Hello World!' as a text", () => {
    render(<Greeting />);
    const helloWorld = screen.getByText("Hello World!");
    expect(helloWorld).toBeInTheDocument();
  });

  test("renders 'Not clicked' as a text", () => {
    render(<Greeting />);
    const notClicked = screen.getByText("Not clicked.");
    expect(notClicked).toBeInTheDocument();
  });

  test("renders 'Clicked' as a text", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.getByText("Clicked.", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });
});
