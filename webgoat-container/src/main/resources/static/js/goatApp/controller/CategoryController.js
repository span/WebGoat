define(['jquery',
        'underscore',
        'libs/backbone',
        'goatApp/model/CategoryModel',
        'goatApp/view/CategoryView'
    ],
    function($,
             _,
             Backbone,
             CategoryModel

    ) {
        'use strict'

        var Controller = function(options) {

            _.extend(Controller.prototype,Backbone.Events);

            this.categoryModel = new CategoryModel();
            this.categoryView = options.categoryView;

            this.start = function() {
                this.listenTo(this.categoryModel, 'content:loaded', this.onContentLoaded);
            };


            this.loadCategory = function(name, pageNum) {
                if (this.name === name) {
                    return;
                }

                this.categoryModel.loadData({
                    'name': name
                });

                this.name = name;
            };

            this.onContentLoaded = function(data) {
                // Receive some data
                // Render
                this.categoryView.model = this.model;
                this.categoryView.render();
            };

        };

        return Controller;
});
