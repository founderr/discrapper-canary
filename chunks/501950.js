r.d(n, {
    C1: function () {
        return c;
    },
    HS: function () {
        return f;
    },
    Hg: function () {
        return d;
    },
    l0: function () {
        return _;
    }
});
var i = r(757143);
var a = r(733860);
var s = r(264344),
    o = r.n(s),
    l = r(992774),
    u = r(149396);
function c(e, n) {
    var r;
    let i = !1,
        a = n.map((n, r) => {
            let { guid: a, guid: s, name: o, name: l, index: c } = n;
            return (
                /^default/.test(o) ? ((i = !0), (a = u.w5), (o = o.replace('default', 'Default'))) : (a = null != a && '' !== a ? a : o),
                null != c && (r = c),
                {
                    id: a,
                    type: e,
                    index: r,
                    name: o,
                    originalName: l,
                    originalId: s
                }
            );
        });
    return (
        e !== u.h7.VIDEO_INPUT &&
            !i &&
            (null === o() || void 0 === o() ? void 0 : null === (r = o().os) || void 0 === r ? void 0 : r.family) != null &&
            /^win/i.test(o().os.family) &&
            a.unshift({
                id: u.w5,
                type: e,
                index: -1,
                name: 'Default'
            }),
        a
    );
}
function d() {
    return new Promise((e) => {
        (0, l.zS)().getInputDevices((n) => e(c(u.h7.AUDIO_INPUT, n)));
    });
}
function f() {
    return new Promise((e) => {
        (0, l.zS)().getOutputDevices((n) => e(c(u.h7.AUDIO_OUTPUT, n)));
    });
}
function _() {
    return new Promise((e) => {
        (0, l.zS)().getVideoInputDevices((n) => e(c(u.h7.VIDEO_INPUT, n)));
    });
}
