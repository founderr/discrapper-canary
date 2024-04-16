"use strict";
a.r(t), a.d(t, {
  UserLinkAcceptedRequestRow: function() {
    return C
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("512722"),
  i = a.n(l),
  r = a("399606"),
  o = a("481060"),
  u = a("594174"),
  d = a("465670"),
  c = a("933970"),
  f = a("340453"),
  E = a("292352"),
  h = a("689938"),
  _ = a("970962");

function C(e) {
  let {
    user: t
  } = e, l = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), C = s.useCallback(() => {
    i()(void 0 !== l, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("50872")]).then(a.bind(a, "442673"));
      return a => (0, n.jsx)(e, {
        ...a,
        currentUser: l,
        otherUser: t
      })
    })
  }, [l, t]);
  return (0, n.jsxs)("div", {
    className: _.container,
    children: [(0, n.jsx)("div", {
      className: _.details,
      children: (0, n.jsx)(f.default, {
        otherUser: t,
        status: E.UserLinkStatus.ACTIVE
      })
    }), (0, n.jsx)("div", {
      className: _.actions,
      children: (0, n.jsx)(c.default, {
        icon: d.default,
        className: _.__invalid_actionDeny,
        tooltip: h.default.Messages.FAMILY_CENTER_LINK_ACTION_DISCONNECT,
        onClick: C
      })
    })]
  })
}