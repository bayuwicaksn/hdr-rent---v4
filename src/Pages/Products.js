import React from 'react'
import ProdukList2 from '../Parts/Produk-List/ProdukList2'

function Products() {
    return (
        <div className="container mx-auto py-10 md:w-4/5 w-11/12 px-6 ">
                {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}
                <div className="w-full h-full rounded border-dashed border-2 border-gray-300">
                    {/* Place your content here */}
        <div>
            <div className="relative py-6 lg:py-8">
                <div className="z-10 relative container px-6 mx-auto flex flex-col md:flex-row items-start md:items-center justify-between">
                    <div>
                        <h4 className="text-2xl font-bold leading-tight text-gray-800">Products</h4>
                    </div>
                </div>
            </div>
            ;
        </div>
        <ProdukList2/>

                    </div>
            </div>
    )
}

export default Products