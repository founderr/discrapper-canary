"use strict";
n.r(t), n.d(t, {
  canCurrentUserManageMessageFilters: function() {
    return l
  },
  canCurrentUserManageAutomod: function() {
    return s
  },
  useCanCurrentUserManageAutomod: function() {
    return d
  },
  useIsUserProfileRuleEnabled: function() {
    return T
  }
}), n("222007");
var r = n("446674"),
  o = n("305961"),
  u = n("957255"),
  i = n("49111");
let a = function(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.default, u.default],
    [n, r] = t,
    a = n.getGuild(e);
  return null != a && r.can(i.Permissions.MANAGE_GUILD, a)
};

function l(e) {
  if (null == e) return !1;
  let t = a(e);
  return t
}

function s(e) {
  let t = a(e);
  return t
}

function d(e) {
  return (0, r.useStateFromStores)([o.default, u.default], () => a(e, [o.default, u.default]), [e])
}

function T(e) {
  return (0, r.useStateFromStores)([o.default], () => {
    let t = o.default.getGuild(e);
    return (null == t ? void 0 : t.hasFeature(i.GuildFeatures.COMMUNITY)) || !1
  }, [e])
}