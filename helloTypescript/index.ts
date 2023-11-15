let age: number = 0;
age = 18; // String 


console.log(age > 18 ? "Adult" : "minor");

interface IUserControl<T> {
    createControl(): T;
}

export class ButtonControl implements IUserControl<HTMLButtonElement> {

    createControl(): HTMLButtonElement {
        let button = new HTMLButtonElement();
        button.title = "Click me";
        button.textContent = "Click me";
        button.click = function () {

        }

        return button;
    }
}

export class TextBoxControl implements IUserControl<HTMLInputElement> {
    
        createControl(): HTMLInputElement {
            let textbox = new HTMLInputElement();
            textbox.type = "text";
            textbox.placeholder = "Enter your name";
    
            return textbox;
        }
}