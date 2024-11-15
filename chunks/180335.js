n.d(t, {
    AZ: function () {
        return p;
    },
    Bq: function () {
        return b;
    },
    RL: function () {
        return E;
    },
    cN: function () {
        return m;
    },
    gr: function () {
        return h;
    },
    pB: function () {
        return g;
    },
    vu: function () {
        return v;
    }
}),
    n(47120);
var r = n(423875),
    i = n(442837),
    a = n(394821),
    s = n(353647),
    o = n(146282),
    l = n(26033),
    u = n(561308),
    c = n(206583),
    d = n(981631),
    f = n(616922),
    _ = n(728151);
function p(e) {
    if ((0, l.dU)(e)) {
        var t, n;
        return (null === (n = e.extra.entries[0]) || void 0 === n ? void 0 : null === (t = n.media) || void 0 === t ? void 0 : t.provider) === r.p.SPOTIFY;
    }
    return !!(0, l.KF)(e) && e.extra.media.provider === r.p.SPOTIFY;
}
function h(e) {
    return !!(0, l.y0)(e) && e.extra.application_id === _.sp;
}
function m(e, t) {
    let n = e.extra;
    return null != n && (('application_id' in t && t.application_id === n.application_id) || ('game_name' in n ? t.name === n.game_name : 'activity_name' in n && t.name === n.activity_name));
}
function g(e, t) {
    if (p(e)) {
        var n;
        return (0, f.Ps)(null === (n = t.party) || void 0 === n ? void 0 : n.id);
    }
    return !1;
}
function E(e, t) {
    return !!((0, a.Z)(t) && h(e)) && e.extra.media_title === t.details;
}
function v(e, t) {
    let n = e.filter(u.kr);
    return t.type === d.IIU.PLAYING ? n.filter(l.dX).find((e) => m(e, t)) : t.type === d.IIU.LISTENING ? n.filter(l.dU).find((e) => g(e, t)) : t.type === d.IIU.WATCHING ? e.filter(l.y0).find((e) => E(e, t)) : void 0;
}
function b(e) {
    let { activity: t, user: n } = e,
        r = (0, i.e7)([o.Z], () =>
            o.Z.getMatchingInboxEntry({
                activity: t,
                userId: n.id,
                feedId: c.YN.GLOBAL_FEED
            })
        ),
        a = (0, i.e7)([s.Z], () =>
            s.Z.getMatchingOutboxEntry({
                activity: t,
                userId: n.id
            })
        );
    return null != r ? r : a;
}
