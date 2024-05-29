"use strict";
n.r(t), n.d(t, {
  default: function() {
    return m
  }
});
var i = n("735250");
n("470079");
var r = n("442837"),
  s = n("124597"),
  a = n("657147"),
  o = n("97910"),
  l = n("780014"),
  u = n("481060"),
  d = n("194359"),
  _ = n("906732"),
  c = n("822972"),
  E = n("314897"),
  I = n("699516"),
  T = n("465670"),
  f = n("785717"),
  S = n("537387"),
  h = n("981631"),
  A = n("689938");

function m(e) {
  let {
    user: t,
    acceptFriendRequestColor: n,
    friendToken: m
  } = e, {
    trackUserProfileAction: N
  } = (0, f.useUserProfileAnalyticsContext)(), p = (0, r.useStateFromStores)([E.default], () => E.default.getId() === (null == t ? void 0 : t.id)), O = (0, r.useStateFromStores)([I.default], () => null != t ? I.default.getRelationshipType(t.id) : h.RelationshipTypes.NONE), {
    analyticsLocations: C,
    newestAnalyticsLocation: R
  } = (0, _.default)(), g = (0, c.default)({
    user: t,
    color: "danger",
    location: R,
    onAction: () => N({
      action: "REMOVE_FRIEND",
      analyticsLocations: C
    })
  });
  return null == t || t.bot || p || O === h.RelationshipTypes.BLOCKED ? null : O === h.RelationshipTypes.FRIEND ? (0, i.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(u.Menu, {
        navId: "user-profile-friend-request-buttons",
        onSelect: void 0,
        onClose: t,
        "aria-label": A.default.Messages.FRIEND_ACTIONS_MENU_LABEL,
        children: g
      })
    },
    children: e => (0, i.jsx)(S.default, {
      icon: a.UserCheckIcon,
      text: A.default.Messages.FRIENDS,
      ...e
    })
  }) : O === h.RelationshipTypes.PENDING_INCOMING ? (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(S.default, {
      icon: e => (0, i.jsx)(s.CheckmarkLargeIcon, {
        ...e,
        color: null != n ? n : u.tokens.colors.TEXT_BRAND
      }),
      text: A.default.Messages.ACCEPT_FRIEND_REQUEST,
      onClick: () => {
        N({
          action: "ACCEPT_FRIEND_REQUEST"
        }), d.default.addRelationship({
          userId: t.id,
          friendToken: m
        })
      }
    }), (0, i.jsx)(S.default, {
      icon: T.default,
      text: A.default.Messages.IGNORE_FRIEND_REQUEST,
      onClick: () => {
        N({
          action: "IGNORE_FRIEND_REQUEST"
        }), d.default.cancelFriendRequest(t.id)
      }
    })]
  }) : O === h.RelationshipTypes.PENDING_OUTGOING ? (0, i.jsx)(S.default, {
    icon: o.UserClockIcon,
    text: A.default.Messages.REQUEST_SENT,
    disabled: !0
  }) : (0, i.jsx)(S.default, {
    icon: l.UserPlusIcon,
    text: A.default.Messages.ADD_FRIEND,
    onClick: () => {
      N({
        action: "SEND_FRIEND_REQUEST"
      }), d.default.addRelationship({
        userId: t.id,
        friendToken: m
      })
    }
  })
}