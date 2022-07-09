/*!
 * simple_console_dialog_api
 * Copyright(c) 2022 Muhammed Polat
 * MIT Licensed
 */

'use strict';

/**
 * Expose `Prompter`.
 */
 module.exports = Prompter;

 class Prompter{

 /**
 * Prompts the question to the console
 * Returns a promise that will resolve when the user inputs and hits the enter button.
 * Writing "exit" to the console kills the terminal
 * 
 * 
 * @param  {String} question
 * @return {Promise}
 * 
 */

 static promptQuestion(question){
    const questionPromise = new Promise((resolve, reject) => {
        process.stdout.write(question+'\n');
        
        process.stdin.on('data', userInput =>{
            if(data =='exit\r\n') process.exit();
        
            const cleanedInput = userInput.toString().replace(/(\r\n|\n|\r)/gm,"");
            resolve(cleanedInput);
        

        });
    




    });
    return questionPromise;
 }
}