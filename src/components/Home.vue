<template>
<div>
    <div class="search">
        <input></input> <a href="#"><i class="fa fa-search" ></i></a>
    </div>
    <li v-for="post in postList">
        <div class="post">
            <div class="title">
                <a href="{{post.id}"> {{post.title}} </a>
            </div>
            <div class="postinfo">
                <div class="author">
                    <i class="fa fa-user-o" ></i> {{post.author}}&nbsp;&nbsp;&nbsp;  
                </div>
                <div class="time">
                    <i class="fa fa-calendar-plus-o" ></i> 
                </div>
                {{post.publishTime}}&nbsp;&nbsp;<i class="fa fa-eye"></i>&nbsp;19201
                <div class="summary">
                    {{post.summary}}... <a href="{{post.id}">read more</a>
                </div>
            </div>
        </div>
    </li>
</div>
</template>
<script>
    
export default {
    data: function() {
        var sumaryText = '多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到';
        return {
            postList:[
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01 00:00:01', summary: sumaryText},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'},
                {id: 1, title:'第一篇博文', author:'AG', publishTime:'2017-09-01: 00:00:01', summary:'Hello World'}
            ]
        }
    }
}
</script>
<<style>
.content {
    #background: rgb(176, 202, 219);
    #color: #fff;
    text-align: left;
}

.post {

}

.post .title {
    font-size: 20px;
    font-family: sans-serif;
    margin-top: 20px;
    color:#104EA5;
}

.post .title a {
    text-decoration: none;
    color: #104EA5;
}

.post .postinfo {
    font-size: 14px;
}

.post .postinfo .author {
    font-size: 14px;
    font-family: sans-serif;
    color: #2c3e50;
    display: inline-block;
}

.post .postinfo .time {
    font-size: 14px;
    font-family: "SimSun";
    color: #c82829;
    display: inline-block;
}

.post .postinfo .summary {
    font-family: "SimSun";
    letter-spacing: 0px;
    #word-spacing: 2em;
    color: #000000;
    font-size:16px;
}

.content .summary a {
    color: #1874CD;
    font-size: 14px;
    list-style-type: none;
    text-decoration: none;
}

.search {
    
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    list-style-type: none;
    margin: 0 10px;
}



</style>
