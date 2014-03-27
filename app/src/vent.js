;(function(App, Backbone, _, $){
	//
	// Event Aggregator
	//
	App.vent = _.extend({}, Backbone.Events)

	log('event aggregator', App)
	App.vent.on("loadPage", function( args ){

        $('body').removeClass(function (index, css) {
            return (css.match (/\bpage-\S+/g) || []).join(' ');
        }).addClass('page-'+args.page);

		log('vent - load page: ', args);

		var section = subsection = false;


		if(App.views.hasOwnProperty('content')){
			App.views.content.destroy_view();
		};
        switch (args.page) {
            case 'home':
            App.views.content = new App.HomeView({ page: args.page });
            break;

            default:
            App.views.content = new App.ErrorView({ page: '404' });
            break;

    	};

    	App.track.page({section: section, subsection: subsection});

    });

})( App = window.App || {}, Backbone, _, jQuery);