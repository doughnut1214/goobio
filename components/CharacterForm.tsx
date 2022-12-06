import { useState, useEffect } from "react"
import { useRouter } from "next/router"
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
    const router = useRouter()
    useEffect(() => {
       
        router.events.on("routeChangeComplete", () => {
            setLoading(false)
            setFormData({ server: '', character: '' })

        })
    }, [router.events])
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
        Router.push(`/${formData.server?.toLowerCase().replace('\'', '')}/${formData.character?.toLowerCase()}`)


    }
    return (
        <form onSubmit={HandleSubmit} className="flex flex-col lg:flex-row justify-center items-center px-3">
            <div>
                <label htmlFor='server'>US Realm</label>
                <input type="text" name="server" value={formData.server} aria-label="Server" className='mx-1 rounded-lg p-1  border text-black border-slate-400 disabled:bg-slate-300' disabled={loading} onChange={HandleServerChange} required />
            </div>
            <div>
                <label htmlFor='character'>Character</label>
                <input type="text" name="character" value={formData.character} aria-label="Character" className='mx-1 rounded-lg p-1 border text-black border-slate-400 disabled:bg-slate-300' disabled={loading} onChange={HandleCharacterChange} required />
            </div>
            <button type='submit' className=" rounded-lg p-2 text-white bg-slate-400 disabled:bg-slate-300 hover:bg-slate-300" disabled={loading}>{loading ? "Loading..." : "Lookup"}</button>
        </form>

    )
}
export default CharacterForm