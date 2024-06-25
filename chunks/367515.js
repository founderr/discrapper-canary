s.d(t, {
  B: function() {
    return A
  }
});
var n = s(735250),
  a = s(470079),
  i = s(512722),
  r = s.n(i),
  l = s(399606),
  o = s(481060),
  c = s(594174),
  E = s(880257),
  _ = s(631885),
  u = s(933970),
  d = s(340453),
  T = s(292352),
  I = s(689938),
  R = s(88876);

function A(e) {
  let {
    user: t
  } = e, i = (0, E.Z)(), A = (0, _.VM)(), N = (0, l.e7)([c.default], () => c.default.getCurrentUser()), C = a.useCallback(() => {
    r()(void 0 !== N, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("59716")]).then(s.bind(s, 275370));
      return s => (0, n.jsx)(e, {
        ...s,
        currentUser: N,
        otherUser: t
      })
    })
  }, [N, t]), g = a.useCallback(() => {
    r()(void 0 !== N, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("958")]).then(s.bind(s, 4526));
      return s => (0, n.jsx)(e, {
        ...s,
        currentUser: N,
        otherUser: t
      })
    })
  }, [N, t]), m = a.useCallback(() => {
    r()(void 0 !== N, "User must be logged in to decline a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("69015")]).then(s.bind(s, 247265));
      return s => (0, n.jsx)(e, {
        ...s,
        currentUser: N,
        otherUser: t
      })
    })
  }, [N, t]);
  return (0, n.jsxs)("div", {
    className: R.container,
    children: [(0, n.jsx)("div", {
      className: R.details,
      children: (0, n.jsx)(d.Z, {
        otherUser: t,
        status: T.ne.PENDING
      })
    }), (0, n.jsx)("div", {
      className: R.actions,
      children: i ? (0, n.jsx)(u.Z, {
        icon: o.CloseSmallIcon,
        className: R.__invalid_actionDeny,
        tooltip: I.Z.Messages.FAMILY_CENTER_LINK_ACTION_CANCEL,
        onClick: m
      }) : (0, n.jsxs)(n.Fragment, {
        children: [A ? null : (0, n.jsx)(u.Z, {
          icon: o.CheckmarkLargeIcon,
          className: R.__invalid_actionAccept,
          tooltip: I.Z.Messages.FAMILY_CENTER_LINK_ACTION_ACCEPT,
          onClick: C
        }), (0, n.jsx)(u.Z, {
          icon: o.CloseSmallIcon,
          className: R.__invalid_actionDeny,
          tooltip: I.Z.Messages.FAMILY_CENTER_LINK_ACTION_DECLINE,
          onClick: g
        })]
      })
    })]
  })
}