import { UserController } from './UserController';
import { User } from '../entity/User';
import { hashPsw, sendMail } from '../helpers';


export default class AuthController {

    static async signUp(req, res) {
        const {nickname, email, password} = req.body;
        
        // Si on recupere les champs 
        if (typeof nickname == 'string'
        &&  typeof email == 'string'
        &&  typeof password == 'string' ) {

            // On regarde en base si l'email est déjà existant
            const find = await User.findOne({email: email}); 
            // await find.remove()
            
            // Si l'email correspond en base de donnée
            if (typeof find !== 'undefined') return res.status(400).send('Un compte existe déjà avec cet email');

            let newUser: User = new User();

            // on hash le password
            let hash = await hashPsw(password)
                
                
            newUser.email = email; 
            newUser.nickname = nickname;
            newUser.password = password; 
        
            console.log(newUser);
            try {
                // await newUser.save()  
                const all = await User.find();
                console.log(all);
                  
                const send = sendMail(email);
                // console.log('sendmail :', send);
                
                if (send) {
                    return res.status(200).send(`Compte crée avec success, vous avez reçu mail sur ${email}`);
                }
            
            } catch (error) {
                console.log(error);   
            }
            
            

        } else {
            return res.status(400).send(`Des champs sont manquants `);
        }

        // const userController = new UserController();
        // const save = userController.save;
        // console.log(save);
        
        // res.send('signUp')
    }

    static signIn(req, res) {
        const { email, password } = req.body;

    }

    static forgotPassword(req, res) {

    }

    static resetPassword(req, res) {

    }

}