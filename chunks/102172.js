r.d(n, {
    JL: function () {
        return E;
    },
    P9: function () {
        return v;
    },
    h_: function () {
        return b;
    },
    p9: function () {
        return I;
    },
    wq: function () {
        return T;
    }
});
var i,
    a = r(653041);
var s = r(47120);
var o = r(442837),
    l = r(387343),
    u = r(258609),
    c = r(131704),
    d = r(984933),
    f = r(430824),
    _ = r(496675),
    h = r(979651),
    p = r(934415),
    m = r(981631),
    g = r(388032);
function E(e, n, r) {
    var i;
    let a = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let s = n.getGuild(e.getGuildId()),
        o = null !== (i = null == s ? void 0 : s.maxStageVideoChannelUsers) && void 0 !== i ? i : 0;
    return (!e.isGuildStageVoice() || !(o <= 0)) && (!a || !!(0, l.Z)(e, r)) && !!r.can(m.Plq.STREAM, e) && null != s && s.afkChannelId !== e.id && !0;
}
function v(e) {
    switch (e) {
        case 0:
            return g.intl.string(g.t['1i3tSU']);
        case 1:
            return g.intl.string(g.t.elyVbm);
        case 2:
            return g.intl.string(g.t.pgUTZG);
        default:
            return g.intl.string(g.t['7Xq/nZ']);
    }
}
function I(e, n, r, i, a) {
    let s;
    if (null == e) return [!1, 2];
    let o = n.isInChannel(e.id),
        u = e instanceof c.Sf && (0, p.rY)(e, n, r),
        d = (0, l.Z)(e, i),
        f = null != a.getAwaitingRemoteSessionInfo() || null != a.getRemoteSessionId();
    f ? (s = 0) : d || o ? u && !o && (s = 1) : (s = 2);
    let _ = d && !u;
    return [!__OVERLAY__ && !f && (o || _), s];
}
function T(e) {
    return (0, o.Wu)([h.Z, f.Z, _.Z, u.Z], () => I(e, h.Z, f.Z, _.Z, u.Z));
}
function b(e, n, r) {
    let i = [];
    for (let { channel: a } of e[d.Zb]) E(a, n, r) && i.push(a);
    return i;
}
!(function (e) {
    (e[(e.REMOTE_MODE = 0)] = 'REMOTE_MODE'), (e[(e.CHANNEL_FULL = 1)] = 'CHANNEL_FULL'), (e[(e.NO_PERMISSION = 2)] = 'NO_PERMISSION');
})(i || (i = {}));
