export interface User{
    userName: string,

    password: string,

    role: string
}
export interface City{
    CityID: number,

    Name: string,

    StateID: number
}
export interface State{
   
        StateID: number,
  
        StateName: string
      
}
export interface Main{
    States:Array<State>
    users:Array<User>
    Cities:Array<City>
}
export interface Application{ 
    fullname:fname,
      email: string,
       address:Address , 
       gender: string,
        Skills:Array<string>,
         education: { 
          secondary:edu,
          highsecondary:edu,
          Degree:edu
        } 
}
export interface fname {
     FirstName: string,
     MiddleName: string,
     Lastname: string 
}
export interface Address{
     Building: string,
      area: string, 
      State: string 
      City: string 
}
export interface edu{
    Marks:number, Grade: string, YearofPassout: number
}