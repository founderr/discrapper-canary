"use strict";
s.r(t), s.d(t, {
  UserLinkPendingRequestRow: function() {
    return g
  }
});
var n = s("735250"),
  a = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("399606"),
  o = s("481060"),
  u = s("594174"),
  d = s("263704"),
  c = s("465670"),
  E = s("880257"),
  f = s("631885"),
  _ = s("933970"),
  h = s("340453"),
  m = s("292352"),
  C = s("689938"),
  T = s("999593");

function g(e) {
  let {
    user: t
  } = e, l = (0, E.default)(), g = (0, f.useHasMaxConnections)(), p = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), A = a.useCallback(() => {
    i()(void 0 !== p, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("59716")]).then(s.bind(s, "275370"));
      return s => (0, n.jsx)(e, {
        ...s,
        currentUser: p,
        otherUser: t
      })
    })
  }, [p, t]), N = a.useCallback(() => {
    i()(void 0 !== p, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("958")]).then(s.bind(s, "4526"));
      return s => (0, n.jsx)(e, {
        ...s,
        currentUser: p,
        otherUser: t
      })
    })
  }, [p, t]), S = a.useCallback(() => {
    i()(void 0 !== p, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("69015")]).then(s.bind(s, "247265"));
      return s => (0, n.jsx)(e, {
        ...s,
        currentUser: p,
        otherUser: t
      })
    })
  }, [p, t]);
  return (0, n.jsxs)("div", {
    className: T.container,
    children: [(0, n.jsx)("div", {
      className: T.details,
      children: (0, n.jsx)(h.default, {
        otherUser: t,
        status: m.UserLinkStatus.PENDING
      })
    }), (0, n.jsx)("div", {
      className: T.actions,
      children: l ? (0, n.jsx)(_.default, {
        icon: c.default,
        className: T.__invalid_actionDeny,
        tooltip: C.default.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
        onClick: S
      }) : (0, n.jsxs)(n.Fragment, {
        children: [g ? null : (0, n.jsx)(_.default, {
          icon: d.default,
          className: T.__invalid_actionAccept,
          tooltip: C.default.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: A
        }), (0, n.jsx)(_.default, {
          icon: c.default,
          className: T.__invalid_actionDeny,
          tooltip: C.default.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: N
        })]
      })
    })]
  })
}