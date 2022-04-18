import Link from 'next/link'
import { UserIcon, SearchIcon, HeartIcon, ShoppingCartIcon } from '@heroicons/react/solid'

export default function MainHeader() {
    return (
        <header className="header py-6 bg-white shadow-md">
            <div className="wrapper max-w-screen-xl mx-auto flex justify-between items-center">
                <Link href="/">
                    <h2 className="text-gray-600 text-3xl font-normal cursor-pointer">Groco<span className="text-green-500">.</span></h2>
                </Link>

                <nav className="space-x-6">
                    <Link href="/">
                        <button className="text-gray-500 text-2xl hover:text-green-600 hover:underline font-normal">home</button>
                    </Link>
                    <Link href="/shop">
                        <button className="text-gray-500 text-2xl hover:text-green-600 hover:underline font-normal">shop</button>
                    </Link>
                    <Link href="/orders">
                        <button className="text-gray-500 text-2xl hover:text-green-600 hover:underline font-normal">orders</button>
                    </Link>
                    <Link href="/about">
                        <button className="text-gray-500 text-2xl hover:text-green-600 hover:underline font-normal">about</button>
                    </Link>
                    <Link href="/contact">
                        <button className="text-gray-500 text-2xl hover:text-green-600 hover:underline font-normal">contact</button>
                    </Link>
                </nav>

                <div className="icons flex gap-4 items-center">
                    <div>
                        <UserIcon className="w-9 h-9 fill-gray-500 cursor-pointer hover:fill-green-500 transition-colors" />
                    </div>
                    <Link href="/search">
                        <SearchIcon className="w-9 h-9 fill-gray-500 cursor-pointer hover:fill-green-500 transition-colors" />
                    </Link>
                    <Link href="/wishlist">
                        <div className="flex text-xl text-gray-500 items-end group hover:text-green-500 transition-all cursor-pointer">
                            <HeartIcon className="w-9 h-9 fill-gray-500 group-hover:fill-green-500 transition-all" />
                            (<span className="text-gray-500 group-hover:text-green-500 transition-all">0</span>)
                        </div>
                    </Link>
                    <Link href="/cart">
                        <div className="flex text-xl text-gray-500 items-end group hover:text-green-500 transition-all cursor-pointer">
                            <ShoppingCartIcon className="w-9 h-9 fill-gray-500 group-hover:fill-green-500 transition-all" />
                            (<span className="text-gray-500 group-hover:text-green-500 transition-all">0</span>)
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}
