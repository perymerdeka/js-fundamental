// arroy func
const HelloWorld = () => {
    return 'Hello Wordld';
}

console.log(HelloWorld());

// 1 parameter
const HelloName = name => {
    return `hello nama saya ${name}`;
}

console.log(HelloName('pery'));

const NameAge = (name, age) => {
    return `halo nama saya ${name} dan usia saya adalah ${age} tahun`;
}

console.log(NameAge('feri', 20));

const panggilNama = (name) => `nama saya adalah ${name}`;
console.log(panggilNama('pery'))