;(function(App, Backbone, _, $){

	window.AppRouter = Backbone.Router.extend({

		routes: {
			'': 'index',
			'index.html': 'index',
			// 'the-experience': 'experience',
			// ':level': 'blockGrid', // Matches http://example.com/#six
			'!/:section(/:subsection)': 'getPage',
			':section(/:subsection)': 'reRoute',
			//,'*actions': 'notFound' // Matches http://example.com/#anything-here
		},

	  initialize: function() {
	  	// this.listenTo( Backbone, 'page-transition', this.animate );
			var section = _.last( parent.location.hash.substr(1).split('/'));
			
			//force = (section == '') ? false : true;
			section = (section == '') ? 'home' : section;
			log('Router initialize - load at: ' + section);
	  },


		// home : function() {
		// 	log('home')
		// },

		// defaultAction : function( action ) {
		// 	log('default', action)
		// },

		index: function(){
			log('index route');
			var args = {page: 'home'};
			App.vent.trigger('loadPage', args)
		},

		// Enforce use of hash-bang on routes
		reRoute: function(section, subsection){
			route = '#!/'+section;
			route += (subsection && typeof subsection !== 'undefined') ? '/'+subsection : '';
			window.location.hash = route;
		},

		notFound: function(){
			var args = {page: 'err404'};
			App.vent.trigger('loadPage', args)
		},

		getPage: function(section, subsection){
	 		log('get page', section);
			var args = {page: section};
			if(subsection && typeof subsection !== 'undefined'){
				args.subsection = subsection;
			}
			App.vent.trigger('loadPage', args)
		}


	});

})( App = window.App || {}, Backbone, _, jQuery);