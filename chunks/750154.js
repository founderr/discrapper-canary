r.d(n, {
    JE: function () {
        return E;
    },
    Lw: function () {
        return p;
    },
    dS: function () {
        return g;
    },
    rq: function () {
        return m;
    }
});
var i = r(47120);
var a = r(314897),
    s = r(592125),
    o = r(430824),
    l = r(88751),
    u = r(157925),
    c = r(981631);
let d = 'stage:',
    f = 1,
    _ = 2,
    h = 4;
function p(e, n) {
    let r = 0,
        i = a.default.getId();
    l.ZP.isSpeaker(i, e.id) && (r |= f);
    let s = o.Z.getGuild(e.getGuildId());
    null != s && (s.hasFeature(c.oNc.PARTNERED) && (r |= _), s.hasFeature(c.oNc.VERIFIED) && (r |= h));
    let u = r.toString(16);
    return ''.concat(d).concat(e.guild_id, ':').concat(e.id, ':').concat(u, ':').concat(n.id);
}
function m(e) {
    if (null == e || null == e.party) return;
    let { id: n, size: r } = e.party;
    try {
        if (null == n || !n.startsWith(d)) return;
        let [, e, i, a, s] = n.split(':'),
            o = parseInt(a, 16);
        return {
            guildId: e,
            channelId: i,
            size: r,
            userIsSpeaker: (o & f) != 0,
            guildIsPartnered: (o & _) != 0,
            guildIsVerified: (o & h) != 0,
            stageInstanceId: s
        };
    } catch (e) {
        return null;
    }
}
function g(e) {
    return (null == e ? void 0 : e.application_id) === u.gD;
}
function E(e) {
    let n = m(e);
    if (null == n) return !1;
    let { channelId: r } = n;
    return null != s.Z.getChannel(r);
}
