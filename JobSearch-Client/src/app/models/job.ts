import {jobFields} from "./fields";
import { Areas } from "./areas";

export interface Job{
    field : jobFields
    name: string
    scopeHours : Number
    area : Areas
    requirements : string
    workingFromHome : boolean
}