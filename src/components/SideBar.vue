<template>
<div class="sidebar">
    <img src="../assets/daikon.png">
    <h3>About Me</h3>
    <div class="self-intro">
        {{selfIntro}}
    </div>
    <h3>Follow Me</h3>
    <div class='social'>
        <li v-for="social in socialNets">
            <div class="social-icon">
            <a :href="social.id"><i :class="social.icon" ></i></a>
            </div>
        </li>
     </div>
    <h3>Navigation</h3>
    <div>
        <li v-for="categroy in categroys">
            <div class='catgories'>
                <div class="categroy">
                    <i :class="categroy.icon"></i>
                    <!--<router-link to="1">{{categroy.title}}</router-link>-->
                    <a :href="categroy.id" v-link="{path:'/search/tag/' + categroy.id}">{{categroy.title}}</a>
                </div>
            </div>
        </li>
    </div>
    <div class="motto">
        {{motto}}
    </div>
</div>
</template>
<script>
export default {
    data: function() {
            return {
                categroys:[
                    {id: 1, title:'归档', icon:'fa fa-archive'},
                    {id: 2, title:'技术', icon:"fa fa-linux"},
                    {id: 3, title:'观点', icon:'fa fa-pencil'},
                    {id: 4, title:'图书', icon:'fa fa-book'},
                    {id: 5, title:'娱乐', icon:'fa fa-film'},
                    {id: 6, title:'留言', icon:'fa fa-comment'},
                ],
                selfIntro: '23 year old Swedish/Moroccan girl (born and raised in Stockholm) with a huge love for friends, family, fashion & travel. Blogger, model, influencer, designer, tv host, entrepreneur.',
                socialNets:[
                    {id:1, title:'', icon:'fa fa-weixin fa-1x'},
                    {id:2, title:'', icon:'fa fa-github fa-1x'},
                    {id:3, title:'', icon:'fa fa-weibo fa-1x'},
                    {id:4, title:'', icon:'fa fa-qq fa-1x'},
                ],
                motto: '"多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到"',
            }
        }
}
</script>
<<style>
.sidebar {
    background: #f5f5f5;
    align: center;
}

.sidebar img {
    max-width: 150px;
}

.sidebar a {
    color: #242321;
    text-decoration: none;
}

.sidebar a:hover {
    color: green;
    text-decoration: none;
}

.sidebar .catgories {
    align:center;
}

.sidebar .categroy {
    margin-top: 10px;
    align:center;
}

.sidebar .categroy .icon {
    display: inline-block;
}

.sidebar .social {
    display: inline-block;
    height: 30px;
    margin-left: 5px;
}

.sidebar .social .social-icon {
    background: #fff;
    border: 0px solid;
    padding:10px 15px; 
    border-radius: 50%;
}

.sidebar .social li {
    list-style-type: none;
    float: left;
    padding: 0px;
    margin-left: 15px;
}

.sidebar .self-intro {
    margin: 10px 0px 10px 55px;
    max-width: 300px;
    font-size: 15px;
    font-weight: 320;
    font-family: "Lato";
    color:#444;
    line-height: 1.33333333;
    text-align: left;
}

.sidebar .motto {
    margin: 10px;
    max-width: 300px;
    font-size: 15px;
    font-family: "STFongSong";
    color:#444;
    line-height: 1.33333333;
    text-align: left;
    margin: 10px 0px 10px 35px;
}



h3 {
    font-family:'Playfair Display';
    font-weight: 400;
}


</style>
