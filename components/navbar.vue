<template>
    <div id = "nav">
        <div>

        </div>

        <div>
            <a href = "/">Home</a>
            <a href = "">About</a>
            <a href = "/login">Write</a>
        </div>

        <div>
            <a href = "/login">Login</a>
            <a href = "/register">Register</a>
            <a href = ""><span class = "fa fa-search"></span></a>
        </div>
    </div>
</template>

<script>

export default{
    data(){
        return{

        }
    },
    methods : {

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
    justify-content: space-around;
    background-color:lightgrey;  
}

a{
    text-decoration: none;
    color:grey;
    font-size:20px;
    margin:0 15px;
}
</style>