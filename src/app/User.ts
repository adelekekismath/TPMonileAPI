interface Name{
      title: string;
     first: string;
     last: string;
}
interface Street{
      number:Number;
     name: string;
}

interface Picture{
    large: string;
    medium: string;
    thumbnail: string;
 

}

interface  registered{
    date: string;
    age: Number;
}
interface Dob{
    date: string;
    age: Number;
}
interface Login{
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;

}

interface Timezone{
     offset:string;
     description: string;
}

interface Coordinates {
     latitude: string;
     longitude: string;
}
interface location  {
      street : Street;
     city: string;
     state: string;
     country:string;
     postcode: number;
     coordinates: Coordinates;
     timezone: Timezone;

}


export interface Result{
     gender: string;
     name : Name;
     location : location;
     email: string;
     login : Login;
     dob : Dob;
     registered : registered;
     phone: string;
     cell: string;
     id: Number;
     picture : Picture;
     nat : string;
   
}

