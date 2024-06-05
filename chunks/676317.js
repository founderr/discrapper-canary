"use strict";
r.r(t), r.d(t, {
  canCurrentUserManageAutomod: function() {
    return c
  },
  canCurrentUserManageMessageFilters: function() {
    return s
  },
  useCanCurrentUserManageAutomod: function() {
    return d
  },
  useIsUserProfileRuleEnabled: function() {
    return u
  }
});
var a = r("442837"),
  n = r("430824"),
  i = r("496675"),
  l = r("981631");
let o = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.default,
    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.default,
    a = t.getGuild(e);
  return null != a && r.can(l.Permissions.MANAGE_GUILD, a)
};

function s(e) {
  return null != e && o(e)
}

function c(e) {
  return o(e)
}

function d(e) {
  return (0, a.useStateFromStores)([n.default, i.default], () => o(e, n.default, i.default), [e])
}

function u(e) {
  return (0, a.useStateFromStores)([n.default], () => {
    let t = n.default.getGuild(e);
    return (null == t ? void 0 : t.hasFeature(l.GuildFeatures.COMMUNITY)) || !1
  }, [e])
}