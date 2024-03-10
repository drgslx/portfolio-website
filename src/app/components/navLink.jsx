"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavLink = ({link}) => {
    const pathName = usePathname();
    console.log(pathName)
    return (
        link && link.url ? (
            <Link href={link.url} className={`transition-all rounded p-1 ${pathName === link.url ? 'bg-gray-800 text-white' : 'text-black hover:bg-gray-800 hover:text-white'}`}>
                    {link.title}
            </Link>
        ) : null
    )
}

export default NavLink