"use strict";
n.d(t, {
  Z: function() {
    return v
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(727637),
  l = n(100527),
  u = n(906732),
  _ = n(680295),
  c = n(271383),
  d = n(430824),
  E = n(877485),
  I = n(785717),
  T = n(318661),
  h = n(502762),
  f = n(544989),
  S = n(481932),
  A = n(195387),
  N = n(272510),
  m = n(171368),
  O = n(958120),
  p = n(215633),
  R = n(23293),
  g = n(228168),
  C = n(689938);

function v(e) {
  let {
    user: t,
    currentUser: n,
    guildId: v,
    channelId: L,
    messageId: D,
    roleId: M,
    closePopout: P,
    setPopoutRef: y,
    disableUserProfileLink: U = __OVERLAY__,
    newAnalyticsLocations: b = []
  } = e, {
    originalFriendingEnabled: G
  } = (0, E.V)({
    location: "BiteSizeProfilePopout"
  }), {
    analyticsLocations: w
  } = (0, u.ZP)([...b, l.Z.BITE_SIZE_PROFILE_POPOUT]), x = (0, I.Q1)({
    layout: "BITE_SIZE_POPOUT",
    userId: t.id,
    guildId: v,
    channelId: L,
    messageId: D,
    roleId: M
  }), B = (0, s.e7)([d.Z], () => null != v ? d.Z.getGuild(v) : null), k = (0, s.e7)([c.ZP], () => null != v ? c.ZP.getMember(v, t.id) : null), V = r.useRef(null), Z = (0, T.ZP)(t.id, v), H = (0, a.Z)(V);
  r.useEffect(() => {
    null == y || y(null == V ? void 0 : V.current)
  }, [V, y]);
  let F = e => {
    null == P || P(), (0, m.openUserProfileModal)({
      sourceAnalyticsLocations: w,
      userId: t.id,
      guildId: v,
      channelId: L,
      messageId: D,
      roleId: M,
      ...e
    })
  };
  return (0, i.jsx)(u.Gt, {
    value: w,
    children: (0, i.jsx)(I.Mt, {
      layout: "BITE_SIZE_POPOUT",
      userId: t.id,
      guildId: v,
      channelId: L,
      messageId: D,
      roleId: M,
      shouldTrackViewOnMount: null == k || null != k.fullProfileLoadedTimestamp,
      children: (0, i.jsxs)(o.Dialog, {
        ref: V,
        "aria-label": t.username,
        children: [(0, i.jsxs)(h.Z, {
          user: t,
          displayProfile: Z,
          profileType: g.y0.BITE_SIZE,
          children: [(0, i.jsxs)(f.Z, {
            profileType: g.y0.BITE_SIZE,
            children: [(0, i.jsx)(A.Z, {
              user: t,
              guildId: v,
              channelId: L,
              onClose: P
            }), (0, i.jsx)(S.Z, {
              profileType: g.y0.BITE_SIZE,
              user: t,
              acceptFriendRequestColor: G ? o.tokens.colors.BUTTON_OUTLINE_POSITIVE_BORDER : null
            }), (0, i.jsx)(N.Z, {
              user: t,
              profileType: g.y0.BITE_SIZE,
              guildId: v,
              viewProfileItem: (0, i.jsx)(o.MenuItem, {
                id: "view-profile",
                label: C.Z.Messages.VIEW_FULL_PROFILE,
                action: () => {
                  x({
                    action: "PRESS_VIEW_PROFILE",
                    analyticsLocations: w
                  }), F()
                }
              })
            })]
          }), (0, i.jsx)(R.Z, {
            user: t,
            displayProfile: Z,
            guildId: v,
            channelId: L,
            onOpenProfile: U ? void 0 : F,
            onClose: P
          }), (0, i.jsx)(O.Z, {
            user: t,
            currentUser: n,
            displayProfile: Z,
            guild: B,
            isHovering: H,
            onOpenProfile: F,
            channelId: L,
            onClose: P
          }), (0, i.jsx)(p.Z, {
            user: t,
            guildId: v,
            channelId: L,
            onClose: P
          })]
        }), (null == Z ? void 0 : Z.profileEffectId) != null && (0, i.jsx)(_.Z, {
          profileEffectId: null == Z ? void 0 : Z.profileEffectId,
          isHovering: H
        })]
      })
    })
  })
}