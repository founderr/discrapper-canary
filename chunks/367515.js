"use strict";
s.r(t), s.d(t, {
  UserLinkPendingRequestRow: function() {
    return g
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("399606"),
  u = s("481060"),
  o = s("594174"),
  d = s("263704"),
  c = s("465670"),
  E = s("880257"),
  _ = s("631885"),
  f = s("933970"),
  h = s("340453"),
  m = s("292352"),
  T = s("689938"),
  C = s("999593");

function g(e) {
  let {
    user: t
  } = e, l = (0, E.default)(), g = (0, _.useHasMaxConnections)(), A = (0, r.useStateFromStores)([o.default], () => o.default.getCurrentUser()), N = n.useCallback(() => {
    i()(void 0 !== A, "User must be logged in to accept a link request"), (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("59716")]).then(s.bind(s, "275370"));
      return s => (0, a.jsx)(e, {
        ...s,
        currentUser: A,
        otherUser: t
      })
    })
  }, [A, t]), p = n.useCallback(() => {
    i()(void 0 !== A, "User must be logged in to decline a link request"), (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("958")]).then(s.bind(s, "4526"));
      return s => (0, a.jsx)(e, {
        ...s,
        currentUser: A,
        otherUser: t
      })
    })
  }, [A, t]), S = n.useCallback(() => {
    i()(void 0 !== A, "User must be logged in to decline a link request"), (0, u.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("69015")]).then(s.bind(s, "247265"));
      return s => (0, a.jsx)(e, {
        ...s,
        currentUser: A,
        otherUser: t
      })
    })
  }, [A, t]);
  return (0, a.jsxs)("div", {
    className: C.container,
    children: [(0, a.jsx)("div", {
      className: C.details,
      children: (0, a.jsx)(h.default, {
        otherUser: t,
        status: m.UserLinkStatus.PENDING
      })
    }), (0, a.jsx)("div", {
      className: C.actions,
      children: l ? (0, a.jsx)(f.default, {
        icon: c.default,
        className: C.__invalid_actionDeny,
        tooltip: T.default.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
        onClick: S
      }) : (0, a.jsxs)(a.Fragment, {
        children: [g ? null : (0, a.jsx)(f.default, {
          icon: d.default,
          className: C.__invalid_actionAccept,
          tooltip: T.default.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: N
        }), (0, a.jsx)(f.default, {
          icon: c.default,
          className: C.__invalid_actionDeny,
          tooltip: T.default.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: p
        })]
      })
    })]
  })
}