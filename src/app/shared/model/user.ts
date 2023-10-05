import { Role } from "./role";

export class User {
    userId: number;
    loginId: string;
    password: string;
    isActive: boolean;
    roleId: number;
    role: Role;
}
