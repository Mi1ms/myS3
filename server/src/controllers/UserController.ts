import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { User } from "../entity/User";
import {hashPsw, sendMail} from "../helpers"

export default class UserController {

    static async findOne(request: Request, response: Response, next: NextFunction) {
        const user = await User.findOne(request.params.uuid);
        if (typeof user == 'undefined') return response.status(400).send('Utilisateur introuvable, comme Charlie..'); 
        return response.status(200).send(user);
    }

    static async save(request: Request, response: Response, next: NextFunction) {
        const {nickname, email, password} = request.body;
        
        // Si on recupere les champs 
        if (typeof nickname == 'string'
        &&  typeof email == 'string'
        &&  typeof password == 'string' ) {

            // On regarde en base si l'email est déjà existant
            const find = await User.findOne({email: email}); 
            
            // Si l'email correspond en base de donnée
            if (typeof find !== 'undefined') return response.status(400).send('Un compte existe déjà avec cet email');

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
                    return response.status(200).send(`Compte crée avec success, vous avez reçu mail sur ${email}`);
                } 
            } catch (error) {
                console.log(error);   
            }
        } else {
            return response.status(400).send(`Des champs sont manquants `);
        }
    }

    static async remove(request: Request, response: Response, next: NextFunction) {
        const userRepository = getRepository(User);
        const user = await userRepository.findOne({id: request.params.uuid})

        if (typeof user == 'undefined') return response.status(400).send('Aucun compte sous cette ID');
        
        const remove = await userRepository.remove(user);
        return response.status(200).send(remove);
    }

    static async update(request: Request, response: Response, next: NextFunction) {
        const userRepository = getRepository(User);
        let user = await userRepository.findOne({id: request.params.uuid})

        if (typeof user == 'undefined') return response.status(400).send('Aucun compte sous cette ID');
        const { nickname, password, email } = request.body;

        
        const mailUpdt = user.email !== email ? email : user.email;
        const nickUpdt = user.nickname !== nickname ? nickname : user.nickname;
        const pswdUpdt = user.password !== password && typeof password == 'string' ? await hashPsw(password) : password;
       
        user.nickname = nickUpdt;
        user.email = mailUpdt;
        user.password = pswdUpdt;
        
        const update = await userRepository.save(user);
        return response.status(200).send(update)
    }
}