class Name{
    public  title: string;
    public first: string;
    public last: string;
}
class Street{
    public  number:Number;
    public name: string;
}

class Picture{
    large: string;
    medium: string;
    thumbnail: string;
 

}
class ID{
    name: string;
    value: string;
}
class  registered{
    date: string;
    age: Number;
}
class Dob{
    date: string;
    age: Number;
}
class Login{
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;

}

class Timezone{
    public offset:string;
    public description: string;
}

class Coordinates {
    public latitude: string;
    public longitude: string;
}
class location  {
    public  street : Street;
    public city: string;
    public state: string;
    public country:string;
    public postcode: number;
    public coordinates: Coordinates;
    public timezone: Timezone;

}


export class Result{
    public gender: string;
    public name : Name;
    public location : location;
    public email: string;
    public login : Login;
    public dob : Dob;
    public registered : registered;
    public phone: string;
    public cell: string;
    public id: ID;
    public picture : Picture;
    public nat : string;
   
}

