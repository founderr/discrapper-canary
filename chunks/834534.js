"use strict";
s.r(t), s.d(t, {
  default: function() {
    return j
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  o = s.n(i),
  r = s("442837"),
  n = s("481060"),
  u = s("666520"),
  d = s("761174"),
  c = s("32966"),
  f = s("706454"),
  S = s("271383"),
  m = s("430824"),
  E = s("785717"),
  I = s("648067"),
  v = s("588822"),
  x = s("81334"),
  N = s("652853"),
  _ = s("335191"),
  A = s("347949"),
  T = s("144869"),
  U = s("689938"),
  h = s("516264");
let p = e => {
  let {
    title: t,
    children: s
  } = e;
  return (0, l.jsxs)("section", {
    className: h.section,
    children: [(0, l.jsx)(n.Heading, {
      variant: "text-xs/semibold",
      children: t
    }), s]
  })
};

function j(e) {
  let {
    user: t,
    currentUser: s,
    displayProfile: i,
    autoFocusNote: j,
    className: g
  } = e, {
    theme: R
  } = (0, N.useUserProfileThemeContext)(), {
    trackUserProfileAction: P
  } = (0, E.useUserProfileAnalyticsContext)(), C = null == i ? void 0 : i.guildId, M = (0, r.useStateFromStores)([m.default], () => null != C ? m.default.getGuild(C) : null), y = (0, r.useStateFromStores)([S.default], () => {
    var e;
    return null != C ? null === (e = S.default.getMember(C, t.id)) || void 0 === e ? void 0 : e.roles : null
  }), {
    recentGames: O,
    isFetching: L,
    currentUserApplicationIds: F
  } = (0, c.useUserRecentGames)(t.id), D = a.useMemo(() => {
    var e;
    return null !== (e = null == O ? void 0 : O.slice(0, 6)) && void 0 !== e ? e : []
  }, [O]), b = (0, d.useIsUserRecentGamesEnabled)({
    location: "SimplifiedUserProfileModalInfo",
    userId: t.id
  }), B = (0, r.useStateFromStores)([f.default], () => f.default.locale), G = (0, I.default)(t.id);
  return (0, l.jsxs)(n.ScrollerThin, {
    fade: !0,
    className: o()(h.scroller, g),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsx)(v.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != M && null != y && y.length > 0 && (0, l.jsx)(p, {
      title: U.default.Messages.ROLES,
      children: (0, l.jsx)(T.default, {
        user: t,
        currentUser: s,
        guild: M,
        userRoles: y
      })
    }), (0, l.jsx)(x.default, {
      className: h.section,
      userId: t.id,
      guildId: null == i ? void 0 : i.guildId,
      headingVariant: "text-xs/semibold"
    }), b && !L && D.length > 0 && (0, l.jsx)(p, {
      title: U.default.Messages.LAST_PLAYED_GAMES,
      children: (0, l.jsx)(A.UserProfileRecentGames, {
        userId: t.id,
        recentGames: D,
        currentUserApplicationIds: F
      })
    }), G.length > 0 && (0, l.jsx)(p, {
      title: U.default.Messages.CONNECTIONS,
      children: (0, l.jsx)(_.ConnectedUserAccounts, {
        connectedAccounts: G,
        className: h.connections,
        userId: t.id,
        theme: R,
        locale: B
      })
    }), (0, l.jsx)(p, {
      title: U.default.Messages.NOTE,
      children: (0, l.jsx)(u.default, {
        userId: t.id,
        className: h.note,
        autoFocus: j,
        onUpdate: () => P({
          action: "SET_NOTE"
        })
      })
    })]
  })
}