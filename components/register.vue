<template>
    <div id = "register">
        <navbar></navbar>
        <button style = "position : absolute; right:3%; top:10%" @click.prevent = "login">Login</button>
        <div id = "content">
            <form @submit.prevent = "addUser">
                <h2>Register</h2>

                <div class = "form-group">
                    <label>Username</label>
                    <input type = "text" class = "form-control" placeholder = "username" v-model = "user.username" required>
                </div>

                <div class = "form-group">
                    <label>Email</label>
                    <input type = "email" class = "form-control" placeholder = "email" v-model = "user.email" required>
                </div>
                
                <div class = "form-group">
                    <label>Password</label>
                    <input type = "password" class = "form-control" placeholder = "password" v-model = "user.password" required>
                </div>

                <p v-show = "showErr" style = "color:red">{{ ErrMsg }}</p>
                <button>Register</button>
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
    data(){
        return{
            user : {
                username : '',
                email : '',
                password : ''
            },
            ErrMsg : '',
            showErr : false
        }
    },
    methods : {
        addUser : function(){
            this.$http.get(API + "/getUser/" + this.user.email)
            .then(data => {
                if(data.body.length > 0) {
                    this.ErrMsg = "email exists"
                    this.showErr = true
                }
                else{
                    this.$http.post(API + "/addUser", this.user)
                    .then(data => {
                        console.log(data)
                        this.$router.push("/login")
                    })
                }
            })
        },
        login : function(){
            this.$router.push("/login")
        }
    }
}
</script>


<style scoped>
#register{
    box-sizing: border-box;
    width:100vw;
    height:100vh;
    background-image: url("https://thumbs.dreamstime.com/b/blog-word-cloud-napkin-coffee-words-tags-related-to-blogging-design-handwriting-cup-against-grunge-wood-76342048.jpg");
    background-position: top;
    background-size: cover;
    /* background-repeat:none; */
    
    border:1px solid black;
}

#content{
    display : flex;
    justify-content: center;
    margin-top:25vh;
    font-weight:900;
    opacity:1;
}

.form-group{
    margin-bottom:20px;
}

button{
    padding: 5px 10px;
    border-radius : 10px;
    background-color: yellow;   
}
</style>