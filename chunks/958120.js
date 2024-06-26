"use strict";
n.d(t, {
  Z: function() {
    return g
  }
});
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(954138),
  a = n(979264),
  l = n(699516),
  u = n(246946),
  _ = n(5192),
  c = n(741308),
  d = n(681837),
  E = n(91433),
  I = n(724593),
  T = n(502762),
  h = n(530),
  f = n(790711),
  S = n(580512),
  N = n(67152),
  A = n(579285),
  m = n(287612),
  O = n(228168),
  p = n(981631),
  R = n(472375);

function g(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: g,
    guild: C,
    isHovering: v,
    onOpenProfile: L,
    channelId: D,
    onClose: M
  } = e, P = _.ZP.getName(null == C ? void 0 : C.id, D, t), y = (0, s.e7)([l.Z], () => l.Z.getRelationshipType(t.id)), U = (0, s.e7)([u.Z], () => u.Z.hidePersonalInformation), b = (0, o.Z)("username"), G = r.useMemo(() => ({
    source: p.jXE.PROFILE_POPOUT,
    tagUserId: t.id
  }), [t.id]);
  return (0, i.jsxs)("div", {
    className: R.body,
    children: [(0, i.jsx)(h.Z, {
      user: t,
      profileType: O.y0.BITE_SIZE,
      onOpenProfile: L,
      usernameIcon: t.hasAvatarForGuild(null == C ? void 0 : C.id) && (0, i.jsx)(f.Z, {
        user: t,
        nickname: P
      }),
      nickname: P,
      pronouns: null == g ? void 0 : g.pronouns,
      tags: (0, i.jsx)(c.Z, {
        displayProfile: g,
        profileType: O.y0.BITE_SIZE,
        onClose: M
      }),
      nicknameIcons: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(d.Z, {
          userId: t.id
        }), !U && (0, i.jsx)(I.Z, {
          user: t,
          isHovering: v,
          onOpenProfile: () => L({
            subsection: O.Tb.NOTE
          })
        })]
      })
    }), y === p.OGo.PENDING_INCOMING && (0, i.jsx)(T.Z.Overlay, {
      children: (0, i.jsx)(E.Z, {
        user: t,
        guildId: null == C ? void 0 : C.id,
        channelId: D
      })
    }), t.id !== n.id && (0, i.jsx)(m.Z, {
      user: t,
      onOpenProfile: e => L({
        section: e
      })
    }), b && (0, i.jsx)(a.ZP, {
      userId: t.id,
      inline: !1,
      profileViewedAnalytics: G
    }), (0, i.jsx)(N.Z, {
      user: t,
      bio: null == g ? void 0 : g.bio,
      hidePersonalInformation: U,
      onClose: M
    }), (0, i.jsx)(S.Z, {
      user: t,
      guild: C,
      channelId: D,
      onClose: M
    }), null != C && (0, i.jsx)(A.Z, {
      user: t,
      currentUser: n,
      guild: C,
      onOpenProfile: () => L({
        subsection: O.Tb.ROLES
      })
    })]
  })
}