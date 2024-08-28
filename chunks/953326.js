var n = r(299623),
    a = r(980855),
    o = r(49693),
    i = function (e) {
        return function (t, r, i) {
            var _,
                E = n(t),
                s = o(E),
                c = a(i, s);
            if (e && r != r) {
                for (; s > c; ) if ((_ = E[c++]) != _) return !0;
            } else for (; s > c; c++) if ((e || c in E) && E[c] === r) return e || c || 0;
            return !e && -1;
        };
    };
e.exports = {
    includes: i(!0),
    indexOf: i(!1)
};
