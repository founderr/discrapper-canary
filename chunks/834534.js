"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
});
var s = l("735250"),
  a = l("470079"),
  i = l("120356"),
  n = l.n(i),
  r = l("442837"),
  o = l("481060"),
  u = l("666520"),
  d = l("761174"),
  c = l("32966"),
  f = l("706454"),
  S = l("430824"),
  E = l("785717"),
  I = l("648067"),
  m = l("588822"),
  _ = l("900927"),
  v = l("678738"),
  T = l("652853"),
  g = l("335191"),
  A = l("347949"),
  p = l("351707"),
  U = l("228168"),
  x = l("689938"),
  C = l("363175");

function N(e) {
  let {
    user: t,
    currentUser: l,
    displayProfile: i,
    autoFocusNote: N,
    className: h
  } = e, {
    theme: R
  } = (0, T.useUserProfileThemeContext)(), {
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
  }), b = (0, r.useStateFromStores)([f.default], () => f.default.locale), B = (0, I.default)(t.id);
  return (0, s.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: n()(C.scroller, h),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, s.jsx)(m.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != j && (0, s.jsx)(p.default, {
      user: t,
      currentUser: l,
      guild: j
    }), (0, s.jsx)(v.default, {
      title: x.default.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, s.jsx)(_.default, {
        userId: t.id,
        guildId: null == i ? void 0 : i.guildId,
        tooltipDelay: U.USER_PROFILE_TOOLTIP_DELAY
      })
    }), D && !L && F.length > 0 && (0, s.jsx)(v.default, {
      title: x.default.Messages.LAST_PLAYED_GAMES,
      children: (0, s.jsx)(A.UserProfileRecentGames, {
        userId: t.id,
        recentGames: F,
        currentUserApplicationIds: O
      })
    }), B.length > 0 && (0, s.jsx)(v.default, {
      title: x.default.Messages.CONNECTIONS,
      children: (0, s.jsx)(g.ConnectedUserAccounts, {
        connectedAccounts: B,
        className: C.connections,
        userId: t.id,
        theme: R,
        locale: b
      })
    }), (0, s.jsx)(v.default, {
      title: x.default.Messages.NOTE,
      children: (0, s.jsx)(u.default, {
        userId: t.id,
        className: C.note,
        autoFocus: N,
        onUpdate: () => P({
          action: "SET_NOTE"
        })
      })
    })]
  })
}