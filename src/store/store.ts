import { create } from 'zustand'
import type { User } from 'firebase/auth'

interface UserState {
	user: User | null
	addUser: (newUser: User) => void
	clearUser: () => void
}

const useUserStore = create<UserState>(set => ({
	user: null,
	addUser: (newUser: User) => set(() => ({ user: newUser })),
	clearUser: () => set(() => ({ user: null })),
}))

export default useUserStore
