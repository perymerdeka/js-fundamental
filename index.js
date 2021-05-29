// init fetch
const fetch = require("node-fetch");

// call API using fetch
const callData = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/todos/");
    return data.json()
};

// call data
callData().then(result => console.log(result))