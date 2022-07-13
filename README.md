# simple_console_dialog_api
A simple library that helps you get user inputs from the console and create dialogs.

## API

```js
var Dialog = require('simple_console_dialog_api');
```

## Usage

```javascript

async function questions(){

    const firstAnswer = await Dialog.promptQuestionPromise("Name ?",Dialog.colors.red);
    
    Dialog.promptText(`Hello ${firstAnswer}`,Dialog.colors.blue);

    const secondAnswer = await Dialog.promptQuestionPromise("Surname ?");
    
    Dialog.promptText(`Good evenings Mr. ${secondAnswer}`);

    Dialog.endTheDialog();
}

```

## License

MIT
