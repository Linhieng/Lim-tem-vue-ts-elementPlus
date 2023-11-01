import type { User } from '@/types'
import { get } from '..'

export function getAllUser(): Promise<User[]> {
    return get('/user/getAllUser')
}
