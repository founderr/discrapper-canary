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
  o = t("49111");
let l = function(e) {
  let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [n.default, i.default],
    [t, a] = r,
    l = t.getGuild(e);
  return null != l && a.can(o.Permissions.MANAGE_GUILD, l)
};

function s(e) {
  if (null == e) return !1;
  let r = l(e);
  return r
}

function c(e) {
  let r = l(e);
  return r
}

function d(e) {
  return (0, a.useStateFromStores)([n.default, i.default], () => l(e, [n.default, i.default]), [e])
}

function u(e) {
  return (0, a.useStateFromStores)([n.default], () => {
    let r = n.default.getGuild(e);
    return (null == r ? void 0 : r.hasFeature(o.GuildFeatures.COMMUNITY)) || !1
  }, [e])
}