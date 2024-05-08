"use strict";
n.r(t), n.d(t, {
  default: function() {
    return I
  }
});
var a = n("735250"),
  s = n("470079"),
  i = n("692547"),
  l = n("194359"),
  r = n("906732"),
  o = n("171368"),
  u = n("594174"),
  d = n("263704"),
  c = n("465670"),
  f = n("26290"),
  E = n("626135"),
  h = n("321488"),
  _ = n("417183"),
  C = n("170245"),
  m = n("981631"),
  S = n("689938"),
  p = n("870729");

function I(e) {
  let {
    user: t,
    type: n,
    status: I,
    isFocused: g
  } = e, T = s.useContext(E.AnalyticsContext), {
    analyticsLocations: A
  } = (0, r.default)(), N = e => {
    e.stopPropagation(), l.default.cancelFriendRequest(t.id, {
      location: "Friends"
    })
  }, v = e => {
    e.stopPropagation(), l.default.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      }
    })
  }, R = I === m.StatusTypes.OFFLINE ? m.StatusTypes.UNKNOWN : I, O = n === m.RelationshipTypes.PENDING_INCOMING ? S.default.Messages.INCOMING_FRIEND_REQUEST : S.default.Messages.OUTGOING_FRIEND_REQUEST;
  return (0, a.jsx)(_.default, {
    isFocused: g,
    user: t,
    onClick: () => (0, o.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: A,
      analyticsLocation: T.location
    }),
    children: e => {
      var s;
      let l = n === m.RelationshipTypes.PENDING_INCOMING ? (0, a.jsxs)(a.Fragment, {
        children: [(null === (s = u.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) && (null == t ? void 0 : t.isStaff()) && (0, a.jsx)("div", {
          className: p.staffIndicator,
          children: (0, a.jsx)(f.TextBadge, {
            color: i.default.unsafe_rawColors.BRAND_500.css,
            text: S.default.Messages.STAFF_BADGE_TOOLTIP
          })
        }), (0, a.jsx)(h.default, {
          icon: d.default,
          actionType: h.default.ActionTypes.ACCEPT,
          tooltip: S.default.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: v,
          shouldHighlight: e
        }), (0, a.jsx)(h.default, {
          icon: c.default,
          actionType: h.default.ActionTypes.DENY,
          tooltip: S.default.Messages.FRIEND_REQUEST_IGNORE,
          onClick: N,
          shouldHighlight: e
        })]
      }) : (0, a.jsx)(h.default, {
        icon: c.default,
        actionType: h.default.ActionTypes.DENY,
        tooltip: S.default.Messages.FRIEND_REQUEST_CANCEL,
        onClick: N,
        shouldHighlight: e
      });
      return (0, a.jsxs)("div", {
        className: p.listItemContents,
        children: [(0, a.jsx)(C.default, {
          user: t,
          hovered: e,
          showAccountIdentifier: !0,
          status: R,
          subText: O,
          className: p.userInfo
        }), (0, a.jsx)("div", {
          className: p.actions,
          children: l
        })]
      })
    }
  })
}