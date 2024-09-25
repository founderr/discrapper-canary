n.d(t, {
    JE: function () {
        return m;
    },
    Lw: function () {
        return f;
    },
    dS: function () {
        return p;
    },
    rq: function () {
        return h;
    }
});
var r = n(47120);
var i = n(314897),
    a = n(592125),
    o = n(430824),
    s = n(88751),
    l = n(157925),
    u = n(981631);
let c = 'stage:',
    d = 1,
    _ = 2,
    E = 4;
function f(e, t) {
    let n = 0,
        r = i.default.getId();
    s.ZP.isSpeaker(r, e.id) && (n |= d);
    let a = o.Z.getGuild(e.getGuildId());
    null != a && (a.hasFeature(u.oNc.PARTNERED) && (n |= _), a.hasFeature(u.oNc.VERIFIED) && (n |= E));
    let l = n.toString(16);
    return ''.concat(c).concat(e.guild_id, ':').concat(e.id, ':').concat(l, ':').concat(t.id);
}
function h(e) {
    if (null == e || null == e.party) return;
    let { id: t, size: n } = e.party;
    try {
        if (null == t || !t.startsWith(c)) return;
        let [, e, r, i, a] = t.split(':'),
            o = parseInt(i, 16);
        return {
            guildId: e,
            channelId: r,
            size: n,
            userIsSpeaker: (o & d) != 0,
            guildIsPartnered: (o & _) != 0,
            guildIsVerified: (o & E) != 0,
            stageInstanceId: a
        };
    } catch (e) {
        return null;
    }
}
function p(e) {
    return (null == e ? void 0 : e.application_id) === l.gD;
}
function m(e) {
    let t = h(e);
    if (null == t) return !1;
    let { channelId: n } = t;
    return null != a.Z.getChannel(n);
}
