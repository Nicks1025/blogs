<template>
    <div id = "nav">
        <p>{{ this.$session.get("email") }}</p>
        <div style = "margin-left:300px">
            <a href = "" @click.prevent = "home">Home</a>
            <a href = "">About</a>
            <a href = "" @click.prevent = "addBlog">Write</a>
            <a href = "" @click.prevent = "logout">logout</a>
        </div>

        <div style = "display:flex; align-items:center">
            <div id = "circle" @click.prevent = "profile"></div>
            <a href = ""><span class = "fa fa-search"></span></a>
        </div>
    </div>
</template>

<script>
export default{
    beforeCreate : function(){

    },
    data(){
        return{
        }
    },
    methods : {
        profile : function(){
            this.$router.push("/account")
        },
        home : function(){
            this.$router.push("/blogPage")
        },
        addBlog : function(){
            this.$router.push("/createBlog")
        },
        logout : function(){
            this.$session.destroy()
            this.$router.push("/")
        }
    }
}
</script>


<style scoped>

#nav{
    box-sizing: border-box;
    position:fixed;
    top:0;
    left:0;

    z-index:99;
    width:100vw;
    height:8%;
    padding:1%;
    display:flex;
    align-items:center;
    justify-content: space-evenly;
    background-color:lightgrey;  
}

a{
    text-decoration: none;
    color:grey;
    font-size:20px;
    margin:0 15px;
}

#circle{
    width:3vw;
    height:3vw;
    border-radius:50%;
    background-color: red;
}
</style>