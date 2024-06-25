"use strict";
n.d(t, {
  Z: function() {
    return f
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

function f(e) {
  let {
    user: t,
    friendToken: n,
    acceptFriendRequestColor: f,
    profileType: S
  } = e, {
    trackUserProfileAction: A
  } = (0, d.KZ)(), {
    originalFriendingEnabled: N,
    improvedFriendingEnabled: m
  } = (0, c.V)({
    location: "UserProfileFriendRequestBannerButtons"
  }), O = (0, r.e7)([u.default], () => u.default.getId() === (null == t ? void 0 : t.id)), p = (0, r.e7)([_.Z], () => null != t ? _.Z.getRelationshipType(t.id) : T.OGo.NONE), {
    analyticsLocations: R,
    newestAnalyticsLocation: g
  } = (0, a.ZP)(), C = (0, l.Z)({
    user: t,
    color: "danger",
    location: g,
    onAction: () => A({
      action: "REMOVE_FRIEND",
      analyticsLocations: R
    })
  });
  if (null == t || t.bot || O || p === T.OGo.BLOCKED) return null;
  if (p === T.OGo.FRIEND) return (0, i.jsx)(s.Popout, {
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
  if (p === T.OGo.PENDING_INCOMING) return m && S === I.y0.FULL_SIZE ? null : (m || N) && S !== I.y0.PANEL ? (0, i.jsx)(E.Z, {
    variant: "banner",
    icon: s.UserClockIcon,
    text: h.Z.Messages.FRIENDS_SECTION_PENDING,
    disabled: !0
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(E.Z, {
      variant: "banner",
      icon: e => (0, i.jsx)(s.CheckmarkLargeIcon, {
        ...e,
        color: null != f ? f : s.tokens.colors.TEXT_BRAND
      }),
      text: h.Z.Messages.ACCEPT_FRIEND_REQUEST,
      onClick: () => {
        A({
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
        A({
          action: "IGNORE_FRIEND_REQUEST"
        }), o.Z.cancelFriendRequest(t.id, {
          location: g
        })
      }
    })]
  });
  return p === T.OGo.PENDING_OUTGOING && (!m || m && S === I.y0.BITE_SIZE) ? (0, i.jsx)(E.Z, {
    variant: "banner",
    icon: s.UserClockIcon,
    text: m || N ? h.Z.Messages.FRIENDS_SECTION_PENDING : h.Z.Messages.REQUEST_SENT,
    disabled: !0
  }) : !m || m && S === I.y0.BITE_SIZE ? (0, i.jsx)(E.Z, {
    variant: "banner",
    icon: s.UserPlusIcon,
    text: h.Z.Messages.ADD_FRIEND,
    onClick: () => {
      A({
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