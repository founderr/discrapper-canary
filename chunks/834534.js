"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
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
  A = s("347949"),
  N = s("144869"),
  T = s("689938"),
  U = s("516264");
let h = e => {
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

function p(e) {
  let {
    user: t,
    currentUser: s,
    displayProfile: i,
    autoFocusNote: p,
    className: g
  } = e, {
    theme: j
  } = (0, x.useUserProfileThemeContext)(), {
    trackUserProfileAction: R
  } = (0, m.useUserProfileAnalyticsContext)(), P = null == i ? void 0 : i.guildId, M = (0, n.useStateFromStores)([S.default], () => null != P ? S.default.getGuild(P) : null), {
    recentGames: C,
    isFetching: y,
    currentUserApplicationIds: O
  } = (0, c.useUserRecentGames)(t.id), F = a.useMemo(() => {
    var e;
    return null !== (e = null == C ? void 0 : C.slice(0, 6)) && void 0 !== e ? e : []
  }, [C]), L = (0, d.useIsUserRecentGamesEnabled)({
    location: "SimplifiedUserProfileModalInfo",
    userId: t.id
  }), D = (0, n.useStateFromStores)([f.default], () => f.default.locale), b = (0, E.default)(t.id);
  return (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: r()(U.scroller, g),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsx)(I.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != M && (0, l.jsx)(h, {
      title: T.default.Messages.ROLES,
      children: (0, l.jsx)(N.default, {
        user: t,
        currentUser: s,
        guild: M
      })
    }), (0, l.jsx)(v.default, {
      className: U.section,
      userId: t.id,
      guildId: null == i ? void 0 : i.guildId,
      headingVariant: "text-xs/semibold"
    }), L && !y && F.length > 0 && (0, l.jsx)(h, {
      title: T.default.Messages.LAST_PLAYED_GAMES,
      children: (0, l.jsx)(A.UserProfileRecentGames, {
        userId: t.id,
        recentGames: F,
        currentUserApplicationIds: O
      })
    }), b.length > 0 && (0, l.jsx)(h, {
      title: T.default.Messages.CONNECTIONS,
      children: (0, l.jsx)(_.ConnectedUserAccounts, {
        connectedAccounts: b,
        className: U.connections,
        userId: t.id,
        theme: j,
        locale: D
      })
    }), (0, l.jsx)(h, {
      title: T.default.Messages.NOTE,
      children: (0, l.jsx)(u.default, {
        userId: t.id,
        className: U.note,
        autoFocus: p,
        onUpdate: () => R({
          action: "SET_NOTE"
        })
      })
    })]
  })
}