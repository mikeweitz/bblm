;(function(App, Backbone, _, $){

//
// Home Page
//
App.HomeView = Backbone.Layout.extend({
    
    el: '#content',

    template: 'home',
    
    events: {
        'click .link' : 'onClick'
    },

    serialize: function() {
        log('Serialize Home View', this.options);
        if(this.options && this.options.page){
            // this.template = App.device+'/home';
            // return { name: _.clone(this.options.name) };
            // log(Vik.data[this.options.page]);
            return App.data[this.options.page];
        }
    },

    beforeRender: function() {
        log('Before Render Home View');
    },

    initialize: function(options) {
        this.constructor.__super__.initialize.apply(this, [options])
        log('Home View initialized');
        this.render();
    },

    afterRender: function(){
        log('section rendered...', this.$el.selector);
        App.vent.trigger('sectionLoaded', this.$el.selector)
    },

    destroy_view: function() {
        log(this.$el);

        // remove 'loaded' class
        this.$el.removeClass('loaded')

        //COMPLETELY UNBIND THE VIEW
        this.undelegateEvents();

        this.$el.removeData().unbind(); 

        //Remove view from DOM
        // this.remove();
        this.$el.html('');
        //Backbone.View.prototype.remove.call(this);

        // if swiper, destroy it
        if (this.slider) {
            this.slider.destroy();
        }

    },

    onClick: function( event ) {
        var $a = jQuery(event.currentTarget),
            index = this.$el.find('a').index($a);
        log('click on: ', $a);

        // HA.scrollTo({index: index});

        // uncomment this row to make it work!
        // appRouter.navigate('/');
        
    }

});


})( App = window.App || {}, Backbone, _, jQuery)
