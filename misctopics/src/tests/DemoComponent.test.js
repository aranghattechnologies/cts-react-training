import { fireEvent, render } from "@testing-library/react";
import DemoComponent from "../DemoComponent";

it("Check if there is a heading in the component", () => {

    // Arrange
    const comp = render(<DemoComponent />);

    //Act   
    const heading = comp.getByRole("heading");

    //Assert
    expect(heading).toBeInTheDocument();

});

it("Check if the heading matches the spec", () => {

    // Arrange
    const comp = render(<DemoComponent />);

    //Act
    const heading = comp.getByRole("heading");
    const expectedHeading = "Hello Demo Component";

    //Assert
    expect(heading.innerHTML).toContain(expectedHeading);
});

it("Check if the heading changes on button click", () => {
    
    // Arrange
    const comp = render(<DemoComponent />);

    //Act
    const button = comp.getByRole("button");
    const heading = comp.getByRole("heading");
    const initialHeading = heading.innerHTML;

    //Fire the event
    fireEvent.click(button);

    const updatedHeading = heading.innerHTML;

    //Assert
    expect(initialHeading).toContain("Hello Demo Component");
    expect(updatedHeading).toContain("Hello World");

});

it("Check if the header color changes on button click", () => {

    // Arrange
    const comp = render(<DemoComponent />);

    //Act
    const button = comp.getByRole("button");
    const heading = comp.getByRole("heading");
    const initialColor = heading.style.color;

    fireEvent.click(button);

    const updatedColor = heading.style.color;

    //Assert
    expect(initialColor).toContain("red");
    expect(updatedColor).toContain("green");

});