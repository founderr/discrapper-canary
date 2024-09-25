n.d(t, {
    Z: function () {
        return c;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(120356),
    o = n.n(a),
    s = n(725436),
    l = n(737602),
    u = n(554034);
function c(e) {
    let { description: t, className: n, guildId: a, truncate: c = !0 } = e,
        d = i.useMemo(
            () =>
                (0, s.m)(t, !0, {
                    guildId: a,
                    allowLinks: !0,
                    allowHeading: !0,
                    allowList: !0
                }),
            [t, a]
        );
    return (0, r.jsx)('div', {
        className: o()(l.descriptionText, n, u.markup, { [l.truncate]: c }),
        children: d
    });
}
