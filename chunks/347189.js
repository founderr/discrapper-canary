var n = r(585606),
    a = r(443735),
    _ = r(402428),
    o = r(207757),
    i = r(830911),
    E = r(556868),
    c = Object.prototype.hasOwnProperty;
e.exports = function (e, t) {
    var r = _(e),
        s = !r && a(e),
        l = !r && !s && o(e),
        u = !r && !s && !l && E(e),
        I = r || s || l || u,
        R = I ? n(e.length, String) : [],
        N = R.length;
    for (var A in e) (t || c.call(e, A)) && !(I && ('length' == A || (l && ('offset' == A || 'parent' == A)) || (u && ('buffer' == A || 'byteLength' == A || 'byteOffset' == A)) || i(A, N))) && R.push(A);
    return R;
};
