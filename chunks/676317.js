"use strict";
n.r(t), n.d(t, {
  canCurrentUserManageAutomod: function() {
    return d
  },
  canCurrentUserManageMessageFilters: function() {
    return i
  },
  useCanCurrentUserManageAutomod: function() {
    return o
  },
  useIsUserProfileRuleEnabled: function() {
    return f
  }
});
var u = n("442837"),
  a = n("430824"),
  r = n("496675"),
  l = n("981631");
let s = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.default,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.default,
    u = t.getGuild(e);
  return null != u && n.can(l.Permissions.MANAGE_GUILD, u)
};

function i(e) {
  return null != e && s(e)
}

function d(e) {
  return s(e)
}

function o(e) {
  return (0, u.useStateFromStores)([a.default, r.default], () => s(e, a.default, r.default), [e])
}

function f(e) {
  return (0, u.useStateFromStores)([a.default], () => {
    let t = a.default.getGuild(e);
    return (null == t ? void 0 : t.hasFeature(l.GuildFeatures.COMMUNITY)) || !1
  }, [e])
}