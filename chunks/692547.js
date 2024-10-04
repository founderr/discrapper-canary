var r = n(47120);
var i = n(757143);
var a = n(688619),
    o = n.n(a),
    s = n(595182),
    l = n.n(s),
    u = n(402903),
    c = n.n(u),
    d = n(35782),
    _ = n(190558),
    E = n(196548),
    f = n(387117),
    h = n(949180),
    p = n(777910),
    m = n(897710);
let { Themes: I } = n(15202).V,
    { SemanticColors: T, RawColors: g } = _.V,
    { SemanticColorExperiments: S } = d.V,
    { Shadows: A } = p.V,
    { Spacing: v } = m.V,
    { Modules: N } = f.V,
    { Layout: O } = E.V,
    R = c()(g, (e) => o()(e)),
    C = {
        themes: I,
        modules: N,
        colors: c()(T, (e, t) => {
            let n = t;
            return {
                css: D(n),
                resolve(t) {
                    let r = e[t.theme],
                        i = r.raw,
                        a = r.opacity;
                    if (n in S && null != t.enabledExperiments && t.enabledExperiments.length > 0)
                        for (let e of t.enabledExperiments) {
                            var o, s, l, u;
                            let r = null === (s = S[n]) || void 0 === s ? void 0 : null === (o = s[e]) || void 0 === o ? void 0 : o[t.theme];
                            null != r && ((i = null !== (l = r.raw) && void 0 !== l ? l : i), (a = null !== (u = r.opacity) && void 0 !== u ? u : a));
                        }
                    if (1 === a) return C.unsafe_rawColors[i].resolve(t);
                    {
                        let e = R[i];
                        return 0 !== e.alpha() && 1 !== a && (e = e.alpha(a)), y(e, t.saturation);
                    }
                }
            };
        }),
        unsafe_rawColors: c()(g, (e, t) => {
            let n = t,
                r = R[n];
            return {
                css: D(n),
                resolve: (e) => y(r, e.saturation)
            };
        }),
        shadows: c()(A, (e, t) => ({
            css: D(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: h.w,
        spacing: c()(v, (e) => ''.concat(e, 'px')),
        layout: c()(O, (e) => ('number' == typeof e ? ''.concat(e, 'px') : e))
    };
function y(e, t) {
    return {
        spring() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return L(e, t, n).hex('rgba');
        },
        hsl() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return L(e, t, n).css('hsl');
        },
        hex() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return L(e, t, n).hex();
        },
        int() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = L(e, t, n),
                i = r.num();
            return 1 !== r.alpha() ? (i << 8) | Math.round(255 * r.alpha()) : i;
        }
    };
}
function L(e, t, n) {
    var r;
    let i = l()(null !== (r = n.opacity) && void 0 !== r ? r : 1, 0, 1),
        a = e;
    return 1 !== t && (a = a.set('hsl.s', a.get('hsl.s') * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a;
}
function b(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function D(e, t) {
    let n = null != t ? b(t) : null,
        r = b(e);
    return 'var(--'.concat([n, r].filter(Boolean).join('-'), ')');
}
t.Z = C;
