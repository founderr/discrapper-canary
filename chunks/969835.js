"use strict";
n.r(t), n.d(t, {
  default: function() {
    return D
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
  A = n("301984"),
  m = n("94918"),
  N = n("664794"),
  p = n("171368"),
  O = n("958120"),
  C = n("215633"),
  R = n("23293"),
  g = n("228168"),
  L = n("689938");

function v(e) {
  e.stopPropagation()
}

function D(e) {
  let {
    user: t,
    guildId: n,
    channelId: D,
    messageId: M,
    roleId: y,
    closePopout: P,
    setPopoutRef: U,
    disableUserProfileLink: b = __OVERLAY__,
    newAnalyticsLocations: G = []
  } = e, {
    originalFriendingEnabled: w
  } = (0, I.useSimplifiedProfileFriendingExperiment)({
    location: "BiteSizeProfilePopout"
  }), {
    analyticsLocations: k
  } = (0, u.default)([...G, l.default.BITE_SIZE_PROFILE_POPOUT]), B = (0, T.useTrackUserProfileAction)({
    layout: "BITE_SIZE_POPOUT",
    userId: t.id,
    guildId: n,
    channelId: D,
    messageId: M,
    roleId: y
  }), V = (0, s.useStateFromStores)([E.default], () => E.default.getCurrentUser()), x = (0, s.useStateFromStores)([c.default], () => null != n ? c.default.getGuild(n) : null), F = (0, s.useStateFromStores)([_.default], () => null != n ? _.default.getMember(n, t.id) : null), H = r.useRef(null), Y = (0, f.default)(t.id, n), j = (0, o.default)(H);
  r.useEffect(() => {
    null == U || U(null == H ? void 0 : H.current)
  }, [H, U]);
  let W = e => {
    null == P || P(), (0, p.openUserProfileModal)({
      sourceAnalyticsLocations: k,
      userId: t.id,
      guildId: n,
      channelId: D,
      messageId: M,
      roleId: y,
      ...e
    })
  };
  return null == V ? null : (0, i.jsx)(u.AnalyticsLocationProvider, {
    value: k,
    children: (0, i.jsx)(T.UserProfileAnalyticsProvider, {
      layout: "BITE_SIZE_POPOUT",
      userId: t.id,
      guildId: n,
      channelId: D,
      messageId: M,
      roleId: y,
      shouldTrackViewOnMount: null == F || null != F.fullProfileLoadedTimestamp,
      children: (0, i.jsxs)(a.Dialog, {
        ref: H,
        "aria-label": t.username,
        onClick: v,
        onContextMenu: v,
        children: [(0, i.jsxs)(S.default, {
          user: t,
          displayProfile: Y,
          profileType: g.UserProfileTypes.BITE_SIZE,
          children: [(0, i.jsxs)(h.default, {
            profileType: g.UserProfileTypes.BITE_SIZE,
            children: [(0, i.jsx)(m.default, {
              user: t,
              guildId: n,
              channelId: D,
              onClose: P
            }), (0, i.jsx)(A.default, {
              user: t,
              acceptFriendRequestColor: w ? a.tokens.colors.BUTTON_OUTLINE_POSITIVE_BORDER : null
            }), (0, i.jsx)(N.default, {
              user: t,
              profileType: g.UserProfileTypes.BITE_SIZE,
              guildId: n,
              viewProfileItem: (0, i.jsx)(a.MenuItem, {
                id: "view-profile",
                label: L.default.Messages.VIEW_FULL_PROFILE,
                action: () => {
                  B({
                    action: "PRESS_VIEW_PROFILE",
                    analyticsLocations: k
                  }), W()
                }
              })
            })]
          }), (0, i.jsx)(R.default, {
            user: t,
            displayProfile: Y,
            guildId: n,
            channelId: D,
            onOpenProfile: b ? void 0 : W
          }), (0, i.jsx)(O.default, {
            user: t,
            currentUser: V,
            displayProfile: Y,
            guild: x,
            isHovering: j,
            onOpenProfile: W,
            channelId: D,
            onClose: P
          }), (0, i.jsx)(C.default, {
            user: t,
            guildId: n,
            channelId: D,
            onClose: P
          })]
        }), (null == Y ? void 0 : Y.profileEffectId) != null && (0, i.jsx)(d.default, {
          profileEffectId: null == Y ? void 0 : Y.profileEffectId,
          isHovering: j
        })]
      })
    })
  })
}