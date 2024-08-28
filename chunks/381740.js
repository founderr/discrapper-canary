var n = r(740362),
    a = r(666061),
    o = r(347722),
    i = r(97131);
e.exports = function (e, t, r) {
    for (var _ = a(t), E = i.f, s = o.f, c = 0; c < _.length; c++) {
        var I = _[c];
        !n(e, I) && !(r && n(r, I)) && E(e, I, s(t, I));
    }
};
