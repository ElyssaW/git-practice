import { Link } from 'react-router-dom'

function Header() {
    return (
        <header>
            <nav>
                <Link to="/">Home</Link>{' • '}
                <Link to="/elyssa">Elyssa</Link>{' • '}
                <Link to="/jason">Jason</Link>{' • '}
                <Link to="/jeffrey">Jeffrey</Link>{' • '}
                <Link to="/chassity">Chassity</Link>
            </nav>
        </header>
    )

}

export default Header