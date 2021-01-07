import { Col, Row, Typography, Button } from 'antd';
import { useParams } from 'react-router-dom';

export default function Bucket () {
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

                <Button></Button>
            </Col>
            <Col span={4}></Col>
        </Row>
    )
}