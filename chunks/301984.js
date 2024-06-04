"use strict";
n.r(t), n.d(t, {
  default: function() {
    return p
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
  f = n("877485"),
  S = n("785717"),
  h = n("537387"),
  A = n("228168"),
  m = n("981631"),
  N = n("689938");

function p(e) {
  let {
    user: t,
    friendToken: n,
    acceptFriendRequestColor: p,
    profileType: O
  } = e, {
    trackUserProfileAction: C
  } = (0, S.useUserProfileAnalyticsContext)(), {
    originalFriendingEnabled: R,
    improvedFriendingEnabled: g
  } = (0, f.useSimplifiedProfileFriendingExperiment)({
    location: "UserProfileFriendRequestButtons"
  }), L = (0, r.useStateFromStores)([E.default], () => E.default.getId() === (null == t ? void 0 : t.id)), v = (0, r.useStateFromStores)([I.default], () => null != t ? I.default.getRelationshipType(t.id) : m.RelationshipTypes.NONE), {
    analyticsLocations: D,
    newestAnalyticsLocation: M
  } = (0, _.default)(), y = (0, c.default)({
    user: t,
    color: "danger",
    location: M,
    onAction: () => C({
      action: "REMOVE_FRIEND",
      analyticsLocations: D
    })
  });
  if (null == t || t.bot || L || v === m.RelationshipTypes.BLOCKED) return null;
  if (v === m.RelationshipTypes.FRIEND) return (0, i.jsx)(u.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(u.Menu, {
        navId: "user-profile-friend-request-buttons",
        onSelect: void 0,
        onClose: t,
        "aria-label": N.default.Messages.FRIEND_ACTIONS_MENU_LABEL,
        children: y
      })
    },
    children: e => (0, i.jsx)(h.default, {
      icon: a.UserCheckIcon,
      text: N.default.Messages.FRIENDS,
      ...e
    })
  });
  if (v === m.RelationshipTypes.PENDING_INCOMING) return g && O === A.UserProfileTypes.FULL_SIZE ? null : (g || R) && O !== A.UserProfileTypes.PANEL ? (0, i.jsx)(h.default, {
    icon: o.UserClockIcon,
    text: N.default.Messages.FRIENDS_SECTION_PENDING,
    disabled: !0
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(h.default, {
      icon: e => (0, i.jsx)(s.CheckmarkLargeIcon, {
        ...e,
        color: null != p ? p : u.tokens.colors.TEXT_BRAND
      }),
      text: N.default.Messages.ACCEPT_FRIEND_REQUEST,
      onClick: () => {
        C({
          action: "ACCEPT_FRIEND_REQUEST"
        }), d.default.addRelationship({
          userId: t.id,
          friendToken: n,
          context: {
            location: M
          }
        })
      }
    }), (0, i.jsx)(h.default, {
      icon: T.default,
      text: N.default.Messages.IGNORE_FRIEND_REQUEST,
      onClick: () => {
        C({
          action: "IGNORE_FRIEND_REQUEST"
        }), d.default.cancelFriendRequest(t.id, {
          location: M
        })
      }
    })]
  });
  return v === m.RelationshipTypes.PENDING_OUTGOING && (!g || g && O === A.UserProfileTypes.BITE_SIZE) ? (0, i.jsx)(h.default, {
    icon: o.UserClockIcon,
    text: g || R ? N.default.Messages.FRIENDS_SECTION_PENDING : N.default.Messages.REQUEST_SENT,
    disabled: !0
  }) : !g || g && O === A.UserProfileTypes.BITE_SIZE ? (0, i.jsx)(h.default, {
    icon: l.UserPlusIcon,
    text: N.default.Messages.ADD_FRIEND,
    onClick: () => {
      C({
        action: "SEND_FRIEND_REQUEST"
      }), d.default.addRelationship({
        userId: t.id,
        friendToken: n,
        context: {
          location: M
        }
      })
    }
  }) : null
}