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
	};
	lunbo.init();
	var banneR={
		bannerR:$('.small-banner a'),
		init:function(){
			this.leftmove();
		},
		leftmove:function(){
			this.bannerR.hover(function(){
				$(this).stop(true).animate({
					'right':'130px'
				});
			},function(){
				$(this).stop(true).animate({
					'right':'120px'
				});
			});
		}
	};
	banneR.init();
	var renqi={
		pBox:$('.renqi ul li'),
		pic:$('.renqi ul li a'),
		init:function(){
			this.hover();
		},
		hover:function(){
			var that=this;
			this.pBox.hover(function(){
				$(this).find('a').stop(true).animate({
					'margin-left':'-5px'
				})
			},function(){
				$(this).find('a').stop(true).animate({
					'margin-left':0
				})
			})
		},
	};
	renqi.init();
	var huadong={
		prev:$('.prev'),
		next:$('.next'),
		brandWrap:$('.brand-wrap'),
		zu:$('.brand-wrap ul'),
		index:0,
		init:function(){
			console.log(this.zu);
			this.hua();
		},
		hua:function(){
			var that=this;
			this.prev.click(function(){
				that.index--;
				if(that.index<0){
					that.index=that.zu.length-1;
				};
				that.brandWrap.stop(true).animate({
				marginLeft:-1*that.index*(that.zu.width()+15)
				});
			});
			this.next.click(function(){
				that.index++;
				that.index%=that.zu.length;
				that.brandWrap.stop(true).animate({
				marginLeft:-1*that.index*(that.zu.width()+15)
				})
			});
		},
	};
	huadong.init();
});