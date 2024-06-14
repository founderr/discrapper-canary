"use strict";
n.r(t), n.d(t, {
  default: function() {
    return v
  }
}), n("47120");
var i = n("735250"),
  r = n("470079"),
  s = n("442837"),
  a = n("481060"),
  o = n("727637"),
  l = n("100527"),
  u = n("906732"),
  d = n("680295"),
  _ = n("271383"),
  c = n("430824"),
  E = n("594174"),
  I = n("877485"),
  T = n("785717"),
  f = n("318661"),
  S = n("502762"),
  h = n("544989"),
  A = n("481932"),
  m = n("195387"),
  N = n("272510"),
  p = n("171368"),
  O = n("958120"),
  C = n("215633"),
  R = n("23293"),
  g = n("228168"),
  L = n("689938");

function v(e) {
  let {
    user: t,
    guildId: n,
    channelId: v,
    messageId: D,
    roleId: M,
    closePopout: y,
    setPopoutRef: P,
    disableUserProfileLink: U = __OVERLAY__,
    newAnalyticsLocations: b = []
  } = e, {
    originalFriendingEnabled: G
  } = (0, I.useSimplifiedProfileFriendingExperiment)({
    location: "BiteSizeProfilePopout"
  }), {
    analyticsLocations: w
  } = (0, u.default)([...b, l.default.BITE_SIZE_PROFILE_POPOUT]), k = (0, T.useTrackUserProfileAction)({
    layout: "BITE_SIZE_POPOUT",
    userId: t.id,
    guildId: n,
    channelId: v,
    messageId: D,
    roleId: M
  }), B = (0, s.useStateFromStores)([E.default], () => E.default.getCurrentUser()), V = (0, s.useStateFromStores)([c.default], () => null != n ? c.default.getGuild(n) : null), x = (0, s.useStateFromStores)([_.default], () => null != n ? _.default.getMember(n, t.id) : null), F = r.useRef(null), H = (0, f.default)(t.id, n), Y = (0, o.default)(F);
  r.useEffect(() => {
    null == P || P(null == F ? void 0 : F.current)
  }, [F, P]);
  let j = e => {
    null == y || y(), (0, p.openUserProfileModal)({
      sourceAnalyticsLocations: w,
      userId: t.id,
      guildId: n,
      channelId: v,
      messageId: D,
      roleId: M,
      ...e
    })
  };
  return null == B ? null : (0, i.jsx)(u.AnalyticsLocationProvider, {
    value: w,
    children: (0, i.jsx)(T.UserProfileAnalyticsProvider, {
      layout: "BITE_SIZE_POPOUT",
      userId: t.id,
      guildId: n,
      channelId: v,
      messageId: D,
      roleId: M,
      shouldTrackViewOnMount: null == x || null != x.fullProfileLoadedTimestamp,
      children: (0, i.jsxs)(a.Dialog, {
        ref: F,
        "aria-label": t.username,
        children: [(0, i.jsxs)(S.default, {
          user: t,
          displayProfile: H,
          profileType: g.UserProfileTypes.BITE_SIZE,
          children: [(0, i.jsxs)(h.default, {
            profileType: g.UserProfileTypes.BITE_SIZE,
            children: [(0, i.jsx)(m.default, {
              user: t,
              guildId: n,
              channelId: v,
              onClose: y
            }), (0, i.jsx)(A.default, {
              profileType: g.UserProfileTypes.BITE_SIZE,
              user: t,
              acceptFriendRequestColor: G ? a.tokens.colors.BUTTON_OUTLINE_POSITIVE_BORDER : null
            }), (0, i.jsx)(N.default, {
              user: t,
              profileType: g.UserProfileTypes.BITE_SIZE,
              guildId: n,
              viewProfileItem: (0, i.jsx)(a.MenuItem, {
                id: "view-profile",
                label: L.default.Messages.VIEW_FULL_PROFILE,
                action: () => {
                  k({
                    action: "PRESS_VIEW_PROFILE",
                    analyticsLocations: w
                  }), j()
                }
              })
            })]
          }), (0, i.jsx)(R.default, {
            user: t,
            displayProfile: H,
            guildId: n,
            channelId: v,
            onOpenProfile: U ? void 0 : j
          }), (0, i.jsx)(O.default, {
            user: t,
            currentUser: B,
            displayProfile: H,
            guild: V,
            isHovering: Y,
            onOpenProfile: j,
            channelId: v,
            onClose: y
          }), (0, i.jsx)(C.default, {
            user: t,
            guildId: n,
            channelId: v,
            onClose: y
          })]
        }), (null == H ? void 0 : H.profileEffectId) != null && (0, i.jsx)(d.default, {
          profileEffectId: null == H ? void 0 : H.profileEffectId,
          isHovering: Y
        })]
      })
    })
  })
}