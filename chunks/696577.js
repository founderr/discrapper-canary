"use strict";
a.r(t), a.d(t, {
  default: function() {
    return I
  }
});
var n = a("735250"),
  s = a("470079"),
  l = a("692547"),
  i = a("194359"),
  r = a("906732"),
  o = a("171368"),
  u = a("594174"),
  d = a("263704"),
  c = a("465670"),
  f = a("26290"),
  E = a("626135"),
  h = a("321488"),
  _ = a("417183"),
  C = a("170245"),
  m = a("981631"),
  S = a("689938"),
  p = a("870729");

function I(e) {
  let {
    user: t,
    type: a,
    status: I,
    isFocused: T
  } = e, g = s.useContext(E.AnalyticsContext), {
    analyticsLocations: A
  } = (0, r.default)(), N = e => {
    e.stopPropagation(), i.default.cancelFriendRequest(t.id, {
      location: "Friends"
    })
  }, v = e => {
    e.stopPropagation(), i.default.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      }
    })
  }, L = I === m.StatusTypes.OFFLINE ? m.StatusTypes.UNKNOWN : I, R = a === m.RelationshipTypes.PENDING_INCOMING ? S.default.Messages.INCOMING_FRIEND_REQUEST : S.default.Messages.OUTGOING_FRIEND_REQUEST;
  return (0, n.jsx)(_.default, {
    isFocused: T,
    user: t,
    onClick: () => (0, o.openUserProfileModal)({
      userId: t.id,
      sourceAnalyticsLocations: A,
      analyticsLocation: g.location
    }),
    children: e => {
      var s;
      let i = a === m.RelationshipTypes.PENDING_INCOMING ? (0, n.jsxs)(n.Fragment, {
        children: [(null === (s = u.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) && (null == t ? void 0 : t.isStaff()) && (0, n.jsx)("div", {
          className: p.staffIndicator,
          children: (0, n.jsx)(f.TextBadge, {
            color: l.default.unsafe_rawColors.BRAND_500.css,
            text: S.default.Messages.STAFF_BADGE_TOOLTIP
          })
        }), (0, n.jsx)(h.default, {
          icon: d.default,
          actionType: h.default.ActionTypes.ACCEPT,
          tooltip: S.default.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: v,
          shouldHighlight: e
        }), (0, n.jsx)(h.default, {
          icon: c.default,
          actionType: h.default.ActionTypes.DENY,
          tooltip: S.default.Messages.FRIEND_REQUEST_IGNORE,
          onClick: N,
          shouldHighlight: e
        })]
      }) : (0, n.jsx)(h.default, {
        icon: c.default,
        actionType: h.default.ActionTypes.DENY,
        tooltip: S.default.Messages.FRIEND_REQUEST_CANCEL,
        onClick: N,
        shouldHighlight: e
      });
      return (0, n.jsxs)("div", {
        className: p.listItemContents,
        children: [(0, n.jsx)(C.default, {
          user: t,
          hovered: e,
          showAccountIdentifier: !0,
          status: L,
          subText: R,
          className: p.userInfo
        }), (0, n.jsx)("div", {
          className: p.actions,
          children: i
        })]
      })
    }
  })
}