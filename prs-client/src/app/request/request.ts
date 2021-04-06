import { User } from "../user/user";

export class Request {
    id: number = 0;
    user: User = new User();
    description: string = '';
    justification: string = '';
    dateNeeded: string = (new Date()).toISOString().substring(0,10);
    deliveryMethod: string = '';
    status: string = 'NEW';
    total: number = 0;
    submittedDate: string = (new Date()).toISOString();
    reasonForRejection: string = '';
}
