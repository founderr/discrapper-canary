r(411104);
var a = r(688619),
    n = r.n(a),
    _ = r(402903),
    o = r.n(_),
    E = r(190558),
    i = r(949180),
    c = r(777910),
    s = r(897710),
    l = r(15202),
    I = r(211468);
let { Themes: u } = l.V,
    { SemanticColors: R, RawColors: A } = E.V,
    { Shadows: T } = c.V,
    { Spacing: N } = s.V,
    d = Symbol('semanticColor'),
    f = {
        themes: u,
        colors: o()(R, (e, t) => ({ [d]: t })),
        unsafe_rawColors: A,
        shadows: o()(T, (e) => {
            function t(t) {
                return { resolve: (r, a) => t(e[r].nativeStyles, a) };
            }
            return {
                shadowOffset: t((e) => e.shadowOffset),
                shadowColor: t((e, t) => (t ? e.shadowColorAndroid : e.shadowColor)),
                shadowOpacity: t((e) => e.shadowOpacity),
                shadowRadius: t((e) => e.shadowRadius),
                elevation: t((e) => e.elevation)
            };
        }),
        radii: i.w,
        spacing: N,
        internal: {
            isSemanticColor: (e) => 'object' == typeof e && null !== e && d in e,
            getSemanticColorName: (e) => e[d],
            resolveSemanticColor(e, t, r) {
                var a, _;
                e = (function (e) {
                    if ('string' == typeof e) {
                        let t = e.toUpperCase();
                        if (!(t in u)) throw Error('Invalid theme: '.concat(e));
                        e = u[t];
                    }
                    return e;
                })(e);
                let o = R[t[d]],
                    { category: E } = o,
                    i = o[e],
                    c = A[i.raw],
                    s = i.opacity;
                if ((null == r ? void 0 : r.gradient) != null && 'gradient' in o) {
                    let e = o.gradient[null == r ? void 0 : r.gradient.theme];
                    if (null != e) {
                        let t = n()(e.color in A ? A[e.color] : null == r ? void 0 : r.gradient.colors[e.color]);
                        'saturation' in e && (t = t.set('hsl.s', e.saturation)), 'lightness' in e && (t = t.set('hsl.l', e.lightness)), (c = t.hex()), (s = 'opacity' in e ? e.opacity : 1);
                    }
                }
                let l = null !== (a = null == r ? void 0 : r.contrast) && void 0 !== a ? a : 1,
                    T = null !== (_ = null == r ? void 0 : r.saturation) && void 0 !== _ ? _ : 1;
                return (T < 1 && (c = (0, I.dO)(c, E, T)), 1 !== l && (c = (0, I.pq)(c, E, e, l)), 1 === s) ? c : n()(c).alpha(s).hex();
            },
            adjustColorSaturation: (e, t, r) => (0, I.dO)(e, r, t),
            adjustColorContrast: (e, t, r, a) => (0, I.pq)(e, r, a, t)
        }
    };
t.ZP = f;
