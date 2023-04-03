<h1 align="center">🔸 Random JSON DATA Generator 🔸</h1>
This application produce random JSON data with the help of JSON-SERVER.

***

## What is JSON-SERVER ?
This is an **NPM PACKAGE** :- 

#### **Get a full fake REST API with zero coding in less than 30 seconds (seriously). Created with <3 for front-end developers who need a quick back-end for prototyping and mocking.**

***

## How to install ?

1. Install JSON Server
        - **`npm install -g json-server`** ➡ This will install globally.

2. Create File with compulsory extension (.json), filename eg.  **`db.json`**.
   
3. Start JSON Server
       - **`json-server --watch db.json`**

***

1. Create JS file 
        - eg. **`index.js`**

2. Code this into the **`index.js`**.
        - eg. :-
```js
const productsData = () => {
    const data = { products: [] };
    // Create 10 users start from with 0 index
    for (let i = 0; i < 10; i++) {
        data.products.push({ 
            id: i,
            name: `user${i}`
        });
    }
    return data;
}
module.exports = productsData
```
3. Type in terminal to launch the code 
        - **`json-server index.js`** ➡ This will generate 10 users which will start from 0 (zero) index.

***

## References
#### [JSON-SERVER - NPM Package](https://www.npmjs.com/package/json-server)
#### [JSON-SERVER - W3Schools](https://www.w3schools.com/js/js_json_server.asp)
