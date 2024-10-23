r.d(t, {
    K: function () {
        return m;
    }
});
var s = r(200651);
r(192379);
var n = r(120356),
    a = r.n(n),
    i = r(213731),
    l = r(462972),
    o = r(17504),
    c = r(352177);
let d = () => 4 * Math.random() + 8,
    u = [d(), d(), d()],
    m = () =>
        (0, s.jsx)('div', {
            className: a()(o.skeleton, c.shopCard),
            children: (0, s.jsxs)('div', {
                className: o.cardBody,
                children: [(0, s.jsx)('div', { className: o.cardAvatar }), (0, s.jsx)('div', { className: o.cardTitle }), (0, s.jsx)('div', { className: o.cardDescription }), (0, s.jsx)('div', { className: o.cardSummary })]
            })
        });
t.Z = () =>
    (0, s.jsx)('div', {
        className: i.skeletons,
        children: u.map((e) =>
            (0, s.jsxs)(
                'div',
                {
                    className: i.cardsContainer,
                    children: [
                        (0, s.jsx)('div', {
                            className: a()(o.skeleton, l.shopBanner),
                            children: (0, s.jsx)('div', { className: o.bannerBody })
                        }),
                        Array.from({ length: e }, (e, t) => t).map((e) => (0, s.jsx)(m, {}, e))
                    ]
                },
                e
            )
        )
    });
