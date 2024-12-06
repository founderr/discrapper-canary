t.d(n, {
    ZP: function () {
        return f;
    },
    so: function () {
        return I;
    },
    wg: function () {
        return m;
    }
}),
    t(47120);
var i = t(442837),
    a = t(159300),
    r = t(427679),
    c = t(592125),
    o = t(984933),
    d = t(430824),
    l = t(496675),
    s = t(700785),
    _ = t(924301),
    u = t(765305),
    p = t(981631);
function m(e) {
    var n;
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [c.Z];
    let { entityType: i, channelId: a } =
        'entity_type' in (n = e)
            ? {
                  entityType: n.entity_type,
                  channelId: n.channel_id
              }
            : n;
    if (i === u.WX.EXTERNAL) return !0;
    let r = t.getChannel(a);
    return null != r && s.Uu(p.Plq.VIEW_CHANNEL, r);
}
function I(e) {
    let [n, t, i, s] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.ZP, c.Z, d.Z, r.Z];
    if ((0, _.Z2)(e)) return !1;
    let { guild_id: p, channel_id: I } = e,
        f = e.entity_type === u.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(I),
        g = i.getGuild(p),
        C = s.getStageInstanceByChannel(I);
    return !!(0, a.b)(l.Z, g, f, C) && null != f && m(e, [t]);
}
function f(e) {
    return (0, i.e7)([o.ZP, c.Z, d.Z, r.Z], () => I(e, [o.ZP, c.Z, d.Z, r.Z]), [e]);
}
