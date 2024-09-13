n(47120), n(757143);
var r = n(688619),
    i = n.n(r),
    a = n(595182),
    s = n.n(a),
    o = n(402903),
    l = n.n(o),
    u = n(35782),
    c = n(190558),
    d = n(387117),
    _ = n(949180),
    E = n(777910),
    f = n(897710);
let { Themes: h } = n(15202).V,
    { SemanticColors: p, RawColors: I } = c.V,
    { SemanticColorExperiments: m } = u.V,
    { Shadows: T } = E.V,
    { Spacing: S } = f.V,
    { Modules: g } = d.V,
    A = l()(I, (e) => i()(e)),
    N = {
        themes: h,
        modules: g,
        colors: l()(p, (e, t) => ({
            css: C(t),
            resolve(n) {
                let r = e[n.theme],
                    i = r.raw,
                    a = r.opacity;
                if (t in m && null != n.enabledExperiments && n.enabledExperiments.length > 0)
                    for (let e of n.enabledExperiments) {
                        var s, o, l, u;
                        let r = null === (o = m[t]) || void 0 === o ? void 0 : null === (s = o[e]) || void 0 === s ? void 0 : s[n.theme];
                        null != r && ((i = null !== (l = r.raw) && void 0 !== l ? l : i), (a = null !== (u = r.opacity) && void 0 !== u ? u : a));
                    }
                if (1 === a) return N.unsafe_rawColors[i].resolve(n);
                {
                    let e = A[i];
                    return 0 !== e.alpha() && 1 !== a && (e = e.alpha(a)), O(e, n.saturation);
                }
            }
        })),
        unsafe_rawColors: l()(I, (e, t) => {
            let n = A[t];
            return {
                css: C(t),
                resolve: (e) => O(n, e.saturation)
            };
        }),
        shadows: l()(T, (e, t) => ({
            css: C(t),
            resolve: (t) => ({
                boxShadow: e[t.theme].boxShadow,
                filter: e[t.theme].filter,
                nativeStyles: e[t.theme].nativeStyles
            })
        })),
        radii: _.w,
        spacing: l()(S, (e) => ''.concat(e, 'px'))
    };
function O(e, t) {
    return {
        spring() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return R(e, t, n).hex('rgba');
        },
        hsl() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return R(e, t, n).css('hsl');
        },
        hex() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return R(e, t, n).hex();
        },
        int() {
            let n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                r = R(e, t, n),
                i = r.num();
            return 1 !== r.alpha() ? (i << 8) | Math.round(255 * r.alpha()) : i;
        }
    };
}
function R(e, t, n) {
    var r;
    let i = s()(null !== (r = n.opacity) && void 0 !== r ? r : 1, 0, 1),
        a = e;
    return 1 !== t && (a = a.set('hsl.s', a.get('hsl.s') * t)), 1 !== i && (a = a.alpha(a.alpha() * i)), a;
}
function v(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function C(e, t) {
    let n = null != t ? v(t) : null,
        r = v(e);
    return 'var(--'.concat([n, r].filter(Boolean).join('-'), ')');
}
t.Z = N;
