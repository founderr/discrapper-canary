"use strict";
a.r(t), a.d(t, {
  default: function() {
    return S
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("194359"),
  i = a("906732"),
  r = a("388380"),
  o = a("171368"),
  u = a("263704"),
  d = a("465670"),
  c = a("626135"),
  f = a("321488"),
  E = a("417183"),
  h = a("170245"),
  _ = a("981631"),
  C = a("689938"),
  m = a("926585");

function S(e) {
  let {
    user: t,
    nickname: a,
    status: S,
    isFocused: p
  } = e, I = s.useContext(c.AnalyticsContext), {
    analyticsLocations: g
  } = (0, i.default)(), T = e => {
    null == e || e.stopPropagation(), l.default.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      },
      type: void 0,
      friendToken: void 0,
      fromFriendSuggestion: !0
    })
  }, A = e => {
    null == e || e.stopPropagation(), r.default.ignore(t.id)
  }, N = S === _.StatusTypes.OFFLINE ? _.StatusTypes.UNKNOWN : S;
  return (0, n.jsx)(E.default, {
    isFocused: p,
    user: t,
    onClick: () => (0, o.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: g,
      analyticsLocation: I.location
    }),
    children: e => {
      let s = (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(f.default, {
          icon: u.default,
          actionType: f.default.ActionTypes.ACCEPT,
          tooltip: C.default.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: T,
          shouldHighlight: e
        }), (0, n.jsx)(f.default, {
          icon: d.default,
          actionType: f.default.ActionTypes.DENY,
          tooltip: C.default.Messages.FRIEND_REQUEST_IGNORE,
          onClick: A,
          shouldHighlight: e
        })]
      });
      return (0, n.jsxs)("div", {
        className: m.listItemContents,
        children: [(0, n.jsx)(h.default, {
          user: t,
          hovered: e,
          status: N,
          subText: a,
          className: m.__invalid_userInfo
        }), (0, n.jsx)("div", {
          className: m.actions,
          children: s
        })]
      })
    }
  })
}