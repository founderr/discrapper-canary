var r = n(620014),
    i = n(525425),
    a = n(51431),
    s = n(36572),
    o = n(706627),
    l = n(453342),
    u = n(292065);
e.exports = function e(t, n, c, d, f) {
    if (t !== n)
        a(
            n,
            function (a, l) {
                if ((f || (f = new r()), o(a))) s(t, n, l, c, e, d, f);
                else {
                    var _ = d ? d(u(t, l), a, l + '', t, n, f) : void 0;
                    void 0 === _ && (_ = a), i(t, l, _);
                }
            },
            l
        );
};
