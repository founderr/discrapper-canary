n.d(t, {
  Z: function() {
    return m
  }
});
var s = n(735250),
  i = n(470079),
  l = n(481060),
  a = n(194359),
  r = n(906732),
  o = n(171368),
  c = n(626135),
  u = n(321488),
  d = n(417183),
  E = n(170245),
  h = n(981631),
  _ = n(689938),
  I = n(252151);

function m(e) {
  let {
    user: t,
    key: n,
    isFocused: m
  } = e, T = i.useContext(c.AnalyticsContext), {
    analyticsLocations: g
  } = (0, r.ZP)(), p = e => {
    e.stopPropagation(), a.Z.unblockUser(t.id, {
      location: "Friends"
    })
  };
  return (0, s.jsx)(d.Z, {
    isFocused: m,
    onClick: () => (0, o.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: g,
      analyticsLocation: T.location
    }),
    user: t,
    children: e => (0, s.jsxs)("div", {
      className: I.listItemContents,
      children: [(0, s.jsx)(E.Z, {
        user: t,
        hovered: e,
        status: h.Skl.UNKNOWN,
        subText: _.Z.Messages.BLOCKED
      }), (0, s.jsx)(u.Z, {
        icon: l.UserMinusIcon,
        actionType: u.Z.ActionTypes.DENY,
        tooltip: _.Z.Messages.UNBLOCK,
        onClick: p,
        shouldHighlight: e
      })]
    })
  }, n)
}