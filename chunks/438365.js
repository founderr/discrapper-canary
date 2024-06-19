t.d(s, {
  r: function() {
    return c
  }
});
var n = t(470079),
  i = t(442837),
  a = t(430824),
  l = t(594174),
  r = t(645896),
  o = t(353093);

function c(e) {
  var s, t;
  let {
    userId: c
  } = e, E = (0, i.e7)([l.default], () => {
    var e;
    return null === (e = l.default.getUser(c)) || void 0 === e ? void 0 : e.clan
  }), {
    tag: d,
    badge: _,
    guildId: T
  } = (0, o.vh)(E);
  n.useEffect(() => {
    (0, r._S)(T)
  }, [T]);
  let S = (0, r.Cc)(null == E ? void 0 : E.identityGuildId),
    u = (0, i.e7)([a.Z], () => a.Z.getGuild(null == E ? void 0 : E.identityGuildId));
  return {
    userClanTag: d,
    userClanBadge: _,
    guildId: T,
    guildName: null !== (s = null == u ? void 0 : u.name) && void 0 !== s ? s : null == S ? void 0 : S.name,
    guildIcon: null !== (t = null == u ? void 0 : u.icon) && void 0 !== t ? t : null == S ? void 0 : S.icon,
    clan: S
  }
}