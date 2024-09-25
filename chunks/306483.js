var r = n(620014),
    i = n(525425),
    a = n(51431),
    o = n(36572),
    s = n(706627),
    l = n(453342),
    u = n(292065);
function c(e, t, n, d, _) {
    if (e !== t)
        a(
            t,
            function (a, l) {
                if ((_ || (_ = new r()), s(a))) o(e, t, l, n, c, d, _);
                else {
                    var E = d ? d(u(e, l), a, l + '', e, t, _) : void 0;
                    void 0 === E && (E = a), i(e, l, E);
                }
            },
            l
        );
}
e.exports = c;
