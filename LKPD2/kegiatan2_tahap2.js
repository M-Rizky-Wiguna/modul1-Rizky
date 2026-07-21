class Rekening {
    #saldo;
 
    constructor() {
        this.#saldo = 100000;
    }
 
    setor(jumlah) {
        // Validasi agar tidak bisa setor uang minus atau nol
        if (jumlah <= 0) {
            console.log("Jumlah setoran harus lebih dari 0!");
            return;
        }
        this.#saldo += jumlah;
        console.log(`Berhasil setor: Rp${jumlah}. Saldo saat ini: Rp${this.#saldo}`);
    }
 
    tarik(jumlah) {
        // Validasi agar tidak bisa tarik uang minus atau nol
        if (jumlah <= 0) {
            console.log("Jumlah penarikan harus lebih dari 0!");
            return;
        }
        
        // Cek kecukupan saldo
        if (jumlah <= this.#saldo) {
            this.#saldo -= jumlah;
            console.log(`Berhasil tarik: Rp${jumlah}. Sisa saldo: Rp${this.#saldo}`);
        } else {
            console.log("Saldo tidak cukup!");
        }
    }
 
    getSaldo() {
        return this.#saldo;
    }
}

// === CONTOH PENGGUNAAN ===
const dompetKu = new Rekening();

dompetKu.setor(100000);   // Output: Berhasil setor: Rp100000...
dompetKu.tarik(30000);    // Output: Berhasil tarik: Rp30000...
dompetKu.tarik(150000);   // Output: Saldo tidak cukup!

// Bukti Enkapsulasi Bekerja:
// dompetKu.#saldo = 5000000; // Jika baris ini aktif, program akan langsung ERROR
console.log(`Total Saldo Akhir: Rp${dompetKu.getSaldo()}`); 
