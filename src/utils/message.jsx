import { message } from 'antd';


const successMsg = (text, countdown = 4) => {
    message.success(text, countdown);
};

const errorMsg = (text, countdown = 4) => {
    message.error(text, countdown);
};

const warningMsg = (text, countdown = 4) => {
    message.warning(text, countdown = 4);
}; 

export {
    successMsg,
    errorMsg,
    warningMsg,
}