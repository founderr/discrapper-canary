n.d(t, {
  Z: function() {
    return p
  }
});
var i = n(735250),
  s = n(470079),
  l = n(692547),
  a = n(481060),
  r = n(194359),
  o = n(906732),
  c = n(171368),
  u = n(594174),
  d = n(626135),
  E = n(321488),
  h = n(417183),
  _ = n(170245),
  I = n(981631),
  m = n(689938),
  g = n(203892);

function p(e) {
  let {
    user: t,
    type: n,
    status: p,
    isFocused: T
  } = e, N = s.useContext(d.AnalyticsContext), {
    analyticsLocations: S
  } = (0, o.ZP)(), C = e => {
    e.stopPropagation(), r.Z.cancelFriendRequest(t.id, {
      location: "Friends"
    })
  }, A = e => {
    e.stopPropagation(), r.Z.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      }
    })
  }, f = p === I.Skl.OFFLINE ? I.Skl.UNKNOWN : p, Z = n === I.OGo.PENDING_INCOMING ? m.Z.Messages.INCOMING_FRIEND_REQUEST : m.Z.Messages.OUTGOING_FRIEND_REQUEST;
  return (0, i.jsx)(h.Z, {
    isFocused: T,
    user: t,
    onClick: () => (0, c.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: S,
      analyticsLocation: N.location
    }),
    children: e => {
      var s;
      let r = n === I.OGo.PENDING_INCOMING ? (0, i.jsxs)(i.Fragment, {
        children: [(null === (s = u.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) && (null == t ? void 0 : t.isStaff()) && (0, i.jsx)("div", {
          className: g.staffIndicator,
          children: (0, i.jsx)(a.TextBadge, {
            color: l.Z.unsafe_rawColors.BRAND_500.css,
            text: m.Z.Messages.STAFF_BADGE_TOOLTIP
          })
        }), (0, i.jsx)(E.Z, {
          icon: a.CheckmarkLargeIcon,
          actionType: E.Z.ActionTypes.ACCEPT,
          tooltip: m.Z.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: A,
          shouldHighlight: e
        }), (0, i.jsx)(E.Z, {
          icon: a.CloseSmallIcon,
          actionType: E.Z.ActionTypes.DENY,
          tooltip: m.Z.Messages.FRIEND_REQUEST_IGNORE,
          onClick: C,
          shouldHighlight: e
        })]
      }) : (0, i.jsx)(E.Z, {
        icon: a.CloseSmallIcon,
        actionType: E.Z.ActionTypes.DENY,
        tooltip: m.Z.Messages.FRIEND_REQUEST_CANCEL,
        onClick: C,
        shouldHighlight: e
      });
      return (0, i.jsxs)("div", {
        className: g.listItemContents,
        children: [(0, i.jsx)(_.Z, {
          user: t,
          hovered: e,
          showAccountIdentifier: !0,
          status: f,
          subText: Z,
          className: g.userInfo
        }), (0, i.jsx)("div", {
          className: g.actions,
          children: r
        })]
      })
    }
  })
}