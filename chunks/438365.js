"use strict";
t.r(a), t.d(a, {
  useUserSelectedClan: function() {
    return u
  }
});
var l = t("470079"),
  n = t("442837"),
  i = t("430824"),
  r = t("594174"),
  s = t("645896"),
  o = t("353093");

function u(e) {
  var a, t;
  let {
    userId: u
  } = e, d = (0, n.useStateFromStores)([r.default], () => {
    var e;
    return null === (e = r.default.getUser(u)) || void 0 === e ? void 0 : e.clan
  }), {
    tag: c,
    badge: f,
    guildId: m
  } = (0, o.getUserClanData)(d);
  l.useEffect(() => {
    (0, s.fetchClanInfo)(m)
  }, [m]);
  let v = (0, s.useClanInfo)(null == d ? void 0 : d.identityGuildId),
    g = (0, n.useStateFromStores)([i.default], () => i.default.getGuild(null == d ? void 0 : d.identityGuildId));
  return {
    userClanTag: c,
    userClanBadge: f,
    guildId: m,
    guildName: null !== (a = null == g ? void 0 : g.name) && void 0 !== a ? a : null == v ? void 0 : v.name,
    guildIcon: null !== (t = null == g ? void 0 : g.icon) && void 0 !== t ? t : null == v ? void 0 : v.icon,
    clan: v
  }
}