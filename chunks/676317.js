"use strict";
n.r(t), n.d(t, {
  canCurrentUserManageAutomod: function() {
    return d
  },
  canCurrentUserManageMessageFilters: function() {
    return r
  },
  useCanCurrentUserManageAutomod: function() {
    return o
  },
  useIsUserProfileRuleEnabled: function() {
    return c
  }
});
var u = n("442837"),
  l = n("430824"),
  i = n("496675"),
  s = n("981631");
let a = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : l.default,
    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.default,
    u = t.getGuild(e);
  return null != u && n.can(s.Permissions.MANAGE_GUILD, u)
};

function r(e) {
  return null != e && a(e)
}

function d(e) {
  return a(e)
}

function o(e) {
  return (0, u.useStateFromStores)([l.default, i.default], () => a(e, l.default, i.default), [e])
}

function c(e) {
  return (0, u.useStateFromStores)([l.default], () => {
    let t = l.default.getGuild(e);
    return (null == t ? void 0 : t.hasFeature(s.GuildFeatures.COMMUNITY)) || !1
  }, [e])
}