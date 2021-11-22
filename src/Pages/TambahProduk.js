import React from 'react'

export default function TambahProduk() {
    return (
        <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6 ">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                    {/* Place your content here */}
            <div className="relative py-6 lg:py-8">
                <div className="z-10 relative container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div>
                        <h4 className="text-2xl font-bold leading-tight text-gray-800">Tambah Produk</h4>
                    </div>
                </div>
            </div>
            ;
                <div class="xl:w-10/12 w-full px-8">
                    <div class="xl:px-24">
                        <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                            <div class="w-80">
                                <div class="flex items-center">
                                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">Upload Produk</h1>
                                </div>
                                <p class="mt-4 text-sm leading-5 text-gray-600">Format gambar .jpg .jpeg .png dan ukuran minimum 300 x 300px (Untuk gambar optimal gunakan ukuran minimum 700 x 700 px).</p>
                            </div>
                            <div>
                                <div class="flex items-center bg-gray-300 w-64 h-64">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                            <div class="w-80">
                                <div class="flex items-center">
                                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">Informasi Produk</h1>
                                </div>
                                <p class="mt-4 text-sm leading-5 text-gray-600">Cantumkan min. 40 karakter agar semakin menarik dan mudah ditemukan oleh pembeli, terdiri dari jenis produk, merek, dan keterangan seperti warna, bahan, atau tipe.</p>
                            </div>
                            <div>
                                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div class="md:w-64">
                                        <label class="text-sm leading-none text-gray-800" id="namaProduk">Nama Produk</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="namaProduk" placeholder="Nama Produk" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="kategori">Kategori</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="kategori" placeholder="kategori" />
                                    </div>
                                </div>
                                <div class="md:flex items-center lg:ml-24 mt-8">
                                    <div class="md:w-64">
                                        <label class="text-sm leading-none text-gray-800" id="recoverEmail">Brand</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="brand" placeholder="Brand" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="altPhone">Deskripsi</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="deskripsi" placeholder="deskripsi" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                            <div class="w-80">
                                <div class="flex items-center">
                                    <h1 class="text-xl font-medium pr-2 leading-5 text-gray-800">Harga</h1>
                                </div>
                                <p class="mt-4 text-sm leading-5 text-gray-600">Atur harga yang harus di bayar untuk produk ini.</p>
                            </div>
                            <div>
                                <div class="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                                    <div class="md:w-64">
                                        <label class="text-sm leading-none text-gray-800" id="password">Harga</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="harga" placeholder="Harga per hari" />
                                    </div>
                                    <div class="md:w-64 md:ml-12 md:mt-0 mt-4">
                                        <label class="text-sm leading-none text-gray-800" id="securityCode">Stok</label>
                                        <input type="name" tabindex="0" class="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800" aria-labelledby="stok" placeholder="Stok" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

                    </div>
    )
}
