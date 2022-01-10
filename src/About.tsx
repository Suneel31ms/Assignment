import React from 'react'
import { useLocation } from 'react-router-dom'

function About() {
    const location = useLocation();
    return (
        <div className='tc mt5 f2 lh-copy green'>

          <h3 className='mb5'>  This is a About Page PathName: {location.pathname}</h3>


            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis iure eius cumque dicta quis! Quaerat corporis hic aspernatur ducimus labore aperiam explicabo autem nulla, dolores temporibus? Amet repellendus, cupiditate quam aliquam nesciunt eaque consectetur. At dolores illo accusantium? Exercitationem, iure.</p>
        </div>
    )
}

export default About
