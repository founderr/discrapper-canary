r.d(n, {
    AC: function () {
        return v;
    },
    Cq: function () {
        return T;
    },
    R5: function () {
        return b;
    },
    TM: function () {
        return I;
    }
});
var i = r(749210),
    a = r(287734),
    s = r(872810),
    o = r(366297),
    l = r(280837),
    u = r(199902),
    c = r(592125),
    d = r(430824),
    f = r(496675),
    _ = r(944486),
    h = r(881824),
    p = r(107511),
    m = r(146085),
    g = r(96150);
function E(e, n) {
    return !!f.Z.can(m.gl, e) && (!h.Zl(e.id) || n === e.id || (h.vu(e, () => T(e, !0)), !1));
}
function v(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
    return new Promise(async (a) => {
        let s = c.Z.getChannel(n);
        if (null != s) return I(s, r), a(s);
        await (0, l.O)([e]),
            await i.Z.joinGuild(e, { lurker: !0 }),
            d.Z.addConditionalChangeListener(() => {
                let e = c.Z.getChannel(n);
                return null == e || (I(e), g.Z.initialize(), a(e), !1);
            });
    });
}
function I(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = _.Z.getVoiceChannelId();
    if (!n && !E(e, r)) return !1;
    if ((p.Z.initialize(), a.default.selectVoiceChannel(e.id), (r = _.Z.getVoiceChannelId()) !== e.id)) return !1;
    let i = u.Z.getAllApplicationStreamsForChannel(e.id);
    return i.length > 0 && (0, s.rn)(i[0], { noFocus: !1 }), !0;
}
function T(e) {
    let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
        r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        a = _.Z.getVoiceChannelId();
    if (!(!i && a !== e.id && (0, o._)(e) && h.Gy(e, () => T(e, n, r, !0)))) I(e, n) && b(e, a, r);
}
function b(e, n) {
    let r = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    h.R5(e, n, r);
}
