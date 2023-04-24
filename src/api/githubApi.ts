import axios from 'axios';


export const githubApi = axios.create({
    baseURL: 'https://api.github.com/repos/facebook/react',
    headers: {
        Authorization: 'Bearer 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'
    }
})