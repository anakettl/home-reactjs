import React from 'react'
import './styles.css'

interface DescriptionProps {
 name: string;
 text: string;
}

const Description: React.FC<DescriptionProps> = ({ name, text })  => {
    return (
        <div className="description-block">
            <p className={name} >{text}</p>
        </div>
    );
}

export default Description;