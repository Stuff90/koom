function cs(param){console.log((param == undefined)?"Here":param);}
function wait(time, statement){setTimeout(function(){statement()},time);}


window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
    function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();

function drawImage(theImage ,context){
    context.drawImage(theImage.image, theImage.x, theImage.y);
}

function rotatePoint(point, center, angle){
    return {
        x:Math.cos(angle) * (point.x - center.x) - Math.sin(angle) * (point.y - center.y) + center.x,
        y:Math.sin(angle) * (point.x - center.x) + Math.cos(angle) * (point.y - center.y) + center.y
    }
}

function drawPin(pin, context){

    context.save();

    context.translate(pin.x, pin.y);
    var pinX = 0;
    var pinY = 0;
    context.rotate(Math.PI*pin.angle/180);
    
    context.beginPath();

    context.lineTo(pinX-(pin.radius/2),pinY-pin.radius);  
    context.bezierCurveTo(
        pinX-(pin.radius/2) - pin.radius*.4, pinY - pin.radius*2,
        pinX+(pin.radius/2) + pin.radius*.4, pinY - pin.radius*2,
        pinX+(pin.radius/2), pinY-pin.radius);      
    context.lineTo(pinX,pinY);

    context.closePath();

    context.strokeStyle = pin.strokeStyle;
    context.lineWidth = pin.lineWidth;
    context.fillStyle = pin.fillStyle;
    context.fill();
    context.stroke();
    
    context.drawImage(pin.picto, -25 , -(pin.radius * 1.7))
    context.restore();
}

function drawTag(tag, context){

    context.save();

    context.translate(tag.x, tag.y);
    context.rect(0,0,tag.width,-tag.height);
    context.clip();
    context.drawImage(tag.img, 0,-tag.height);

    context.restore();

    context.beginPath();
    context.moveTo(tag.x - 15,tag.y);
    context.lineTo(tag.x + tag.width + 15, tag.y);
    context.lineTo(tag.x + tag.width, tag.y + 3);
    context.lineTo(tag.x, tag.y + 3);
    context.lineTo(tag.x - 15,tag.y);
    context.closePath();

    context.fillStyle = '#1d6a7b';
    context.fill();

}

function handleCrowd(time, crowd, context){
    if(time > 14000){
        for (var i = 0; i < crowd.length; i++) {
            crowd[i].y = crowd[i].y - (Math.sin(time / 100 + (i * 5)) / 2);
        };
    }

    drawImage(crowd[2], context);
    drawImage(crowd[0], context);
    drawImage(crowd[1], context);
}

function popTag(time, tag, context){
    if(time > tag.popTime){
        tag.height = tag.heightMax;
        if(time < tag.popTime + 100){
            tag.height = tag.heightMax / 100 * (time - tag.popTime);
        }
         drawTag(tag, context);
    }
}

function popPin(time, pin, context){
    if(time > pin.popTime){
        pin.radius = pin.radiusMax;
        if(time < pin.popTime + 200){
            pin.radius = pin.radiusMax / 200 * (time - pin.popTime);
        }
        drawPin(pin, context);        
    }
}

function updateImage(image, time){
    var linearSpeed = 55;
    var newX = linearSpeed * time / 1000;
    var newY = Math.sin((image.x / 8 )) + 180;
    
    if(newX < image.xMax){
        image.x = newX;
        image.y = newY - (time / 100 );
    }

    drawImage(image ,context);
}

function animate(animation, canvas, context, startTime){
    var time = (new Date()).getTime() - startTime;
    context.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < animation.tags.length; i++) {
        popTag(time, animation.tags[i], context);
    };
    
    drawImage(animation.buildingMask, context);

    for (var i = 0; i < animation.pins.length; i++) {
        popPin(time, animation.pins[i] ,context);
    };

    handleCrowd(time,animation.crowd,context);

    updateImage(animation.balloon, time);

    drawImage(animation.cloudForeground, context);

    if(time < animation.duration){
        requestAnimFrame(function() {
            animate(animation, canvas, context, startTime);
        });
    }

}


var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');


var getImgObj = function(url){
    var obj = new Image();
    obj.src = url;
    return obj;
}

var animation = {
    duration:25000,
    balloon:{x:0,y:180,xMax:canvas.width - 320,image:getImgObj('style/img/balloon.png')},
    cloudForeground:{x:30,y:70,image:getImgObj('style/img/nuage.png')},
    buildingMask:{x:167,y:88,image:getImgObj('style/img/building-mask.png')},
    pins:[
        {x:477,y:225,angle:-15,lineWidth:2,fillStyle:'#ffffff',strokeStyle:'#e85e41',radiusMax:52,popTime:6700,picto:getImgObj('style/img/velo.png')},
        {x:543,y:210,angle:10,lineWidth:2,fillStyle:'#ffffff',strokeStyle:'#19b271',radiusMax:46,popTime:6500,picto:getImgObj('style/img/recyclable.png')},
        {x:450,y:310,angle:-10,lineWidth:2,fillStyle:'#ffffff',strokeStyle:'#f1f258',radiusMax:50,popTime:6800,picto:getImgObj('style/img/eclair.png')},
        {x:570,y:285,angle:15,lineWidth:2,fillStyle:'#ffffff',strokeStyle:'#24bfde',radiusMax:52,popTime:6900,picto:getImgObj('style/img/eau.png')}
    ],
    tags:[
        {x:40,y:140,width:175,heightMax:75,popTime:500,img:getImgObj('style/img/tag-1.png')},
        {x:430,y:140,width:175,heightMax:79,popTime:7000,img:getImgObj('style/img/tag-2.png')},
        {x:820,y:140,width:170,heightMax:67,popTime:13000,img:getImgObj('style/img/tag-3.png')}
    ],
    crowd: [
        {x:790,y:260,image:getImgObj('style/img/crowd1.png')},
        {x:790,y:260,image:getImgObj('style/img/crowd2.png')},
        {x:790,y:260,image:getImgObj('style/img/crowd3.png')}
    ]
}




setTimeout(function(){
    var startTime = (new Date()).getTime();
    animate(animation, canvas, context, startTime);
}, 4000);





function initializeMap() {

    var mapOptions = {
        zoom: 6,
        center: new google.maps.LatLng(47.902964,1.909251),
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
        
    };

    var map = new google.maps.Map(document.getElementById('map-wrapper'), mapOptions);
}