class Produk {
    #nama;
    #stok;

    constructor(nama, stokAwal = 0) {
        this.#nama = nama;
        // Validasi stok awal tidak boleh negatif
        this.#stok = stokAwal >= 0 ? stokAwal : 0;
    }

    // Getter untuk Nama
    get nama() {
        return this.#nama;
    }

    // Getter untuk Stok
    get stok() {
        return this.#stok;
    }

    // Setter untuk Stok dengan validasi ketat
    set stok(jumlahBaru) {
        if (typeof jumlahBaru !== 'number' || jumlahBaru < 0) {
            console.log(`[Error] Gagal mengubah stok ${this.#nama}: Stok tidak boleh negatif atau tidak valid!`);
            return;
        }
        this.#stok = jumlahBaru;
    }

    // Method untuk menambah barang
    tambahBarang(jumlah) {
        if (jumlah <= 0) {
            console.log(`[Error] Jumlah barang yang ditambahkan ke ${this.#nama} harus lebih dari 0!`);
            return;
        }
        this.#stok += jumlah;
        console.log(`[Sukses] Ditambahkan ${jumlah} unit ke ${this.#nama}. Stok saat ini: ${this.#stok}`);
    }

    // Method untuk mengurangi barang
    kurangiBarang(jumlah) {
        if (jumlah <= 0) {
            console.log(`[Error] Jumlah barang yang dikurangi dari ${this.#nama} harus lebih dari 0!`);
            return;
        }

        // Validasi agar stok tidak menjadi negatif
        if (jumlah <= this.#stok) {
            this.#stok -= jumlah;
            console.log(`[Sukses] Dikurangi ${jumlah} unit dari ${this.#nama}. Sisa stok: ${this.#stok}`);
        } else {
            console.log(`[Gagal] Stok ${this.#nama} tidak cukup! Gagal mengurangi ${jumlah} unit (Stok tersedia: ${this.#stok}).`);
        }
    }

    // Method untuk menampilkan informasi produk
    tampilkan() {
        console.log(`=== INFO PRODUK ===\nNama Barang: ${this.#nama}\nJumlah Stok: ${this.#stok}\n-------------------`);
    }
}

// === PENGUJIAN MENGGUNAKAN 2 OBJECT PRODUK ===

console.log("--- 1. INISIALISASI OBJECT ---");
const produk1 = new Produk("Laptop ASUS", 10);
const produk2 = new Produk("Mouse Wireless", 5);

produk1.tampilkan();
produk2.tampilkan();

console.log("\n--- 2. PENGUJIAN TAMBAH BARANG ---");
produk1.tambahBarang(5);   // Berhasil menambah stok
produk2.tambahBarang(-2);  // Gagal karena nilai minus (validasi bekerja)

console.log("\n--- 3. PENGUJIAN KURANGI BARANG ---");
produk1.kurangiBarang(4);  // Berhasil mengurangi stok
produk2.kurangiBarang(10); // Gagal karena stok tidak cukup (mencegah stok negatif)

console.log("\n--- 4. PENGUJIAN GETTER DAN SETTER LANGSUNG ---");
console.log(`Mengecek stok produk 1 via getter: ${produk1.stok}`);
produk1.stok = 20;         // Mengubah stok langsung via setter (berhasil karena nilai positif)
produk1.stok = -5;         // Ditolak oleh setter (berhasil karena nilai negatif)

console.log("\n--- 5. HASIL AKHIR ---");
produk1.tampilkan();
produk2.tampilkan();
