const user={
    userName:"hitesh",
    logInCount:8,
    signedIn:true,
    getUserInformation:function(){
        //console.log("All detailed info of user");
        //console.log(`userName:${this.userName}`);
       // console.log(this);
        
    }
}
//console.log(user.userName);
//console.log(user.getUserInformation());

//console.log(this);


function User(userName,logInCount,isLoggedIn){
    this.userName=userName;
    this.logInCount=logInCount;
    this.isLoggedIn=isLoggedIn

    return this ;
}

const userOne= new User("hitesh",12,true)
const userTwo= new User("Shivani",8,false)
console.log(userOne.constructor);
//console.log(userOne);
