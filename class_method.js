class Motor {
    constructor (merek) {
        this.merek = merek
    }
    punya_motor = () => {
        return `Saya Punya Motor ${this.merek} yang sangat bagus`;
    }
}

const motor_baru = new Motor('suzuki');
console.log(motor_baru.punya_motor());


// static method 
class Product {
    static merek_produk = product => `Saya Punya Produk ${product} sendiri dong`;
}

// panggil static method 
console.log(Product.merek_produk('onigiri'))