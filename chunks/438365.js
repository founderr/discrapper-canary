t.d(s, {
  r: function() {
return c;
  }
});
var n = t(470079),
  a = t(442837),
  i = t(430824),
  r = t(594174),
  o = t(645896),
  l = t(353093);

function c(e) {
  var s, t;
  let {
userId: c
  } = e, d = (0, a.e7)([r.default], () => {
var e;
return null === (e = r.default.getUser(c)) || void 0 === e ? void 0 : e.primaryGuild;
  }), {
tag: _,
badge: E,
guildId: u
  } = (0, l.qd)(d);
  n.useEffect(() => {
(0, o._S)(u);
  }, [u]);
  let T = (0, o.Cc)(null == d ? void 0 : d.identityGuildId),
I = (0, a.e7)([i.Z], () => i.Z.getGuild(null == d ? void 0 : d.identityGuildId));
  return {
userClanTag: _,
userClanBadge: E,
guildId: u,
guildName: null !== (s = null == I ? void 0 : I.name) && void 0 !== s ? s : null == T ? void 0 : T.name,
guildIcon: null !== (t = null == I ? void 0 : I.icon) && void 0 !== t ? t : null == T ? void 0 : T.icon,
clan: T
  };
}