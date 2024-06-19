n.d(t, {
  Z: function() {
    return m
  }
});
var i = n(735250),
  s = n(470079),
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
  } = e, g = s.useContext(c.AnalyticsContext), {
    analyticsLocations: p
  } = (0, r.ZP)(), T = e => {
    e.stopPropagation(), a.Z.unblockUser(t.id, {
      location: "Friends"
    })
  };
  return (0, i.jsx)(d.Z, {
    isFocused: m,
    onClick: () => (0, o.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: p,
      analyticsLocation: g.location
    }),
    user: t,
    children: e => (0, i.jsxs)("div", {
      className: I.listItemContents,
      children: [(0, i.jsx)(E.Z, {
        user: t,
        hovered: e,
        status: h.Skl.UNKNOWN,
        subText: _.Z.Messages.BLOCKED
      }), (0, i.jsx)(u.Z, {
        icon: l.UserMinusIcon,
        actionType: u.Z.ActionTypes.DENY,
        tooltip: _.Z.Messages.UNBLOCK,
        onClick: T,
        shouldHighlight: e
      })]
    })
  }, n)
}