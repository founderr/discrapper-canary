n.d(t, {
  u: function() {
    return m
  }
});
var s = n(735250),
  a = n(470079),
  i = n(512722),
  l = n.n(i),
  r = n(399606),
  o = n(481060),
  c = n(594174),
  d = n(933970),
  u = n(340453),
  E = n(292352),
  _ = n(689938),
  h = n(88876);

function m(e) {
  let {
    user: t
  } = e, i = (0, r.e7)([c.default], () => c.default.getCurrentUser()), m = a.useCallback(() => {
    l()(void 0 !== i, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("50872")]).then(n.bind(n, 442673));
      return n => (0, s.jsx)(e, {
        ...n,
        currentUser: i,
        otherUser: t
      })
    })
  }, [i, t]);
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
        icon: o.CloseSmallIcon,
        className: h.__invalid_actionDeny,
        tooltip: _.Z.Messages.FAMILY_CENTER_LINK_ACTION_DISCONNECT,
        onClick: m
      })
    })]
  })
}