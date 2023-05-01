import { FormControl } from "@angular/forms";

export function dateValidator(date:FormControl){
    let d1=new Date()
    let d2=new Date(date.value)
    let diff=d1.getTime()-d2.getTime()
    let age=(diff / 31536000000).toFixed(0)
    console.log()
    if(parseInt(age)==0){
        return {'invalid':true}
    }
    return null
}