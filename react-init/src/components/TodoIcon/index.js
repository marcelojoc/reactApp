import React from 'react'
import './TodoIcon.css'
import{ ReactComponent as CheckSvg} from './svg/check.svg'
import{ ReactComponent as DeleteSvg} from './svg/cross-circle.svg'
import{ ReactComponent as HeartSvg} from './svg/heart_1.svg'

function TodoIcon({type, color = 'gray', onClick}){

    const selectIcon = {
        'check': <CheckSvg className="Icon-svg Icon-svg--check " fill={color}/>,
        'delete': <DeleteSvg className="Icon-svg Icon-svg--delete " fill={color}/>,
        'heart': <HeartSvg className="Icon-svg Icon-svg--heart " fill={color}/>,
    }

    return(
        <span className={`Icon-container Icon-container--${type}`} onClick={onClick}>
            
            {selectIcon[type]}

        </span>
    )

}

export {TodoIcon}