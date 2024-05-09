"use strict";
s.r(t), s.d(t, {
  default: function() {
    return h
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
  U = s("192591"),
  A = s("351707"),
  g = s("228168"),
  N = s("689938"),
  C = s("634516");

function h(e) {
  let {
    user: t,
    currentUser: s,
    displayProfile: i,
    autoFocusNote: h,
    className: R
  } = e, {
    theme: p
  } = (0, _.useUserProfileThemeContext)(), {
    trackUserProfileAction: P
  } = (0, m.useUserProfileAnalyticsContext)(), M = null == i ? void 0 : i.guildId, j = (0, r.useStateFromStores)([S.default], () => null != M ? S.default.getGuild(M) : null), {
    recentGames: y,
    isFetching: O,
    currentUserApplicationIds: L
  } = (0, c.useUserRecentGames)(t.id), F = a.useMemo(() => {
    var e;
    return null !== (e = null == y ? void 0 : y.slice(0, 6)) && void 0 !== e ? e : []
  }, [y]), D = (0, d.useIsUserRecentGamesEnabled)({
    location: "SimplifiedUserProfileModalInfo",
    userId: t.id
  }), b = (0, r.useStateFromStores)([f.default], () => f.default.locale), B = (0, I.default)(t.id);
  return (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: n()(C.scroller, R),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsx)(E.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != j && (0, l.jsx)(A.default, {
      user: t,
      currentUser: s,
      guild: j
    }), (0, l.jsx)(U.default, {
      title: N.default.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, l.jsx)(v.default, {
        userId: t.id,
        guildId: null == i ? void 0 : i.guildId,
        tooltipDelay: g.USER_PROFILE_TOOLTIP_DELAY
      })
    }), D && !O && F.length > 0 && (0, l.jsx)(U.default, {
      title: N.default.Messages.LAST_PLAYED_GAMES,
      children: (0, l.jsx)(x.UserProfileRecentGames, {
        userId: t.id,
        recentGames: F,
        currentUserApplicationIds: L
      })
    }), B.length > 0 && (0, l.jsx)(U.default, {
      title: N.default.Messages.CONNECTIONS,
      children: (0, l.jsx)(T.ConnectedUserAccounts, {
        connectedAccounts: B,
        className: C.connections,
        userId: t.id,
        theme: p,
        locale: b
      })
    }), (0, l.jsx)(U.default, {
      title: N.default.Messages.NOTE,
      children: (0, l.jsx)(u.default, {
        userId: t.id,
        className: C.note,
        autoFocus: h,
        onUpdate: () => P({
          action: "SET_NOTE"
        })
      })
    })]
  })
}