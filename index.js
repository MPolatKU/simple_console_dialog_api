/*!
 * simple_console_dialog_api
 * Copyright(c) 2022 Muhammed Polat
 * MIT Licensed
 */

'use strict';



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

 static promptQuestionPromise(question){
    const questionPromise = new Promise((resolve, reject) => {
        process.stdout.write(question+' : ');
        
        process.stdin.once('data', userInput =>{
            if(userInput =='exit\r\n') process.exit();
        
            const cleanedInput = userInput.toString().replace(/(\r\n|\n|\r)/gm,"");
            resolve(cleanedInput);
            
        
        });
    




    });
    return questionPromise;
 }

 /**
 * Kill the terminal
 */

    static endTheDialog(){

        process.exit(0); // kills the terminal

 }
}

/**
 * Expose `Prompter`.
 */
 module.exports = Prompter;