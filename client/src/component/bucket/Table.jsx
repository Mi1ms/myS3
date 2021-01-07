import { Row, Col, Tooltip, Button, Space, Divider } from 'antd';
import { FolderAddOutlined, FolderOpenOutlined } from '@ant-design/icons';
import EmptyData from '../EmptyData';

const dataList =  () => {
    const buckets = [1, 2] ;
     
    // await
    return buckets;
}

export default function Table() {
    // const bucketData = await dataList();
    const bucketData =  dataList();
    console.log(bucketData);
    return (
        <Row gutter={16}>
            <Col span={4}></Col>
            <Col span={16}>

                <Tooltip title='Nouveau Bucket'>
                    <Button className='btn-create-bucket'
                        icon={ <FolderAddOutlined /> }
                        type='primary'
                    >
                    </Button>
                </Tooltip>
                <div className='list-bucket space-margin'>
                    <Divider orientation='center'> 
                        Liste de Bucket
                    </Divider>

                    <Space className='table-bucket'>
                        {/* <EmptyData text='Aucun Bucket' /> */}
                        <div className='centered-block' >

                            { bucketData.length === 0 ? 
                                <EmptyData /> 
                                :
                                bucketData.map((elem, idx) => {
                                    return ( 
                                        <div key={idx} > 
                                            <Button 
                                            icon={<FolderOpenOutlined />}
                                            href={`/bucket/${idx}`}
                                            >
                                            </Button>
                                        </div>  
                                    )
                                })
                            }
                        </div>
                    </Space>
                </div>
            </Col>
            <Col span={4}></Col>
        </Row>
    )
}