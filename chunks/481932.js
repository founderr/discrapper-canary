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
  d = n(824572),
  E = n(785717),
  I = n(993409),
  T = n(228168),
  h = n(981631),
  f = n(689938);

function S(e) {
  let {
    user: t,
    friendToken: n,
    profileType: S
  } = e, {
    originalFriendingEnabled: A,
    improvedFriendingEnabled: N
  } = (0, c.V)({
    location: "UserProfileFriendRequestBannerButtons"
  }), {
    improvedPanelFriendingEnabled: m
  } = (0, d.O)({
    location: "UserProfileFriendRequestBannerButtons"
  }), {
    newestAnalyticsLocation: O
  } = (0, a.ZP)(), {
    trackUserProfileAction: R
  } = (0, E.KZ)(), p = (0, r.e7)([u.default], () => u.default.getId() === (null == t ? void 0 : t.id)), g = (0, r.e7)([_.Z], () => null != t ? _.Z.getRelationshipType(t.id) : h.OGo.NONE), C = (0, l.Z)({
    user: t,
    color: "danger",
    location: O,
    onAction: () => R({
      action: "REMOVE_FRIEND"
    })
  });
  return null == t || t.bot || p || g === h.OGo.BLOCKED ? null : g === h.OGo.FRIEND ? (0, i.jsx)(s.Popout, {
    renderPopout: e => {
      let {
        closePopout: t
      } = e;
      return (0, i.jsx)(s.Menu, {
        navId: "user-profile-friend-request-buttons",
        onSelect: void 0,
        onClose: t,
        "aria-label": f.Z.Messages.FRIEND_ACTIONS_MENU_LABEL,
        children: C
      })
    },
    children: e => (0, i.jsx)(I.Z, {
      variant: "banner",
      icon: s.UserCheckIcon,
      text: f.Z.Messages.FRIENDS,
      ...e
    })
  }) : g === h.OGo.PENDING_INCOMING ? N && S === T.y0.FULL_SIZE ? null : (S === T.y0.PANEL ? m : N || A) ? (0, i.jsx)(I.Z, {
    variant: "banner",
    icon: s.UserClockIcon,
    text: f.Z.Messages.FRIENDS_SECTION_PENDING,
    disabled: !0
  }) : (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(I.Z, {
      variant: "banner",
      icon: e => (0, i.jsx)(s.CheckmarkLargeIcon, {
        ...e,
        color: A ? s.tokens.colors.BUTTON_OUTLINE_POSITIVE_BORDER : s.tokens.colors.TEXT_BRAND
      }),
      text: f.Z.Messages.ACCEPT_FRIEND_REQUEST,
      onClick: () => {
        R({
          action: "ACCEPT_FRIEND_REQUEST"
        }), o.Z.addRelationship({
          userId: t.id,
          friendToken: n,
          context: {
            location: O
          }
        })
      }
    }), (0, i.jsx)(I.Z, {
      variant: "banner",
      icon: s.CloseSmallIcon,
      text: f.Z.Messages.IGNORE_FRIEND_REQUEST,
      onClick: () => {
        R({
          action: "IGNORE_FRIEND_REQUEST"
        }), o.Z.cancelFriendRequest(t.id, {
          location: O
        })
      }
    })]
  }) : g === h.OGo.PENDING_OUTGOING ? A && S === T.y0.FULL_SIZE ? null : (0, i.jsx)(I.Z, {
    variant: "banner",
    icon: s.UserClockIcon,
    text: f.Z.Messages.FRIENDS_SECTION_PENDING,
    disabled: !0
  }) : A && S === T.y0.FULL_SIZE ? null : (0, i.jsx)(I.Z, {
    variant: "banner",
    icon: s.UserPlusIcon,
    text: f.Z.Messages.ADD_FRIEND,
    onClick: () => {
      R({
        action: "SEND_FRIEND_REQUEST"
      }), o.Z.addRelationship({
        userId: t.id,
        friendToken: n,
        context: {
          location: O
        }
      })
    }
  })
}