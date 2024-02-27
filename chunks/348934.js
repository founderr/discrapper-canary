"use strict";
r.r(t), r.d(t, {
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
}), r("222007");
var a = r("446674"),
  n = r("305961"),
  i = r("957255"),
  o = r("49111");
let l = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [n.default, i.default],
    [r, a] = t,
    l = r.getGuild(e);
  return null != l && a.can(o.Permissions.MANAGE_GUILD, l)
};

function s(e) {
  if (null == e) return !1;
  let t = l(e);
  return t
}

function c(e) {
  let t = l(e);
  return t
}

function d(e) {
  return (0, a.useStateFromStores)([n.default, i.default], () => l(e, [n.default, i.default]), [e])
}

function u(e) {
  return (0, a.useStateFromStores)([n.default], () => {
    let t = n.default.getGuild(e);
    return (null == t ? void 0 : t.hasFeature(o.GuildFeatures.COMMUNITY)) || !1
  }, [e])
}