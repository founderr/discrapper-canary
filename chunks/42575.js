n.d(t, {
  Z: function() {
    return T
  }
});
var s = n(735250),
  i = n(470079),
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

function T(e) {
  let {
    user: t,
    nickname: n,
    status: T,
    isFocused: g
  } = e, p = i.useContext(u.AnalyticsContext), {
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
  }, A = T === _.Skl.OFFLINE ? _.Skl.UNKNOWN : T;
  return (0, s.jsx)(E.Z, {
    isFocused: g,
    user: t,
    onClick: () => (0, c.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: N,
      analyticsLocation: p.location
    }),
    children: e => {
      let i = (0, s.jsxs)(s.Fragment, {
        children: [(0, s.jsx)(d.Z, {
          icon: l.CheckmarkLargeIcon,
          actionType: d.Z.ActionTypes.ACCEPT,
          tooltip: I.Z.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: S,
          shouldHighlight: e
        }), (0, s.jsx)(d.Z, {
          icon: l.CloseSmallIcon,
          actionType: d.Z.ActionTypes.DENY,
          tooltip: I.Z.Messages.FRIEND_REQUEST_IGNORE,
          onClick: C,
          shouldHighlight: e
        })]
      });
      return (0, s.jsxs)("div", {
        className: m.listItemContents,
        children: [(0, s.jsx)(h.Z, {
          user: t,
          hovered: e,
          status: A,
          subText: n,
          className: m.__invalid_userInfo
        }), (0, s.jsx)("div", {
          className: m.actions,
          children: i
        })]
      })
    }
  })
}