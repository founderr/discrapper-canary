var i = r(411104);
var a = r(688619),
    s = r.n(a),
    o = r(402903),
    l = r.n(o),
    u = r(190558),
    c = r(949180),
    d = r(777910),
    f = r(897710),
    _ = r(15202),
    h = r(211468);
let { Themes: p } = _.V,
    { SemanticColors: m, RawColors: g } = u.V,
    { Shadows: E } = d.V,
    { Spacing: v } = f.V,
    I = Symbol('semanticColor');
function T(e) {
    if ('string' == typeof e) {
        let n = e.toUpperCase();
        if (!(n in p)) throw Error('Invalid theme: '.concat(e));
        e = p[n];
    }
    return e;
}
let b = {
    themes: p,
    colors: l()(m, (e, n) => ({ [I]: n })),
    unsafe_rawColors: g,
    shadows: l()(E, (e) => {
        function n(n) {
            return { resolve: (r, i) => n(e[r].nativeStyles, i) };
        }
        return {
            shadowOffset: n((e) => e.shadowOffset),
            shadowColor: n((e, n) => (n ? e.shadowColorAndroid : e.shadowColor)),
            shadowOpacity: n((e) => e.shadowOpacity),
            shadowRadius: n((e) => e.shadowRadius),
            elevation: n((e) => e.elevation)
        };
    }),
    radii: c.w,
    spacing: v,
    internal: {
        isSemanticColor: (e) => 'object' == typeof e && null !== e && I in e,
        getSemanticColorName: (e) => e[I],
        resolveSemanticColor(e, n, r) {
            var i, a;
            e = T(e);
            let o = m[n[I]],
                { category: l } = o,
                u = o[e],
                c = g[u.raw],
                d = u.opacity;
            if ((null == r ? void 0 : r.gradient) != null && 'gradient' in o) {
                let e = o.gradient[null == r ? void 0 : r.gradient.theme];
                if (null != e) {
                    let n = s()(e.color in g ? g[e.color] : null == r ? void 0 : r.gradient.colors[e.color]);
                    'saturation' in e && (n = n.set('hsl.s', e.saturation)), 'lightness' in e && (n = n.set('hsl.l', e.lightness)), (c = n.hex()), (d = 'opacity' in e ? e.opacity : 1);
                }
            }
            let f = null !== (i = null == r ? void 0 : r.contrast) && void 0 !== i ? i : 1,
                _ = null !== (a = null == r ? void 0 : r.saturation) && void 0 !== a ? a : 1;
            return (_ < 1 && (c = (0, h.dO)(c, l, _)), 1 !== f && (c = (0, h.pq)(c, l, e, f)), 1 === d) ? c : s()(c).alpha(d).hex();
        },
        adjustColorSaturation: (e, n, r) => (0, h.dO)(e, r, n),
        adjustColorContrast: (e, n, r, i) => (0, h.pq)(e, r, i, n)
    }
};
n.ZP = b;
