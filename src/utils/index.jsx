import dotenv from  'dotenv';
dotenv.config();

const getApiUrl = () => {
    return 'http://localhost:3001';
}

const getHeaders = () => {
    return {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
}

const layout = () => {
    return {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
}

export {
    getApiUrl,
    getHeaders,
    layout,
}
