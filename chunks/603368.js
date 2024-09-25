n.d(t, {
    $0: function () {
        return m;
    },
    j1: function () {
        return A;
    },
    nP: function () {
        return v;
    },
    nj: function () {
        return N;
    },
    pX: function () {
        return T;
    }
});
var r = n(47120);
var i = n(470079),
    a = n(688619),
    o = n.n(a),
    s = n(392711),
    l = n.n(s),
    u = n(780384),
    c = n(481060),
    d = n(410030),
    _ = n(564334),
    E = n(302221),
    f = n(308083);
let h = 15;
function p(e) {
    var t;
    let n = o()(e);
    return null ===
        (t = l()(f.ym)
            .map((e) => {
                let { primary: t } = e;
                return {
                    primary: t,
                    distance: o().distance(n, o()(t), 'hsl')
                };
            })
            .filter((e) => {
                let { distance: t } = e;
                return t < h;
            })
            .minBy((e) => {
                let { distance: t } = e;
                return t;
            })) || void 0 === t
        ? void 0
        : t.primary;
}
function m(e) {
    let t = o()(e),
        n = t.get('rgb.r'),
        r = t.get('rgb.g');
    return (299 * n + 587 * r + 114 * t.get('rgb.b')) / 1000 < 128
        ? c.tokens.colors.HEADER_PRIMARY.resolve({
              theme: 'dark',
              saturation: 1
          })
        : c.tokens.colors.HEADER_PRIMARY.resolve({
              theme: 'light',
              saturation: 1
          });
}
function I(e) {
    return new _.Z(e.get('rgb.r'), e.get('rgb.g'), e.get('rgb.b'), e.alpha());
}
function T(e, t) {
    var n;
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.S3.Text;
    if (null == e) return;
    let i = null !== (n = p(e)) && void 0 !== n ? n : e,
        a = o()(i),
        s = o()(t),
        l = (0, E.k8)({
            colors: [I(a), I(s)],
            ratio: r,
            saturationFactor: 1
        });
    if (null != l) return o()(l.toHexString());
}
function g(e, t) {
    if (null == e) return;
    let n = T(e, t, u.S3.NonText);
    if (null == n) return;
    let r = 0.2 > n.luminance() ? n.brighten(0.3) : n.darken(0.3),
        i = 0.2 > n.luminance() ? n.brighten(0.35) : n.darken(0.35);
    return {
        '--custom-clan-bg': n.css(),
        '--custom-clan-hover-bg': r.css(),
        '--custom-clan-active-bg': i.css()
    };
}
function S(e) {
    return { '--custom-clan-text': m(e).hex() };
}
function A(e, t) {
    let n = g(e, t);
    if (null == n) return;
    let r = S(n['--custom-clan-bg']);
    return {
        ...n,
        ...r
    };
}
function v(e, t) {
    let [n, r = 1] = t,
        a = (0, d.ZP)();
    return i.useMemo(
        () =>
            null != e
                ? e
                : n
                      .resolve({
                          theme: a,
                          saturation: r
                      })
                      .hex(),
        [e, n, r, a]
    );
}
function N(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'top left',
        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.3,
        i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '50%';
    if (null == e) return;
    let a = o()(e),
        s = { background: '\n      radial-gradient(\n        circle at '.concat(n, ',\n        ').concat(a.alpha(r).hex(), ' 0%,\n        transparent ').concat(i, '\n      )\n    ') };
    if (null != t) {
        let e = o()(t);
        s.background += ', '.concat(e.hex());
    }
    return s;
}
