import React from 'react'
import Flickity from 'react-flickity-component'
import { Head } from '@inertiajs/inertia-react'
import Authenticated from '@/Layouts/Authenticated/Index'
import FeaturedMovies from '@/Components/FeaturedMovies'
import BrowseMovie from '@/Components/BrowseMovies'

export default function Dashboard() {
    const flickityOptions = {
        "cellAlign": "left",
        "contain": true,
        "groupCells": 1,
        "wrapAround": false,
        "pageDots": false,
        "prevNextButtons": false,
        "draggable": ">1"
    };
  return (
    <Authenticated>
        <div>
            <Head>
                <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css" />
                <title>Dashboard</title>
            </Head>
            <div className="font-semibold text-[22px] text-black mb-4">Featured Movies</div>
            <Flickity className="gap-[30px]" options={flickityOptions}>
                {/* Dummy Array */}
                {[1,2,3,4].map(i => (
                    <FeaturedMovies key={i} slug="the-batman-in-love" name={`The Batman in Love ${i}`} category="action" thumbnail="/images/featured-1.png" rating={i + 1}/>
                ))}        
            </Flickity>
                    <div className="font-semibold text-[22px] text-black mb-4">Browse</div>
            <Flickity className='gap-[30px]' options={flickityOptions}>
                {[1,2,3,4,5,6].map(i => (
                    <BrowseMovie key={i} slug="meong-golden" name={`Meong Golden ${i}`} year="2022" thumbnail="/images/browse-1.png" />
                ))
                }
            </Flickity>
        </div>
    </Authenticated>
  )
}
