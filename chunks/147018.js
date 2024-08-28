var n = r(161581),
    a = r(347722).f,
    o = r(251069),
    i = r(859209),
    _ = r(492424),
    E = r(381740),
    s = r(474180);
e.exports = function (e, t) {
    var r,
        c,
        I,
        u,
        l,
        R = e.target,
        A = e.global,
        T = e.stat;
    if ((r = A ? n : T ? n[R] || _(R, {}) : (n[R] || {}).prototype))
        for (c in t) {
            if (((u = t[c]), (I = e.dontCallGetSet ? (l = a(r, c)) && l.value : r[c]), !s(A ? c : R + (T ? '.' : '#') + c, e.forced) && void 0 !== I)) {
                if (typeof u == typeof I) continue;
                E(u, I);
            }
            (e.sham || (I && I.sham)) && o(u, 'sham', !0), i(r, c, u, e);
        }
};
