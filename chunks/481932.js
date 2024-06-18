"use strict";
n.d(t, {
  Z: function() {
    return S
  }
});
var i = n(735250);
n(470079);
var r = n(442837),
  s = n(481060),
  o = n(194359),
  a = n(906732),
  l = n(822972),
  u = n(314897),
  _ = n(699516),
  c = n(877485),
  d = n(785717),
  E = n(993409),
  I = n(228168),
  T = n(981631),
  h = n(689938);

function S(e) {
  let {
    user: t,
    friendToken: n,
    acceptFriendRequestColor: S,
    profileType: f
  } = e, {
    trackUserProfileAction: N
  } = (0, d.KZ)(), {
    originalFriendingEnabled: A,
    improvedFriendingEnabled: m
  } = (0, c.V)({
    location: "UserProfileFriendRequestBannerButtons"
  }), O = (0, r.e7)([u.default], () => u.default.getId() === (null == t ? void 0 : t.id)), R = (0, r.e7)([_.Z], () => null != t ? _.Z.getRelationshipType(t.id) : T.OGo.NONE), {
    analyticsLocations: p,
    newestAnalyticsLocation: g
  } = (0, a.ZP)(), C = (0, l.Z)({
    user: t,
    color: "danger",
    location: g,
    onAction: () => N({
      action: "REMOVE_FRIEND",
      analyticsLocations: p
    })
  });
  if (null == t || t.bot || O || R === T.OGo.BLOCKED) return null;
  if (R === T.OGo.FRIEND) return (0, i.jsx)(s.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(s.Menu, {
        navId: "user-profile-friend-request-buttons",
        onSelect: void 0,
        onClose: t,
        "aria-label": h.Z.Messages.FRIEND_ACTIONS_MENU_LABEL,
        children: C
      })
    },
    children: e => (0, i.jsx)(E.Z, {
      variant: "banner",
      icon: s.UserCheckIcon,
      text: h.Z.Messages.FRIENDS,
      ...e
    })
  });
  if (R === T.OGo.PENDING_INCOMING) return m && f === I.y0.FULL_SIZE ? null : (m || A) && f !== I.y0.PANEL ? (0, i.jsx)(E.Z, {
    variant: "banner",
    icon: s.UserClockIcon,
    text: h.Z.Messages.FRIENDS_SECTION_PENDING,
    disabled: !0
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.Z, {
      variant: "banner",
      icon: e => (0, i.jsx)(s.CheckmarkLargeIcon, {
        ...e,
        color: null != S ? S : s.tokens.colors.TEXT_BRAND
      }),
      text: h.Z.Messages.ACCEPT_FRIEND_REQUEST,
      onClick: () => {
        N({
          action: "ACCEPT_FRIEND_REQUEST"
        }), o.Z.addRelationship({
          userId: t.id,
          friendToken: n,
          context: {
            location: g
          }
        })
      }
    }), (0, i.jsx)(E.Z, {
      variant: "banner",
      icon: s.CloseSmallIcon,
      text: h.Z.Messages.IGNORE_FRIEND_REQUEST,
      onClick: () => {
        N({
          action: "IGNORE_FRIEND_REQUEST"
        }), o.Z.cancelFriendRequest(t.id, {
          location: g
        })
      }
    })]
  });
  return R === T.OGo.PENDING_OUTGOING && (!m || m && f === I.y0.BITE_SIZE) ? (0, i.jsx)(E.Z, {
    variant: "banner",
    icon: s.UserClockIcon,
    text: m || A ? h.Z.Messages.FRIENDS_SECTION_PENDING : h.Z.Messages.REQUEST_SENT,
    disabled: !0
  }) : !m || m && f === I.y0.BITE_SIZE ? (0, i.jsx)(E.Z, {
    variant: "banner",
    icon: s.UserPlusIcon,
    text: h.Z.Messages.ADD_FRIEND,
    onClick: () => {
      N({
        action: "SEND_FRIEND_REQUEST"
      }), o.Z.addRelationship({
        userId: t.id,
        friendToken: n,
        context: {
          location: g
        }
      })
    }
  }) : null
}