$(function(){
	var head={
		rsm:$(".right-side-menu"),
		user:$(".user"),
		cart:$(".cart"),
		asset:$(".asset"),
		atGoods:$(".at-goods"),
		history:$(".history"),
		custom:$(".customer"),
		menuBot:$(".menu-bot"),
		init:function(){
			this.showtag();
		},
		showtag:function(){
			var that=this;
			this.rsm.find('li').hover(function(){
				$(this).find('span').show().stop(true).animate({"right":40,"opacity":1},300)
			},function(){
				$(this).find('span').stop(true).animate({"right":60,"opacity":0},300,function(){
					$(this).find('span').hide()
				})
			});
		},
	};
	head.init();
})
