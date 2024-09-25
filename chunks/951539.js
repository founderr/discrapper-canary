t.d(n, {
    ZP: function () {
        return N;
    },
    so: function () {
        return E;
    },
    wg: function () {
        return f;
    }
}),
    t(47120);
var a = t(442837),
    i = t(159300),
    r = t(427679),
    o = t(592125),
    c = t(984933),
    l = t(430824),
    s = t(496675),
    u = t(700785),
    d = t(924301),
    _ = t(765305),
    I = t(981631);
function f(e) {
    var n;
    let [t] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [o.Z];
    let { entityType: a, channelId: i } =
        'entity_type' in (n = e)
            ? {
                  entityType: n.entity_type,
                  channelId: n.channel_id
              }
            : n;
    if (a === _.WX.EXTERNAL) return !0;
    let r = t.getChannel(i);
    return null != r && u.Uu(I.Plq.VIEW_CHANNEL, r);
}
function E(e) {
    let [n, t, a, u] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [c.ZP, o.Z, l.Z, r.Z];
    if ((0, d.Z2)(e)) return !1;
    let { guild_id: I, channel_id: E } = e,
        N = e.entity_type === _.WX.EXTERNAL ? n.getDefaultChannel(e.guild_id) : t.getChannel(E),
        T = a.getGuild(I),
        S = u.getStageInstanceByChannel(E);
    return !!(0, i.b)(s.Z, T, N, S) && null != N && f(e, [t]);
}
function N(e) {
    return (0, a.e7)([c.ZP, o.Z, l.Z, r.Z], () => E(e, [c.ZP, o.Z, l.Z, r.Z]), [e]);
}
