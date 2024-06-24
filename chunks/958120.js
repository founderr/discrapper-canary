"use strict";
n.d(t, {
  Z: function() {
    return v
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
  c = n(447452),
  d = n(877485),
  E = n(741308),
  I = n(681837),
  T = n(91433),
  h = n(724593),
  S = n(502762),
  f = n(530),
  N = n(790711),
  A = n(580512),
  m = n(67152),
  O = n(579285),
  R = n(287612),
  p = n(228168),
  g = n(981631),
  C = n(472375);

function v(e) {
  let {
    user: t,
    currentUser: n,
    displayProfile: v,
    guild: L,
    isHovering: D,
    onOpenProfile: M,
    channelId: P,
    onClose: y
  } = e, {
    moreUserDetailsEnabled: U
  } = (0, c.t)({
    location: "BiteSizeProfileBody"
  }), {
    originalFriendingEnabled: b,
    improvedFriendingEnabled: G
  } = (0, d.V)({
    location: "BiteSizeProfileBody"
  }), w = _.ZP.getName(null == L ? void 0 : L.id, P, t), B = (0, s.e7)([l.Z], () => l.Z.getRelationshipType(t.id)), k = (0, s.e7)([u.Z], () => u.Z.hidePersonalInformation), x = (0, o.Z)("username"), V = r.useMemo(() => ({
    source: g.jXE.PROFILE_POPOUT,
    tagUserId: t.id
  }), [t.id]);
  return (0, i.jsxs)("div", {
    className: C.body,
    children: [(0, i.jsx)(f.Z, {
      user: t,
      profileType: p.y0.BITE_SIZE,
      onOpenProfile: M,
      usernameIcon: t.hasAvatarForGuild(null == L ? void 0 : L.id) && (0, i.jsx)(N.Z, {
        user: t,
        nickname: w
      }),
      nickname: w,
      pronouns: null == v ? void 0 : v.pronouns,
      tags: (0, i.jsx)(E.Z, {
        displayProfile: v,
        profileType: p.y0.BITE_SIZE,
        onClose: y
      }),
      nicknameIcons: (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(I.Z, {
          userId: t.id
        }), (U || b || G) && !k && (0, i.jsx)(h.Z, {
          user: t,
          isHovering: D,
          onOpenProfile: () => M({
            subsection: p.Tb.NOTE
          })
        })]
      })
    }), (G || b) && B === g.OGo.PENDING_INCOMING && (0, i.jsx)(S.Z.Overlay, {
      children: (0, i.jsx)(T.Z, {
        user: t,
        guildId: null == L ? void 0 : L.id,
        channelId: P,
        className: C.friendRequestBanner
      })
    }), t.id !== n.id && (0, i.jsx)(R.Z, {
      user: t,
      onOpenProfile: e => M({
        section: e
      })
    }), x && (0, i.jsx)(a.ZP, {
      userId: t.id,
      inline: !1,
      profileViewedAnalytics: V
    }), (U || b || G) && (0, i.jsx)(m.Z, {
      user: t,
      bio: null == v ? void 0 : v.bio,
      hidePersonalInformation: k,
      onClose: y
    }), (0, i.jsx)(A.Z, {
      user: t,
      guild: L,
      channelId: P,
      onClose: y
    }), null != L && (0, i.jsx)(O.Z, {
      user: t,
      currentUser: n,
      guild: L,
      onOpenProfile: () => M({
        subsection: p.Tb.ROLES
      })
    })]
  })
}