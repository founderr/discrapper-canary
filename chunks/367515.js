n.d(t, {
  B: function() {
    return C
  }
});
var s = n(735250),
  i = n(470079),
  a = n(512722),
  l = n.n(a),
  r = n(399606),
  c = n(481060),
  o = n(594174),
  d = n(880257),
  u = n(631885),
  E = n(933970),
  _ = n(340453),
  h = n(292352),
  T = n(689938),
  I = n(88876);

function C(e) {
  let {
    user: t
  } = e, a = (0, d.Z)(), C = (0, u.VM)(), N = (0, r.e7)([o.default], () => o.default.getCurrentUser()), g = i.useCallback(() => {
    l()(void 0 !== N, "User must be logged in to accept a link request"), (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("59716")]).then(n.bind(n, 275370));
      return n => (0, s.jsx)(e, {
        ...n,
        currentUser: N,
        otherUser: t
      })
    })
  }, [N, t]), A = i.useCallback(() => {
    l()(void 0 !== N, "User must be logged in to decline a link request"), (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("958")]).then(n.bind(n, 4526));
      return n => (0, s.jsx)(e, {
        ...n,
        currentUser: N,
        otherUser: t
      })
    })
  }, [N, t]), m = i.useCallback(() => {
    l()(void 0 !== N, "User must be logged in to decline a link request"), (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("69015")]).then(n.bind(n, 247265));
      return n => (0, s.jsx)(e, {
        ...n,
        currentUser: N,
        otherUser: t
      })
    })
  }, [N, t]);
  return (0, s.jsxs)("div", {
    className: I.container,
    children: [(0, s.jsx)("div", {
      className: I.details,
      children: (0, s.jsx)(_.Z, {
        otherUser: t,
        status: h.ne.PENDING
      })
    }), (0, s.jsx)("div", {
      className: I.actions,
      children: a ? (0, s.jsx)(E.Z, {
        icon: c.CloseSmallIcon,
        className: I.__invalid_actionDeny,
        tooltip: T.Z.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
        onClick: m
      }) : (0, s.jsxs)(s.Fragment, {
        children: [C ? null : (0, s.jsx)(E.Z, {
          icon: c.CheckmarkLargeIcon,
          className: I.__invalid_actionAccept,
          tooltip: T.Z.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: g
        }), (0, s.jsx)(E.Z, {
          icon: c.CloseSmallIcon,
          className: I.__invalid_actionDeny,
          tooltip: T.Z.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: A
        })]
      })
    })]
  })
}