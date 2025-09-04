import { Button } from '@/components/ui/button'
import { auth, googleProvider } from '@/services/firebase/firebase'
import useUserStore from '@/store/store'
import { onAuthStateChanged, signInWithPopup } from 'firebase/auth'
import React, { useEffect } from 'react'
import { useLocation } from 'wouter'

//interface LoginPageProps {}

const LoginPage: React.FC = () => {
	const { addUser } = useUserStore()
	const [, setLocation] = useLocation()

	const signIn = async () => {
		const res = await signInWithPopup(auth, googleProvider)
		const token = await res.user.getIdToken()
		console.log('JWT:', token)
	}

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, user => {
			if (user == null) throw new Error('onAuthStateChanged get null user')
			setLocation('/')

			addUser(user)
		})
		return () => unsubscribe()
	}, [])

	return (
		<div>
			<div>
				<div className=''>
					help
					<Button onClick={signIn}>Войти с Google</Button>
				</div>
			</div>
		</div>
	)
}

export default LoginPage
