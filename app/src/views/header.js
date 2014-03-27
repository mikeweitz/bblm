;(function(App, Backbone, _, $){


// The Menu View
// this object handle menu actions and trigger a Router's reset action each time
// you click to a link.
//
// This way you can call the same route multiple times by clicking the same link.
App.Header = Backbone.Layout.extend({
    
    el: '#header',

    template: 'global/header',
    
    initialize: function(){
        log('header initialize');
        this.render();
    }, 
    events: {
        'click .menu' : 'toggleNav',
        'click a' : 'hideNav',
    },

    toggleNav: function( event ) {
        log(arguments);
        // if ( (arguments[1] == 'left') && !jQuery('body').hasClass('navPush') || 
        //      (arguments[1] == 'right') && jQuery('body').hasClass('navPush') ) {
        //     log('swipe direction inorrect')
        //     return false;
        // }
            
        log('toggle nav', event);
        $('body').toggleClass('navPush');
    },

    hideNav: function(event){
        $('body').removeClass('navPush');
    }

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