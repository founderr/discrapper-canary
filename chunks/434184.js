"use strict";
a.r(t), a.d(t, {
  default: function() {
    return C
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("194359"),
  i = a("906732"),
  r = a("171368"),
  o = a("877410"),
  u = a("626135"),
  d = a("321488"),
  c = a("417183"),
  f = a("170245"),
  E = a("981631"),
  h = a("689938"),
  _ = a("621982");

function C(e) {
  let {
    user: t,
    key: a,
    isFocused: C
  } = e, m = s.useContext(u.AnalyticsContext), {
    analyticsLocations: S
  } = (0, i.default)(), p = e => {
    e.stopPropagation(), l.default.unblockUser(t.id, {
      location: "Friends"
    })
  };
  return (0, n.jsx)(c.default, {
    isFocused: C,
    onClick: () => (0, r.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: S,
      analyticsLocation: m.location
    }),
    user: t,
    children: e => (0, n.jsxs)("div", {
      className: _.listItemContents,
      children: [(0, n.jsx)(f.default, {
        user: t,
        hovered: e,
        status: E.StatusTypes.UNKNOWN,
        subText: h.default.Messages.BLOCKED
      }), (0, n.jsx)(d.default, {
        icon: o.default,
        actionType: d.default.ActionTypes.DENY,
        tooltip: h.default.Messages.UNBLOCK,
        onClick: p,
        shouldHighlight: e
      })]
    })
  }, a)
}