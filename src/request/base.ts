import { BASE_URL } from '@/constants'
import axios, { AxiosError } from 'axios'

axios.defaults.baseURL = BASE_URL

export async function get(url: string): Promise<any | undefined> {
    try {
        const resData = await axios.get(url)
        return resData.data
    } catch (error) {
        if (error instanceof AxiosError) {
            ElMessage.error('网络错误，服务器无法响应')
        }
    }
}
