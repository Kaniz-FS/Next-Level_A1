const multiplyValue = (value: number, multiplier?:number):number =>{
    if(multiplier===undefined){
        return value * 2;
    }
    return value * multiplier;
}

const processInput = (input: string| number|boolean): string |number => 
{
    if(typeof input === "string"){
        return input.trim().toLowerCase();
    }
    else if(typeof input === "number"){
        return input*10;
    }
    else { 
        if(input === true){
            return "Active";
        }
        return "Inactive"
    }

}

const formatCoordinate = (location: readonly [latitude: number, longitude: number, locationName: string]): string =>
{
  return "Location" + ":" + " " + location[2] + " " + "(" + location[0] + "," + " " + location[1] + ")";
}
