"use strict";
a.r(t), a.d(t, {
  getRedirectPath: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var s = a("266067"),
  l = a("860911"),
  i = a("981631"),
  r = a("188785");

function o() {
  let e = location.pathname + location.search;
  return r.CONFERENCE_MODE_ENABLED ? i.Routes.REGISTER : (0, l.getLoginPath)(e, !1)
}
t.default = function() {
  return (0, n.jsx)(s.Redirect, {
    to: o()
  })
}