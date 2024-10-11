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
    a = n(406432),
    s = n(828061),
    i = n(981631);
let r = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    o = (e) => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
    c = (e) => 'IMAGE' === e || 'VIDEO' === e;
function u(e, t) {
    let { filename: n, width: o, height: c } = e;
    if (t && null != o && o > 0 && null != c && c > 0) {
        if ((0, a.CO)(n)) return 'IMAGE';
        if (!(0, a.NU)(n) || null == e.proxy_url) return 'INVALID';
        else {
            var u;
            return (0, l.yE)(null !== (u = e.flags) && void 0 !== u ? u : 0, i.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
        }
    }
    if (null != t && r.test(n) && null != e.url) return 'AUDIO';
    if (null != e.url && (0, s.O)(n)) return 'PLAINTEXT_PREVIEW';
    return 'OTHER';
}
function d(e, t) {
    let { contentType: n, width: l, height: s } = e;
    if (t && l > 0 && s > 0) return (0, a.tw)(n) ? 'IMAGE' : (0, a.X2)(n) ? 'VIDEO' : 'INVALID';
    return 'OTHER';
}
