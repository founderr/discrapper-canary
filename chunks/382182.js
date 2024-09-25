n.d(t, {
    JL: function () {
        return m;
    },
    P9: function () {
        return I;
    },
    h_: function () {
        return S;
    },
    p9: function () {
        return T;
    },
    wq: function () {
        return g;
    }
});
var r,
    i = n(653041);
var a = n(47120);
var o = n(442837),
    s = n(387343),
    l = n(258609),
    u = n(131704),
    c = n(984933),
    d = n(430824),
    _ = n(496675),
    E = n(979651),
    f = n(934415),
    h = n(981631),
    p = n(689938);
function m(e, t, n) {
    var r;
    let i = !(arguments.length > 3) || void 0 === arguments[3] || arguments[3];
    if (e.isPrivate()) return !0;
    let a = t.getGuild(e.getGuildId()),
        o = null !== (r = null == a ? void 0 : a.maxStageVideoChannelUsers) && void 0 !== r ? r : 0;
    return (!e.isGuildStageVoice() || !(o <= 0)) && (!i || !!(0, s.Z)(e, n)) && !!n.can(h.Plq.STREAM, e) && null != a && a.afkChannelId !== e.id && !0;
}
function I(e) {
    switch (e) {
        case 0:
            return p.Z.Messages.CONSOLE_STREAM_UNAVAILABLE;
        case 1:
            return p.Z.Messages.UNABLE_TO_JOIN_CHANNEL_FULL_MODAL_HEADER;
        case 2:
            return p.Z.Messages.STREAM_NO_PERMISSION_CTA;
        default:
            return p.Z.Messages.WATCH_STREAM;
    }
}
function T(e, t, n, r, i) {
    let a;
    if (null == e) return [!1, 2];
    let o = t.isInChannel(e.id),
        l = e instanceof u.Sf && (0, f.rY)(e, t, n),
        c = (0, s.Z)(e, r),
        d = null != i.getAwaitingRemoteSessionInfo() || null != i.getRemoteSessionId();
    d ? (a = 0) : c || o ? l && !o && (a = 1) : (a = 2);
    let _ = c && !l;
    return [!__OVERLAY__ && !d && (o || _), a];
}
function g(e) {
    return (0, o.Wu)([E.Z, d.Z, _.Z, l.Z], () => T(e, E.Z, d.Z, _.Z, l.Z));
}
function S(e, t, n) {
    let r = [];
    for (let { channel: i } of e[c.Zb]) m(i, t, n) && r.push(i);
    return r;
}
!(function (e) {
    (e[(e.REMOTE_MODE = 0)] = 'REMOTE_MODE'), (e[(e.CHANNEL_FULL = 1)] = 'CHANNEL_FULL'), (e[(e.NO_PERMISSION = 2)] = 'NO_PERMISSION');
})(r || (r = {}));
