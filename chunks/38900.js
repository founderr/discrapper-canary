var r = n(735250);
n(470079);
var s = n(120356),
    a = n.n(s),
    i = n(53824),
    o = n(291256),
    l = n(801895),
    c = n(775409);
let d = () => 4 * Math.random() + 8,
    u = [d(), d(), d()];
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
                            className: a()(l.skeleton, o.shopBanner),
                            children: (0, r.jsx)('div', { className: l.bannerBody })
                        }),
                        Array.from({ length: e }, (e, t) => t).map((e) =>
                            (0, r.jsx)(
                                'div',
                                {
                                    className: a()(l.skeleton, c.shopCard),
                                    children: (0, r.jsxs)('div', {
                                        className: l.cardBody,
                                        children: [(0, r.jsx)('div', { className: l.cardAvatar }), (0, r.jsx)('div', { className: l.cardTitle }), (0, r.jsx)('div', { className: l.cardDescription }), (0, r.jsx)('div', { className: l.cardSummary })]
                                    })
                                },
                                e
                            )
                        )
                    ]
                },
                e
            )
        )
    });
