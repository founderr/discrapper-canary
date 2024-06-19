n.d(t, {
  B: function() {
    return l
  }
});
var a = n(735250);
n(470079);
var r = n(69580),
  o = n(944844),
  s = n(553669);

function l(e) {
  let {
    data: t,
    onDenied: n,
    onError: l,
    onSuccess: u
  } = e, i = (0, o.t)(t, n, l, u);
  return (0, a.jsx)("div", {
    className: s.content,
    children: (0, a.jsx)(r.OAuth2Authorize, {
      clientId: t.clientId,
      scopes: t.scopes,
      showLogout: !0,
      isTrustedName: !0,
      callbackWithoutPost: i
    })
  })
}