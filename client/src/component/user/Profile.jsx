import React, { useState } from 'react';
import { Image, Typography, Button, Tooltip, Form, Collapse , Input} from 'antd'
import { EditOutlined, UserDeleteOutlined } from '@ant-design/icons';


export default function  Profile () { 
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [form] = Form.useForm({});
    const [infoUser, setInfoUser] = useState({
        id:  1,
        nickname: 'Joe',
        email: 'test@mail.com',
    });
    const editInfo = (fields) => {
        console.log(fields);
    }

    const EditProfil = () => {
        return( 
            <Form 
                form={form}
                name="edit-profil" 
                initialValues={{
                    remember: true,
                }}
                onFinish={editInfo}
                layout='vertical'
            >
                <Form.Item 
                name={['user', 'nickname']}
                label="Nickname">
                    <Input/>
                </Form.Item>
                <Form.Item 
                name={['user', 'mail']} 
                rules={[
                    {
                        type: 'email',
                        message: 'Ne correspond pas à un mail',
                    }
                ]} 
                label="Email">
                    <Input/>
                </Form.Item>
    
            </Form>
        )
    }

    // function call API
    const deleteAccount = ()  => {
        // Fetch API delete user
    }

    return ( 
        <div className='bg profil'>
            <div className='profil space-margin'>
                <Image
                    className='icone'
                    src={`${process.env.PUBLIC_URL}/images/defaultIcone.png`}
                />
            </div>
            <Typography.Title className='profil-title-nname' level={3}>
                { infoUser.nickname }
            </Typography.Title>


            <Collapse>
                <Collapse.Panel header='Info'>
                    <Tooltip title="Edit"
                        // className='btnEditProfil'
                    >
                        <Button type="dashed" 
                        // ghost={true} 
                        shape="circle" 
                        icon={<EditOutlined />}  
                        onClick={() => setIsModalVisible(!isModalVisible) }
                            />
                    </Tooltip>

                    <Tooltip title="Supprimer le compte">
                        <Button 
                        icon={ <UserDeleteOutlined /> }
                        type='primary'
                        danger
                        onClick={() => deleteAccount}
                        ></Button>
                    </Tooltip>

                    { isModalVisible ? 
                        <EditProfil />
                        : 
                        <p>INFO</p>
                    }
                </Collapse.Panel>
            </Collapse>

            {/* MODAL EDIT PROFIL
            <Modal 
                title='Modification de profile'
                visible={isModalVisible}
                onCancel={() => setIsModalVisible(false)}
                okText="Sauvegarder"
                closeIcon
                
                onOk={() => console.log('submit')}
            >
                <EditProfil/>
            </Modal> */}
        </div>
    )
}