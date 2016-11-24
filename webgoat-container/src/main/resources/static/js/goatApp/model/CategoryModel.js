define(['jquery',
        'underscore',
        'backbone',
        'goatApp/model/HTMLContentModel'],
    function($,
             _,
             Backbone,
             HTMLContentModel){

        return HTMLContentModel.extend({
            urlRoot:null,
            defaults: {
                items:null,
                selectedItem:null
            },

            initialize: function (options) {

            },

            loadData: function(options) {
                this.urlRoot = _.escape(encodeURIComponent(options.name));

                var self = this;
                this.fetch().done(function(data) {
                    self.setContent(data);
                });
            },

            setContent: function(content) {
                this.set('content',content);
                this.trigger('content:loaded', this);
            },

            fetch: function (options) {
                options = options || {};
                // return static page that has been loaded
                // google on backbone return static page to find info
                return Backbone.Model.prototype.fetch.call(this, _.extend({ dataType: "html" }, options));
                //return "<h1>OH HAI!</h1>";
            }
        });
    });
