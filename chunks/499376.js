n.d(t, {
    Ld: function () {
        return c;
    },
    R_: function () {
        return u;
    },
    aw: function () {
        return d;
    },
    pU: function () {
        return _;
    }
});
var r = n(789020);
var i = n(630388),
    a = n(406432),
    o = n(828061),
    s = n(981631);
let l = /\.(mp3|m4a|ogg|wav|flac)$/i,
    u = (e) => 'IMAGE' === e || 'VIDEO' === e || 'CLIP' === e,
    c = (e) => 'IMAGE' === e || 'VIDEO' === e;
function d(e, t) {
    let { filename: n, width: r, height: u } = e;
    if (t && null != r && r > 0 && null != u && u > 0) {
        if ((0, a.CO)(n)) return 'IMAGE';
        if (!(0, a.NU)(n) || null == e.proxy_url) return 'INVALID';
        else {
            var c;
            return (0, i.yE)(null !== (c = e.flags) && void 0 !== c ? c : 0, s.J0y.IS_CLIP) ? 'CLIP' : 'VIDEO';
        }
    }
    if (null != t && l.test(n) && null != e.url) return 'AUDIO';
    if (null != e.url && (0, o.O)(n)) return 'PLAINTEXT_PREVIEW';
    return 'OTHER';
}
function _(e, t) {
    let { contentType: n, width: r, height: i } = e,
        o = r > 0 && i > 0;
    if (t && o) return (0, a.tw)(n) ? 'IMAGE' : (0, a.X2)(n) ? 'VIDEO' : 'INVALID';
    return 'OTHER';
}
