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
  I = s("648067"),
  v = s("588822"),
  E = s("81334"),
  x = s("652853"),
  _ = s("335191"),
  A = s("347949"),
  U = s("192591"),
  T = s("351707"),
  N = s("689938"),
  C = s("634516");

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
    trackUserProfileAction: R
  } = (0, m.useUserProfileAnalyticsContext)(), j = null == i ? void 0 : i.guildId, P = (0, r.useStateFromStores)([S.default], () => null != j ? S.default.getGuild(j) : null), {
    recentGames: M,
    isFetching: y,
    currentUserApplicationIds: O
  } = (0, c.useUserRecentGames)(t.id), L = a.useMemo(() => {
    var e;
    return null !== (e = null == M ? void 0 : M.slice(0, 6)) && void 0 !== e ? e : []
  }, [M]), F = (0, d.useIsUserRecentGamesEnabled)({
    location: "SimplifiedUserProfileModalInfo",
    userId: t.id
  }), D = (0, r.useStateFromStores)([f.default], () => f.default.locale), b = (0, I.default)(t.id);
  return (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: n()(C.scroller, h),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsx)(v.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != P && (0, l.jsx)(T.default, {
      user: t,
      currentUser: s,
      guild: P
    }), (0, l.jsx)(E.default, {
      className: C.section,
      userId: t.id,
      guildId: null == i ? void 0 : i.guildId,
      headingVariant: "text-xs/semibold"
    }), F && !y && L.length > 0 && (0, l.jsx)(U.default, {
      title: N.default.Messages.LAST_PLAYED_GAMES,
      children: (0, l.jsx)(A.UserProfileRecentGames, {
        userId: t.id,
        recentGames: L,
        currentUserApplicationIds: O
      })
    }), b.length > 0 && (0, l.jsx)(U.default, {
      title: N.default.Messages.CONNECTIONS,
      children: (0, l.jsx)(_.ConnectedUserAccounts, {
        connectedAccounts: b,
        className: C.connections,
        userId: t.id,
        theme: p,
        locale: D
      })
    }), (0, l.jsx)(U.default, {
      title: N.default.Messages.NOTE,
      children: (0, l.jsx)(u.default, {
        userId: t.id,
        className: C.note,
        autoFocus: g,
        onUpdate: () => R({
          action: "SET_NOTE"
        })
      })
    })]
  })
}