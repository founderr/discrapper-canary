"use strict";
n.d(t, {
  Z: function() {
    return C
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
  E = n(785717),
  I = n(318661),
  T = n(502762),
  h = n(544989),
  f = n(481932),
  S = n(195387),
  A = n(272510),
  N = n(171368),
  m = n(958120),
  O = n(215633),
  R = n(23293),
  p = n(228168),
  g = n(689938);

function C(e) {
  let {
    user: t,
    currentUser: n,
    guildId: C,
    channelId: v,
    messageId: L,
    roleId: D,
    closePopout: M,
    setPopoutRef: P,
    disableUserProfileLink: y = __OVERLAY__,
    newAnalyticsLocations: U = []
  } = e, {
    analyticsLocations: b
  } = (0, u.ZP)([...U, l.Z.BITE_SIZE_PROFILE_POPOUT]), G = (0, E.Q1)({
    layout: "BITE_SIZE_POPOUT",
    userId: t.id,
    guildId: C,
    channelId: v,
    messageId: L,
    roleId: D
  }), w = (0, s.e7)([d.Z], () => null != C ? d.Z.getGuild(C) : null), B = (0, s.e7)([c.ZP], () => null != C ? c.ZP.getMember(C, t.id) : null), x = r.useRef(null), k = (0, I.ZP)(t.id, C), V = (0, a.Z)(x);
  r.useEffect(() => {
    null == P || P(null == x ? void 0 : x.current)
  }, [x, P]);
  let Z = e => {
    null == M || M(), (0, N.openUserProfileModal)({
      sourceAnalyticsLocations: b,
      userId: t.id,
      guildId: C,
      channelId: v,
      messageId: L,
      roleId: D,
      ...e
    })
  };
  return (0, i.jsx)(u.Gt, {
    value: b,
    children: (0, i.jsx)(E.Mt, {
      layout: "BITE_SIZE_POPOUT",
      userId: t.id,
      guildId: C,
      channelId: v,
      messageId: L,
      roleId: D,
      shouldTrackViewOnMount: null == B || null != B.fullProfileLoadedTimestamp,
      children: (0, i.jsxs)(o.Dialog, {
        ref: x,
        "aria-label": t.username,
        children: [(0, i.jsxs)(T.Z, {
          user: t,
          displayProfile: k,
          profileType: p.y0.BITE_SIZE,
          children: [(0, i.jsxs)(h.Z, {
            profileType: p.y0.BITE_SIZE,
            children: [(0, i.jsx)(S.Z, {
              user: t,
              guildId: C,
              channelId: v,
              onClose: M
            }), (0, i.jsx)(f.Z, {
              profileType: p.y0.BITE_SIZE,
              user: t
            }), (0, i.jsx)(A.Z, {
              user: t,
              profileType: p.y0.BITE_SIZE,
              guildId: C,
              viewProfileItem: (0, i.jsx)(o.MenuItem, {
                id: "view-profile",
                label: g.Z.Messages.VIEW_FULL_PROFILE,
                action: () => {
                  G({
                    action: "PRESS_VIEW_PROFILE",
                    analyticsLocations: b
                  }), Z()
                }
              })
            })]
          }), (0, i.jsx)(R.Z, {
            user: t,
            displayProfile: k,
            guildId: C,
            channelId: v,
            onOpenProfile: y ? void 0 : Z,
            onClose: M
          }), (0, i.jsx)(m.Z, {
            user: t,
            currentUser: n,
            displayProfile: k,
            guild: w,
            isHovering: V,
            onOpenProfile: Z,
            channelId: v,
            onClose: M
          }), (0, i.jsx)(O.Z, {
            user: t,
            guildId: C,
            channelId: v,
            onClose: M
          })]
        }), (null == k ? void 0 : k.profileEffectId) != null && (0, i.jsx)(_.Z, {
          profileEffectId: null == k ? void 0 : k.profileEffectId,
          isHovering: V
        })]
      })
    })
  })
}