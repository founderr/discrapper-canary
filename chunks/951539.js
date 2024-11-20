t.d(n, {
    ZP: function () {
        return I;
    },
    so: function () {
        return m;
    },
    wg: function () {
        return p;
    }
}),
    t(47120);
var i = t(442837),
    a = t(159300),
    l = t(427679),
    r = t(592125),
    d = t(984933),
    o = t(430824),
    c = t(496675),
    s = t(700785),
    u = t(924301),
    _ = t(765305),
    g = t(981631);
function p(e) {
    var n;
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [r.Z];
    let { entityType: i, channelId: a } =
        'entity_type' in (n = e)
            ? {
                  entityType: n.entity_type,
                  channelId: n.channel_id
              }
            : n;
    if (i === _.WX.EXTERNAL) return !0;
    let l = t.getChannel(a);
    return null != l && s.Uu(g.Plq.VIEW_CHANNEL, l);
}
function m(e) {
    let [n, t, i, s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [d.ZP, r.Z, o.Z, l.Z];
    if ((0, u.Z2)(e)) return !1;
    let { guild_id: g, channel_id: m } = e,
        I = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(m),
        v = i.getGuild(g),
        h = s.getStageInstanceByChannel(m);
    return !!(0, a.b)(c.Z, v, I, h) && null != I && p(e, [t]);
}
function I(e) {
    return (0, i.e7)([d.ZP, r.Z, o.Z, l.Z], () => m(e, [d.ZP, r.Z, o.Z, l.Z]), [e]);
}
