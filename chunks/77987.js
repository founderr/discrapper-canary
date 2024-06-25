n.d(t, {
  e: function() {
    return u
  }
});
var a = n(735250);
n(470079);
var r = n(314897),
  o = n(449934),
  s = n(857458),
  l = n(981631);

function u(e, t) {
  var n, u;
  let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    passProps: !0
  };

  function c(n) {
    if (!(0, o.$8)() && r.default.getLoginStatus() !== l.u34.LOGGING_IN && r.default.allowLogoutRedirect()) return null != t ? (0, a.jsx)(t, {
      renderRedirect: (0, a.jsx)(s.Z, {})
    }) : (0, a.jsx)(s.Z, {});
    return (0, a.jsx)(e, {
      ...i.passProps ? n : null
    })
  }
  return c.displayName = "Authenticated(".concat(null !== (u = null !== (n = e.displayName) && void 0 !== n ? n : e.name) && void 0 !== u ? u : "<Unknown>", ")"), c
}