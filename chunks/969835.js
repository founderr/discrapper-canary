"use strict";
n.d(t, {
  Z: function() {
    return L
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
  E = n(594174),
  I = n(877485),
  T = n(785717),
  h = n(318661),
  S = n(502762),
  f = n(544989),
  N = n(481932),
  A = n(195387),
  m = n(272510),
  O = n(171368),
  R = n(958120),
  p = n(215633),
  g = n(23293),
  C = n(228168),
  v = n(689938);

function L(e) {
  let {
    user: t,
    guildId: n,
    channelId: L,
    messageId: D,
    roleId: M,
    closePopout: P,
    setPopoutRef: y,
    disableUserProfileLink: U = __OVERLAY__,
    newAnalyticsLocations: b = []
  } = e, {
    originalFriendingEnabled: G
  } = (0, I.V)({
    location: "BiteSizeProfilePopout"
  }), {
    analyticsLocations: w
  } = (0, u.ZP)([...b, l.Z.BITE_SIZE_PROFILE_POPOUT]), k = (0, T.Q1)({
    layout: "BITE_SIZE_POPOUT",
    userId: t.id,
    guildId: n,
    channelId: L,
    messageId: D,
    roleId: M
  }), B = (0, s.e7)([E.default], () => E.default.getCurrentUser()), x = (0, s.e7)([d.Z], () => null != n ? d.Z.getGuild(n) : null), V = (0, s.e7)([c.ZP], () => null != n ? c.ZP.getMember(n, t.id) : null), Z = r.useRef(null), H = (0, h.ZP)(t.id, n), F = (0, a.Z)(Z);
  r.useEffect(() => {
    null == y || y(null == Z ? void 0 : Z.current)
  }, [Z, y]);
  let Y = e => {
    null == P || P(), (0, O.openUserProfileModal)({
      sourceAnalyticsLocations: w,
      userId: t.id,
      guildId: n,
      channelId: L,
      messageId: D,
      roleId: M,
      ...e
    })
  };
  return null == B ? null : (0, i.jsx)(u.Gt, {
    value: w,
    children: (0, i.jsx)(T.Mt, {
      layout: "BITE_SIZE_POPOUT",
      userId: t.id,
      guildId: n,
      channelId: L,
      messageId: D,
      roleId: M,
      shouldTrackViewOnMount: null == V || null != V.fullProfileLoadedTimestamp,
      children: (0, i.jsxs)(o.Dialog, {
        ref: Z,
        "aria-label": t.username,
        children: [(0, i.jsxs)(S.Z, {
          user: t,
          displayProfile: H,
          profileType: C.y0.BITE_SIZE,
          children: [(0, i.jsxs)(f.Z, {
            profileType: C.y0.BITE_SIZE,
            children: [(0, i.jsx)(A.Z, {
              user: t,
              guildId: n,
              channelId: L,
              onClose: P
            }), (0, i.jsx)(N.Z, {
              profileType: C.y0.BITE_SIZE,
              user: t,
              acceptFriendRequestColor: G ? o.tokens.colors.BUTTON_OUTLINE_POSITIVE_BORDER : null
            }), (0, i.jsx)(m.Z, {
              user: t,
              profileType: C.y0.BITE_SIZE,
              guildId: n,
              viewProfileItem: (0, i.jsx)(o.MenuItem, {
                id: "view-profile",
                label: v.Z.Messages.VIEW_FULL_PROFILE,
                action: () => {
                  k({
                    action: "PRESS_VIEW_PROFILE",
                    analyticsLocations: w
                  }), Y()
                }
              })
            })]
          }), (0, i.jsx)(g.Z, {
            user: t,
            displayProfile: H,
            guildId: n,
            channelId: L,
            onOpenProfile: U ? void 0 : Y
          }), (0, i.jsx)(R.Z, {
            user: t,
            currentUser: B,
            displayProfile: H,
            guild: x,
            isHovering: F,
            onOpenProfile: Y,
            channelId: L,
            onClose: P
          }), (0, i.jsx)(p.Z, {
            user: t,
            guildId: n,
            channelId: L,
            onClose: P
          })]
        }), (null == H ? void 0 : H.profileEffectId) != null && (0, i.jsx)(_.Z, {
          profileEffectId: null == H ? void 0 : H.profileEffectId,
          isHovering: F
        })]
      })
    })
  })
}