"use strict";
l.r(t), l.d(t, {
  default: function() {
    return U
  }
});
var s = l("735250"),
  i = l("470079"),
  a = l("120356"),
  n = l.n(a),
  o = l("442837"),
  r = l("481060"),
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
  p = l("652853"),
  T = l("335191"),
  g = l("347949"),
  x = l("351707"),
  A = l("228168"),
  C = l("689938"),
  N = l("363175");

function U(e) {
  let {
    user: t,
    currentUser: l,
    displayProfile: a,
    autoFocusNote: U,
    className: R
  } = e, {
    theme: h
  } = (0, p.useUserProfileThemeContext)(), {
    trackUserProfileAction: P
  } = (0, E.useUserProfileAnalyticsContext)(), M = null == a ? void 0 : a.guildId, j = (0, o.useStateFromStores)([S.default], () => null != M ? S.default.getGuild(M) : null), {
    recentGames: y,
    isFetching: F,
    currentUserApplicationIds: O
  } = (0, c.useUserRecentGames)(t.id), L = i.useMemo(() => {
    var e;
    return null !== (e = null == y ? void 0 : y.slice(0, 6)) && void 0 !== e ? e : []
  }, [y]), D = (0, d.useIsUserRecentGamesEnabled)({
    location: "SimplifiedUserProfileModalInfo",
    userId: t.id
  }), b = (0, o.useStateFromStores)([f.default], () => f.default.locale), B = (0, I.default)(t.id);
  return (0, s.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: n()(N.scroller, R),
    children: [(null == a ? void 0 : a.bio) != null && (null == a ? void 0 : a.bio) !== "" && (0, s.jsx)(m.default, {
      userBio: a.bio,
      setLineClamp: !1
    }), null != j && (0, s.jsx)(x.default, {
      user: t,
      currentUser: l,
      guild: j
    }), (0, s.jsx)(v.default, {
      title: C.default.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, s.jsx)(_.default, {
        userId: t.id,
        guildId: null == a ? void 0 : a.guildId,
        tooltipDelay: A.USER_PROFILE_TOOLTIP_DELAY
      })
    }), D && !F && L.length > 0 && (0, s.jsx)(v.default, {
      title: C.default.Messages.LAST_PLAYED_GAMES,
      children: (0, s.jsx)(g.UserProfileRecentGames, {
        userId: t.id,
        recentGames: L,
        currentUserApplicationIds: O
      })
    }), B.length > 0 && (0, s.jsx)(v.default, {
      title: C.default.Messages.CONNECTIONS,
      children: (0, s.jsx)(T.ConnectedUserAccounts, {
        connectedAccounts: B,
        className: N.connections,
        userId: t.id,
        theme: h,
        locale: b
      })
    }), (0, s.jsx)(v.default, {
      title: C.default.Messages.NOTE,
      children: (0, s.jsx)(u.default, {
        userId: t.id,
        className: N.note,
        autoFocus: U,
        onUpdate: () => P({
          action: "SET_NOTE"
        })
      })
    })]
  })
}