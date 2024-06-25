n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(194359),
  l = n(906732),
  o = n(388380),
  c = n(171368),
  d = n(626135),
  u = n(321488),
  _ = n(417183),
  E = n(170245),
  h = n(981631),
  I = n(689938),
  m = n(208954);

function p(e) {
  let {
    user: t,
    nickname: n,
    status: p,
    isFocused: g
  } = e, T = s.useContext(d.AnalyticsContext), {
    analyticsLocations: C
  } = (0, l.ZP)(), f = e => {
    null == e || e.stopPropagation(), r.Z.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      },
      type: void 0,
      friendToken: void 0,
      fromFriendSuggestion: !0
    })
  }, S = e => {
    null == e || e.stopPropagation(), o.Z.ignore(t.id)
  }, N = p === h.Skl.OFFLINE ? h.Skl.UNKNOWN : p;
  return (0, i.jsx)(_.Z, {
    isFocused: g,
    user: t,
    onClick: () => (0, c.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: C,
      analyticsLocation: T.location
    }),
    children: e => {
      let s = (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(u.Z, {
          icon: a.CheckmarkLargeIcon,
          actionType: u.Z.ActionTypes.ACCEPT,
          tooltip: I.Z.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: f,
          shouldHighlight: e
        }), (0, i.jsx)(u.Z, {
          icon: a.CloseSmallIcon,
          actionType: u.Z.ActionTypes.DENY,
          tooltip: I.Z.Messages.FRIEND_REQUEST_IGNORE,
          onClick: S,
          shouldHighlight: e
        })]
      });
      return (0, i.jsxs)("div", {
        className: m.listItemContents,
        children: [(0, i.jsx)(E.Z, {
          user: t,
          hovered: e,
          status: N,
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