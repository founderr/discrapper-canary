n.d(t, {
    Ld: function () {
        return c;
    },
    R_: function () {
        return o;
    },
    aw: function () {
        return u;
    },
    pU: function () {
        return d;
    }
}),
    n(789020);
var l = n(630388),
    i = n(406432),
    a = n(828061),
    r = n(981631);
let s = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    o = (e) => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
    c = (e) => 'IMAGE' === e || 'VIDEO' === e;
function u(e, t) {
    let { filename: n, width: o, height: c } = e;
    if (t && null != o && o > 0 && null != c && c > 0) {
        if ((0, i.CO)(n)) return 'IMAGE';
        if (!(0, i.NU)(n) || null == e.proxy_url) return 'INVALID';
        else {
            var u;
            return (0, l.yE)(null !== (u = e.flags) && void 0 !== u ? u : 0, r.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
        }
    }
    if (null != t && s.test(n) && null != e.url) return 'AUDIO';
    if (null != e.url && (0, a.O)(n)) return 'PLAINTEXT_PREVIEW';
    return 'OTHER';
}
function d(e, t) {
    let { contentType: n, width: l, height: a } = e;
    if (t && l > 0 && a > 0) return (0, i.tw)(n) ? 'IMAGE' : (0, i.X2)(n) ? 'VIDEO' : 'INVALID';
    return 'OTHER';
}
