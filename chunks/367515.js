"use strict";
a.r(t), a.d(t, {
  UserLinkPendingRequestRow: function() {
    return p
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("512722"),
  i = a.n(l),
  r = a("399606"),
  o = a("481060"),
  u = a("594174"),
  d = a("263704"),
  c = a("465670"),
  f = a("880257"),
  E = a("631885"),
  h = a("933970"),
  _ = a("340453"),
  C = a("292352"),
  m = a("689938"),
  S = a("382385");

function p(e) {
  let {
    user: t
  } = e, l = (0, f.default)(), p = (0, E.useHasMaxConnections)(), I = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), T = s.useCallback(() => {
    i()(void 0 !== I, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("59716")]).then(a.bind(a, "275370"));
      return a => (0, n.jsx)(e, {
        ...a,
        currentUser: I,
        otherUser: t
      })
    })
  }, [I, t]), g = s.useCallback(() => {
    i()(void 0 !== I, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("958")]).then(a.bind(a, "4526"));
      return a => (0, n.jsx)(e, {
        ...a,
        currentUser: I,
        otherUser: t
      })
    })
  }, [I, t]), A = s.useCallback(() => {
    i()(void 0 !== I, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([a.e("99387"), a.e("69015")]).then(a.bind(a, "247265"));
      return a => (0, n.jsx)(e, {
        ...a,
        currentUser: I,
        otherUser: t
      })
    })
  }, [I, t]);
  return (0, n.jsxs)("div", {
    className: S.container,
    children: [(0, n.jsx)("div", {
      className: S.details,
      children: (0, n.jsx)(_.default, {
        otherUser: t,
        status: C.UserLinkStatus.PENDING
      })
    }), (0, n.jsx)("div", {
      className: S.actions,
      children: l ? (0, n.jsx)(h.default, {
        icon: c.default,
        className: S.__invalid_actionDeny,
        tooltip: m.default.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
        onClick: A
      }) : (0, n.jsxs)(n.Fragment, {
        children: [p ? null : (0, n.jsx)(h.default, {
          icon: d.default,
          className: S.__invalid_actionAccept,
          tooltip: m.default.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: T
        }), (0, n.jsx)(h.default, {
          icon: c.default,
          className: S.__invalid_actionDeny,
          tooltip: m.default.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: g
        })]
      })
    })]
  })
}