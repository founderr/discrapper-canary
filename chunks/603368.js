r.d(n, {
    $0: function () {
        return E;
    },
    j1: function () {
        return y;
    },
    nP: function () {
        return S;
    },
    nj: function () {
        return A;
    },
    pX: function () {
        return I;
    }
});
var i = r(47120);
var a = r(192379),
    s = r(688619),
    o = r.n(s),
    l = r(392711),
    u = r.n(l),
    c = r(780384),
    d = r(481060),
    f = r(410030),
    _ = r(564334),
    h = r(302221),
    p = r(308083);
let m = 15;
function g(e) {
    var n;
    let r = o()(e);
    return null ===
        (n = u()(p.ym)
            .map((e) => {
                let { primary: n } = e;
                return {
                    primary: n,
                    distance: o().distance(r, o()(n), 'hsl')
                };
            })
            .filter((e) => {
                let { distance: n } = e;
                return n < m;
            })
            .minBy((e) => {
                let { distance: n } = e;
                return n;
            })) || void 0 === n
        ? void 0
        : n.primary;
}
function E(e) {
    let n = o()(e),
        r = n.get('rgb.r'),
        i = n.get('rgb.g');
    return (299 * r + 587 * i + 114 * n.get('rgb.b')) / 1000 < 128
        ? d.tokens.colors.HEADER_PRIMARY.resolve({
              theme: 'dark',
              saturation: 1
          })
        : d.tokens.colors.HEADER_PRIMARY.resolve({
              theme: 'light',
              saturation: 1
          });
}
function v(e) {
    return new _.Z(e.get('rgb.r'), e.get('rgb.g'), e.get('rgb.b'), e.alpha());
}
function I(e, n) {
    var r;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c.S3.Text;
    if (null == e) return;
    let a = null !== (r = g(e)) && void 0 !== r ? r : e,
        s = o()(a),
        l = o()(n),
        u = (0, h.k8)({
            colors: [v(s), v(l)],
            ratio: i,
            saturationFactor: 1
        });
    if (null != u) return o()(u.toHexString());
}
function T(e, n) {
    if (null == e) return;
    let r = I(e, n, c.S3.NonText);
    if (null == r) return;
    let i = 0.2 > r.luminance() ? r.brighten(0.3) : r.darken(0.3),
        a = 0.2 > r.luminance() ? r.brighten(0.35) : r.darken(0.35);
    return {
        '--custom-clan-bg': r.css(),
        '--custom-clan-hover-bg': i.css(),
        '--custom-clan-active-bg': a.css()
    };
}
function b(e) {
    return { '--custom-clan-text': E(e).hex() };
}
function y(e, n) {
    let r = T(e, n);
    if (null == r) return;
    let i = b(r['--custom-clan-bg']);
    return {
        ...r,
        ...i
    };
}
function S(e, n) {
    let [r, i = 1] = n,
        s = (0, f.ZP)();
    return a.useMemo(
        () =>
            null != e
                ? e
                : r
                      .resolve({
                          theme: s,
                          saturation: i
                      })
                      .hex(),
        [e, r, i, s]
    );
}
function A(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'top left',
        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0.3,
        a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : '50%';
    if (null == e) return;
    let s = o()(e),
        l = { background: '\n      radial-gradient(\n        circle at '.concat(r, ',\n        ').concat(s.alpha(i).hex(), ' 0%,\n        transparent ').concat(a, '\n      )\n    ') };
    if (null != n) {
        let e = o()(n);
        l.background += ', '.concat(e.hex());
    }
    return l;
}
