import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Tooltip, Button, Space, Divider, List, Upload } from 'antd';
import { FolderAddOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';



export default function Table() {
    const [bucketArr, setBucketArr] = useState([
        {
            id: 1,
            bucketName : 'TItle',
            blob: []
        },
        {
            id: 2,
            bucketName : 'TItle2',
            blob: []
        },
    ]);   
    // await

    return (
        <Row gutter={16}>
            <Col span={4}></Col>
            <Col span={16}>

                <Tooltip title='Nouveau Bucket'>
                    <Button className='btn-create-bucket'
                        icon={ <FolderAddOutlined /> }
                        type='primary'
                        size='large'
                    >
                    </Button>
                </Tooltip>
                <div className='list-bucket space-margin'>
                    <Divider orientation='center'> 
                        Liste de Bucket
                    </Divider>

                    <Space className='table-bucket'>
                        <div className='centered-block' >

                        <List
                            dataSource={bucketArr}
                            renderItem={(item) => (
                                <List.Item
                                 actions={[
                                    <Button type="primary" icon={<DeleteOutlined />  } danger/>,
                                    <Button icon={<EditOutlined />}></Button>]}
                                >
                                    <List.Item.Meta
                                     title={
                                     <Link to={{
                                         pathname:`/bucket/${item.id}`,
                                         state : { 
                                            bucketName: item.bucketName, 
                                            blob : item.blob
                                         }
                                     }}> { item.bucketName }
                                     </Link>
                                     }
                                    />
                                </List.Item>
                            )} 
                            />
                        </div>
                    </Space>
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
    )
}