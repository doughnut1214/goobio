import { useState, useEffect } from "react"
import Router from "next/router"
const CharacterForm = () => {
    type form = {
        server: string | undefined,
        character: string | undefined
    }
    const [formData, setFormData] = useState<form>({
        server: '',
        character: ''
    })
    const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {

    }, [])
    const HandleServerChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({ ...formData, server: e.target.value })


    }
    const HandleCharacterChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setFormData({ ...formData, character: e.target.value })


    }
    const HandleSubmit = (e: React.SyntheticEvent) => {
        setLoading(true)
        e.preventDefault()
        console.log("submissions:", formData)
        Router.push(`/${formData.server?.toLowerCase()}/${formData.character?.toLowerCase()}`)



    }
    return (
        <form onSubmit={HandleSubmit} className="flex flex-col lg:flex-row justify-center items-center">
            <div>
                <label htmlFor='server'>US Realm</label>
                <input type="text" name="server" className='mx-1 rounded-lg p-1  border border-slate-400 disabled:bg-slate-300' disabled={loading} onChange={HandleServerChange} required />
            </div>
            <div>
                <label htmlFor='character'>Character</label>
                <input type="text" name="character" className='mx-1 rounded-lg p-1 border border-slate-400 disabled:bg-slate-300' disabled={loading} onChange={HandleCharacterChange} required />
            </div>
            <button type='submit' className=" rounded-lg p-2 text-white bg-slate-400 disabled:bg-slate-300 hover:bg-slate-300" disabled={loading}>{loading ? "Loading..." : "Lookup"}</button>
        </form>

    )
}
export default CharacterForm