import { Image } from 'antd';


export default function About () {
    return ( 
        <div className='about'>
            <img className='arun'
                src={`${process.env.PUBLIC_URL}/images/bg-game.png`}
            />
            <h2 className='about-p'>Make with love and some tears by Arun && Mims </h2>
            <img className='mims'
                src={`${process.env.PUBLIC_URL}/images/bg-show.png`}
            />
        </div>
    )
}