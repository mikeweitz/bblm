;(function(App, Backbone, _, $){

    // The Menu View
    // this object handle menu actions and trigger a Router's reset action each time
    // you click to a link.
    //
    // This way you can call the same route multiple times by clicking the same link.
    App.Footer = Backbone.Layout.extend({
        
        el: '#footer',

        template: 'global/footer',

        initialize: function(){
            log('footer initialize');
            this.render();
        }

        //, events: {
        //     'click a' : 'onClick'
        // },
        
        // onClick: function( event ) {
        //     var $a = $(event.currentTarget);
        //     var index = this.$el.find('a').index($a);
        //     // log('click on nav item: ' + index, $a);

        //     // HA.scrollTo({index: index});

        //     // uncomment this row to make it work!
        //     // appRouter.navigate('/');
            
        // }

    });

})( App = window.App || {}, Backbone, _, jQuery);