"use strict";
n("781738");
var r = String.prototype.replace,
  a = /%20/g,
  i = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
  };
e.exports = {
  default: i.RFC3986,
  formatters: {
    RFC1738: function(e) {
      return r.call(e, a, "+")
    },
    RFC3986: function(e) {
      return String(e)
    }
  },
  RFC1738: i.RFC1738,
  RFC3986: i.RFC3986
}