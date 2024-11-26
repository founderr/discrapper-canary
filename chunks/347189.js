var a = r(585606),
    n = r(443735),
    _ = r(402428),
    o = r(207757),
    E = r(830911),
    i = r(556868),
    c = Object.prototype.hasOwnProperty;
e.exports = function (e, t) {
    var r = _(e),
        s = !r && n(e),
        l = !r && !s && o(e),
        I = !r && !s && !l && i(e),
        u = r || s || l || I,
        R = u ? a(e.length, String) : [],
        A = R.length;
    for (var T in e) (t || c.call(e, T)) && !(u && ('length' == T || (l && ('offset' == T || 'parent' == T)) || (I && ('buffer' == T || 'byteLength' == T || 'byteOffset' == T)) || E(T, A))) && R.push(T);
    return R;
};
