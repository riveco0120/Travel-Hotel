import {hash, genSalt,compare} from 'bcrypt'

export async function hashPassword(plain){
    const salt = await genSalt(16); 
    const encrypt = await hash(plain,salt);
    return encrypt;
}

export async function verifyPassword(plain, hash){
    const verified = await compare(plain, hash)
    return verified; 
}