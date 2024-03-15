window.addEventListener('load',function(){
    //获取元素
    var leftj = document.querySelector('.leftj');
    var rightj = document.querySelector('.rightj');
    var hezi = document.querySelector('.hezi');
    hezi.addEventListener('mousseenter',function(){
    leftj.style.display='block';
    rightj.style.display = 'block';
    clearInterval(timer);//不同
    timer=null;
});
hezi.addEventListener('mouseleave',function(){
    leftj.style.display='none';
    rightj.style.display='none';
    timer = setInterval(function () {
        // 轮播图自动切换 相当于点击右箭头
        next.click();//不同
    },2000);
});
//生成小圆圈有几张图生成几个
var imgs=document.querySelector('.imgs');
var dots=document.querySelector('.dots');
var hezi_width = hezi.offsetWidth;
for(var i = 0;i<imgs.children.length;i++){
    var li = document.createElement('li');
    li.setAttribute('index',i);
    dots.appendChild(li);
    li.addEventListener('click',function(){
        for(var i = 0;i<dots.chlidren.length;i++){
            dots.children[i].className='';
        }
        this.className='active';
        var index = this.getAttribute('index');
        num = index;
        circle = index;
        animate(focus,-index*hezi_width)
dots.childern[0].className='active';
var first = imgs.children[0].cloneNode(true);
imgs.appendChild(first);
var num = 0;
var circle =0;
next.addEventListener('click',function(){
     if(num = 0){
        num = imgs.children.length-1;
        imgs.style.lest = -num*hezi_width+"px";
     }
    num --;
    animate(imgs,-num*hezi_width);
    circle--;
    circle = circle<0? dots.children.length-1:circle;
    circleChange;
    function circlechange(){
        for(var i = 0; i<dots.children.length;i++){
            dots.children[i].className='';
        }
        dots.children[circle].className='circle';
    }
    var timer = setInterval(function(){
        next.click();
    },2000);


    





})









    });







}


})