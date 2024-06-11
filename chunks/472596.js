"use strict";
E.r(t), E.d(t, {
  SearchState: function() {
    return s
  },
  getSearchState: function() {
    return N
  },
  openMemberProfile: function() {
    return l
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
var _, s, T = E("470079"),
  a = E("399606"),
  A = E("906732"),
  n = E("171368"),
  I = E("430824"),
  u = E("594174"),
  i = E("91047"),
  L = E("981631");
let l = (e, t) => {
  let {
    guildId: E,
    userId: _,
    colorRoleId: s
  } = e;
  (0, n.openUserProfileModal)({
    userId: _,
    guildId: E,
    sourceAnalyticsLocations: t,
    roleId: s,
    analyticsLocation: {
      section: L.AnalyticsSections.MEMBER_SAFETY_PAGE,
      object: L.AnalyticsObjects.ACTIONED_BY_USER
    }
  })
};

function o(e, t, E) {
  let {
    analyticsLocations: _
  } = (0, A.default)();
  return T.useCallback(s => {
    if (null == e) return;
    let T = u.default.getUser(e.userId);
    null != T && (s.stopPropagation(), (0, i.openModerateRoleContextMenu)(s, {
      user: T,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : _,
      onCloseContextMenu: E
    }))
  }, [e, _, E, t])
}

function r(e, t, E) {
  let {
    analyticsLocations: _
  } = (0, A.default)();
  return T.useCallback(s => {
    if (null == e) return;
    let T = u.default.getUser(e.userId);
    null != T && (s.stopPropagation(), (0, i.openModerateUserContextMenu)(s, {
      user: T,
      guildId: e.guildId,
      analyticsLocations: null != t ? [t] : _,
      onCloseContextMenu: E,
      showTransferOwnershipItem: !0
    }))
  }, [e, E, _, t])
}

function d(e) {
  return (0, a.useStateFromStores)([I.default], () => {
    var t;
    if (null == e) return null;
    let E = I.default.getGuild(e.guildId);
    return null == E || null == e.highestRoleId ? null : null !== (t = I.default.getRole(E.id, e.highestRoleId)) && void 0 !== t ? t : null
  }, [e])
}

function N(e, t, E) {
  return t ? 0 : e ? 1 : E <= 0 ? 2 : 3
}(_ = s || (s = {}))[_.LOADING = 0] = "LOADING", _[_.SUCCESS_STILL_INDEXING = 1] = "SUCCESS_STILL_INDEXING", _[_.SUCCESS_EMPTY = 2] = "SUCCESS_EMPTY", _[_.SUCCESS_FULL = 3] = "SUCCESS_FULL"