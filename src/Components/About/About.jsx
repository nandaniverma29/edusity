import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' onCanPlay={()=>{setPlayState(true)}} />

        </div>
        <div className="about-right">
            <h3>About University</h3>
            <h2>Nurtring Tomorrw's Leaders Today</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, consequuntur placeat vitae qui eius illum expedita minus soluta. Hic, ad.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nesciunt commodi, molestiae sed architecto suscipit excepturi nam incidunt, provident, maiores magnam aliquam voluptates quae atque corporis placeat animi vitae rerum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam, laudantium blanditiis et obcaecati eligendi debitis fuga excepturi dolore dolorem. Quasi aut, odit dicta perspiciatis necessitatibus neque voluptatibus consequuntur illo nostrum. Necessitatibus commodi quibusdam iste blanditiis voluptatem, dignissimos laudantium quaerat sed.</p>

        </div>
      
    </div>
  )
}

export default About
