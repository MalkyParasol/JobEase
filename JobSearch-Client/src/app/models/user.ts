import { jobFields } from "./fields"
export interface User{
    id : Number
    name: string
    password : string
    jobField : jobFields
}