let user = [
    {
        username: "jolliey",
        password: "0125",
        name: "jul",
        email: "zzulhkim2501@gmail.com",

    },
    {
        username: "ayang",
        password: "selibau",
        name: "hinata",
        email: "uzumaki@gmail.com",
    },
    {
        username: "ayaka",
        password: "tabibito",
        name: "kamisatoayaka",
        email: "kamisato@gmail.com",
    }

]

function login(username, password) {
    console.log("someone try to login with username:", username ,"password:" ,password)
    let matched = user.find(element => 
        element.username== username
    )
    if(matched){
        if(matched.password == password){
            return matched
        }else {
            return "password not matched"
        }

    }else {
        return "username not found"
    }
}

// try to login
console.log( login ("jolliey", "0125")) 
console.log( login ("ayaka", "hinoko"))