r.r(n),
    r.d(n, {
        getOrParseBioAST: function () {
            return E;
        },
        parseBioReact: function () {
            return m;
        },
        parseBioReactWithCachedAST: function () {
            return v;
        },
        parseBioReactWithoutScrolling: function () {
            return T;
        }
    });
var i = r(392711),
    a = r.n(i),
    s = r(31775),
    o = r.n(s),
    l = r(477660),
    u = r.n(l),
    c = r(25209),
    d = r(691424),
    f = r(428595);
r(454585);
var _ = r(364458);
let h = (0, _.Z)([f.Z.PROFILE_BIO_RULES, (0, d.Z)({ enableBuildOverrides: !1 })]),
    p = new (o())({ max: 2000 }),
    m = c.w4(h),
    g = void 0;
function E(e) {
    let n = p.get(e);
    return null != n ? n : ((n = g(e, !0)), p.set(e, n), n);
}
function v(e) {
    if (0 === e.trim().length) return null;
    let n = E(e);
    return u().reactFor(u().ruleOutput(h, 'react'))(n);
}
let I = ['link', 'url', 'autolink', 'customEmoji', 'emoji', 'commandMention'],
    T = c.w4((0, _.Z)([a().omit(h, I), { emoji: { react: () => null } }]));
