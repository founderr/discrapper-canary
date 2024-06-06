"use strict";
l.r(t), l.d(t, {
  default: function() {
    return C
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
  U = l("228168"),
  A = l("689938"),
  N = l("363175");

function C(e) {
  let {
    user: t,
    currentUser: l,
    displayProfile: a,
    autoFocusNote: C,
    className: R
  } = e, {
    theme: h
  } = (0, p.useUserProfileThemeContext)(), {
    trackUserProfileAction: P
  } = (0, E.useUserProfileAnalyticsContext)(), M = null == a ? void 0 : a.guildId, y = (0, o.useStateFromStores)([S.default], () => null != M ? S.default.getGuild(M) : null), {
    recentGames: j,
    isFetching: F,
    currentUserApplicationIds: L
  } = (0, c.useUserRecentGames)(t.id), O = i.useMemo(() => {
    var e;
    return null !== (e = null == j ? void 0 : j.slice(0, 6)) && void 0 !== e ? e : []
  }, [j]), D = (0, d.useIsUserRecentGamesEnabled)({
    location: "SimplifiedUserProfileModalInfo",
    userId: t.id
  }), b = (0, o.useStateFromStores)([f.default], () => f.default.locale), B = (0, I.default)(t.id);
  return (0, s.jsxs)(r.ScrollerThin, {
    fade: !0,
    className: n()(N.scroller, R),
    children: [(null == a ? void 0 : a.bio) != null && (null == a ? void 0 : a.bio) !== "" && (0, s.jsx)(m.default, {
      userBio: a.bio,
      setLineClamp: !1
    }), null != y && (0, s.jsx)(x.default, {
      user: t,
      currentUser: l,
      guild: y
    }), (0, s.jsx)(v.default, {
      title: A.default.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, s.jsx)(_.default, {
        userId: t.id,
        guildId: null == a ? void 0 : a.guildId,
        tooltipDelay: U.USER_PROFILE_TOOLTIP_DELAY
      })
    }), D && !F && O.length > 0 && (0, s.jsx)(v.default, {
      title: A.default.Messages.LAST_PLAYED_GAMES,
      children: (0, s.jsx)(g.UserProfileRecentGames, {
        userId: t.id,
        recentGames: O,
        currentUserApplicationIds: L
      })
    }), B.length > 0 && (0, s.jsx)(v.default, {
      title: A.default.Messages.CONNECTIONS,
      children: (0, s.jsx)(T.ConnectedUserAccounts, {
        connectedAccounts: B,
        className: N.connections,
        userId: t.id,
        theme: h,
        locale: b
      })
    }), (0, s.jsx)(v.default, {
      title: A.default.Messages.NOTE,
      children: (0, s.jsx)(u.default, {
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