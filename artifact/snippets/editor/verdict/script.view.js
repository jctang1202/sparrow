(function () {
  define([
    "backbone",
    "handlebars",
    "text!snippets/editor/verdict/raw.html",
    "router"
  ], handler);

  function handler(Backbone, Handlebars, Html, Router) {
    return Backbone.View.extend({
      el: "#main",
      template: Handlebars.compile(Html),
      events: {},
      render: function () {
        this.$el.html(this.template());
        return this;
      }
    });
  };

})()