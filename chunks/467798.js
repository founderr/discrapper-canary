"use strict";
n.d(t, {
  Z: function() {
    return s
  },
  v: function() {
    return r
  }
});
let i = "@silent",
  r = new RegExp("^".concat(i, "(\\s|$)"));

function s(e) {
  return null == e ? [!1, ""] : null == e.match(r) ? [!1, e] : [!0, e.substring(i.length).trim()]
}