n.d(t, {
    K: function () {
        return m;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    s = n.n(a),
    i = n(52694),
    l = n(915376),
    o = n(511445),
    c = n(901698);
let d = () => 4 * Math.random() + 8,
    u = [d(), d(), d()],
    m = () =>
        (0, r.jsx)('div', {
            className: s()(o.skeleton, c.shopCard),
            children: (0, r.jsxs)('div', {
                className: o.cardBody,
                children: [(0, r.jsx)('div', { className: o.cardAvatar }), (0, r.jsx)('div', { className: o.cardTitle }), (0, r.jsx)('div', { className: o.cardDescription }), (0, r.jsx)('div', { className: o.cardSummary })]
            })
        });
t.Z = () =>
    (0, r.jsx)('div', {
        className: i.skeletons,
        children: u.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: i.cardsContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: s()(o.skeleton, l.shopBanner),
                            children: (0, r.jsx)('div', { className: o.bannerBody })
                        }),
                        Array.from({ length: e }, (e, t) => t).map((e) => (0, r.jsx)(m, {}, e))
                    ]
                },
                e
            )
        )
    });
