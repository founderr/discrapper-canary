"use strict";
n.r(t), n.d(t, {
  getRedirectPath: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var s = n("266067"),
  l = n("860911"),
  i = n("981631"),
  r = n("188785");

function o() {
  let e = location.pathname + location.search;
  return r.CONFERENCE_MODE_ENABLED ? i.Routes.REGISTER : (0, l.getLoginPath)(e, !1)
}
t.default = function() {
  return (0, a.jsx)(s.Redirect, {
    to: o()
  })
}