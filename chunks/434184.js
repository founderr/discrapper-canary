"use strict";
n.r(t), n.d(t, {
  default: function() {
    return C
  }
});
var a = n("735250"),
  s = n("470079"),
  i = n("194359"),
  l = n("906732"),
  r = n("171368"),
  o = n("877410"),
  u = n("626135"),
  d = n("321488"),
  c = n("417183"),
  f = n("170245"),
  E = n("981631"),
  h = n("689938"),
  _ = n("621982");

function C(e) {
  let {
    user: t,
    key: n,
    isFocused: C
  } = e, m = s.useContext(u.AnalyticsContext), {
    analyticsLocations: p
  } = (0, l.default)(), S = e => {
    e.stopPropagation(), i.default.unblockUser(t.id, {
      location: "Friends"
    })
  };
  return (0, a.jsx)(c.default, {
    isFocused: C,
    onClick: () => (0, r.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: p,
      analyticsLocation: m.location
    }),
    user: t,
    children: e => (0, a.jsxs)("div", {
      className: _.listItemContents,
      children: [(0, a.jsx)(f.default, {
        user: t,
        hovered: e,
        status: E.StatusTypes.UNKNOWN,
        subText: h.default.Messages.BLOCKED
      }), (0, a.jsx)(d.default, {
        icon: o.default,
        actionType: d.default.ActionTypes.DENY,
        tooltip: h.default.Messages.UNBLOCK,
        onClick: S,
        shouldHighlight: e
      })]
    })
  }, n)
}