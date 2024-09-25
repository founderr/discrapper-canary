n.d(t, {
    AZ: function () {
        return h;
    },
    Bq: function () {
        return S;
    },
    RL: function () {
        return T;
    },
    cN: function () {
        return m;
    },
    gr: function () {
        return p;
    },
    pB: function () {
        return I;
    },
    vu: function () {
        return g;
    }
});
var r = n(47120);
var i = n(423875),
    a = n(442837),
    o = n(394821),
    s = n(353647),
    l = n(146282),
    u = n(26033),
    c = n(561308),
    d = n(206583),
    _ = n(981631),
    E = n(616922),
    f = n(728151);
function h(e) {
    if ((0, u.dU)(e)) {
        var t, n;
        return (null === (n = e.extra.entries[0]) || void 0 === n ? void 0 : null === (t = n.media) || void 0 === t ? void 0 : t.provider) === i.p.SPOTIFY;
    }
    return !!(0, u.KF)(e) && e.extra.media.provider === i.p.SPOTIFY;
}
function p(e) {
    return !!(0, u.y0)(e) && e.extra.application_id === f.sp;
}
function m(e, t) {
    let n = e.extra;
    return null != n && (('application_id' in t && t.application_id === n.application_id) || ('game_name' in n ? t.name === n.game_name : 'activity_name' in n && t.name === n.activity_name));
}
function I(e, t) {
    if (h(e)) {
        var n;
        return (0, E.Ps)(null === (n = t.party) || void 0 === n ? void 0 : n.id);
    }
    return !1;
}
function T(e, t) {
    return !!((0, o.Z)(t) && p(e)) && e.extra.media_title === t.details;
}
function g(e, t) {
    let n = e.filter(c.kr);
    return t.type === _.IIU.PLAYING ? n.filter(u.dX).find((e) => m(e, t)) : t.type === _.IIU.LISTENING ? n.filter(u.dU).find((e) => I(e, t)) : t.type === _.IIU.WATCHING ? e.filter(u.y0).find((e) => T(e, t)) : void 0;
}
function S(e) {
    let { activity: t, user: n } = e,
        r = (0, a.e7)([l.Z], () =>
            l.Z.getMatchingInboxEntry({
                activity: t,
                userId: n.id,
                feedId: d.YN.GLOBAL_FEED
            })
        ),
        i = (0, a.e7)([s.Z], () =>
            s.Z.getMatchingOutboxEntry({
                activity: t,
                userId: n.id
            })
        );
    return null != r ? r : i;
}
