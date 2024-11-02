e.d(i, {
    I: function () {
        return c;
    }
});
var t = e(200651);
e(192379);
var l = e(557533),
    r = e.n(l),
    s = e(489948),
    a = e(790472),
    o = e(777207),
    d = e(147333),
    u = e(103077);
function c(n) {
    let { title: i, description: e, headerImage: l, onDetails: c, onPurchase: m, PurchaseButton: v, availabilityLabel: p } = n;
    return (0, t.jsx)(s.tE, {
        children: (0, t.jsxs)('div', {
            className: r()(d.wrapper, u.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != m && m();
            },
            children: [
                (0, t.jsx)('div', {
                    className: d.cardHeaderImg,
                    style: null != l ? { backgroundImage: null != l ? 'url('.concat(l.toString(), ')') : void 0 } : void 0,
                    children:
                        null == l &&
                        (0, t.jsx)(a.P, {
                            color: 'white',
                            size: 'custom',
                            height: 80,
                            width: 80
                        })
                }),
                (0, t.jsxs)('div', {
                    className: d.details,
                    children: [
                        (0, t.jsx)(o.x, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: i
                        }),
                        null != e &&
                            (0, t.jsx)(o.x, {
                                className: d.description,
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: e
                            })
                    ]
                }),
                null != v &&
                    (0, t.jsxs)('div', {
                        className: d.footer,
                        children: [
                            (0, t.jsx)(o.x, {
                                color: 'interactive-normal',
                                variant: 'text-sm/normal',
                                children: p
                            }),
                            (0, t.jsx)(v, {
                                onClick: (n) => {
                                    n.stopPropagation(), null == m || m();
                                }
                            })
                        ]
                    })
            ]
        })
    });
}
