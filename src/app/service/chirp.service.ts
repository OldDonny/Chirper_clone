import {Injectable} from '@angular/core'
import {User} from '../user'
import {USERS} from '../data'

@Injectable()
export class UserService{


    getUsers(): Promise<User[]>{
        return Promise.resolve(USERS);
    };
    getUser(id: number): Promise<User> {
        return this.getUsers()
                   .then(USERS => USERS.find(user => user.id === id));
    }
}
