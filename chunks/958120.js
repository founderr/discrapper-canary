"use strict";
n.r(t), n.d(t, {
  default: function() {
    return O
  }
});
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("954138"),
  o = n("979264"),
  l = n("246946"),
  u = n("5192"),
  d = n("447452"),
  _ = n("741308"),
  c = n("681837"),
  E = n("724593"),
  I = n("530"),
  T = n("790711"),
  f = n("580512"),
  S = n("67152"),
  h = n("579285"),
  A = n("287612"),
  m = n("228168"),
  N = n("981631"),
  p = n("153362");

function O(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: O,
    guild: C,
    isHovering: R,
    onOpenProfile: g,
    channelId: L,
    onClose: v
  } = e, {
    moreUserDetailsEnabled: D
  } = (0, d.useSimplifiedProfileExperiment)({
    location: "BiteSizeProfileBody"
  }), M = u.default.getName(null == C ? void 0 : C.id, L, t), y = (0, s.useStateFromStores)([l.default], () => l.default.hidePersonalInformation), P = (0, a.default)("username"), U = r.useMemo(() => ({
    source: N.AnalyticsSections.PROFILE_POPOUT,
    tagUserId: t.id
  }), [t.id]);
  return (0, i.jsxs)("div", {
    className: p.body,
    children: [(0, i.jsx)(I.default, {
      user: t,
      profileType: m.UserProfileTypes.BITE_SIZE,
      onOpenProfile: () => g({
        autoFocusNote: !1
      }),
      guildId: null == C ? void 0 : C.id,
      usernameIcon: t.hasAvatarForGuild(null == C ? void 0 : C.id) && (0, i.jsx)(T.default, {
        user: t,
        nickname: M
      }),
      pronouns: null == O ? void 0 : O.pronouns,
      tags: (0, i.jsx)(_.default, {
        displayProfile: O,
        profileType: m.UserProfileTypes.BITE_SIZE,
        onClose: v
      }),
      nicknameIcons: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(c.default, {
          userId: t.id
        }), D && !y && (0, i.jsx)(E.default, {
          user: t,
          isHovering: R,
          onOpenProfile: () => g({
            autoFocusNote: !0
          })
        })]
      })
    }), t.id !== n.id && (0, i.jsx)(A.default, {
      user: t,
      onOpenProfile: e => g({
        section: e,
        autoFocusNote: !1
      })
    }), P && (0, i.jsx)(o.default, {
      userId: t.id,
      inline: !1,
      profileViewedAnalytics: U
    }), D && (0, i.jsx)(S.default, {
      user: t,
      bio: null == O ? void 0 : O.bio,
      hidePersonalInformation: y,
      onClose: v
    }), (0, i.jsx)(f.default, {
      user: t,
      guild: C,
      channelId: L,
      onClose: v
    }), null != C && (0, i.jsx)(h.default, {
      user: t,
      currentUser: n,
      guild: C,
      onOpenProfile: () => g({
        autoFocusNote: !1
      })
    })]
  })
}