const callData = callback => {
    setTimeout(() => {
        callback("feri")
    }, 5000)
};

// panggil callback
callData(name => console.log(name));