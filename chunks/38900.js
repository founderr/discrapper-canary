r.d(t, {
    K: function () {
        return f;
    }
});
var a = r(735250);
r(470079);
var n = r(120356),
    s = r.n(n),
    i = r(53824),
    o = r(291256),
    l = r(801895),
    c = r(775409);
let d = () => 4 * Math.random() + 8,
    u = [d(), d(), d()],
    f = () =>
        (0, a.jsx)('div', {
            className: s()(l.skeleton, c.shopCard),
            children: (0, a.jsxs)('div', {
                className: l.cardBody,
                children: [(0, a.jsx)('div', { className: l.cardAvatar }), (0, a.jsx)('div', { className: l.cardTitle }), (0, a.jsx)('div', { className: l.cardDescription }), (0, a.jsx)('div', { className: l.cardSummary })]
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
                            className: s()(l.skeleton, o.shopBanner),
                            children: (0, a.jsx)('div', { className: l.bannerBody })
                        }),
                        Array.from({ length: e }, (e, t) => t).map((e) => (0, a.jsx)(f, {}, e))
                    ]
                },
                e
            )
        )
    });
