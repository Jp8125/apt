import { FormControl } from "@angular/forms";

export function name_validate(Formcont:FormControl){
    let n:string="jp"
    if(Formcont.value==n){
        return {"invalid":true}
    }
    else
    {
        return {"invalid":false}
    }
}
export function age_valid(fc_age:FormControl){
    if(fc_age.value<18){
        return {"invalid":true}
    }
    else
    {
        return {"invalid":false}
    }
}