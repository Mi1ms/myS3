import * as crypto from 'crypto';
import * as nodemailer from 'nodemailer';

const env = require('dotenv').config();


async function hashPsw(password: string) {
    console.log(crypto.createHmac('sha256', env.HASH_SECRET));
    
    // return crypto.createHmac('sha256', env.HASH_SECRET);
    
}

async function verify(password: string) {
    
}

async function sendMail(userMail: string) {
    let testAccount = await nodemailer.createTestAccount();
    let transport = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        }
    });

    const msg = {
        from: 'myS3@mail.com',
        to: userMail,
        subject: 'BIENVENUE DANS LA FAMILY',
        html: '<h1>Bienvenue, vous etes officieusement de la famille</h1>'

    }

    transport.sendMail(msg, (err, info) => {
        if (err) {
            console.log(err);
        } else {
            console.log(info);
        }
    })
}

export  {
    hashPsw,
    verify,
    sendMail,
}