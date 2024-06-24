t.d(n, {
  N: function() {
    return o
  }
});
var a = t(442837),
  r = t(430824),
  s = t(963202),
  i = t(308083),
  l = t(981631);

function o(e, n) {
  var t, o;
  let c = (0, a.e7)([r.Z], () => r.Z.getGuild(e));
  let d = null != (o = c) && o.hasFeature(l.oNc.CLAN) ? o.hasFeature(l.oNc.CLAN_PILOT_VALORANT) ? i.nJ : o.hasFeature(l.oNc.CLAN_PILOT_GENSHIN) ? i.xn : null : null,
    {
      defaultGameId: u
    } = (0, s.St)({
      guild: c,
      location: n,
      includeConverted: !1
    });
  return null !== (t = null != d ? d : u) && void 0 !== t ? t : i.xn
}