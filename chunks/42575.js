n.d(t, {
  Z: function() {
    return g
  }
});
var i = n(735250),
  s = n(470079),
  l = n(481060),
  a = n(194359),
  r = n(906732),
  o = n(388380),
  c = n(171368),
  u = n(626135),
  d = n(321488),
  E = n(417183),
  h = n(170245),
  _ = n(981631),
  I = n(689938),
  m = n(208954);

function g(e) {
  let {
    user: t,
    nickname: n,
    status: g,
    isFocused: p
  } = e, T = s.useContext(u.AnalyticsContext), {
    analyticsLocations: N
  } = (0, r.ZP)(), S = e => {
    null == e || e.stopPropagation(), a.Z.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      },
      type: void 0,
      friendToken: void 0,
      fromFriendSuggestion: !0
    })
  }, C = e => {
    null == e || e.stopPropagation(), o.Z.ignore(t.id)
  }, A = g === _.Skl.OFFLINE ? _.Skl.UNKNOWN : g;
  return (0, i.jsx)(E.Z, {
    isFocused: p,
    user: t,
    onClick: () => (0, c.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: N,
      analyticsLocation: T.location
    }),
    children: e => {
      let s = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.Z, {
          icon: l.CheckmarkLargeIcon,
          actionType: d.Z.ActionTypes.ACCEPT,
          tooltip: I.Z.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: S,
          shouldHighlight: e
        }), (0, i.jsx)(d.Z, {
          icon: l.CloseSmallIcon,
          actionType: d.Z.ActionTypes.DENY,
          tooltip: I.Z.Messages.FRIEND_REQUEST_IGNORE,
          onClick: C,
          shouldHighlight: e
        })]
      });
      return (0, i.jsxs)("div", {
        className: m.listItemContents,
        children: [(0, i.jsx)(h.Z, {
          user: t,
          hovered: e,
          status: A,
          subText: n,
          className: m.__invalid_userInfo
        }), (0, i.jsx)("div", {
          className: m.actions,
          children: s
        })]
      })
    }
  })
}