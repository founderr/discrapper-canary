"use strict";
s.r(t), s.d(t, {
  SearchState: function() {
    return n
  },
  getSearchState: function() {
    return c
  },
  openMemberProfile: function() {
    return d
  },
  useContextMenuModerateRoles: function() {
    return A
  },
  useContextMenuModerateUser: function() {
    return I
  },
  useHighestRole: function() {
    return L
  }
});
var a, n, i = s("470079"),
  E = s("399606"),
  l = s("906732"),
  _ = s("171368"),
  r = s("430824"),
  u = s("594174"),
  o = s("91047"),
  T = s("981631");
let d = (e, t) => {
  let {
    guildId: s,
    userId: a,
    colorRoleId: n
  } = e;
  (0, _.openUserProfileModal)({
    userId: a,
    guildId: s,
    sourceAnalyticsLocations: t,
    roleId: n,
    analyticsLocation: {
      section: T.AnalyticsSections.MEMBER_SAFETY_PAGE,
      object: T.AnalyticsObjects.ACTIONED_BY_USER
    }
  })
};

function A(e, t, s) {
  let {
    analyticsLocations: a
  } = (0, l.default)();
  return i.useCallback(n => {
    if (null == e) return;
    let i = u.default.getUser(e.userId);
    null != i && (n.stopPropagation(), (0, o.openModerateRoleContextMenu)(n, {
      user: i,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : a,
      onCloseContextMenu: s
    }))
  }, [e, a, s, t])
}

function I(e, t, s) {
  let {
    analyticsLocations: a
  } = (0, l.default)();
  return i.useCallback(n => {
    if (null == e) return;
    let i = u.default.getUser(e.userId);
    null != i && (n.stopPropagation(), (0, o.openModerateUserContextMenu)(n, {
      user: i,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : a,
      onCloseContextMenu: s,
      showTransferOwnershipItem: !0
    }))
  }, [e, s, a, t])
}

function L(e) {
  return (0, E.useStateFromStores)([r.default], () => {
    var t;
    if (null == e) return null;
    let s = r.default.getGuild(e.guildId);
    return null == s || null == e.highestRoleId ? null : null !== (t = r.default.getRole(s.id, e.highestRoleId)) && void 0 !== t ? t : null
  }, [e])
}

function c(e, t, s) {
  return t ? 0 : e ? 1 : s <= 0 ? 2 : 3
}(a = n || (n = {}))[a.LOADING = 0] = "LOADING", a[a.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", a[a.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", a[a.SUCCESS_FULL = 3] = "SUCCESS_FULL"