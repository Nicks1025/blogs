<template>
    <div>
        <navbar></navbar>
        <div id = "acc-info">
            <div style = "display:flex;align-items:center; justify-content: space-between;">
                <h3>Update your Account</h3>
                <button @click.prevent = "deleteUser">Delete account</button>
            </div>

            <form>
                <div class = "form-group">
                    <label>Username</label>
                    <input type = "text" class = "form-control" v-model = "username">
                </div>

                <div class = "form-group">
                    <label>Email</label>
                    <input type = "text" class = "form-control" v-bind:value = "user.email">
                </div>

                <div class = "form-group">
                    <label>Password</label>
                    <input type = "password" class = "form-control" v-bind:value = "user.password">
                </div>

                <button @click.prevent = "updateUser">Update profile</button>
            </form>
        </div>
    </div>
</template>

<script>
const API ="http://localhost:5000"
import navbar from "./navbar2.vue"
export default{
    components : {
        navbar : navbar
    },
    beforeCreate : function(){
        if(this.$session.exists()){

        }
        else{
            this.$router.push("/login")
        }
    },
    data(){
        return{
            user : {
                username : '',
                email : '',
                password : ''
            },
            username : ''
        }
    },
    methods : {
        updateUser : function(){
            if(this.user.username) {

            }
            if(this.user.email){

            }
            if(this.user.password) {

            }
        },
        deleteUser : function(){
            this.$http.delete(API + "/deleteUser/" + this.$session.get("email"))
            .then(data => {
                this.$session.destroy()
                this.$router.push("/login")
                this.$http.delete(API + "/deleteblogs/" + this.$session.get("email"))
                .then(data => {
                })
            })
        }
    }
}
</script>


<style>
#acc-info{
    width:60%;
    background-color:yellow;
    padding: 10px 30px;
    margin-top:10vh;
}

button{
    padding:5px 10px;
    border-radius:10px;
    background-color:yellow;
}

input[type = "text"], input[type = "password"]{
    width:200px;
}

.form-group{
    margin-bottom:10px;
}
</style>