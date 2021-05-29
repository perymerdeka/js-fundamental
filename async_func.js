// async
const firstName = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const f_name = "feri";
            resolve(f_name)
        }, 3000)
    })
};

const lastName = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            const l_name = "Lukmansyah"
            resolve(l_name)
        }, 3000)
    })
};

// async func
const resultName = async () => {
    const first = await firstName();
    const last = await lastName();
    const names = first + ' ' + last;
    return `my name is ${names}`;
};


// pemanggilan
resultName().then(result => console.log(result));