import './style.css'
import Cell1 from './components/cell1'
import Cell2 from './components/cell2'
import Cell3 from './components/cell3'

const Header = () => {
    return (
        <header>
            <div className='topbar'>
                <div className='Cell1'>
                    <Cell1 />
                </div>
                <div className='Cell2'>
                    <Cell2 />
                </div>
                <div className='Cell3'>
                    <Cell3 />
                </div>
            </div>
        </header>
    )
}


export default Header