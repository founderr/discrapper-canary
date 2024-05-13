"use strict";
n.r(t), n.d(t, {
  makeAuthenticated: function() {
    return o
  }
});
var a = n("735250");
n("470079");
var s = n("314897"),
  i = n("449934"),
  l = n("857458"),
  r = n("981631");

function o(e, t) {
  var n, o;
  let u = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    passProps: !0
  };

  function d(n) {
    if (!(0, i.isAuthenticated)() && s.default.getLoginStatus() !== r.LoginStates.LOGGING_IN && s.default.allowLogoutRedirect()) return null != t ? (0, a.jsx)(t, {
      renderRedirect: (0, a.jsx)(l.default, {})
    }) : (0, a.jsx)(l.default, {});
    return (0, a.jsx)(e, {
      ...u.passProps ? n : null
    })
  }
  return d.displayName = "Authenticated(".concat(null !== (o = null !== (n = e.displayName) && void 0 !== n ? n : e.name) && void 0 !== o ? o : "<Unknown>", ")"), d
}