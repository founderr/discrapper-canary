n.d(t, {
  B: function() {
    return C
  }
});
var s = n(735250),
  a = n(470079),
  i = n(512722),
  l = n.n(i),
  r = n(399606),
  o = n(481060),
  c = n(594174),
  d = n(880257),
  u = n(631885),
  E = n(933970),
  _ = n(340453),
  h = n(292352),
  m = n(689938),
  T = n(88876);

function C(e) {
  let {
    user: t
  } = e, i = (0, d.Z)(), C = (0, u.VM)(), g = (0, r.e7)([c.default], () => c.default.getCurrentUser()), p = a.useCallback(() => {
    l()(void 0 !== g, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("59716")]).then(n.bind(n, 275370));
      return n => (0, s.jsx)(e, {
        ...n,
        currentUser: g,
        otherUser: t
      })
    })
  }, [g, t]), N = a.useCallback(() => {
    l()(void 0 !== g, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("958")]).then(n.bind(n, 4526));
      return n => (0, s.jsx)(e, {
        ...n,
        currentUser: g,
        otherUser: t
      })
    })
  }, [g, t]), I = a.useCallback(() => {
    l()(void 0 !== g, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("69015")]).then(n.bind(n, 247265));
      return n => (0, s.jsx)(e, {
        ...n,
        currentUser: g,
        otherUser: t
      })
    })
  }, [g, t]);
  return (0, s.jsxs)("div", {
    className: T.container,
    children: [(0, s.jsx)("div", {
      className: T.details,
      children: (0, s.jsx)(_.Z, {
        otherUser: t,
        status: h.ne.PENDING
      })
    }), (0, s.jsx)("div", {
      className: T.actions,
      children: i ? (0, s.jsx)(E.Z, {
        icon: o.CloseSmallIcon,
        className: T.__invalid_actionDeny,
        tooltip: m.Z.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
        onClick: I
      }) : (0, s.jsxs)(s.Fragment, {
        children: [C ? null : (0, s.jsx)(E.Z, {
          icon: o.CheckmarkLargeIcon,
          className: T.__invalid_actionAccept,
          tooltip: m.Z.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: p
        }), (0, s.jsx)(E.Z, {
          icon: o.CloseSmallIcon,
          className: T.__invalid_actionDeny,
          tooltip: m.Z.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: N
        })]
      })
    })]
  })
}