$(function(){function t(t){this.slideAmout=t.data.length,this.currentSlide=t.currentSlide||0,this.slider=$(t.slider),this.nextBtn=$(t.nextBtn),this.prevBtn=$(t.prevBtn),this.name=$(t.nameContainer),this.link=$(t.linkContainer),this.place=$(t.placeContainer),this.slideClass=t.slideClass,this.visibleClass=t.visibleClass,this.data=t.data,this.init()}function i(){this.controlTabs=$(".tabs"),this.tabsContent=$(".tabs-content"),this.init()}function e(t){this.parent=t.parent,this.submenu=t.submenu,this.time=t.time,this.__hideId,this.init()}function s(t){this.form=$(t.form),this.input=t.input,this.className=t.className,this.init()}t.prototype.init=function(){this.prevBtn.on("click",this.onPrevBtnClick.bind(this)),this.nextBtn.on("click",this.onNextBtnClick.bind(this)),this.changeSlide()},t.prototype.changeSlide=function(){var t=this.data[this.currentSlide];this.name.html(t.name),this.link.html(t.link),this.place.html(t.place),$("."+this.visibleClass).removeClass(this.visibleClass),this.slider.find('[data-index="'+this.currentSlide+'"]').addClass(this.visibleClass)},t.prototype.onNextBtnClick=function(){this.currentSlide=(this.currentSlide+1)%this.slideAmout,this.changeSlide()},t.prototype.onPrevBtnClick=function(){this.currentSlide=(this.currentSlide+1)%this.slideAmout,this.changeSlide()},new t({nextBtn:".slider__btn_next",prevBtn:".slider__btn_prev",nameContainer:".slider__name",linkContainer:".slider__link",placeContainer:".slider__place",visibleClass:"slider__item_visible",slider:".slider",currentSlide:0,data:[{name:"Spider man",link:"from 42k",place:"in New York, USA"},{name:"Lake house",link:"from 123",place:"New Jersey, USA"}]}),i.prototype.init=function(){this.controlTabs.on("click",".tabs__item",this.onTapClick.bind(this))},i.prototype.onTapClick=function(t){console.log(t.target);var i=$(t.target);i.hasClass("tabs__item_selected")||($(".tabs__item_selected").removeClass("tabs__item_selected"),i.addClass("tabs__item_selected"),this.changeTabContent(+i.data("id")))},i.prototype.changeTabContent=function(t){$(".tab_show").removeClass("tab_show"),$(this.tabsContent.children(".tab")[t]).addClass("tab_show")},new i,e.prototype.init=function(){$(this.parent).on("mouseenter",this.onMouseEnter.bind(this)),$(this.parent).on("mouseleave",this.onMouseLeave.bind(this)),$(this.submenu).on("mouseenter",this.onMouseEnter.bind(this)),$(this.submenu).on("mouseleave",this.onMouseLeave.bind(this))},e.prototype.show=function(){$(this.submenu).removeClass(this.submenu.slice(1)+"_hide")},e.prototype.hide=function(){$(this.submenu).addClass(this.submenu.slice(1)+"_hide")},e.prototype.onMouseEnter=function(){clearTimeout(this.__hideId),this.show()},e.prototype.onMouseLeave=function(){this.__hideId=setTimeout(this.hide.bind(this),this.time)},new e({parent:".menu__submenu",submenu:".submenu",time:700}),s.prototype.init=function(){this.form.on("blur",this.input,this.onInputBlur.bind(this))},s.prototype.onInputBlur=function(t){var i=t.target;$(i).addClass(this.className)},new s({form:".form",input:".field__input",className:"field_required"})});