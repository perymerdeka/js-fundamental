class Manusia {
    constructor (nama, umur) {
        this.nama = nama
        this.umur = umur
    }

    identitas = () => {
        return `halo nama saya adalah ${this.nama} dan umur saya adalah ${this.umur}`;
    }
}

class Milenial extends Manusia {
    
    data_diri = (email) => {
        this.email = email
        console.log(`nama saya adalah ${this.nama}`);
        console.log(`Usia saya adalah ${this.umur}`);
        console.log(`alamat Email saya adalah ${this.email}`);
    }

}

const perkenalan = new Milenial('pery', 20);

console.log(perkenalan.data_diri(email='test@email.com'));
// console.log(perkenalan.identitas());