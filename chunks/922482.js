n.d(t, {
    AC: function () {
        return g;
    },
    Cq: function () {
        return v;
    },
    R5: function () {
        return I;
    },
    TM: function () {
        return E;
    }
});
var r = n(749210),
    i = n(287734),
    a = n(872810),
    s = n(366297),
    o = n(280837),
    l = n(199902),
    u = n(592125),
    c = n(430824),
    d = n(496675),
    f = n(944486),
    _ = n(881824),
    h = n(107511),
    p = n(146085),
    m = n(96150);
function g(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (i) => {
        let a = u.Z.getChannel(t);
        if (null != a) return E(a, n), i(a);
        await (0, o.O)([e]),
            await r.Z.joinGuild(e, { lurker: !0 }),
            c.Z.addConditionalChangeListener(() => {
                let e = u.Z.getChannel(t);
                return null == e || (E(e), m.Z.initialize(), i(e), !1);
            });
    });
}
function E(e) {
    var t, n;
    let r = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        s = f.Z.getVoiceChannelId();
    if (!r && ((t = e), (n = s), !d.Z.can(p.gl, t) || (_.Zl(t.id) && n !== t.id && (_.vu(t, () => v(t, !0)), 1)))) return !1;
    if ((h.Z.initialize(), i.default.selectVoiceChannel(e.id), (s = f.Z.getVoiceChannelId()) !== e.id)) return !1;
    let o = l.Z.getAllApplicationStreamsForChannel(e.id);
    return o.length > 0 && (0, a.rn)(o[0], { noFocus: !1 }), !0;
}
function v(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        i = f.Z.getVoiceChannelId();
    if (!(!r && i !== e.id && (0, s._)(e) && _.Gy(e, () => v(e, t, n, !0)))) E(e, t) && I(e, i, n);
}
function I(e, t) {
    let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    _.R5(e, t, n);
}
