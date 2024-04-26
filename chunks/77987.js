"use strict";
a.r(t), a.d(t, {
  makeAuthenticated: function() {
    return o
  }
});
var n = a("735250");
a("470079");
var s = a("314897"),
  l = a("449934"),
  i = a("857458"),
  r = a("981631");

function o(e, t) {
  var a, o;
  let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    passProps: !0
  };

  function d(a) {
    if (!(0, l.isAuthenticated)() && s.default.getLoginStatus() !== r.LoginStates.LOGGING_IN && s.default.allowLogoutRedirect()) return null != t ? (0, n.jsx)(t, {
      renderRedirect: (0, n.jsx)(i.default, {})
    }) : (0, n.jsx)(i.default, {});
    return (0, n.jsx)(e, {
      ...u.passProps ? a : null
    })
  }
  return d.displayName = "Authenticated(".concat(null !== (o = null !== (a = e.displayName) && void 0 !== a ? a : e.name) && void 0 !== o ? o : "<Unknown>", ")"), d
}