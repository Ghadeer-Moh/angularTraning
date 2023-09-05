export interface IncrementsUploadModule{
    id?:number;
    Code?:number;
    Name?: string;
    Effectivedata?: Date;
}

export interface SubCurrentModule{
    id?:number;
    Basic?: string;    
    Housing?: string;  
    Transportation?: string;   

}

export interface SubProposedModule{
    id?:number;
    Basic?: string;    
    Housing?: string;  
    Transportation?: string;   

}