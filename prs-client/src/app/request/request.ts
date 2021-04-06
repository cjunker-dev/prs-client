import { User } from "../user/user";

export class Request {
    id: number = 0;
    user: User = new User();
    description: string = '';
    justification: string = '';
    dateNeeded: Date;
    deliveryMethod: string = '';
    status: string = '';
    total: number = 0;
    submittedDate: Date;
    reasonForRejection: string = '';
}
