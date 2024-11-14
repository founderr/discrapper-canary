r(411104);
var n = r(688619),
    a = r.n(n),
    _ = r(402903),
    o = r.n(_),
    i = r(190558),
    E = r(949180),
    c = r(777910),
    s = r(897710),
    l = r(15202),
    u = r(211468);
let { Themes: I } = l.V,
    { SemanticColors: R, RawColors: N } = i.V,
    { Shadows: A } = c.V,
    { Spacing: T } = s.V,
    d = Symbol('semanticColor'),
    f = {
        themes: I,
        colors: o()(R, (e, t) => ({ [d]: t })),
        unsafe_rawColors: N,
        shadows: o()(A, (e) => {
            function t(t) {
                return { resolve: (r, n) => t(e[r].nativeStyles, n) };
            }
            return {
                shadowOffset: t((e) => e.shadowOffset),
                shadowColor: t((e, t) => (t ? e.shadowColorAndroid : e.shadowColor)),
                shadowOpacity: t((e) => e.shadowOpacity),
                shadowRadius: t((e) => e.shadowRadius),
                elevation: t((e) => e.elevation)
            };
        }),
        radii: E.w,
        spacing: T,
        internal: {
            isSemanticColor: (e) => 'object' == typeof e && null !== e && d in e,
            getSemanticColorName: (e) => e[d],
            resolveSemanticColor(e, t, r) {
                var n, _;
                e = (function (e) {
                    if ('string' == typeof e) {
                        let t = e.toUpperCase();
                        if (!(t in I)) throw Error('Invalid theme: '.concat(e));
                        e = I[t];
                    }
                    return e;
                })(e);
                let o = R[t[d]],
                    { category: i } = o,
                    E = o[e],
                    c = N[E.raw],
                    s = E.opacity;
                if ((null == r ? void 0 : r.gradient) != null && 'gradient' in o) {
                    let e = o.gradient[null == r ? void 0 : r.gradient.theme];
                    if (null != e) {
                        let t = a()(e.color in N ? N[e.color] : null == r ? void 0 : r.gradient.colors[e.color]);
                        'saturation' in e && (t = t.set('hsl.s', e.saturation)), 'lightness' in e && (t = t.set('hsl.l', e.lightness)), (c = t.hex()), (s = 'opacity' in e ? e.opacity : 1);
                    }
                }
                let l = null !== (n = null == r ? void 0 : r.contrast) && void 0 !== n ? n : 1,
                    A = null !== (_ = null == r ? void 0 : r.saturation) && void 0 !== _ ? _ : 1;
                return (A < 1 && (c = (0, u.dO)(c, i, A)), 1 !== l && (c = (0, u.pq)(c, i, e, l)), 1 === s) ? c : a()(c).alpha(s).hex();
            },
            adjustColorSaturation: (e, t, r) => (0, u.dO)(e, r, t),
            adjustColorContrast: (e, t, r, n) => (0, u.pq)(e, r, n, t)
        }
    };
t.ZP = f;
