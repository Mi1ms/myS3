import { Col, Row, Typography, Button, List } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useState } from 'react';


export default function Bucket ({ props }) {
    // let [blob, setBlob] = useState([]);
    const blob = [ {
        id: 1,
        name: 'blob', 
        path: 'url',
        size: '42',
    }]

    console.log(props);
    const { id } = useParams();
    return (
        <Row>
            <Col span={4}></Col>
            <Col span={16}
            >
                <Typography.Title
                ce
                >
                    Fichier de Bucket {id}
                </Typography.Title>

                <br/>

                <List
                    itemLayout="horizontal"
                    dataSource={blob}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <Button type="primary" icon={<DeleteOutlined />  } danger/>
                            ]}
                        >
                            <List.Item.Meta
                                title={ item.name
                                }
                            />
                        </List.Item>
                    )} 
                />
            </Col>
            <Col span={4}></Col>
        </Row>
    )
}

Bucket.propTypes = {
    
}