"use strict";
t.r(a), t.d(a, {
  useCurrentUserAvailableClanIds: function() {
    return c
  },
  useCurrentUserAvailableClans: function() {
    return d
  }
}), t("47120");
var l = t("470079"),
  n = t("392711"),
  i = t.n(n),
  r = t("442837"),
  s = t("271383"),
  o = t("430824"),
  u = t("353093");

function d() {
  return (0, r.useStateFromStoresArray)([o.default, s.default], () => {
    let e = o.default.getGuilds();
    return i()(e).values().filter(e => {
      var a;
      return (0, u.isGuildAClan)(e) && (null === (a = s.default.getSelfMember(e.id)) || void 0 === a ? void 0 : a.joinedAt) != null
    }).value()
  })
}

function c() {
  let e = d();
  return l.useMemo(() => new Set(e.map(e => {
    let {
      id: a
    } = e;
    return a
  })), [e])
}