$(function(){
	var liquor={
		init:function(){
			$('.head-container').load('head.html',function(){
				$.getScript('js/head.js')
			});
			$('.foot-container').load('foot.html');
		},
	};
	liquor.init();
	var lunbo={
		slide:$('.slide'),
		swrapper:$('.slide-wrapper'),
		items:$('.items'),
		scontrols:$('.slide-controls'),
		cwrapper:$('.circle-wrapper'),
		now:0,
		next:0,
		content:'',
		circle:null,
		timer:null,
		init:function(){
			this.items.first().css({'display':'block'});
			for(var i=0;i<this.items.length;i++){
				this.content+='<span class="circle" data-id="'+i+'"></span>'
			}
			this.cwrapper.html(this.content);
			this.circle=this.cwrapper.find('.circle');
			this.circle.first().addClass('cir-active');
			this.autoplay();
			this.hover();
			this.follow();
		},
		autoplay:function(){
			var that=this;
			this.timer=setInterval(function(){
				that.next++;
				that.next%=that.items.length;
				that.imgSwitch();
			},2000);
		},
		imgSwitch:function(){
			console.log(this.next);
			this.items.eq(this.now).fadeOut();
			this.items.eq(this.next).fadeIn();
			this.circle.eq(this.next).siblings().removeClass('cir-active');
			this.circle.eq(this.next).addClass('cir-active');
			this.now=this.next;
		},
		hover:function(){
			var that=this;
			this.slide.hover(function(){
				clearInterval(that.timer);
			},function(){
				that.autoplay();
			})
		},
		follow:function(){
			var that=this;
			this.cwrapper.click(function(e){
				if($(e.target).is('SPAN')){
					that.next=$(e.target).attr('data-id')
				};
				that.imgSwitch();
			})
		},
	}
	lunbo.init();
});