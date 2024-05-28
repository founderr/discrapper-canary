"use strict";
s.r(t), s.d(t, {
  UserLinkAcceptedRequestRow: function() {
    return m
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("399606"),
  u = s("481060"),
  o = s("594174"),
  d = s("465670"),
  c = s("933970"),
  E = s("340453"),
  _ = s("292352"),
  f = s("689938"),
  h = s("999593");

function m(e) {
  let {
    user: t
  } = e, l = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUser()), m = n.useCallback(() => {
    i()(void 0 !== l, "User must be logged in to accept a link request"), (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("50872")]).then(s.bind(s, "442673"));
      return s => (0, a.jsx)(e, {
        ...s,
        currentUser: l,
        otherUser: t
      })
    })
  }, [l, t]);
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsx)("div", {
      className: h.details,
      children: (0, a.jsx)(E.default, {
        otherUser: t,
        status: _.UserLinkStatus.ACTIVE
      })
    }), (0, a.jsx)("div", {
      className: h.actions,
      children: (0, a.jsx)(c.default, {
        icon: d.default,
        className: h.__invalid_actionDeny,
        tooltip: f.default.Messages.FAMILY_CENTER_LINK_ACTION_DISCONNECT,
        onClick: m
      })
    })]
  })
}