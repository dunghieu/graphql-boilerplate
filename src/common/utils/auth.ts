import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const encryptPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hashSync(password, salt);
}

export const comparePassword = async (password: string, hashPassword: string): Promise<boolean> => {
    return bcrypt.compareSync(password, hashPassword);
}

export const signToken = (userId: string): string => {
    return jwt.sign({ userId },process.env.JWT_SECRET_KEY as string);
}

export const verifyToken = (authHeader: string): any => {
    const token = authHeader.replace('Bearer ', '');
    if (!token) {
      throw new Error("No token found");
    }
    return jwt.verify(token, process.env.JWT_SECRET_KEY as string);
}