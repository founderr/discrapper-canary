s.d(t, {
    K: function () {
        return m;
    }
});
var a = s(200651);
s(192379);
var r = s(120356),
    n = s.n(r),
    i = s(213731),
    l = s(462972),
    o = s(17504),
    c = s(352177);
let d = () => 4 * Math.random() + 8,
    u = [d(), d(), d()],
    m = () =>
        (0, a.jsx)('div', {
            className: n()(o.skeleton, c.shopCard),
            children: (0, a.jsxs)('div', {
                className: o.cardBody,
                children: [(0, a.jsx)('div', { className: o.cardAvatar }), (0, a.jsx)('div', { className: o.cardTitle }), (0, a.jsx)('div', { className: o.cardDescription }), (0, a.jsx)('div', { className: o.cardSummary })]
            })
        });
t.Z = () =>
    (0, a.jsx)('div', {
        className: i.skeletons,
        children: u.map((e) =>
            (0, a.jsxs)(
                'div',
                {
                    className: i.cardsContainer,
                    children: [
                        (0, a.jsx)('div', {
                            className: n()(o.skeleton, l.shopBanner),
                            children: (0, a.jsx)('div', { className: o.bannerBody })
                        }),
                        Array.from({ length: e }, (e, t) => t).map((e) => (0, a.jsx)(m, {}, e))
                    ]
                },
                e
            )
        )
    });
