function winload()
{
huashuolayer2.style.top=135;
huashuolayer2.style.left=5;
huashuolayer3.style.top=135;
huashuolayer3.style.right=5;
}
	var delta=0.15
	var collection;
	function floaters() {
		this.items	= [];
		this.addItem	= function(id,x,y,content)
				  {
					document.write('<DIV id='+id+' style="Z-INDEX: 10; POSITION: absolute;  width:80px; height:60px;left:'+(typeof(x)=='string'?eval(x):x)+';top:'+(typeof(y)=='string'?eval(y):y)+'">'+content+'</DIV>');
					
					var newItem				= {};
					newItem.object			= document.getElementById(id);
					newItem.x				= x;
					newItem.y				= y;

					this.items[this.items.length]		= newItem;
				  }
		this.play	= function()
				  {
					collection				= this.items
					setInterval('play()',10);
				  }
		}
		function play()
		{
			if(screen.width<800)
			{
				for(var i=0;i<collection.length;i++)
				{
					collection[i].object.style.display	= 'none';
				}
				return;
			}
			for(var i=0;i<collection.length;i++)
			{
				var followObj		= collection[i].object;
				var followObj_x		= (typeof(collection[i].x)=='string'?eval(collection[i].x):collection[i].x);
				var followObj_y		= (typeof(collection[i].y)=='string'?eval(collection[i].y):collection[i].y);

				if(followObj.offsetLeft!=(document.body.scrollLeft+followObj_x)) {
					var dx=(document.body.scrollLeft+followObj_x-followObj.offsetLeft)*delta;
					dx=(dx>0?1:-1)*Math.ceil(Math.abs(dx));
					followObj.style.left=followObj.offsetLeft+dx;
					}

				if(followObj.offsetTop!=(document.body.scrollTop+followObj_y)) {
					var dy=(document.body.scrollTop+followObj_y-followObj.offsetTop)*delta;
					dy=(dy>0?1:-1)*Math.ceil(Math.abs(dy));
					followObj.style.top=followObj.offsetTop+dy;
					}
				followObj.style.display	= '';
			}
		}	
		
	var theFloaters		= new floaters();
	theFloaters.addItem('huashuolayer2','document.body.clientWidth-106',160,'<object classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0 width=100 height=300 id=nowad><param name=movie value=fla/ad.swf><param name=quality value=high><param name=wmode value=transparent><embed src=fla/ad.swf quality=high pluginspage=http://www.macromedia.com/go/getflashplayer wmode=transparent type=application/x-shockwave-flash width=100 height=300></embed></object>');
	theFloaters.addItem('huashuolayer3',6,160,'<object classid=clsid:D27CDB6E-AE6D-11cf-96B8-444553540000 codebase=http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0 width=100 height=300 id=nowad><param name=movie value=swf/ad.swf><param name=quality value=high><<param name=wmode value=transparent><embed src=fla/ad.swf quality=high pluginspage=http://www.macromedia.com/go/getflashplayer wmode=transparent type=application/x-shockwave-flash width=100 height=300></embed></object>');
	theFloaters.play();
