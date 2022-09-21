import { NavLink } from 'react-router-dom'

const Home = () => {
    return (
        <div className="text-black container px-20">
            <h2 className="text-xl mb-3">Features</h2>
            <div className="flex">
                <NavLink
                    to={'/crux'}
                    className="relative border border-slate-700 py-5 px-7 rounded hover:text-white hover:bg-slate-700 transition-all overflow-hidden z-0 font-medium text-xl"
                >
                    <i className="fa-solid fa-database text-5xl opacity-20 mr-3 absolute -z-10 left-3 top-2"></i>
                    <span>Crux</span>
                </NavLink>
            </div>
        </div>
    )
}

export default Home
