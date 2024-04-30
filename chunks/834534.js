"use strict";
s.r(t), s.d(t, {
  default: function() {
    return g
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  n = s.n(i),
  r = s("442837"),
  o = s("481060"),
  u = s("666520"),
  d = s("761174"),
  c = s("32966"),
  f = s("706454"),
  S = s("430824"),
  m = s("785717"),
  v = s("648067"),
  I = s("588822"),
  E = s("81334"),
  x = s("652853"),
  A = s("335191"),
  _ = s("347949"),
  T = s("144869"),
  N = s("689938"),
  U = s("634516");
let C = e => {
  let {
    title: t,
    children: s
  } = e;
  return (0, l.jsxs)("section", {
    className: U.section,
    children: [(0, l.jsx)(o.Heading, {
      variant: "text-xs/semibold",
      children: t
    }), s]
  })
};

function g(e) {
  let {
    user: t,
    currentUser: s,
    displayProfile: i,
    autoFocusNote: g,
    className: h
  } = e, {
    theme: p
  } = (0, x.useUserProfileThemeContext)(), {
    trackUserProfileAction: j
  } = (0, m.useUserProfileAnalyticsContext)(), R = null == i ? void 0 : i.guildId, P = (0, r.useStateFromStores)([S.default], () => null != R ? S.default.getGuild(R) : null), {
    recentGames: M,
    isFetching: y,
    currentUserApplicationIds: O
  } = (0, c.useUserRecentGames)(t.id), L = a.useMemo(() => {
    var e;
    return null !== (e = null == M ? void 0 : M.slice(0, 6)) && void 0 !== e ? e : []
  }, [M]), F = (0, d.useIsUserRecentGamesEnabled)({
    location: "SimplifiedUserProfileModalInfo",
    userId: t.id
  }), D = (0, r.useStateFromStores)([f.default], () => f.default.locale), b = (0, v.default)(t.id);
  return (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: n()(U.scroller, h),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsx)(I.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != P && (0, l.jsx)(C, {
      title: N.default.Messages.ROLES,
      children: (0, l.jsx)(T.default, {
        user: t,
        currentUser: s,
        guild: P
      })
    }), (0, l.jsx)(E.default, {
      className: U.section,
      userId: t.id,
      guildId: null == i ? void 0 : i.guildId,
      headingVariant: "text-xs/semibold"
    }), F && !y && L.length > 0 && (0, l.jsx)(C, {
      title: N.default.Messages.LAST_PLAYED_GAMES,
      children: (0, l.jsx)(_.UserProfileRecentGames, {
        userId: t.id,
        recentGames: L,
        currentUserApplicationIds: O
      })
    }), b.length > 0 && (0, l.jsx)(C, {
      title: N.default.Messages.CONNECTIONS,
      children: (0, l.jsx)(A.ConnectedUserAccounts, {
        connectedAccounts: b,
        className: U.connections,
        userId: t.id,
        theme: p,
        locale: D
      })
    }), (0, l.jsx)(C, {
      title: N.default.Messages.NOTE,
      children: (0, l.jsx)(u.default, {
        userId: t.id,
        className: U.note,
        autoFocus: g,
        onUpdate: () => j({
          action: "SET_NOTE"
        })
      })
    })]
  })
}