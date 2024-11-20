t.d(n, {
    Ld: function () {
        return u;
    },
    R_: function () {
        return r;
    },
    aw: function () {
        return d;
    },
    pU: function () {
        return m;
    }
}),
    t(789020);
var i = t(630388),
    l = t(406432),
    o = t(828061),
    s = t(981631);
let a = /\.(mp3|m4a|ogg|opus|wav|flac)$/i,
    r = (e) => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e || 'VISUAL_PLACEHOLDER' === e,
    u = (e) => 'IMAGE' === e || 'VIDEO' === e || 'VISUAL_PLACEHOLDER' === e;
function d(e, n) {
    let { filename: t, width: r, height: u } = e;
    if (n && null != r && r > 0 && null != u && u > 0) {
        if ((0, l.CO)(t)) return 'IMAGE';
        if (!(0, l.NU)(t) || null == e.proxy_url) return 'INVALID';
        else {
            var d;
            return (0, i.yE)(null !== (d = e.flags) && void 0 !== d ? d : 0, s.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
        }
    }
    if (null != n && a.test(t) && null != e.url) return 'AUDIO';
    if (null != e.url && (0, o.O)(t)) return 'PLAINTEXT_PREVIEW';
    return 'OTHER';
}
function m(e) {
    let { contentType: n, width: t, height: i } = e;
    if (null != t && t > 0 && null != i && i > 0) {
        if ((0, l.tw)(n)) return 'IMAGE';
        if ((0, l.X2)(n)) return 'VIDEO';
    }
    return 'VISUAL_PLACEHOLDER';
}
