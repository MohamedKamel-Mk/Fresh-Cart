import React from 'react'
import MainSlider from '../MainSlider/MainSlider'
import Categories from '../Categories/Categories'
import Product from '../Product/Product'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'


export default function Home() {
    return (
        <>
            <MainSlider/>
            <Categories/>
            <FeaturedProducts/>
        </>
    )
}
