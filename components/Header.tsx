import CharacterForm from "./CharacterForm"
import Router from "next/router"
import React from "react"
const Header = () => {

    const HandleClick = (e: React.MouseEvent<HTMLElement>) => {
        Router.push("/")
    }
    return (
        <div className=" w-full m-0 bg-slate-500 flex justify-center items-center text-white py-2 ">
            <div className="px-2 grow font-bold">
                <button className=" rounded-lg p-2 text-white bg-slate-400 disabled:bg-slate-300 hover:bg-slate-300" onClick={HandleClick}>GoobIO</button>

            </div>
            <CharacterForm />
        </div>
    )
}
export default Header