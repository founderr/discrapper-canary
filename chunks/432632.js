t.d(n, {
  N: function() {
    return l
  }
});
var a = t(442837),
  r = t(430824),
  s = t(963202),
  i = t(308083),
  o = t(981631);

function l(e, n) {
  var t, l;
  let c = (0, a.e7)([r.Z], () => r.Z.getGuild(e));
  let d = null != (l = c) && l.hasFeature(o.oNc.CLAN) ? l.hasFeature(o.oNc.CLAN_PILOT_VALORANT) ? i.nJ : l.hasFeature(o.oNc.CLAN_PILOT_GENSHIN) ? i.xn : null : null,
    {
      defaultGameId: u
    } = (0, s.St)({
      guild: c,
      location: n,
      includeConverted: !1
    });
  return null !== (t = null != d ? d : u) && void 0 !== t ? t : i.xn
}