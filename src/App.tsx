import { Route, Switch } from 'wouter'
import Dashboard from './pages/Dashboard'
import LoginPage from './pages/LoginPage'
import AuthProvider from './components/AuthProvider'

function App() {
	return (
		<Switch>
			<Route path='/login' component={LoginPage} />

			<AuthProvider>
				<Route path='/' component={Dashboard} />
			</AuthProvider>
			<Route>
				<h1>404 NOT FOUND</h1>
			</Route>
		</Switch>
	)
}

export default App
