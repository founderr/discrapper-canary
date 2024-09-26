n.d(t, {
    Bo: function () {
        return x;
    },
    Dc: function () {
        return O;
    },
    OF: function () {
        return M;
    },
    QB: function () {
        return w;
    },
    Tj: function () {
        return A;
    },
    XN: function () {
        return D;
    },
    c0: function () {
        return k;
    },
    fD: function () {
        return U;
    },
    kD: function () {
        return G;
    },
    rn: function () {
        return R;
    },
    rv: function () {
        return C;
    },
    zp: function () {
        return N;
    }
});
var r = n(653041);
var i = n(642549);
var a = n(518263);
var o = n(970173);
var s = n(520712);
var l = n(268111);
var u = n(941497);
var c = n(32026);
var d = n(480839);
var _ = n(744285);
var E = n(492257);
var f = n(873817);
var h = n(411104);
var p = n(512722),
    m = n.n(p),
    I = n(392711),
    T = n.n(I),
    g = n(950200),
    S = n.n(g);
function A(e) {
    let { width: t, height: n, maxWidth: r, maxHeight: i, minWidth: a = 0, minHeight: o = 0 } = e;
    if (t !== r || n !== i) {
        let e = t > r ? r / t : 1;
        t = Math.max(Math.round(t * e), a);
        let s = (n = Math.max(Math.round(n * e), o)) > i ? i / n : 1;
        (t = Math.max(Math.round(t * s), a)), (n = Math.max(Math.round(n * s), o));
    }
    return {
        width: t,
        height: n
    };
}
let v = 2000;
function N(e, t) {
    let n = Math.min(Math.round(0.65 * window.innerHeight), v);
    return A({
        width: e,
        height: t,
        maxWidth: Math.min(Math.round(0.75 * window.innerWidth), v),
        maxHeight: n
    });
}
function O(e) {
    let { width: t, height: n, maxWidth: r, maxHeight: i } = e,
        a = 1;
    t > r && (a = r / t), (t = Math.round(t * a));
    let o = 1;
    return (n = Math.round(n * a)) > i && (o = i / n), Math.min(a * o, 1);
}
function R(e) {
    let { width: t, height: n, maxWidth: r, maxHeight: i } = e;
    return t === n ? 1 : Math.min(Math.max(r / t, i / n), 1);
}
function C(e) {
    return null == e || '' === e ? 'none' : 'url('.concat(e, ')');
}
function y(e, t, n) {
    let r = [];
    for (let i = 0, a, o, s, l, u; i < t; i += n) (o = e[(a = 4 * i) + 0]), (s = e[a + 1]), (l = e[a + 2]), (void 0 === (u = e[a + 3]) || u >= 125) && !(o > 250 && s > 250 && l > 250) && r.push([o, s, l]);
    return r;
}
let L = [[0, 0, 0]],
    b = 128;
function D(e, t, n) {
    let r = document.createElement('canvas'),
        i = r.getContext('2d');
    if (null == i) return L;
    let a = (r.width = 0 === e.width ? b : e.width),
        o = (r.height = 0 === e.height ? b : e.height);
    i.drawImage(e, 0, 0, a, o);
    let s = y(i.getImageData(0, 0, a, o).data, a * o, n),
        l = S()(s, t);
    return 'boolean' == typeof l ? L : l.palette();
}
let M = (e) => ('number' == typeof e ? null : P(e)),
    P = T().memoize(
        (e) =>
            new Promise((t, n) => {
                let r = new Image();
                (r.crossOrigin = 'Anonymous'),
                    (r.onerror = (e) => {
                        n(e), (r.onerror = r.onload = null), (r = null);
                    }),
                    (r.onload = () => {
                        t(D(r, 5, 10)), (r.onerror = r.onload = null), (r = null);
                    }),
                    (r.src = e);
            })
    );
function U(e) {
    return new Promise((t, n) => {
        let r = new FileReader();
        r.readAsDataURL(e),
            (r.onload = () => {
                m()('string' == typeof r.result, 'Result must be a string'), t(r.result);
            }),
            (r.onerror = (e) => n(e));
    });
}
function w(e) {
    let t = e.split(';base64,');
    return m()(2 === t.length, 'Input data is not a valid image.'), atob(t[1]).length;
}
async function x(e, t, n) {
    let r = G(e);
    return new File([await r.arrayBuffer()], t, { type: n });
}
function G(e) {
    let t;
    t = e.split(',')[0].indexOf('base64') >= 0 ? atob(e.split(',')[1]) : btoa(e.split(',')[1]);
    let n = e.split(',')[0].split(':')[1].split(';')[0],
        r = new Uint8Array(t.length);
    for (var i = 0; i < t.length; i++) r[i] = t.charCodeAt(i);
    return new Blob([r], { type: n });
}
async function k(e) {
    var t;
    if ('image/png' !== (null === (t = e.type) || void 0 === t ? void 0 : t.split(';')[0])) throw Error('File is not a PNG');
    let n = await e.text(),
        r = n.indexOf('IDAT');
    return (!!(r > 0) && -1 !== n.substring(0, r).indexOf('acTL')) || !1;
}
