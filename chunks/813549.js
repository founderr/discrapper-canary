n.d(t, {
    J: function () {
        return o.Hb;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    s = n(385499),
    o = n(674563),
    l = n(485453);
t.Z = (e) => {
    let { name: t, discriminator: n, invertBotTagColor: i, nameColor: o, className: u, botType: c, usernameClass: d, discriminatorClass: f, botClass: _, botVerified: p = !1, style: h, useRemSizes: m = !1, usernameIcon: g } = e;
    return (0, r.jsxs)('div', {
        className: a()(u, l.nameTag),
        style: h,
        children: [
            (0, r.jsxs)('span', {
                className: a()(l.username, d),
                style: null != o ? { color: o } : void 0,
                children: [g, t]
            }),
            null != n
                ? (0, r.jsxs)('span', {
                      className: null != f ? f : void 0,
                      children: ['#', n]
                  })
                : null,
            null != c
                ? (0, r.jsx)(s.Z, {
                      type: c,
                      invertColor: i,
                      className: a()(_, l.bot),
                      verified: p,
                      useRemSizes: m
                  })
                : null
        ]
    });
};
