define(
  [
    "backbone",
    "handlebars",
    "text!snippets/judgment/upload/view.html"
  ],
  function (Backbone, Handlebars, Html) {
    return Backbone.View.extend({
      id: "upload",
      initialize: function () {

      },
      template: Handlebars.compile(Html),
      events: {

      },
      render: function () {
        this.$el.html(this.template());
        return this;
      }
    });
  }
);