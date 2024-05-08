"use strict";
n.r(t), n.d(t, {
  UserLinkPendingRequestRow: function() {
    return p
  }
});
var a = n("735250"),
  s = n("470079"),
  i = n("512722"),
  l = n.n(i),
  r = n("399606"),
  o = n("481060"),
  u = n("594174"),
  d = n("263704"),
  c = n("465670"),
  f = n("880257"),
  E = n("631885"),
  h = n("933970"),
  _ = n("340453"),
  C = n("292352"),
  m = n("689938"),
  S = n("382385");

function p(e) {
  let {
    user: t
  } = e, i = (0, f.default)(), p = (0, E.useHasMaxConnections)(), I = (0, r.useStateFromStores)([u.default], () => u.default.getCurrentUser()), g = s.useCallback(() => {
    l()(void 0 !== I, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("59716")]).then(n.bind(n, "275370"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: I,
        otherUser: t
      })
    })
  }, [I, t]), T = s.useCallback(() => {
    l()(void 0 !== I, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("958")]).then(n.bind(n, "4526"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: I,
        otherUser: t
      })
    })
  }, [I, t]), A = s.useCallback(() => {
    l()(void 0 !== I, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("69015")]).then(n.bind(n, "247265"));
      return n => (0, a.jsx)(e, {
        ...n,
        currentUser: I,
        otherUser: t
      })
    })
  }, [I, t]);
  return (0, a.jsxs)("div", {
    className: S.container,
    children: [(0, a.jsx)("div", {
      className: S.details,
      children: (0, a.jsx)(_.default, {
        otherUser: t,
        status: C.UserLinkStatus.PENDING
      })
    }), (0, a.jsx)("div", {
      className: S.actions,
      children: i ? (0, a.jsx)(h.default, {
        icon: c.default,
        className: S.__invalid_actionDeny,
        tooltip: m.default.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
        onClick: A
      }) : (0, a.jsxs)(a.Fragment, {
        children: [p ? null : (0, a.jsx)(h.default, {
          icon: d.default,
          className: S.__invalid_actionAccept,
          tooltip: m.default.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: g
        }), (0, a.jsx)(h.default, {
          icon: c.default,
          className: S.__invalid_actionDeny,
          tooltip: m.default.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: T
        })]
      })
    })]
  })
}