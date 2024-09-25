n.d(t, {
    Qg: function () {
        return d;
    },
    S3: function () {
        return u;
    },
    r5: function () {
        return _;
    }
});
var r = n(47120);
var i = n(411104);
var a = n(688619),
    o = n.n(a);
let s = 3,
    l = 100,
    u = {
        NonText: 3,
        Text: 4.5,
        HighContrastText: 7
    };
function c(e) {
    let [t, n, r, i] = e.rgba();
    return 'rgba('.concat(t, ', ').concat(n, ', ').concat(r, ', ').concat(i, ')');
}
function d(e) {
    var t, n, r;
    let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        a = null !== (t = i.contrastRatio) && void 0 !== t ? t : u.NonText,
        d = null !== (n = i.tolerance) && void 0 !== n ? n : s,
        _ = o()(null !== (r = i.base) && void 0 !== r ? r : e),
        E = o()(e),
        f = _.luminance(),
        h = E,
        p = a,
        m = a + d,
        I = o().contrast(_, E),
        T = l;
    for (; T-- > 0; ) {
        let e = I < p,
            t = I > m;
        if (!e && !t) break;
        let n = h.luminance() > f;
        (h = (t && n) || (e && !n) ? h.darken() : h.brighten()), (I = o().contrast(_, h));
    }
    return c(h);
}
function _(e, t) {
    return c(o()(e).darken(t));
}
