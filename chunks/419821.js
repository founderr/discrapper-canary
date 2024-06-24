n.d(t, {
  u: function() {
    return T
  }
});
var s = n(735250),
  i = n(470079),
  a = n(512722),
  l = n.n(a),
  r = n(399606),
  c = n(481060),
  o = n(594174),
  d = n(933970),
  u = n(340453),
  E = n(292352),
  _ = n(689938),
  h = n(88876);

function T(e) {
  let {
    user: t
  } = e, a = (0, r.e7)([o.default], () => o.default.getCurrentUser()), T = i.useCallback(() => {
    l()(void 0 !== a, "User must be logged in to accept a link request"), (0, c.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("50872")]).then(n.bind(n, 442673));
      return n => (0, s.jsx)(e, {
        ...n,
        currentUser: a,
        otherUser: t
      })
    })
  }, [a, t]);
  return (0, s.jsxs)("div", {
    className: h.container,
    children: [(0, s.jsx)("div", {
      className: h.details,
      children: (0, s.jsx)(u.Z, {
        otherUser: t,
        status: E.ne.ACTIVE
      })
    }), (0, s.jsx)("div", {
      className: h.actions,
      children: (0, s.jsx)(d.Z, {
        icon: c.CloseSmallIcon,
        className: h.__invalid_actionDeny,
        tooltip: _.Z.Messages.FAMILY_CENTER_LINK_ACTION_DISCONNECT,
        onClick: T
      })
    })]
  })
}