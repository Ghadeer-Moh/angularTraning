export interface PayrollregisterModule{
    id?:number;
    Code?:number;
    Name?:string;
    Department?:string;
    Sponser?:string;
    Basic?:string;
    Netamount?:number;
    Costtocompany?:number;

}

export interface EarringsModule{
    id?:number;
    Earnings?:string;
}

export interface DeductionsModule{
    id?:number;
    EOS?:string;
}

export interface AccrualsModule{
    id?:number
    GOSI?:string;
}