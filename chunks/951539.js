i.d(e, {
  ZP: function() {
    return N
  },
  so: function() {
    return C
  },
  wg: function() {
    return x
  }
}), i(47120);
var l = i(442837),
  t = i(159300),
  a = i(427679),
  r = i(592125),
  s = i(984933),
  c = i(430824),
  o = i(496675),
  u = i(700785),
  d = i(924301),
  h = i(765305),
  v = i(981631);

function x(n) {
  var e;
  let [i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z];
  let {
    entityType: l,
    channelId: t
  } = "entity_type" in (e = n) ? {
    entityType: e.entity_type,
    channelId: e.channel_id
  } : e;
  if (l === h.WX.EXTERNAL) return !0;
  let a = i.getChannel(t);
  return null != a && u.Uu(v.Plq.VIEW_CHANNEL, a)
}

function C(n) {
  let [e, i, l, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [s.ZP, r.Z, c.Z, a.Z];
  if ((0, d.Z2)(n)) return !1;
  let {
    guild_id: v,
    channel_id: C
  } = n, N = n.entity_type === h.WX.EXTERNAL ? e.getDefaultChannel(n.guild_id) : i.getChannel(C), m = l.getGuild(v), g = u.getStageInstanceByChannel(C);
  return !!(0, t.b)(o.Z, m, N, g) && null != N && x(n, [i])
}

function N(n) {
  return (0, l.e7)([s.ZP, r.Z, c.Z, a.Z], () => C(n, [s.ZP, r.Z, c.Z, a.Z]), [n])
}