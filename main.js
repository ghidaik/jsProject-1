
 json = (require('./data'));

 var obj=JSON.parse(json);

let logData = function(obj) {

    console.log(obj);
}


let logNames = function(obj) {

    for(var i=0;i<people.lenghth;i++){
    console.log(obj.people[i].name);}

};


let logNameEyes = function() {

    for(var i=0;i<people.lenghth;i++){
        console.log(obj.people[i].name);
        console.log(obj.people[i].eye_color);
    
    }   

};


let logByMass = function() {
    for(var i=0;i<people.lenghth;i++){

        if(people.mass>75){

            console.log(obj.people[i].name);

        }
    
    }  
};