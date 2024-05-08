"use strict";
s.r(t), s.d(t, {
  default: function() {
    return C
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
  E = s("588822"),
  v = s("81334"),
  _ = s("652853"),
  T = s("335191"),
  x = s("347949"),
  N = s("192591"),
  g = s("351707"),
  A = s("689938"),
  U = s("634516");

function C(e) {
  let {
    user: t,
    currentUser: s,
    displayProfile: i,
    autoFocusNote: C,
    className: h
  } = e, {
    theme: p
  } = (0, _.useUserProfileThemeContext)(), {
    trackUserProfileAction: R
  } = (0, m.useUserProfileAnalyticsContext)(), M = null == i ? void 0 : i.guildId, P = (0, r.useStateFromStores)([S.default], () => null != M ? S.default.getGuild(M) : null), {
    recentGames: j,
    isFetching: y,
    currentUserApplicationIds: O
  } = (0, c.useUserRecentGames)(t.id), L = a.useMemo(() => {
    var e;
    return null !== (e = null == j ? void 0 : j.slice(0, 6)) && void 0 !== e ? e : []
  }, [j]), F = (0, d.useIsUserRecentGamesEnabled)({
    location: "SimplifiedUserProfileModalInfo",
    userId: t.id
  }), D = (0, r.useStateFromStores)([f.default], () => f.default.locale), b = (0, I.default)(t.id);
  return (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: n()(U.scroller, h),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsx)(E.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != P && (0, l.jsx)(g.default, {
      user: t,
      currentUser: s,
      guild: P
    }), (0, l.jsx)(N.default, {
      title: A.default.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, l.jsx)(v.default, {
        userId: t.id,
        guildId: null == i ? void 0 : i.guildId
      })
    }), F && !y && L.length > 0 && (0, l.jsx)(N.default, {
      title: A.default.Messages.LAST_PLAYED_GAMES,
      children: (0, l.jsx)(x.UserProfileRecentGames, {
        userId: t.id,
        recentGames: L,
        currentUserApplicationIds: O
      })
    }), b.length > 0 && (0, l.jsx)(N.default, {
      title: A.default.Messages.CONNECTIONS,
      children: (0, l.jsx)(T.ConnectedUserAccounts, {
        connectedAccounts: b,
        className: U.connections,
        userId: t.id,
        theme: p,
        locale: D
      })
    }), (0, l.jsx)(N.default, {
      title: A.default.Messages.NOTE,
      children: (0, l.jsx)(u.default, {
        userId: t.id,
        className: U.note,
        autoFocus: C,
        onUpdate: () => R({
          action: "SET_NOTE"
        })
      })
    })]
  })
}