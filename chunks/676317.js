"use strict";
t.r(r), t.d(r, {
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
var a = t("442837"),
  n = t("430824"),
  i = t("496675"),
  l = t("981631");
let o = function(e) {
  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : n.default,
    t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : i.default,
    a = r.getGuild(e);
  return null != a && t.can(l.Permissions.MANAGE_GUILD, a)
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
    let r = n.default.getGuild(e);
    return (null == r ? void 0 : r.hasFeature(l.GuildFeatures.COMMUNITY)) || !1
  }, [e])
}