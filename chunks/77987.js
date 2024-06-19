n.d(t, {
  e: function() {
    return o
  }
});
var i = n(735250);
n(470079);
var s = n(314897),
  l = n(449934),
  a = n(857458),
  r = n(981631);

function o(e, t) {
  var n, o;
  let c = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    passProps: !0
  };

  function u(n) {
    if (!(0, l.$8)() && s.default.getLoginStatus() !== r.u34.LOGGING_IN && s.default.allowLogoutRedirect()) return null != t ? (0, i.jsx)(t, {
      renderRedirect: (0, i.jsx)(a.Z, {})
    }) : (0, i.jsx)(a.Z, {});
    return (0, i.jsx)(e, {
      ...c.passProps ? n : null
    })
  }
  return u.displayName = "Authenticated(".concat(null !== (o = null !== (n = e.displayName) && void 0 !== n ? n : e.name) && void 0 !== o ? o : "<Unknown>", ")"), u
}