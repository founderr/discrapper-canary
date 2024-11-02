n.r(t),
    n.d(t, {
        getOrParseBioAST: function () {
            return g;
        },
        parseBioReact: function () {
            return p;
        },
        parseBioReactWithCachedAST: function () {
            return E;
        },
        parseBioReactWithoutScrolling: function () {
            return v;
        }
    });
var r = n(392711),
    i = n.n(r),
    a = n(31775),
    s = n.n(a),
    o = n(302454),
    l = n.n(o),
    u = n(25209),
    c = n(691424),
    d = n(428595);
n(454585);
var f = n(364458);
let _ = (0, f.Z)([d.Z.PROFILE_BIO_RULES, (0, c.Z)({ enableBuildOverrides: !1 })]),
    h = new (s())({ max: 2000 }),
    p = u.w4(_),
    m = void 0;
function g(e) {
    let t = h.get(e);
    return null != t ? t : ((t = m(e, !0)), h.set(e, t), t);
}
function E(e) {
    if (0 === e.trim().length) return null;
    let t = g(e);
    return l().reactFor(l().ruleOutput(_, 'react'))(t);
}
let v = u.w4((0, f.Z)([i().omit(_, ['link', 'url', 'autolink', 'customEmoji', 'emoji', 'commandMention']), { emoji: { react: () => null } }]));
