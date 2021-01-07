import React, { useState } from 'react';
import { Row, Col, Card, Typography } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import Title from 'antd/lib/skeleton/Title';


export default function Home() {
    const [isLogged, setIsLogged] = useState(false);


    return(
        <div>
            <Row gutter={16}>
                <Col span={2}></Col>

                { isLogged ? 
                    <>
                        <Col span={8}>     
                            <Card title="Mon compte"
                            extra={<a href='profil'>+</a>}
                            bordered={false} >
                                <Card.Meta description='Informations sur le compte' />
                            </Card>                      
                        </Col>
                        <Col span={4}></Col>
                        <Col span={8}>
                            <Card title="Mes dossiers"
                            extra={<a href='mybucket'>+</a>}
                            bordered={false}>
                            </Card>
                        </Col>
                    </> 
                    : 
                    <>
                        <Col className='centered-block space-margin'>
                            <Typography.Title>
                                MYS3 
                            </Typography.Title>
                            <Typography.Text>
                                Connecte toi
                            </Typography.Text>
                        </Col>
                    </>
                }

                <Col span={2}></Col>
            </Row>
        </div>
    )
}