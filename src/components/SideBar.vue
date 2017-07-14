<template>
<div>
    <!--
    <ol>
    <li v-for="categroy in categroys">
    </li>
    </ol>
    -->
    <div id='catgories'>
        <div class="categroy">
            <i class='fa fa-film' aria-hidden='true'></i>所有
        </div>
        <div class="categroy">
            <i class='fa fa-gavel' aria-hidden='true'></i>技术
        </div>
        <div class="categroy">
            <i class='fa fa-graduation-cap' aria-hidden='true'></i>观点
        </div>
        <div class="categroy">
            <i class='fa fa-book' aria-hidden='true'></i>图书
        </div>
        <div class="categroy">
            <i class='fa fa-film' aria-hidden='true'></i>娱乐
        </div>
        <div class="categroy">
            <i class='fa fa-comment' aria-hidden='true'></i>评论
        </div>
        <div class="categroy">
            <i class='fa fa-archive' aria-hidden='true'></i>归档
        </div>
    </div>

    <div class="self-intro">
        {{selfintro}}
    </div>

    <div class='social'>
        <i class='fa fa-weixin fa-2x' aria-hidden='true'></i>
    </div>
    <div class='social'>
        <i class='fa fa-github fa-2x' aria-hidden='true'></i>
    </div>
    <div class='social'>
        <i class='fa fa-weibo fa-2x' aria-hidden='true'></i>
    </div>
    <div class='social'>
        <i class='fa fa-qq fa-2x' aria-hidden='true'></i>
    </div>
    
</div>
</template>
<script>
export default {
    data: function() {
            return {
                categroys:[
                    {id: 1, title:'技术', icon:""},
                    {id: 1, title:'观点', icon:'fa fa-book'},
                    {id: 1, title:'图书', icon:'fa fa-book'},
                    {id: 1, title:'娱乐', icon:'fa fa-book'}
                ],
                selfintro: '多少本该前途无量的少年，在无处可诉的烦恼后停止了梦想，等到',
            }
        }
}
</script>
<<style>
.sidebar {
    background: #E0EEEE;
}
.categroy {
    margin-top: 10px;
    width: 50%;
    align:center;
}
.social {
    display: inline-block;
    margin-left: 5px;
}
</style>
