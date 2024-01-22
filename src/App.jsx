import './assets/style/main.sass'
import { AppFooter } from './cmps/AppFooter'
import { AppHeader } from './cmps/AppHeader'
import { HomePage } from './pages/HomePage'


export function App() {

    return (
        <div className="app">
            <AppHeader />
            <HomePage />
            <AppFooter />
        </div>
    )
}