var r = n(735250);
n(470079);
var a = n(120356),
    s = n.n(a),
    o = n(53824),
    i = n(291256),
    c = n(801895),
    l = n(775409);
let d = () => 4 * Math.random() + 8,
    u = [d(), d(), d()];
t.Z = () =>
    (0, r.jsx)('div', {
        className: o.skeletons,
        children: u.map((e) =>
            (0, r.jsxs)(
                'div',
                {
                    className: o.cardsContainer,
                    children: [
                        (0, r.jsx)('div', {
                            className: s()(c.skeleton, i.shopBanner),
                            children: (0, r.jsx)('div', { className: c.bannerBody })
                        }),
                        Array.from({ length: e }, (e, t) => t).map((e) =>
                            (0, r.jsx)(
                                'div',
                                {
                                    className: s()(c.skeleton, l.shopCard),
                                    children: (0, r.jsxs)('div', {
                                        className: c.cardBody,
                                        children: [(0, r.jsx)('div', { className: c.cardAvatar }), (0, r.jsx)('div', { className: c.cardTitle }), (0, r.jsx)('div', { className: c.cardDescription }), (0, r.jsx)('div', { className: c.cardSummary })]
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
