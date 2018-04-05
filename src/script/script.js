$(function () {

    function Slider(opt) {
        this.slideAmout = opt.data.length;
        this.currentSlide = opt.currentSlide || 0;
        this.slider = $(opt.slider);
        this.nextBtn = $(opt.nextBtn);
        this.prevBtn = $(opt.prevBtn);
        this.name = $(opt.nameContainer);
        this.link = $(opt.linkContainer);
        this.place = $(opt.placeContainer);
        this.slideClass = opt.slideClass;
        this.visibleClass = opt.visibleClass;
        this.data = opt.data;
        this.init();
    }

    Slider.prototype.init = function () {
        this.prevBtn.on('click', this.onPrevBtnClick.bind(this));
        this.nextBtn.on('click', this.onNextBtnClick.bind(this));
        this.changeSlide();
    };

    Slider.prototype.changeSlide = function () {
        var data = this.data[this.currentSlide];
        this.name.html(data.name);
        this.link.html(data.link);
        this.place.html(data.place);
        $('.' + this.visibleClass).removeClass(this.visibleClass);
        this.slider.find('[data-index="'+ this.currentSlide + '"]').addClass(this.visibleClass);
    };

    Slider.prototype.onNextBtnClick = function () {
        this.currentSlide = (this.currentSlide + 1) % this.slideAmout;
        this.changeSlide();
    };

    Slider.prototype.onPrevBtnClick = function () {
        this.currentSlide = (this.currentSlide + 1) % this.slideAmout;
        this.changeSlide();
    };

    new Slider({
        nextBtn: '.slider__btn_next',
        prevBtn: '.slider__btn_prev',
        nameContainer: '.slider__name',
        linkContainer: '.slider__link',
        placeContainer: '.slider__place',
        visibleClass: 'slider__item_visible',
        slider: '.slider',
        currentSlide: 0,
        data: [
            {name: 'Spider man', link: 'from 42k', place: 'in New York, USA'},
            {name: 'Lake house', link: 'from 123', place: 'New Jersey, USA'}
        ]
    });

    function Tab() {
        this.controlTabs = $('.tabs');
        this.tabsContent = $('.tabs-content');
        this.init();
    }

    Tab.prototype.init = function () {
        this.controlTabs.on('click', '.tabs__item', this.onTapClick.bind(this));
    };

    Tab.prototype.onTapClick = function (e) {
        console.log(e.target);
        var target = $(e.target);
        if (!target.hasClass('tabs__item_selected')) {
            $('.tabs__item_selected').removeClass('tabs__item_selected');
            target.addClass('tabs__item_selected');
            this.changeTabContent(+target.data('id'));
        }
    };

    Tab.prototype.changeTabContent = function (index) {
        $('.tab_show').removeClass('tab_show');
        $(this.tabsContent.children('.tab')[index]).addClass('tab_show');
    };
    new Tab();

    function Submenu(opt) {
        this.parent = opt.parent;
        this.submenu = opt.submenu;
        this.time = opt.time;
        this.__hideId;
        this.init();
    }

    Submenu.prototype.init = function () {
        $(this.parent).on('mouseenter', this.onMouseEnter.bind(this));
        $(this.parent).on('mouseleave', this.onMouseLeave.bind(this));
        $(this.submenu).on('mouseenter', this.onMouseEnter.bind(this));
        $(this.submenu).on('mouseleave', this.onMouseLeave.bind(this));
    };

    Submenu.prototype.show = function () {
        $(this.submenu).removeClass(this.submenu.slice(1) + '_hide');
    };

    Submenu.prototype.hide = function () {
        $(this.submenu).addClass(this.submenu.slice(1) + '_hide');
    };

    Submenu.prototype.onMouseEnter = function () {
        clearTimeout(this.__hideId);
        this.show();
    };

    Submenu.prototype.onMouseLeave = function () {
        this.__hideId = setTimeout(this.hide.bind(this), this.time);
    };

    new Submenu({parent: '.menu__submenu', submenu: '.submenu', time: 700});
    /*parent - событие которые вызывает меню
     submenu само меню
     time время до исчезновения
     */

    function Contacts(obj) {
        this.form = $(obj.form);
        this.input = obj.input;
        this.className = obj.className;
        this.init();
    }

    Contacts.prototype.init = function () {
        this.form.on('blur', this.input, this.onInputBlur.bind(this));
    };

    Contacts.prototype.onInputBlur = function (e) {
        var target = e.target;
        $(target).addClass(this.className);
    };

    new Contacts({form: '.form', input: '.field__input', className: 'field_required'});
});