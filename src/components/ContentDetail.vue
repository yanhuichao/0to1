<template>
<div>
    <div class="post">
            <div class="title">
                <a href="{{post.id}"> {{post.title}} </a>
            </div>
            <div class="author">
                {{post.author}} 发布于 {{post.publishTime}} 
            </div>
            <div class="summary">
                {{post.summary}} <a href="{{post.id}"> 阅读更多 </a>
            </div>
    </div>
</div>
</template>
<script>
export default {
    data: function() {
        return {
            postList: {
                    id: 1, 
                    title:'第一篇博文', 
                    author:'AG', 
                    publishTime:'2017-09-01: 00:00:01', 
                    summary:'Hello World',
                    content:'【中美将合拍动画片《哪吒与变形金刚》】13日,记者获悉,中美将合拍动画片《哪吒与变形金刚》,目前,央视与美国制作方已进入实质阶段。双方还表示,期待建立更加稳固的战略合作伙伴关系,深度挖掘经典动画IP的品牌价值,进一步激发既有动画IP的品牌活力。封面新闻 http://t.cn/RKoEScp 你怎么看?',
        }
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
}

.post .author {
    font-size: 14px;
    font-family: sans-serif;
    color: #2c3e50;
}

.post .summary {

}

.post .title a {
    text-decoration: none;
    color: #2c3e50;
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
