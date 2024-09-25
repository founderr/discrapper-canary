n.d(t, {
    C1: function () {
        return u;
    },
    HS: function () {
        return d;
    },
    Hg: function () {
        return c;
    },
    l0: function () {
        return _;
    }
});
var r = n(757143);
var i = n(733860);
var a = n(264344),
    o = n.n(a),
    s = n(992774),
    l = n(149396);
function u(e, t) {
    var n;
    let r = !1,
        i = t.map((t, n) => {
            let { guid: i, guid: a, name: o, name: s, index: u } = t;
            return (
                /^default/.test(o) ? ((r = !0), (i = l.w5), (o = o.replace('default', 'Default'))) : (i = null != i && '' !== i ? i : o),
                null != u && (n = u),
                {
                    id: i,
                    type: e,
                    index: n,
                    name: o,
                    originalName: s,
                    originalId: a
                }
            );
        });
    return (
        e !== l.h7.VIDEO_INPUT &&
            !r &&
            (null === o() || void 0 === o() ? void 0 : null === (n = o().os) || void 0 === n ? void 0 : n.family) != null &&
            /^win/i.test(o().os.family) &&
            i.unshift({
                id: l.w5,
                type: e,
                index: -1,
                name: 'Default'
            }),
        i
    );
}
function c() {
    return new Promise((e) => {
        (0, s.zS)().getInputDevices((t) => e(u(l.h7.AUDIO_INPUT, t)));
    });
}
function d() {
    return new Promise((e) => {
        (0, s.zS)().getOutputDevices((t) => e(u(l.h7.AUDIO_OUTPUT, t)));
    });
}
function _() {
    return new Promise((e) => {
        (0, s.zS)().getVideoInputDevices((t) => e(u(l.h7.VIDEO_INPUT, t)));
    });
}
