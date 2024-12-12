var i = r(47120);
var a = r(757143);
var s = r(688619),
    o = r.n(s),
    l = r(595182),
    u = r.n(l),
    c = r(402903),
    d = r.n(c),
    f = r(35782),
    _ = r(190558),
    h = r(196548),
    p = r(387117),
    m = r(949180),
    g = r(777910),
    E = r(897710);
let { Themes: v } = r(15202).V,
    { SemanticColors: I, RawColors: T } = _.V,
    { SemanticColorExperiments: b } = f.V,
    { Shadows: y } = g.V,
    { Spacing: S } = E.V,
    { Modules: A } = p.V,
    { Layout: N } = h.V,
    C = d()(T, (e) => o()(e)),
    R = {
        themes: v,
        modules: A,
        colors: d()(I, (e, n) => {
            let r = n;
            return {
                css: x(r),
                resolve(n) {
                    let i = e[n.theme],
                        a = i.raw,
                        s = i.opacity;
                    if (r in b && null != n.enabledExperiments && n.enabledExperiments.length > 0)
                        for (let e of n.enabledExperiments) {
                            var o, l, u, c;
                            let i = null === (l = b[r]) || void 0 === l ? void 0 : null === (o = l[e]) || void 0 === o ? void 0 : o[n.theme];
                            null != i && ((a = null !== (u = i.raw) && void 0 !== u ? u : a), (s = null !== (c = i.opacity) && void 0 !== c ? c : s));
                        }
                    if (1 === s) return R.unsafe_rawColors[a].resolve(n);
                    {
                        let e = C[a];
                        return 0 !== e.alpha() && 1 !== s && (e = e.alpha(s)), O(e, n.saturation);
                    }
                }
            };
        }),
        unsafe_rawColors: d()(T, (e, n) => {
            let r = n,
                i = C[r];
            return {
                css: x(r),
                resolve: (e) => O(i, e.saturation)
            };
        }),
        shadows: d()(y, (e, n) => ({
            css: x(n),
            resolve: (n) => ({
                boxShadow: e[n.theme].boxShadow,
                filter: e[n.theme].filter,
                nativeStyles: e[n.theme].nativeStyles
            })
        })),
        radii: m.w,
        spacing: d()(S, (e) => ''.concat(e, 'px')),
        layout: d()(N, (e) => ('number' == typeof e ? ''.concat(e, 'px') : e))
    };
function O(e, n) {
    return {
        spring() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return D(e, n, r).hex('rgba');
        },
        hsl() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return D(e, n, r).css('hsl');
        },
        hex() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            return D(e, n, r).hex();
        },
        int() {
            let r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                i = D(e, n, r),
                a = i.num();
            return 1 !== i.alpha() ? (a << 8) | Math.round(255 * i.alpha()) : a;
        }
    };
}
function D(e, n, r) {
    var i;
    let a = u()(null !== (i = r.opacity) && void 0 !== i ? i : 1, 0, 1),
        s = e;
    return 1 !== n && (s = s.set('hsl.s', s.get('hsl.s') * n)), 1 !== a && (s = s.alpha(s.alpha() * a)), s;
}
function L(e) {
    return e.toLowerCase().replace(/_/g, '-');
}
function x(e, n) {
    let r = null != n ? L(n) : null,
        i = L(e);
    return 'var(--'.concat([r, i].filter(Boolean).join('-'), ')');
}
n.Z = R;
