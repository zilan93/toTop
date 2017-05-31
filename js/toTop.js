(function($,document,window) {
	function toTopFun(obj,options) {
		this.obj = obj;
		this.$obj = $(obj);
		this.$window = $(window);
		this.defaultOpt = {
			"pos": 500,
			"time": 300,
			"right": "15px",
			"bottom": "65px"
		};
		this.opt = $.extend({},this.defaultOpt,options);
		this.init();
	};
	toTopFun.prototype.init = function() {
		this.$obj.css({
			"right": this.opt.right,
			"bottom": this.opt.bottom
		});
		this.listenEvent();
	},
	toTopFun.prototype.listenEvent = function() {
		var self = this;
		this.$window.on("scroll",function() {
			var scrollHei = document.body.scrollTop || document.documentElement.scrollTop;
			scrollHei >= self.opt.pos ? self.$obj.fadeIn() : self.$obj.fadeOut();
		});
		this.$obj.on("click",function() {
			$("html,body").animate({
				"scrollTop":0
			},1000);
		});
	}
	$.fn.toTop = function(options) {
		return this.each(function() {
			new toTopFun(this,options);
		})
	}
})(jQuery,document,window);