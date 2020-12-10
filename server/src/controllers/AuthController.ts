import  UserController from './UserController';
import { User } from '../entity/User';
import { hashPsw, sendMail, verify } from '../helpers';


export default class AuthController {

    static async signUp(req, res) {
        const {nickname, email, password} = req.body;
        
        // Si on recupere les champs 
        if (typeof nickname == 'string'
        &&  typeof email == 'string'
        &&  typeof password == 'string' ) {

            // On regarde en base si l'email est déjà existant
            const find = await User.findOne({email: email}); 
            
            // Si l'email correspond en base de donnée
            if (typeof find !== 'undefined') return res.status(400).send('Un compte existe déjà avec cet email');

            let newUser: User = new User();

            // on hash le password
            let hash = await hashPsw(password);
                 
            newUser.email = email; 
            newUser.nickname = nickname;
            newUser.password = hash; 
            try {
                await newUser.save()           
                const send = sendMail(email);
                
                if (send) {
                    return res.status(200).send(`Compte crée avec success, vous avez reçu mail sur ${email}`);
                } 
            } catch (error) {
                console.log(error);   
            }
        } else {
            return res.status(400).send(`Des champs sont manquants `);
        }
    }

    static async signIn(req, res) {
        const { email, password } = req.body;
        const account = await User.findOne({email: email});

        // Si les champs email && password ne sont pas des trings
        if (typeof email !== 'string' && typeof password !== 'string') return res.status(400).send('Champs manquant, il est necessaire de donner l\'email & le mot de passe');

        // Si on trouve un compte
        if (typeof account !== 'undefined'
            && account.email == email ) {
            if (!await verify(password, account.password)) return res.status(400).send('Mauvais mot de passe');   

            return res.status(200).send(account);
        } else {
            return res.status(400).send(`Aucun compte sous ${email}`);
        }
    }

    static forgotPassword(req, res) {

    }

    static resetPassword(req, res) {

    }

}