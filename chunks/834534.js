"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
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
  E = s("648067"),
  I = s("588822"),
  _ = s("81334"),
  v = s("652853"),
  T = s("335191"),
  A = s("347949"),
  g = s("192591"),
  U = s("351707"),
  x = s("228168"),
  N = s("689938"),
  C = s("363175");

function p(e) {
  let {
    user: t,
    currentUser: s,
    displayProfile: i,
    autoFocusNote: p,
    className: h
  } = e, {
    theme: R
  } = (0, v.useUserProfileThemeContext)(), {
    trackUserProfileAction: P
  } = (0, m.useUserProfileAnalyticsContext)(), M = null == i ? void 0 : i.guildId, j = (0, r.useStateFromStores)([S.default], () => null != M ? S.default.getGuild(M) : null), {
    recentGames: L,
    isFetching: y,
    currentUserApplicationIds: O
  } = (0, c.useUserRecentGames)(t.id), F = a.useMemo(() => {
    var e;
    return null !== (e = null == L ? void 0 : L.slice(0, 6)) && void 0 !== e ? e : []
  }, [L]), D = (0, d.useIsUserRecentGamesEnabled)({
    location: "SimplifiedUserProfileModalInfo",
    userId: t.id
  }), b = (0, r.useStateFromStores)([f.default], () => f.default.locale), B = (0, E.default)(t.id);
  return (0, l.jsxs)(o.ScrollerThin, {
    fade: !0,
    className: n()(C.scroller, h),
    children: [(null == i ? void 0 : i.bio) != null && (null == i ? void 0 : i.bio) !== "" && (0, l.jsx)(I.default, {
      userBio: i.bio,
      setLineClamp: !1
    }), null != j && (0, l.jsx)(U.default, {
      user: t,
      currentUser: s,
      guild: j
    }), (0, l.jsx)(g.default, {
      title: N.default.Messages.USER_PROFILE_MEMBER_SINCE,
      children: (0, l.jsx)(_.default, {
        userId: t.id,
        guildId: null == i ? void 0 : i.guildId,
        tooltipDelay: x.USER_PROFILE_TOOLTIP_DELAY
      })
    }), D && !y && F.length > 0 && (0, l.jsx)(g.default, {
      title: N.default.Messages.LAST_PLAYED_GAMES,
      children: (0, l.jsx)(A.UserProfileRecentGames, {
        userId: t.id,
        recentGames: F,
        currentUserApplicationIds: O
      })
    }), B.length > 0 && (0, l.jsx)(g.default, {
      title: N.default.Messages.CONNECTIONS,
      children: (0, l.jsx)(T.ConnectedUserAccounts, {
        connectedAccounts: B,
        className: C.connections,
        userId: t.id,
        theme: R,
        locale: b
      })
    }), (0, l.jsx)(g.default, {
      title: N.default.Messages.NOTE,
      children: (0, l.jsx)(u.default, {
        userId: t.id,
        className: C.note,
        autoFocus: p,
        onUpdate: () => P({
          action: "SET_NOTE"
        })
      })
    })]
  })
}