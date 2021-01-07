import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button, Drawer } from 'antd';
import { MenuFoldOutlined , MenuUnfoldOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export default function SideBar() {
    const [visible, setVisible] = useState(false);
    

    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
        <Button icon={visible ? <MenuFoldOutlined/> : <MenuUnfoldOutlined/> }
          onClick={ () => setVisible(!visible) }
          shape='round'
          ghost={true}
         >
        </Button>
        <Drawer
            title={
                <Link to="/">
                    <span>MyS3</span>
                </Link>
            }
            placement="right"
            closable={false}
            onClose={() => onClose()}
            visible={visible}
        > 
            <Menu 
            className='bg-primary'
            onClick={() => onClose()}>
                <Menu.Item>
                <Link to="/">Home</Link>
                </Menu.Item>
                <SubMenu title="Log">
                <Menu.Item>            
                    <Link to="/login" >Connexion</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/signup"> Inscription</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/profil" > Mes Infos personnelles </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/mybucket" > Mes dossiers </Link>
                </Menu.Item>
                </SubMenu>
                <Menu.Item>
                    <Link to='/about'> À propos</Link>
                </Menu.Item>
            </Menu>
        </Drawer>
        </>
    )
}