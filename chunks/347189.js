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
        I = !r && !s && o(e),
        u = !r && !s && !I && E(e),
        l = r || s || I || u,
        R = l ? n(e.length, String) : [],
        A = R.length;
    for (var T in e) (t || c.call(e, T)) && !(l && ('length' == T || (I && ('offset' == T || 'parent' == T)) || (u && ('buffer' == T || 'byteLength' == T || 'byteOffset' == T)) || i(T, A))) && R.push(T);
    return R;
};
