s.d(t, {
  u: function() {
    return I
  }
});
var n = s(735250),
  a = s(470079),
  i = s(512722),
  r = s.n(i),
  l = s(399606),
  o = s(481060),
  c = s(594174),
  E = s(933970),
  _ = s(340453),
  u = s(292352),
  d = s(689938),
  T = s(88876);

function I(e) {
  let {
    user: t
  } = e, i = (0, l.e7)([c.default], () => c.default.getCurrentUser()), I = a.useCallback(() => {
    r()(void 0 !== i, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([s.e("99387"), s.e("50872")]).then(s.bind(s, 442673));
      return s => (0, n.jsx)(e, {
        ...s,
        currentUser: i,
        otherUser: t
      })
    })
  }, [i, t]);
  return (0, n.jsxs)("div", {
    className: T.container,
    children: [(0, n.jsx)("div", {
      className: T.details,
      children: (0, n.jsx)(_.Z, {
        otherUser: t,
        status: u.ne.ACTIVE
      })
    }), (0, n.jsx)("div", {
      className: T.actions,
      children: (0, n.jsx)(E.Z, {
        icon: o.CloseSmallIcon,
        className: T.__invalid_actionDeny,
        tooltip: d.Z.Messages.FAMILY_CENTER_LINK_ACTION_DISCONNECT,
        onClick: I
      })
    })]
  })
}