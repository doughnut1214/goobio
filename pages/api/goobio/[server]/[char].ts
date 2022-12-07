// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { calculateGoobio } from '../../../../pages/[server]/[char]'
import createAccessToken, { token } from "../../../../auth/auth";

//end point for the API data
/* 
    todo: handle case where undefined server or character redirect to 404
*/
type Data = {
    mountScore: number,
    petScore: number,
    mythicPlusScore: number,
    totalScore: number,
    characterName: string
    //score color
    scoreStyle: string
}
type Error = {
    message: string | string[]
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data | Error>
) {
    const { server, char } = req.query
    if (!server || !char) {
        res.status(500).json({ message: "No parameters found" })
        return
    }
    if (req.method !== 'GET') {
        res.status(402).json({ message: "Method forbidden. Please use GET" })
        return
    }
    const data: token = await createAccessToken()
    const results = await calculateGoobio(server.toString(), char.toString(), data)
    if (!results) {
        res.status(404).json({ message: "Character not found." })
        return
    }
    if (results.totalScore <= 500) {
        results.scoreStyle = "Common"
    }
    else if (results.totalScore <= 1500) {
        results.scoreStyle = "Uncommon"
    }
    else if (results.totalScore <= 2500) {
        results.scoreStyle = "Rare"
    }
    else if (results.totalScore <= 3000) {
        results.scoreStyle = "Epic"
    }
    else if(results.totalScore > 3000){
        results.scoreStyle = "Legendary"
    }
    
    
    res.status(200).json(results)
}