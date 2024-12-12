r.d(n, {
    Qg: function () {
        return f;
    },
    S3: function () {
        return c;
    },
    r5: function () {
        return _;
    }
});
var i = r(47120);
var a = r(411104);
var s = r(688619),
    o = r.n(s);
let l = 3,
    u = 100,
    c = {
        NonText: 3,
        Text: 4.5,
        HighContrastText: 7
    };
function d(e) {
    let [n, r, i, a] = e.rgba();
    return 'rgba('.concat(n, ', ').concat(r, ', ').concat(i, ', ').concat(a, ')');
}
function f(e) {
    var n, r, i;
    let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
        s = null !== (n = a.contrastRatio) && void 0 !== n ? n : c.NonText,
        f = null !== (r = a.tolerance) && void 0 !== r ? r : l,
        _ = o()(null !== (i = a.base) && void 0 !== i ? i : e),
        h = o()(e),
        p = _.luminance(),
        m = h,
        g = s,
        E = s + f,
        v = o().contrast(_, h),
        I = u;
    for (; I-- > 0; ) {
        let e = v < g,
            n = v > E;
        if (!e && !n) break;
        let r = m.luminance() > p;
        (m = (n && r) || (e && !r) ? m.darken() : m.brighten()), (v = o().contrast(_, m));
    }
    return d(m);
}
function _(e, n) {
    return d(o()(e).darken(n));
}
