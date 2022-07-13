/*!
 * simple_console_dialog_api
 * Copyright(c) 2022 Muhammed Polat
 * MIT Licensed
 */

'use strict';


/*!
 * This class provides all the functionality
 * All the methods in this class are static 
 * So you do not need to instantiate it
 */


 class Dialog{




/*!
 * colors and styles objects are initialized
 */

static colors = require('./lib/colors');
static styles = require('./lib/styles');




 /**
 * Prompts the question to the console
 * Returns a promise that will resolve when the user inputs and hits the enter button.
 * Writing "exit" to the console kills the terminal
 * 
 * 
 * @param  {String} question
 * @param  {./lib/colors|.lib/style} style
 * 
 * @return {Promise}
 * 
 */

 static promptQuestionPromise(question,style){
    const questionPromise = new Promise((resolve, reject) => {
        
        if (style) this.#setTerminalColor(style);
        process.stdout.write(question+" : ");

        this.#setTerminalColor(this.colors.yellow);
        
        process.stdin.once('data', userInput =>{
            if(userInput =='exit\r\n') process.exit();
        

            this.#resetTerminalStyle();
            const cleanedInput = this.#sanitizeUserInput(userInput);
            resolve(cleanedInput);
            
        
        });
    




    });
    return questionPromise;
 }

  /**
 * Prompts the question to the console
 * Calls the callback function with the argument written by the user
 * Writing "exit" to the console kills the terminal
 * 
 * 
 * @param  {String} question
 * @param  {Function} callback
 * @param  {./lib/colors|.lib/style} style
 * 
 * @return {Function(userInput)} callback
 * 
 */

   static promptQuestionCallback(question,callback,style){
   
        const message = (style) ? `\x1b[${style[0]}m ${question} : \x1b[${style[1]}m ` : `${question} : `;
        process.stdout.write(message);
        
        this.#setTerminalColor(Dialog.colors.bgRed);

        process.stdin.once('data', userInput =>{
            if(userInput =='exit\r\n') process.exit();
        
            this.#resetTerminalStyle();
            const cleanedInput = this.#sanitizeUserInput(userInput);
            callback(cleanedInput);
            });

 }

  /**
 *Write the text down to the terminal
 * 
 * 
 * @param  {String} text
 * @param  {./lib/colors|.lib/style} style
 */

 static promptText(text , style){
    const message = (style) ? `\x1b[${style[0]}m${text} \x1b[${style[1]}m` : text;
    process.stdout.write(message);

    this.#resetTerminalStyle();
    this.#newLine();

 }

 /**
 * Kill the terminal
 */

    static endTheDialog(){

        process.exit(0); // kills the terminal

 }


/**
 * reset the terminal style
 */ 

    static #resetTerminalStyle(){

    process.stdout.write(`\x1b[0}\x1b[0m`);
    }

/**
 * line break
 */ 

    static #newLine(){

        // n\ line 
   process.stdout.write(`\n`);
   }

/**
 * @param  {./lib/colors|.lib/style} style
 */ 

    static #setTerminalColor(style){

        // n\ line 
        process.stdout.write(`\x1b[${style[0]}m\x1b[${style[1]}m`);
   }



/**
 * Terminal provides the user input with some formatting at the the end of it
 * 
 * @param  {String} userInput
 * 
 * @return {String}
 */ 

 static #sanitizeUserInput(userInput){

    
    return userInput.toString().replace(/(\r\n|\n|\r)/gm,"");;
  
  }


}

/**
 * Expose `Prompter`.
 */
 module.exports = Dialog;