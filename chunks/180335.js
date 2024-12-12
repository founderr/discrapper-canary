r.d(n, {
    AZ: function () {
        return f;
    },
    RL: function () {
        return m;
    },
    cN: function () {
        return h;
    },
    gr: function () {
        return _;
    },
    pB: function () {
        return p;
    },
    vu: function () {
        return g;
    }
});
var i = r(47120);
var a = r(423875),
    s = r(394821),
    o = r(26033),
    l = r(561308),
    u = r(981631),
    c = r(616922),
    d = r(728151);
function f(e) {
    if ((0, o.dU)(e)) {
        var n, r;
        return (null === (r = e.extra.entries[0]) || void 0 === r ? void 0 : null === (n = r.media) || void 0 === n ? void 0 : n.provider) === a.p.SPOTIFY;
    }
    return !!(0, o.KF)(e) && e.extra.media.provider === a.p.SPOTIFY;
}
function _(e) {
    return !!(0, o.y0)(e) && e.extra.application_id === d.sp;
}
function h(e, n) {
    let r = e.extra;
    return null != r && (('application_id' in n && n.application_id === r.application_id) || ('game_name' in r ? n.name === r.game_name : 'activity_name' in r && n.name === r.activity_name));
}
function p(e, n) {
    if (f(e)) {
        var r;
        return (0, c.Ps)(null === (r = n.party) || void 0 === r ? void 0 : r.id);
    }
    return !1;
}
function m(e, n) {
    return !!((0, s.Z)(n) && _(e)) && e.extra.media_title === n.details;
}
function g(e, n) {
    let r = e.filter(l.kr);
    return n.type === u.IIU.PLAYING ? r.filter(o.dX).find((e) => h(e, n)) : n.type === u.IIU.LISTENING ? r.filter(o.dU).find((e) => p(e, n)) : n.type === u.IIU.WATCHING ? e.filter(o.y0).find((e) => m(e, n)) : void 0;
}
