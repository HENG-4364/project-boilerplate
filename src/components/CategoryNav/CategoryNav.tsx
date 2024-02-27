import Link from 'next/link'
import React from 'react'

const CategoryNav = () => {
    return (
        <aside className='hidden xl:flex'>
            <div className='bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden'>
                <div className='bg-accent py-4 uppercase font-semibold flex items-center justify-center text-primary'>Browse Categories</div>
                <div className='flex flex-col gap-y-6 p-6'>
                    <Link href={''} >
                        Canon
                    </Link>
                    <Link href={''} >
                        Nikon
                    </Link>
                    <Link href={''} >
                        Sony
                    </Link>
                    <Link href={''} >
                        Fujifilm
                    </Link>
                    <Link href={''} >
                        Panasonic
                    </Link>
                    <Link href={''} >
                        Olympus
                    </Link>
                    <Link href={''} >
                        Pentax
                    </Link>                        
                    <Link href={''} >
                        GoPro
                    </Link>

                </div>
            </div>
        </aside>

    )
}

export default CategoryNav
