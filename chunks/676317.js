"use strict";
i.r(s), i.d(s, {
  canCurrentUserManageAutomod: function() {
    return _
  },
  canCurrentUserManageMessageFilters: function() {
    return o
  },
  useCanCurrentUserManageAutomod: function() {
    return l
  },
  useIsUserProfileRuleEnabled: function() {
    return a
  }
});
var n = i("442837"),
  t = i("430824"),
  E = i("496675"),
  r = i("981631");
let S = function(e) {
  let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t.default,
    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E.default,
    n = s.getGuild(e);
  return null != n && i.can(r.Permissions.MANAGE_GUILD, n)
};

function o(e) {
  return null != e && S(e)
}

function _(e) {
  return S(e)
}

function l(e) {
  return (0, n.useStateFromStores)([t.default, E.default], () => S(e, t.default, E.default), [e])
}

function a(e) {
  return (0, n.useStateFromStores)([t.default], () => {
    let s = t.default.getGuild(e);
    return (null == s ? void 0 : s.hasFeature(r.GuildFeatures.COMMUNITY)) || !1
  }, [e])
}