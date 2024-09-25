var r = n(729605),
    i = n(223944),
    a = n(474883),
    o = function (e) {
        return function (t, n, o) {
            var s,
                l = r(t),
                u = a(l),
                c = i(o, u);
            if (e && n != n) {
                for (; u > c; ) if ((s = l[c++]) != s) return !0;
            } else for (; u > c; c++) if ((e || c in l) && l[c] === n) return e || c || 0;
            return !e && -1;
        };
    };
e.exports = {
    includes: o(!0),
    indexOf: o(!1)
};
