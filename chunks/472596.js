"use strict";
E.r(t), E.d(t, {
  SearchState: function() {
    return _
  },
  getSearchState: function() {
    return N
  },
  openMemberProfile: function() {
    return L
  },
  useContextMenuModerateRoles: function() {
    return o
  },
  useContextMenuModerateUser: function() {
    return r
  },
  useHighestRole: function() {
    return d
  }
});
var s, _, a = E("470079"),
  T = E("399606"),
  n = E("906732"),
  A = E("171368"),
  I = E("430824"),
  u = E("594174"),
  i = E("91047"),
  l = E("981631");
let L = (e, t) => {
  let {
    guildId: E,
    userId: s,
    colorRoleId: _
  } = e;
  (0, A.openUserProfileModal)({
    userId: s,
    guildId: E,
    sourceAnalyticsLocations: t,
    roleId: _,
    analyticsLocation: {
      section: l.AnalyticsSections.MEMBER_SAFETY_PAGE,
      object: l.AnalyticsObjects.ACTIONED_BY_USER
    }
  })
};

function o(e, t, E) {
  let {
    analyticsLocations: s
  } = (0, n.default)();
  return a.useCallback(_ => {
    if (null == e) return;
    let a = u.default.getUser(e.userId);
    null != a && (_.stopPropagation(), (0, i.openModerateRoleContextMenu)(_, {
      user: a,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : s,
      onCloseContextMenu: E
    }))
  }, [e, s, E, t])
}

function r(e, t, E) {
  let {
    analyticsLocations: s
  } = (0, n.default)();
  return a.useCallback(_ => {
    if (null == e) return;
    let a = u.default.getUser(e.userId);
    null != a && (_.stopPropagation(), (0, i.openModerateUserContextMenu)(_, {
      user: a,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : s,
      onCloseContextMenu: E,
      showTransferOwnershipItem: !0
    }))
  }, [e, E, s, t])
}

function d(e) {
  return (0, T.useStateFromStores)([I.default], () => {
    var t;
    if (null == e) return null;
    let E = I.default.getGuild(e.guildId);
    return null == E || null == e.highestRoleId ? null : null !== (t = I.default.getRole(E.id, e.highestRoleId)) && void 0 !== t ? t : null
  }, [e])
}

function N(e, t, E) {
  return t ? 0 : e ? 1 : E <= 0 ? 2 : 3
}(s = _ || (_ = {}))[s.LOADING = 0] = "LOADING", s[s.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", s[s.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", s[s.SUCCESS_FULL = 3] = "SUCCESS_FULL"