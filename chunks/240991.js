n.r(t),
    n.d(t, {
        getOrParseBioAST: function () {
            return m;
        },
        parseBioReact: function () {
            return h;
        },
        parseBioReactWithCachedAST: function () {
            return I;
        },
        parseBioReactWithoutScrolling: function () {
            return g;
        }
    });
var r = n(392711),
    i = n.n(r),
    a = n(31775),
    o = n.n(a),
    s = n(302454),
    l = n.n(s),
    u = n(25209),
    c = n(691424),
    d = n(428595);
n(454585);
var _ = n(364458);
let E = (0, _.Z)([d.Z.PROFILE_BIO_RULES, (0, c.Z)({ enableBuildOverrides: !1 })]),
    f = new (o())({ max: 2000 }),
    h = u.w4(E),
    p = void 0;
function m(e) {
    let t = f.get(e);
    return null != t ? t : ((t = p(e, !0)), f.set(e, t), t);
}
function I(e) {
    if (0 === e.trim().length) return null;
    let t = m(e);
    return l().reactFor(l().ruleOutput(E, 'react'))(t);
}
let T = ['link', 'url', 'autolink', 'customEmoji', 'emoji', 'commandMention'],
    g = u.w4((0, _.Z)([i().omit(E, T), { emoji: { react: () => null } }]));
