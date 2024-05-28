"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("194359"),
  i = n("906732"),
  r = n("388380"),
  o = n("171368"),
  u = n("263704"),
  d = n("465670"),
  c = n("626135"),
  f = n("321488"),
  E = n("417183"),
  C = n("170245"),
  h = n("981631"),
  _ = n("689938"),
  S = n("860030");

function m(e) {
  let {
    user: t,
    nickname: n,
    status: m,
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
  }, N = m === h.StatusTypes.OFFLINE ? h.StatusTypes.UNKNOWN : m;
  return (0, a.jsx)(E.default, {
    isFocused: p,
    user: t,
    onClick: () => (0, o.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: g,
      analyticsLocation: I.location
    }),
    children: e => {
      let s = (0, a.jsxs)(a.Fragment, {
        children: [(0, a.jsx)(f.default, {
          icon: u.default,
          actionType: f.default.ActionTypes.ACCEPT,
          tooltip: _.default.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: T,
          shouldHighlight: e
        }), (0, a.jsx)(f.default, {
          icon: d.default,
          actionType: f.default.ActionTypes.DENY,
          tooltip: _.default.Messages.FRIEND_REQUEST_IGNORE,
          onClick: A,
          shouldHighlight: e
        })]
      });
      return (0, a.jsxs)("div", {
        className: S.listItemContents,
        children: [(0, a.jsx)(C.default, {
          user: t,
          hovered: e,
          status: N,
          subText: n,
          className: S.__invalid_userInfo
        }), (0, a.jsx)("div", {
          className: S.actions,
          children: s
        })]
      })
    }
  })
}