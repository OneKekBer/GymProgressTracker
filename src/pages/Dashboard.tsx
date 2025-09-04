import { Button } from '@/components/ui/button'
import { auth } from '@/services/firebase/firebase'
import useUserStore from '@/store/store'
import { signOut } from 'firebase/auth'
import React from 'react'

//interface DashboardProps {}

const Dashboard: React.FC = () => {
	const { user, clearUser } = useUserStore()

	const logout = async () => {
		await signOut(auth)
		clearUser()
	}

	return (
		<div>
			<header></header>
			{user != null ? (
				<>
					<div className='flex flex-col items-center justify-center h-screen gap-4'>
						<p>Привет, {user.displayName}</p>
						<Button onClick={logout}>Выйти</Button>
					</div>{' '}
				</>
			) : (
				<div></div>
			)}
		</div>
	)
}

export default Dashboard
