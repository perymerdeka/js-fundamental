// promise

const firstName = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const name_data = "feri";
            resolve(name_data);
        }, 3000)
    }) 
};

const lastName = (first) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const last = "Lukmansyah";
            resolve(`${first} ${last}`);
        }, 2000)
    })
};

// pemanggilan
// firstName().then(data => lastName(data).then(result => console.log(result)));


// example 2 using callback
const callData = (callback) => {
    setTimeout(() => {
        const first = "feri"
        callback(first)
    }, 3000)
};

const callDataAgain = (firstName, callback) => {
    setTimeout(() => {
        const last = `${firstName} lukmansyah`;
        callback(last)
    }, 3000)
};

// pemanggilan
callData(name => callDataAgain(name, result => console.log(result)));