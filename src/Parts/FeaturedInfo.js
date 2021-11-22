import React from 'react'

export default function FeaturedInfo() {
    return (
        <div class="flex justify-between">
                <div class="w-full xl:w-1/3 p-6">
                    {/* <!--Metric Card--> */}
                    <div class="p-5 shadow-xl">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-600">Pick Ups</h5>
                                <h3 class="font-bold text-3xl">49 <span class="text-green-500"><i class="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                    {/* <!--/Metric Card--> */}
                </div>
                <div class="w-full xl:w-1/3 p-6">
                    {/* <!--Metric Card--> */}
                    <div class="p-5 shadow-xl">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-600">Reserved</h5>
                                <h3 class="font-bold text-3xl">249 <span class="text-pink-500"><i class="fas fa-exchange-alt"></i></span></h3>
                            </div>
                        </div>
                    </div>
                    {/* <!--/Metric Card--> */}
                </div>
                <div class="w-full xl:w-1/3 p-6">
                    {/* <!--Metric Card--> */}
                    <div class="p-5 shadow-xl">
                        <div class="flex flex-row items-center">
                            <div class="flex-shrink pr-4">
                            </div>
                            <div class="flex-1 text-right md:text-center">
                                <h5 class="font-bold uppercase text-gray-600">Return</h5>
                                <h3 class="font-bold text-3xl">2 <span class="text-yellow-600"><i class="fas fa-caret-up"></i></span></h3>
                            </div>
                        </div>
                    </div>
                    {/* <!--/Metric Card--> */}
                </div>
            </div>
    )
}
