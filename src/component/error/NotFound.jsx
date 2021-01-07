import { Typography } from 'antd';


export default function NotFound() {
    return (
        <div className='about'>
            <br></br>
            <Typography.Title>
                Error 404 : Page introuvable
            </Typography.Title>
            <img className='lost'
                src={`${process.env.PUBLIC_URL}/images/lost.gif`}
            />
        </div>
    )
}