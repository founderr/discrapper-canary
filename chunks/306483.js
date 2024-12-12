var i = r(620014),
    a = r(525425),
    s = r(51431),
    o = r(36572),
    l = r(706627),
    u = r(453342),
    c = r(292065);
function d(e, n, r, f, _) {
    if (e !== n)
        s(
            n,
            function (s, u) {
                if ((_ || (_ = new i()), l(s))) o(e, n, u, r, d, f, _);
                else {
                    var h = f ? f(c(e, u), s, u + '', e, n, _) : void 0;
                    void 0 === h && (h = s), a(e, u, h);
                }
            },
            u
        );
}
e.exports = d;
