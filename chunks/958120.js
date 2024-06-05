"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("954138"),
  o = n("979264"),
  l = n("699516"),
  u = n("246946"),
  d = n("5192"),
  _ = n("447452"),
  c = n("877485"),
  E = n("741308"),
  I = n("681837"),
  T = n("91433"),
  f = n("724593"),
  S = n("502762"),
  h = n("530"),
  A = n("790711"),
  m = n("580512"),
  N = n("67152"),
  p = n("579285"),
  O = n("287612"),
  C = n("228168"),
  R = n("981631"),
  g = n("153362");

function L(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: L,
    guild: v,
    isHovering: D,
    onOpenProfile: M,
    channelId: y,
    onClose: P
  } = e, {
    moreUserDetailsEnabled: U
  } = (0, _.useSimplifiedProfileExperiment)({
    location: "BiteSizeProfileBody"
  }), {
    originalFriendingEnabled: b,
    improvedFriendingEnabled: G
  } = (0, c.useSimplifiedProfileFriendingExperiment)({
    location: "BiteSizeProfileBody"
  }), w = d.default.getName(null == v ? void 0 : v.id, y, t), k = (0, s.useStateFromStores)([l.default], () => l.default.getRelationshipType(t.id)), B = (0, s.useStateFromStores)([u.default], () => u.default.hidePersonalInformation), V = (0, a.default)("username"), x = r.useMemo(() => ({
    source: R.AnalyticsSections.PROFILE_POPOUT,
    tagUserId: t.id
  }), [t.id]);
  return (0, i.jsxs)("div", {
    className: g.body,
    children: [(0, i.jsx)(h.default, {
      user: t,
      profileType: C.UserProfileTypes.BITE_SIZE,
      onOpenProfile: () => M({
        autoFocusNote: !1
      }),
      usernameIcon: t.hasAvatarForGuild(null == v ? void 0 : v.id) && (0, i.jsx)(A.default, {
        user: t,
        nickname: w
      }),
      nickname: w,
      pronouns: null == L ? void 0 : L.pronouns,
      tags: (0, i.jsx)(E.default, {
        displayProfile: L,
        profileType: C.UserProfileTypes.BITE_SIZE,
        onClose: P
      }),
      nicknameIcons: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(I.default, {
          userId: t.id
        }), (U || b || G) && !B && (0, i.jsx)(f.default, {
          user: t,
          isHovering: D,
          onOpenProfile: () => M({
            autoFocusNote: !0
          })
        })]
      })
    }), (G || b) && k === R.RelationshipTypes.PENDING_INCOMING && (0, i.jsx)(S.default.Overlay, {
      children: (0, i.jsx)(T.default, {
        user: t,
        guildId: null == v ? void 0 : v.id,
        channelId: y,
        className: g.banner
      })
    }), t.id !== n.id && (0, i.jsx)(O.default, {
      user: t,
      onOpenProfile: e => M({
        section: e,
        autoFocusNote: !1
      })
    }), V && (0, i.jsx)(o.default, {
      userId: t.id,
      inline: !1,
      profileViewedAnalytics: x
    }), (U || b || G) && (0, i.jsx)(N.default, {
      user: t,
      bio: null == L ? void 0 : L.bio,
      hidePersonalInformation: B,
      onClose: P
    }), (0, i.jsx)(m.default, {
      user: t,
      guild: v,
      channelId: y,
      onClose: P
    }), null != v && (0, i.jsx)(p.default, {
      user: t,
      currentUser: n,
      guild: v,
      onOpenProfile: () => M({
        autoFocusNote: !1
      })
    })]
  })
}