var i = r(670097);
function a(e, n) {
    return function (r, a) {
        if (null == r) return r;
        if (!(0, i.Z)(r)) return e(r, a);
        for (var s = r.length, o = n ? s : -1, l = Object(r); (n ? o-- : ++o < s) && !1 !== a(l[o], o, l); );
        return r;
    };
}
n.Z = a;
