// module.exports.absolute=function(number){
//     return (number>=0)? number:-number


//     // if(number>=0)return number;

//     // return -number;
//     // if(number<0)return -number;//refacotr the code
//     // return 0

// }

// module.exports.greets=function(name){
//     return "Welcome "+name;
// }

// module.exports.getCurrencies=function(){
//     return ["usd","Rup","yarn"]
// }

// module.exports.getObject=function(){
//     return {"id":1,"name":"shree","categary":"a"}
// }


module.exports.getException=function(username){
    if(!username) throw new Error ("username is required");

    return{id: new Date().getTime(),username:username}
}