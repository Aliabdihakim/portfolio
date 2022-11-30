import React from 'react'
import { Icon } from '@iconify/react';
import icons from '../../assets/content/iconsData';
import "./Stack.css"

const Stack = () => { 

    const renderIcons = icons.map(icon => {
        return(
            <div className='icon-div'>
                <Icon icon={icon.icon} className="icon-item"/>
                <h4 className='icon-title'>{icon.title}</h4>
            </div>
        )
    })
  return (
    <div className='rendericon-div'>
        {renderIcons}
    </div>
  )
}

export default Stack
