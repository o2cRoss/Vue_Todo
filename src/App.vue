<template>
    <div>
        <h1>风随羽TODO—List</h1>
        <h2>abc</h2>
        <input type="text" v-model="content">
        <button @click="addTodo">添加</button>
        <ul>
            <li v-for="(item, index) of todoData" :key="index">{{item}}</li>
        </ul>
    </div>
</template>


<script>
// import img from './assets/images/bg.png';
// import './assets/images/a.svg';
// import './assets/styles/test.css';
import './assets/styles/global.styl'

export default {
    name: 'App',
    data(){
        return{
            todoData: ['todo1', 'todo2', 'todo3'],
            content: ''
        }
    },
    methods: {
        addTodo(){
            if(this.content === "") return;
            this.todoData.push(this.content);
            this.content = ""
        }
    }
    // created(){
    //     // console.log(img);
    // }
}
</script>

<style lang="stylus" scoped>
h1
    color: blue
    font-size : 48px
    transform : translate(150px,10px)

li
    font-size: 24px

li:nth-of-type(odd)
    color: red
</style>