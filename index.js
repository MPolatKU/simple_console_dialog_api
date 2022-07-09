/*!
 * simple_console_dialog_api
 * Copyright(c) 2022 Muhammed Polat
 * MIT Licensed
 */

'use strict';

/**
 * Expose `arrayFlatten`.
 */
 module.exports = {
    promptQuestion:promptQuestion,
 }

 /**
 * Prompts the question to the console
 * Returns a promise that will resolve when the user inputs and hits the enter button.
 * writin exit kills the terminal
 * 
 * 
 * @param  {String} question
 * @return {Promise}
 * 
 */

 function promptQuestion(question){
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