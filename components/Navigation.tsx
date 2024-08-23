import { HamburgerMenuIcon } from "@radix-ui/react-icons"

export default function Navigation() {
    return (
        <div className="flex flex-col">
            <Motto />
            <Menu />
        </div>
    )
}

function Motto() {
    return (
        <>
            <div className="bg-[#eeeeee] px-24 py-2 flex justify-between items-center">
                <h1 className="text-gray-600 text-2xl tracking-wider font-semibold">SPESEN<span className="pl-1 text-xl text-gray-500 font-normal">ABRECHNUNGEN</span></h1>
                <p className="text-right text-xl">GEMEINSAM. VORAN.</p>
            </div>
        </>
    )
}

function Menu() {
    return (
        <>
            <div className="py-6 px-28 flex justify-between items-center">
                <img
                    src="https://www.lit-beratung.de/wp-content/themes/besonders_lit/assets/dist/img/site-branding.svg"
                    alt=""
                    className="max-h-12"
                />
                <HamburgerMenuIcon className="w-8 h-8 bg-gray-200 p-2 rounded-sm" />
            </div>
        </>
    )
}

