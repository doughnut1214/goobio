import { NextApiResponse } from "next";
/* 
    fancy fetcher retrieved from https://us.forums.blizzard.com/en/blizzard/t/oauth2-client-credentials-implementations/131/4
    
*/
export default function createAccessToken(region = 'us') {
    return new Promise((resolve, reject) => {
        let credentials = Buffer.from(`${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`);

        const requestOptions = {
            host: `${region}.battle.net`,
            path: '/oauth/token',
            method: 'POST',
            headers: {
                'Authorization': `Basic ${credentials.toString('base64')}`,
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        };

        let responseData = '';

        function requestHandler(res: NextApiResponse) {
            res.on('data', (chunk) => {
                responseData += chunk;
            });
            res.on('end', () => {
                let data = JSON.parse(responseData);
                resolve(data);
            });
        }

        let request = require('https').request(requestOptions, requestHandler);
        request.write('grant_type=client_credentials');
        request.end();

        request.on('error', (error: string) => {
            console.log(error)
            reject(error);
        });
    });
}