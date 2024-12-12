var i = r(158698);
function a(e, n) {
    if (e !== n) {
        var r = void 0 !== e,
            a = null === e,
            s = e == e,
            o = i(e),
            l = void 0 !== n,
            u = null === n,
            c = n == n,
            d = i(n);
        if ((!u && !d && !o && e > n) || (o && l && c && !u && !d) || (a && l && c) || (!r && c) || !s) return 1;
        if ((!a && !o && !d && e < n) || (d && r && s && !a && !o) || (u && r && s) || (!l && s) || !c) return -1;
    }
    return 0;
}
e.exports = a;
