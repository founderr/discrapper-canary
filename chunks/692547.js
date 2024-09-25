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
    E = n(387117),
    f = n(949180),
    h = n(777910),
    p = n(897710);
let { Themes: m } = n(15202).V,
    { SemanticColors: I, RawColors: T } = _.V,
    { SemanticColorExperiments: g } = d.V,
    { Shadows: S } = h.V,
    { Spacing: A } = p.V,
    { Modules: v } = E.V,
    N = c()(T, (e) => o()(e)),
    O = {
        themes: m,
        modules: v,
        colors: c()(I, (e, t) => {
            let n = t;
            return {
                css: b(n),
                resolve(t) {
                    let r = e[t.theme],
                        i = r.raw,
                        a = r.opacity;
                    if (n in g && null != t.enabledExperiments && t.enabledExperiments.length > 0)
                        for (let e of t.enabledExperiments) {
                            var o, s, l, u;
                            let r = null === (s = g[n]) || void 0 === s ? void 0 : null === (o = s[e]) || void 0 === o ? void 0 : o[t.theme];
                            null != r && ((i = null !== (l = r.raw) && void 0 !== l ? l : i), (a = null !== (u = r.opacity) && void 0 !== u ? u : a));
                        }
                    if (1 === a) return O.unsafe_rawColors[i].resolve(t);
                    {
                        let e = N[i];
                        return 0 !== e.alpha() && 1 !== a && (e = e.alpha(a)), R(e, t.saturation);
                    }
                }
            };
        }),
        unsafe_rawColors: c()(T, (e, t) => {
            let n = t,
                r = N[n];
            return {
                css: b(n),
                resolve: (e) => R(r, e.saturation)
            };
        }),
        shadows: c()(S, (e, t) => ({
            css: b(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: f.w,
        spacing: c()(A, (e) => ''.concat(e, 'px'))
    };
function R(e, t) {
    return {
        spring() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C(e, t, n).hex('rgba');
        },
        hsl() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C(e, t, n).css('hsl');
        },
        hex() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return C(e, t, n).hex();
        },
        int() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = C(e, t, n),
                i = r.num();
            return 1 !== r.alpha() ? (i << 8) | Math.round(255 * r.alpha()) : i;
        }
    };
}
function C(e, t, n) {
    var r;
    let i = l()(null !== (r = n.opacity) && void 0 !== r ? r : 1, 0, 1),
        a = e;
    return 1 !== t && (a = a.set('hsl.s', a.get('hsl.s') * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a;
}
function y(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function b(e, t) {
    let n = null != t ? y(t) : null,
        r = y(e);
    return 'var(--'.concat([n, r].filter(Boolean).join('-'), ')');
}
t.Z = O;
