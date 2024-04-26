"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
  }
});
var l = s("735250"),
  a = s("470079"),
  i = s("120356"),
  r = s.n(i),
  n = s("442837"),
  o = s("481060"),
  u = s("666520"),
  d = s("761174"),
  c = s("32966"),
  f = s("706454"),
  S = s("430824"),
  m = s("785717"),
  E = s("648067"),
  I = s("588822"),
  v = s("81334"),
  x = s("652853"),
  _ = s("335191"),
  T = s("347949"),
  A = s("144869"),
  N = s("689938"),
  U = s("516264");
let p = e => {
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

function h(e) {
  let {
    user: t,
    currentUser: s,
    displayProfile: i,
    autoFocusNote: h,
    className: j
  } = e, {
    theme: g
  } = (0, x.useUserProfileThemeContext)(), {
    trackUserProfileAction: R
  } = (0, m.useUserProfileAnalyticsContext)(), P = null == i ? void 0 : i.guildId, C = (0, n.useStateFromStores)([S.default], () => null != P ? S.default.getGuild(P) : null), {
    recentGames: M,
    isFetching: y,
    currentUserApplicationIds: O
  } = (0, c.useUserRecentGames)(t.id), L = a.useMemo(() => {
    var e;
    return null !== (e = null == M ? void 0 : M.slice(0, 6)) && void 0 !== e ? e : []
  }, [M]), F = (0, d.useIsUserRecentGamesEnabled)({
    location: "SimplifiedUserProfileModalInfo",
    userId: t.id
  }), D = (0, n.useStateFromStores)([f.default], () => f.default.locale), b = (0, E.default)(t.id);
  return (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: r()(U.scroller, j),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsx)(I.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != C && (0, l.jsx)(p, {
      title: N.default.Messages.ROLES,
      children: (0, l.jsx)(A.default, {
        user: t,
        currentUser: s,
        guild: C
      })
    }), (0, l.jsx)(v.default, {
      className: U.section,
      userId: t.id,
      guildId: null == i ? void 0 : i.guildId,
      headingVariant: "text-xs/semibold"
    }), F && !y && L.length > 0 && (0, l.jsx)(p, {
      title: N.default.Messages.LAST_PLAYED_GAMES,
      children: (0, l.jsx)(T.UserProfileRecentGames, {
        userId: t.id,
        recentGames: L,
        currentUserApplicationIds: O
      })
    }), b.length > 0 && (0, l.jsx)(p, {
      title: N.default.Messages.CONNECTIONS,
      children: (0, l.jsx)(_.ConnectedUserAccounts, {
        connectedAccounts: b,
        className: U.connections,
        userId: t.id,
        theme: g,
        locale: D
      })
    }), (0, l.jsx)(p, {
      title: N.default.Messages.NOTE,
      children: (0, l.jsx)(u.default, {
        userId: t.id,
        className: U.note,
        autoFocus: h,
        onUpdate: () => R({
          action: "SET_NOTE"
        })
      })
    })]
  })
}