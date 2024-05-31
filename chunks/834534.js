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
  E = s("785717"),
  m = s("648067"),
  I = s("588822"),
  _ = s("81334"),
  v = s("652853"),
  g = s("335191"),
  T = s("347949"),
  A = s("192591"),
  x = s("351707"),
  U = s("228168"),
  p = s("689938"),
  N = s("363175");

function C(e) {
  let {
    user: t,
    currentUser: s,
    displayProfile: i,
    autoFocusNote: C,
    className: h
  } = e, {
    theme: R
  } = (0, v.useUserProfileThemeContext)(), {
    trackUserProfileAction: P
  } = (0, E.useUserProfileAnalyticsContext)(), M = null == i ? void 0 : i.guildId, j = (0, r.useStateFromStores)([S.default], () => null != M ? S.default.getGuild(M) : null), {
    recentGames: y,
    isFetching: L,
    currentUserApplicationIds: O
  } = (0, c.useUserRecentGames)(t.id), F = a.useMemo(() => {
    var e;
    return null !== (e = null == y ? void 0 : y.slice(0, 6)) && void 0 !== e ? e : []
  }, [y]), D = (0, d.useIsUserRecentGamesEnabled)({
    location: "SimplifiedUserProfileModalInfo",
    userId: t.id
  }), b = (0, r.useStateFromStores)([f.default], () => f.default.locale), B = (0, m.default)(t.id);
  return (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: n()(N.scroller, h),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsx)(I.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != j && (0, l.jsx)(x.default, {
      user: t,
      currentUser: s,
      guild: j
    }), (0, l.jsx)(A.default, {
      title: p.default.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, l.jsx)(_.default, {
        userId: t.id,
        guildId: null == i ? void 0 : i.guildId,
        tooltipDelay: U.USER_PROFILE_TOOLTIP_DELAY
      })
    }), D && !L && F.length > 0 && (0, l.jsx)(A.default, {
      title: p.default.Messages.LAST_PLAYED_GAMES,
      children: (0, l.jsx)(T.UserProfileRecentGames, {
        userId: t.id,
        recentGames: F,
        currentUserApplicationIds: O
      })
    }), B.length > 0 && (0, l.jsx)(A.default, {
      title: p.default.Messages.CONNECTIONS,
      children: (0, l.jsx)(g.ConnectedUserAccounts, {
        connectedAccounts: B,
        className: N.connections,
        userId: t.id,
        theme: R,
        locale: b
      })
    }), (0, l.jsx)(A.default, {
      title: p.default.Messages.NOTE,
      children: (0, l.jsx)(u.default, {
        userId: t.id,
        className: N.note,
        autoFocus: C,
        onUpdate: () => P({
          action: "SET_NOTE"
        })
      })
    })]
  })
}