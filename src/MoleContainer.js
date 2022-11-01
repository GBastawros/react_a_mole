import {useState} from 'react'
import Mole from './Mole'

function MoleContainer(props){
    [displayMole, setDisplayMole] = useState(false)
    
    return (
        <div>
            <h2> Mole Container </h2>
            <Mole />
        </div>
    )
}
