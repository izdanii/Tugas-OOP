class Supermarket{
    _minuman = [
        ['Susu', 20],
        ['Kopi', 30],
        ['Sirup', 15],
        ['Yogurt', 10],
        ['Teh', 12]
    ]

    // constructor(minuman){
    //     this.namaMinuman = namaMinuman;
    //     this.jumlahMinuman = jumlahMinuman;
    // }

    checkBarang(namaMinuman, jumlahMinuman){
    for (let i=0; i < this._minuman.length; i++) {
        if(namaMinuman === this._minuman[i][0] && jumlahMinuman < this._minuman[i][1]){
            this._minuman[i][1] = this._minuman[i][1] - jumlahMinuman
            return `jumlah yang dibeli adalah ${jumlahMinuman} dan stok yang tersisa ${this._minuman[i][1]}`
        } else {
            if(namaMinuman === this._minuman[i][0] && jumlahMinuman < this._minuman[i][1]) {
                return `${namaMinuman} kosong`;
            }
            if (this._minuman[i][1] < jumlahMinuman){
            this._minuman[i][1] += jumlahMinuman*2
            // console.log(this._minuman[i][1], "faiz")
            return `${namaMinuman} Tersisa sebanyak ${this._minuman[i][1]}` 
        }
    }   


    }
    
    
}
}
let cust = new Supermarket()
console.log(cust.checkBarang('Sirup', 5))
console.log(cust.checkBarang('Teh', 50))