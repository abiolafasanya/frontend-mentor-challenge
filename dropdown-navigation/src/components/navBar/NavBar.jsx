import react from 'react';

const NavBar = () => {
    return (
        <div className={navHeaderStyle}>
            <div className='h3 text-lg text-bold'>
                Zuri<span className="text-red-600">.</span>Blockgames
            </div>
            <div>area two</div>
        </div>
    )
}

const navHeaderStyle = `flex justify-between items-center`

export default NavBar;