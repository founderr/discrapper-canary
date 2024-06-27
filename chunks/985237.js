"use strict";
n.d(t, {
  Z: function() {
    return O
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(442837),
  o = n(481060),
  a = n(727637),
  l = n(100527),
  u = n(906732),
  _ = n(271383),
  c = n(430824),
  d = n(785717),
  E = n(318661),
  I = n(502762),
  T = n(544989),
  h = n(272510),
  f = n(171368),
  S = n(215633),
  A = n(23293),
  N = n(777887),
  m = n(228168);

function O(e) {
  let {
    user: t,
    currentUser: n,
    guildId: O,
    channelId: R,
    messageId: p,
    roleId: g,
    closePopout: C,
    setPopoutRef: v,
    disableUserProfileLink: L = __OVERLAY__,
    newAnalyticsLocations: D = []
  } = e, {
    analyticsLocations: M
  } = (0, u.ZP)([...D, l.Z.BITE_SIZE_PROFILE_POPOUT]), P = (0, E.ZP)(t.id, O), y = (0, s.e7)([c.Z], () => null != O ? c.Z.getGuild(O) : null), U = (0, s.e7)([_.ZP], () => null != O ? _.ZP.getMember(O, t.id) : null), b = r.useRef(null), G = (0, a.Z)(b);
  r.useEffect(() => {
    null == v || v(null == b ? void 0 : b.current)
  }, [b, v]);
  let w = e => {
    null == C || C(), (0, f.openUserProfileModal)({
      sourceAnalyticsLocations: M,
      userId: t.id,
      guildId: O,
      channelId: R,
      messageId: p,
      roleId: g,
      ...e
    })
  };
  return (0, i.jsx)(u.Gt, {
    value: M,
    children: (0, i.jsx)(d.Mt, {
      layout: "BITE_SIZE_POPOUT",
      userId: t.id,
      guildId: O,
      channelId: R,
      messageId: p,
      roleId: g,
      shouldTrackViewOnMount: null == U || null != U.fullProfileLoadedTimestamp,
      children: (0, i.jsx)(o.Dialog, {
        ref: b,
        "aria-label": t.username,
        children: (0, i.jsxs)(I.Z, {
          user: t,
          displayProfile: P,
          profileType: m.y0.BITE_SIZE,
          children: [(0, i.jsx)(T.Z, {
            profileType: m.y0.BITE_SIZE,
            children: (0, i.jsx)(h.Z, {
              user: t,
              profileType: m.y0.BITE_SIZE,
              guildId: O
            })
          }), (0, i.jsx)(A.Z, {
            user: t,
            displayProfile: P,
            guildId: O,
            channelId: R,
            onOpenProfile: L ? void 0 : w
          }), (0, i.jsx)(N.Z, {
            user: t,
            currentUser: n,
            displayProfile: P,
            guild: y,
            isHovering: G,
            onOpenProfile: w,
            channelId: R,
            onClose: C
          }), (0, i.jsx)(S.Z, {
            user: t,
            guildId: O,
            channelId: R,
            onClose: C
          })]
        })
      })
    })
  })
}