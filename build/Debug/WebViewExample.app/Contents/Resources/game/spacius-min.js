Spacius=function(){var d=37,l=39,n=40,AF=38,s=32,v=83,k=10,c=1,e=2,AJ=3,H=400,AH=300,o=3,K=16,AD=2,AM=32,b=16,O=5,D=8,AB=15,V=1,A=2,j=3,M=4,B=32,m=32;var J,a={mode:AJ},T={},Y,I,Q,W=[],q=false,AG=[],h=[0,200,800,2000,4000,10000,999999999];var AI=function(AN){Y=AN;Y.imgUrl=Y.imgUrl||"./";J=document.getElementById(Y.id);H=Y.width||J.offsetWidth||H;AH=Y.height||J.offsetHeight||AH;Q=document.createElement("div");AK(Q,{background:"#000",overflow:"hidden",position:"relative",width:H+"px",height:AH+"px"});J.appendChild(Q);R.init();C.init();AA.init();t.init();w.init();X.init();X.start();L(document,"keydown",E);L(document,"keyup",AE);soundManager.onload=function(){q=true;T.death=soundManager.createSound({id:"death",url:"death.mp3"});T.shot=soundManager.createSound({id:"shot",url:"shot.mp3"});T.theme=soundManager.createSound({id:"theme",onfinish:function(){P("theme")},url:"theme.mp3"});T.ufoDie=soundManager.createSound({id:"ufoDie",url:"ufo_die.mp3"})}};var L=(document.addEventListener?function(AO,AP,AN){AO.addEventListener(AP,AN,false)}:function(AO,AP,AN){AO.attachEvent("on"+AP,AN)});var U=function(){if(a.mode!=e){return }var AN=false;switch(a.wave){case 1:if(u(1,100)==1){N("bomber")}break;case 2:if(!I){I=f({delay:16,movement:V,num:6,speed:u(3,4),type:"bogey"})}break;case 3:if(!I){I=f({delay:16,movement:M,num:u(5,8),speed:u(2,3),type:"ds"})}break;case 4:AN=250;if(!I){I=f({delay:10,extra:{tallWave:true},movement:M,num:8,speed:u(3,4),type:"bogey"})}break;case 5:AN=150;if(u(1,50)==1){N("bomber",{speed:u(4,6)})}break;case 6:AN=200;if(u(1,75)==1){N("bomber",{speed:u(3,6)})}if(!I){if(u(1,2)==1){I=f({delay:16,movement:M,num:5,speed:u(2,3),type:"ds"})}else{I=f({delay:16,movement:V,num:6,speed:u(2,3),type:"bogey"})}}break}if(AN){if(u(1,AN)==1){N("meteor",{movement:A})}}if(I){if(I.d++>=I.delay){I.d=0;if(I.n<I.num){if(N(I.type,I)){I.n++}}else{if(a.numUfos<=0){I=false}}}}if(a.score>=h[a.wave]){a.wave++;I=false}};var g=function(AN,AQ){var AP=((AN.x>=AQ.x)&&(AN.x<=AN.x)),AO=((AN.y>=AQ.y)&&(AN.y<=AQ.y));if((AN.x<AQ.x2)&&(AN.x2>AQ.x)&&(AN.y<AQ.y2)&&(AN.y2>AQ.y)){return true}return false};var f=function(AN){AN.d=0;AN.n=0;switch(AN.movement){case V:AN.x=H;AN.y=u(m,(AH/4));break;case M:AN.x=H;AN.y=u((AH/4),(AH/2));break}return AN};var E=function(AN){if(a.mode==e){switch(AN.keyCode){case d:AA.setMoveX(d);break;case l:AA.setMoveX(l);AA.setImg("ship_moving.gif");break;case AF:AA.setMoveY(AF);break;case n:AA.setMoveY(n);break;case s:AL();break}}else{if(a.mode==AJ){if(AN.keyCode==s){G()}}}if(AN.keyCode==v){Z()}};var AE=function(AN){if(a.mode!=e){return }switch(AN.keyCode){case d:AA.setMoveX();break;case l:AA.setMoveX();AA.setImg("ship.gif");break;case AF:AA.setMoveY();break;case n:AA.setMoveY();break}};var AC=function(){var AQ=[],AP,AR;var AO=function(){for(var AT=0;AT<AR.num;AT++){AQ[AT].hide()}clearInterval(AP);AR.onComplete()};var AN=function(){for(var AT=0;AT<AR.num;AT++){AQ[AT].x-=Math.cos(AQ[AT].radians)*AR.speed;AQ[AT].y-=Math.sin(AQ[AT].radians)*AR.speed;AQ[AT].style.left=AQ[AT].x+"px";AQ[AT].style.top=AQ[AT].y+"px";if((AQ[AT].x<0)||(AQ[AT].x>H)||(AQ[AT].y<0)||(AQ[AT].y>AH)){AQ[AT].hide()}}};var AS=function(AV){var AT=0,AW=parseInt(360/AV.num);AV.speed=AV.speed||2;for(var AU=0;AU<AV.num;AU++){if(!AQ[AU]){AQ[AU]=S();Q.appendChild(AQ[AU])}AK(AQ[AU],{background:"url("+Y.imgUrl+"ship_piece.gif)",position:"absolute",width:"8px",height:"8px",zIndex:"2"});AQ[AU].radians=(AT*Math.PI)/180;AQ[AU].x=AA.getX()+(AM/2);AQ[AU].y=AA.getY()+(b/2);AQ[AU].style.left=AQ[AU].x+"px";AQ[AU].style.top=AQ[AU].y+"px";AT+=AW;AQ[AU].show()}AP=setInterval(AN,k);setTimeout(AO,2500);AR=AV};return{start:AS}}();var F=function(){var AO,AN,AQ=W.length,AP=AG.length;AA.move();for(AN=0;AN<AP;AN++){if(AG[AN].isAlive()){AG[AN].move();if(AA.isAlive()&&g(AA.getCoords(),AG[AN].getCoords())){AA.kill();AG[AN].kill()}for(AO=0;AO<AQ;AO++){if(W[AO].isActive()){if(g(W[AO].getCoords(),AG[AN].getCoords())){W[AO].stop();AG[AN].kill()}}}}}for(AO=0;AO<AQ;AO++){if(W[AO].isActive()){W[AO].move()}}U()};var S=function(){var AN=document.createElement("div");AN.hide=function(){AN.style.display="none"};AN.show=function(){AN.style.display=""};return AN};var N=function(AP,AQ){var AO=false;for(var AN=0;AN<AB;AN++){if(!AG[AN]){AO=true;AG[AN]=new z();break}else{if(!AG[AN].isActive()){AO=true;break}}}if(AO){a.numUfos++;AG[AN].start(AP,AQ)}return AO};var R=function(){var AP=S(),AQ;var AR=function(){AK(AP,{color:"#fff",fontFamily:"verdana, sans-serif",fontSize:"10px",padding:"0px",position:"absolute",left:"2px",bottom:"2px"});AP.hide();Q.appendChild(AP)};var AO=function(){if(AQ){clearTimeout(AQ)}AQ=setTimeout(function(){AP.hide()},1000)};var AN=function(){AP.innerHTML="Sound is "+(q?"ON":"OFF");AP.show()};return{hide:AO,init:AR,show:AN}}();var G=function(){if(a.interval){clearInterval(a.interval);a.interval=false}a.interval=setInterval(F,k);a.mode=e;a.numUfos=0;a.score=0;a.wave=1;I=false;C.add(0);t.hide();w.hide();C.show();AA.start();P("theme")};var P=function(AN){if(q&&T&&T[AN]){T[AN].play()}};var C=function(){var AN=S();var AP=function(){AK(AN,{color:"#fff",display:"none",fontFamily:"verdana, sans-serif",fontSize:"10px",left:"2px",top:"2px",position:"absolute",zIndex:"1"});AN.innerHTML="Score: 0";Q.appendChild(AN)};var AO=function(AQ){a.score+=AQ||0;AN.innerHTML="Score: "+a.score};return{add:AO,hide:AN.hide,init:AP,show:AN.show}}();var u=function(AO,AN){return(AO+Math.floor((AN-AO+1)*(Math.random()%1)))};var AK=function(AP,AO){for(var AN in AO){AP.style[AN]=AO[AN]}};var AA=function(){var AY=true,AO=S(),AR=0,AP=0;var AZ=function(){AK(AO,{background:"url("+Y.imgUrl+"ship.gif)",display:"none",width:AM+"px",height:b+"px",position:"absolute",zIndex:"2"});Q.appendChild(AO)};var AS=function(){return{x:AO.x,y:AO.y,x2:(AO.x+AM),y2:(AO.y+b)}};var AW=function(){return AY};var AT=function(){AY=false;a.mode=c;AC.start({num:K,onComplete:function(){a.mode=AJ;w.show()}});AA.hide();P("death");i("theme")};var AQ=function(){switch(AR){case d:AO.x-=AD;if(AO.x<0){AO.x=0}break;case l:AO.x+=AD;if((AO.x+AM)>H){AO.x=(H-AM)}break}switch(AP){case AF:AO.y-=AD;if(AO.y<0){AO.y=0}break;case n:AO.y+=AD;if((AO.y+b)>AH){AO.y=(AH-b)}break}AO.style.left=AO.x+"px";AO.style.top=AO.y+"px"};var AV=function(Aa){AO.style.background="url("+Y.imgUrl+Aa+")"};var AX=function(Aa){AR=Aa||false};var AU=function(Aa){AP=Aa||false};var AN=function(){AY=true;AO.x=((H/2)-(AM/2));AO.y=((AH/2)-(b/2));AR=0;AP=0;AO.style.left=AO.x+"px";AO.style.top=AO.y+"px";AO.show()};return{getCoords:AS,getX:function(){return AO.x},getY:function(){return AO.y},hide:AO.hide,init:AZ,isAlive:AW,kill:AT,move:AQ,setImg:AV,setMoveX:AX,setMoveY:AU,show:AO.show,start:AN}}();var p=function(){var AS=false,AR=S();var AT=function(){AK(AR,{background:"url("+Y.imgUrl+"shot.gif)",overflow:"hidden",position:"absolute",width:D+"px",height:D+"px"});Q.appendChild(AR);AU()};var AQ=function(){return AS};var AP=function(){return{x:AR.x,y:AR.y,x2:(AR.x+D),y2:(AR.y+D)}};var AN=function(){AR.x+=O;if((AR.x+D)>=H){AO()}AR.style.left=AR.x+"px"};var AU=function(){AS=true;AR.x=(AA.getX()+AM);AR.y=(AA.getY()+(b/4));AR.style.left=AR.x+"px";AR.style.top=AR.y+"px";AR.show()};var AO=function(){AS=false;AR.hide()};AT();return{move:AN,getCoords:AP,isActive:AQ,start:AU,stop:AO}};var AL=function(){var AO=false;for(var AN=0;AN<o;AN++){if(!W[AN]){AO=true;W[AN]=new p();break}else{if(!W[AN].isActive()){AO=true;W[AN].start();break}}}P("shot")};var X=function(){var AQ=false,AS=50,AT=25,AR=[];var AP=function(){for(var AW=0;AW<AS;AW++){AR[AW].x-=AR[AW].speed;if(AR[AW].x<0){AR[AW].x=(H-1);AR[AW].y=u(0,AH-1)}AR[AW].style.left=AR[AW].x+"px";AR[AW].style.top=AR[AW].y+"px"}};var AN=function(){var AX=S("div"),AW=u(1,5);r=(AW*55)-50,x=u(0,H-1),y=u(0,AH-1);AX.speed=AW;AK(AX,{background:"rgb("+r+","+r+","+r+")",zoom:1,left:x+"px",top:y+"px",overflow:"hidden",position:"absolute",width:"1px",height:"1px",zIndex:"1"});AX.x=x;AX.y=y;Q.appendChild(AX);return AX};var AO=function(){if(!AQ){AQ=setInterval(AP,AT)}};var AU=function(){if(AQ){clearInterval(AQ);AQ=false}};var AV=function(){for(var AW=0;AW<AS;AW++){AR[AW]=AN()}};return{init:AV,start:AO,stop:AU}}();var i=function(AN){if(T&&q&&T[AN]){T[AN].stop()}};var t=function(){var AP=S();var AQ=function(){AK(AP,{background:"url("+Y.imgUrl+"title.gif)",left:(H/2-144)+"px",top:(AH/2-55)+"px",position:"absolute",width:"287px",height:"110px",zIndex:"2"});Q.appendChild(AP)};var AO=function(){AP.style.display="none"};var AN=function(){AP.style.display=""};return{hide:AP.hide,init:AQ,show:AP.show}}();var Z=function(){if(q){if(a.mode==e){i("theme")}q=false}else{q=true;if(a.mode==e){P("theme")}}R.show();R.hide()};var w=function(){var AN=S();var AO=function(){AK(AN,{color:"#fff",fontFamily:"verdana, sans-serif",fontSize:"10px",padding:"0px",position:"absolute",right:"2px",bottom:"2px"});AN.hide();AN.innerHTML="Play Again?<br>Press SPACE";Q.appendChild(AN)};return{hide:AN.hide,init:AO,show:AN.show}}();var z=function(){var AQ=false,AW=false,AO,AU;var AZ=function(){AO=S();Q.appendChild(AO)};var AY={"1":function(){switch(AO.stage){case 1:if(AO.x<(H/4)){AO.stage=2}case 3:AO.x-=AO.speed;break;case 2:AO.x+=AO.speed;AO.y+=AO.speed;if((AO.x>(H*0.75))||(AO.y>(AH*0.75))){AO.stage=3}break}if(AO.x<-B){AV()}AO.style.left=AO.x+"px";AO.style.top=AO.y+"px"},"3":function(){AO.x-=AO.speed;if(AO.x<-B){AV()}AO.style.left=AO.x+"px";AO.style.top=AO.y+"px"},"4":function(){AO.inc+=5;AO.x-=AO.speed;if(AO.extra&&AO.extra.tallWave){AO.y=parseInt(AO.yStart-((m*2)*Math.sin(0.02*AO.inc)))}else{AO.y=parseInt(AO.yStart-(m*Math.sin(0.0125*AO.inc)))}if(AO.x<-B){AV()}AO.style.left=AO.x+"px";AO.style.top=AO.y+"px"},"2":function(){AO.x-=Math.cos(AO.radians)*AO.speed;AO.y-=Math.sin(AO.radians)*AO.speed;if((AO.x<-B)||(AO.y>AH)){AV()}AO.style.left=AO.x+"px";AO.style.top=AO.y+"px"}};var AR=function(){return{x:AO.x,y:AO.y,x2:(AO.x+B),y2:(AO.y+B)}};var AX=function(){return AQ};var AT=function(){return AW};var AS=function(){AW=false;AO.style.background="url("+Y.imgUrl+"explode.gif)";P("ufoDie");C.add(AO.score);setTimeout(AV,900)};var AP=function(){AY[AO.movement]()};var AN=function(Aa,Ab){Ab=Ab||{};AQ=true;AW=true;AO.extra=Ab.extra;AO.movement=Ab.movement||j;AO.speed=Ab.speed||u(1,3);AO.stage=1;AO.x=Ab.x||(H-B);AO.y=Ab.y||u(0,(AH-m));AU=Aa;switch(AO.movement){case M:AO.inc=0;AO.speed=Ab.speed||u(1,2);AO.yStart=AO.y;break;case A:AO.radians=((u(225,315)*Math.PI)/180);AO.speed=Ab.speed||u(3,5);AO.x=(H/2)-u(-B,B);AO.y=-m;break}switch(Aa){case"bogey":AO.score=20;break;case"bomber":AO.score=15;break;case"ds":AO.score=25;break;case"meteor":AO.score=50;break}AK(AO,{background:"url(ufo_"+AU+".gif)",left:AO.x+"px",top:AO.y+"px",position:"absolute",width:B+"px",height:m+"px",zIndex:"2"});AO.show()};var AV=function(){AQ=false;AW=false;AO.hide();a.numUfos--};AZ();return{getCoords:AR,isActive:AX,isAlive:AT,kill:AS,move:AP,start:AN,stop:AV}};return{init:AI}}()