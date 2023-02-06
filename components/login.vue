<template>
    <div  id = "login">
        <navbar></navbar>
        <button style = "position : absolute; right:3%; top:10%">Register</button>
        <div id = "content">
            <form @click.prevent = "login">
                <h2>Login</h2>

                <div class = "form-group">
                    <label>Email</label>
                    <input type = "email" class = "form-control" placeholder = "email" v-model = "user.email" required>
                </div>
                
                <div class = "form-group">
                    <label>password</label>
                    <input type = "text" class = "form-control" placeholder = "username" v-model = "user.password" required>
                </div>

                <p v-show = "showErr" style = "color:red">{{ ErrMsg }}</p>
                <button>login</button>
            </form>
        </div>
    </div>
</template>

<script>
const API = "http://localhost:5000"
import navbar from "./navbar.vue"
export default{
    components : {
        navbar : navbar
    },
    beforeCreate : function(){
        if(this.$session.exists()){
            this.$router.push("/blogPage")
        }
    },
    data(){
        return{
            user : {
                email : '',
                password : ''
            },
            ErrMsg : '',
            showErr : false
        }
    },
    methods : {
        login : function(){
            this.$http.get(API + "/getUser/" + this.user.email)
            .then(data => {
                if(data.body.length > 0) {

                    if(this.user.password == data.body[0].password){
                        this.$session.start()
                        this.$session.set("email", this.user.email)
                        this.$router.push("/blogPage")
                    }
                    else{
                        this.ErrMsg = "Incorrect password"
                        this.showErr = true
                    }
                }
                else{
                    this.$router.push("/register")
                }
            })
        }
    }
}
</script>


<style>

#login{
    box-sizing: border-box;
    width:100vw;
    height:100vh;
    background-image: url("https://thumbs.dreamstime.com/z/blog-top-view-hands-keyboard-62012825.jpg");
    background-position: top;
    background-size: cover;
    background-repeat:none;
    border:1px solid black;
}

#content{
    display : flex;
    justify-content: center;
    margin-top:25vh;
    font-weight:900;
}

.form-group{
    margin-bottom:20px;
    color:red;
}

button{
    padding: 5px 10px;
    border-radius : 10px;
    background-color: yellow;   
}
</style>