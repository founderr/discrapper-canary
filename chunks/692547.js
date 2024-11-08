n(47120), n(757143);
var r = n(688619),
    i = n.n(r),
    a = n(595182),
    s = n.n(a),
    o = n(402903),
    l = n.n(o),
    u = n(35782),
    c = n(190558),
    d = n(196548),
    f = n(387117),
    _ = n(949180),
    h = n(777910),
    p = n(897710);
let { Themes: m } = n(15202).V,
    { SemanticColors: g, RawColors: E } = c.V,
    { SemanticColorExperiments: v } = u.V,
    { Shadows: I } = h.V,
    { Spacing: S } = p.V,
    { Modules: b } = f.V,
    { Layout: T } = d.V,
    y = l()(E, (e) => i()(e)),
    A = {
        themes: m,
        modules: b,
        colors: l()(g, (e, t) => ({
            css: O(t),
            resolve(n) {
                let r = e[n.theme],
                    i = r.raw,
                    a = r.opacity;
                if (t in v && null != n.enabledExperiments && n.enabledExperiments.length > 0)
                    for (let e of n.enabledExperiments) {
                        var s, o, l, u;
                        let r = null === (o = v[t]) || void 0 === o ? void 0 : null === (s = o[e]) || void 0 === s ? void 0 : s[n.theme];
                        null != r && ((i = null !== (l = r.raw) && void 0 !== l ? l : i), (a = null !== (u = r.opacity) && void 0 !== u ? u : a));
                    }
                if (1 === a) return A.unsafe_rawColors[i].resolve(n);
                {
                    let e = y[i];
                    return 0 !== e.alpha() && 1 !== a && (e = e.alpha(a)), N(e, n.saturation);
                }
            }
        })),
        unsafe_rawColors: l()(E, (e, t) => {
            let n = y[t];
            return {
                css: O(t),
                resolve: (e) => N(n, e.saturation)
            };
        }),
        shadows: l()(I, (e, t) => ({
            css: O(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: _.w,
        spacing: l()(S, (e) => ''.concat(e, 'px')),
        layout: l()(T, (e) => ('number' == typeof e ? ''.concat(e, 'px') : e))
    };
function N(e, t) {
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
    let i = s()(null !== (r = n.opacity) && void 0 !== r ? r : 1, 0, 1),
        a = e;
    return 1 !== t && (a = a.set('hsl.s', a.get('hsl.s') * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a;
}
function R(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function O(e, t) {
    let n = null != t ? R(t) : null,
        r = R(e);
    return 'var(--'.concat([n, r].filter(Boolean).join('-'), ')');
}
t.Z = A;
