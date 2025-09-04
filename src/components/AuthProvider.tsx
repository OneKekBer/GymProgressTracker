import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useLocation } from 'wouter'
import useUserStore from '@/store/store'

type Props = { children: ReactNode }

export default function AuthProvider({ children }: Props) {
	const { user } = useUserStore()
	const [, setLocation] = useLocation()

	useEffect(() => {
		if (user === null) {
			setLocation('/login')
		}
	}, [user, setLocation])

	if (user === undefined) {
		return <div>Загрузка...</div>
	}

	return <>{children}</>
}
