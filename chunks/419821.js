n.d(t, {
  u: function() {
    return I
  }
});
var s = n(735250),
  a = n(470079),
  i = n(512722),
  r = n.n(i),
  l = n(399606),
  o = n(481060),
  c = n(594174),
  d = n(933970),
  _ = n(340453),
  E = n(292352),
  u = n(689938),
  T = n(88876);

function I(e) {
  let {
    user: t
  } = e, i = (0, l.e7)([c.default], () => c.default.getCurrentUser()), I = a.useCallback(() => {
    r()(void 0 !== i, "User must be logged in to accept a link request"), (0, o.openModalLazy)(async () => {
      let {
        default: e
      } = await n.e("50872").then(n.bind(n, 442673));
      return n => (0, s.jsx)(e, {
        ...n,
        currentUser: i,
        otherUser: t
      })
    })
  }, [i, t]);
  return (0, s.jsxs)("div", {
    className: T.container,
    children: [(0, s.jsx)("div", {
      className: T.details,
      children: (0, s.jsx)(_.Z, {
        otherUser: t,
        status: E.ne.ACTIVE
      })
    }), (0, s.jsx)("div", {
      className: T.actions,
      children: (0, s.jsx)(d.Z, {
        icon: o.CloseSmallIcon,
        className: T.__invalid_actionDeny,
        tooltip: u.Z.Messages.FAMILY_CENTER_LINK_ACTION_DISCONNECT,
        onClick: I
      })
    })]
  })
}