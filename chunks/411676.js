"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
  }
});
var a = n("37983"),
  s = n("884691"),
  l = n("669491"),
  i = n("736964"),
  r = n("401642"),
  o = n("697218"),
  u = n("36694"),
  d = n("945330"),
  c = n("956089"),
  f = n("599110"),
  E = n("371449"),
  h = n("224978"),
  _ = n("559541"),
  C = n("49111"),
  I = n("782340"),
  S = n("289984");

function p(e) {
  let {
    user: t,
    type: n,
    status: p,
    isFocused: m
  } = e, T = s.useContext(f.AnalyticsContext), g = e => {
    e.stopPropagation(), i.default.cancelFriendRequest(t.id, {
      location: "Friends"
    })
  }, A = e => {
    e.stopPropagation(), i.default.addRelationship({
      userId: t.id,
      context: {
        location: "Friends"
      }
    })
  }, N = p === C.StatusTypes.OFFLINE ? C.StatusTypes.UNKNOWN : p, R = n === C.RelationshipTypes.PENDING_INCOMING ? I.default.Messages.INCOMING_FRIEND_REQUEST : I.default.Messages.OUTGOING_FRIEND_REQUEST;
  return (0, a.jsx)(h.default, {
    isFocused: m,
    user: t,
    onClick: () => (0, r.openUserProfileModal)({
      userId: t.id,
      analyticsLocation: T.location
    }),
    children: e => {
      var s;
      let i = n === C.RelationshipTypes.PENDING_INCOMING ? (0, a.jsxs)(a.Fragment, {
        children: [(null === (s = o.default.getCurrentUser()) || void 0 === s ? void 0 : s.isStaff()) && (null == t ? void 0 : t.isStaff()) && (0, a.jsx)("div", {
          className: S.staffIndicator,
          children: (0, a.jsx)(c.TextBadge, {
            color: l.default.unsafe_rawColors.BRAND_500.css,
            text: I.default.Messages.STAFF_BADGE_TOOLTIP
          })
        }), (0, a.jsx)(E.default, {
          icon: u.default,
          actionType: E.default.ActionTypes.ACCEPT,
          tooltip: I.default.Messages.FRIEND_REQUEST_ACCEPT,
          onClick: A,
          shouldHighlight: e
        }), (0, a.jsx)(E.default, {
          icon: d.default,
          actionType: E.default.ActionTypes.DENY,
          tooltip: I.default.Messages.FRIEND_REQUEST_IGNORE,
          onClick: g,
          shouldHighlight: e
        })]
      }) : (0, a.jsx)(E.default, {
        icon: d.default,
        actionType: E.default.ActionTypes.DENY,
        tooltip: I.default.Messages.FRIEND_REQUEST_CANCEL,
        onClick: g,
        shouldHighlight: e
      });
      return (0, a.jsxs)("div", {
        className: S.listItemContents,
        children: [(0, a.jsx)(_.default, {
          user: t,
          hovered: e,
          showAccountIdentifier: !0,
          status: N,
          subText: R,
          className: S.userInfo
        }), (0, a.jsx)("div", {
          className: S.actions,
          children: i
        })]
      })
    }
  })
}