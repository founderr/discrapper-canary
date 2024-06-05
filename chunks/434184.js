"use strict";
n.r(t), n.d(t, {
  default: function() {
    return _
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("194359"),
  i = n("906732"),
  r = n("171368"),
  o = n("877410"),
  u = n("626135"),
  d = n("321488"),
  c = n("417183"),
  f = n("170245"),
  E = n("981631"),
  h = n("689938"),
  C = n("621982");

function _(e) {
  let {
    user: t,
    key: n,
    isFocused: _
  } = e, m = s.useContext(u.AnalyticsContext), {
    analyticsLocations: S
  } = (0, i.default)(), p = e => {
    e.stopPropagation(), l.default.unblockUser(t.id, {
      location: "Friends"
    })
  };
  return (0, a.jsx)(c.default, {
    isFocused: _,
    onClick: () => (0, r.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: S,
      analyticsLocation: m.location
    }),
    user: t,
    children: e => (0, a.jsxs)("div", {
      className: C.listItemContents,
      children: [(0, a.jsx)(f.default, {
        user: t,
        hovered: e,
        status: E.StatusTypes.UNKNOWN,
        subText: h.default.Messages.BLOCKED
      }), (0, a.jsx)(d.default, {
        icon: o.default,
        actionType: d.default.ActionTypes.DENY,
        tooltip: h.default.Messages.UNBLOCK,
        onClick: p,
        shouldHighlight: e
      })]
    })
  }, n)
}