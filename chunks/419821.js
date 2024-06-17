"use strict";
s.r(t), s.d(t, {
  UserLinkAcceptedRequestRow: function() {
    return m
  }
});
var n = s("735250"),
  a = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("399606"),
  o = s("481060"),
  u = s("594174"),
  d = s("465670"),
  c = s("933970"),
  E = s("340453"),
  f = s("292352"),
  _ = s("689938"),
  h = s("999593");

function m(e) {
  let {
    user: t
  } = e, l = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), m = a.useCallback(() => {
    i()(void 0 !== l, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("50872")]).then(s.bind(s, "442673"));
      return s => (0, n.jsx)(e, {
        ...s,
        currentUser: l,
        otherUser: t
      })
    })
  }, [l, t]);
  return (0, n.jsxs)("div", {
    className: h.container,
    children: [(0, n.jsx)("div", {
      className: h.details,
      children: (0, n.jsx)(E.default, {
        otherUser: t,
        status: f.UserLinkStatus.ACTIVE
      })
    }), (0, n.jsx)("div", {
      className: h.actions,
      children: (0, n.jsx)(c.default, {
        icon: d.default,
        className: h.__invalid_actionDeny,
        tooltip: _.default.Messages.FAMILY_CENTER_LINK_ACTION_DISCONNECT,
        onClick: m
      })
    })]
  })
}