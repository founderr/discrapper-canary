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
        A = R.length;
    for (var N in e) (t || c.call(e, N)) && !(I && ('length' == N || (l && ('offset' == N || 'parent' == N)) || (u && ('buffer' == N || 'byteLength' == N || 'byteOffset' == N)) || i(N, A))) && R.push(N);
    return R;
};
