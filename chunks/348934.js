"use strict";
t.r(r), t.d(r, {
  canCurrentUserManageMessageFilters: function() {
    return s
  },
  canCurrentUserManageAutomod: function() {
    return c
  },
  useCanCurrentUserManageAutomod: function() {
    return d
  },
  useIsUserProfileRuleEnabled: function() {
    return u
  }
}), t("222007");
var a = t("446674"),
  n = t("305961"),
  i = t("957255"),
  l = t("49111");
let o = function(e) {
  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [n.default, i.default],
    [t, a] = r,
    o = t.getGuild(e);
  return null != o && a.can(l.Permissions.MANAGE_GUILD, o)
};

function s(e) {
  if (null == e) return !1;
  let r = o(e);
  return r
}

function c(e) {
  let r = o(e);
  return r
}

function d(e) {
  return (0, a.useStateFromStores)([n.default, i.default], () => o(e, [n.default, i.default]), [e])
}

function u(e) {
  return (0, a.useStateFromStores)([n.default], () => {
    let r = n.default.getGuild(e);
    return (null == r ? void 0 : r.hasFeature(l.GuildFeatures.COMMUNITY)) || !1
  }, [e])
}