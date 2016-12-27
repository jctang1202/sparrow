define(
  [
    "router",
    "handlebars",
    "http",
    "text!snippets/login/raw.html",
    "libraries/plugin/iCheck/icheck.js",
    "css!libraries/plugin/iCheck/square/blue.css"
  ],
  function (Router, Handlebars, Http, Html) {

    var Model = Backbone.Model.extend({
      initialize: function () {},
      auth: function () {
        Http.fetch({
            url: "/login",
            method: "post"
          })
          .then(function (data) {
            if (Http.verify(data, 200)) {
              this.set(data);
              Backbone.history.navigate("layout/dashboard", {
                trigger: true
              });
              sessionStorage.setItem(
                "login", data
              );
            } else {
              Backbone.history.navigate("login", {
                trigger: true
              });
            }
          }.bind(this));
      }
    });

    var View = Backbone.View.extend({
      el: "#app",
      template: Handlebars.compile(Html),
      events: {
        "input": "checked",
        "click .btn": "login"
      },
      render: function () {
        var node = this.$el.html(this.template());
        node.find("input").iCheck({
          checkboxClass: "icheckbox_square-blue",
          radioClass: "iradio_square-blue"
        });
        return this;
      },
      login: function () {
        var login = new Model();
        login.auth();
      }
    });

    return View;
  }
);