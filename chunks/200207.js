e.d(i, {
    I: function () {
        return c;
    }
});
var l = e(200651);
e(192379);
var t = e(557533),
    r = e.n(t),
    s = e(489948),
    a = e(790472),
    o = e(777207),
    d = e(147333),
    u = e(103077);
function c(n) {
    let { title: i, description: e, headerImage: t, onDetails: c, onPurchase: m, PurchaseButton: p, availabilityLabel: v } = n;
    return (0, l.jsx)(s.tE, {
        children: (0, l.jsxs)('div', {
            className: r()(d.wrapper, u.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != m && m();
            },
            children: [
                (0, l.jsx)('div', {
                    className: d.cardHeaderImg,
                    style: null != t ? { backgroundImage: null != t ? 'url('.concat(t.toString(), ')') : void 0 } : void 0,
                    children:
                        null == t &&
                        (0, l.jsx)(a.P, {
                            color: 'white',
                            size: 'custom',
                            height: 80,
                            width: 80
                        })
                }),
                (0, l.jsxs)('div', {
                    className: d.details,
                    children: [
                        (0, l.jsx)(o.x, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: i
                        }),
                        null != e &&
                            (0, l.jsx)(o.x, {
                                className: d.description,
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: e
                            })
                    ]
                }),
                null != p &&
                    (0, l.jsxs)('div', {
                        className: d.footer,
                        children: [
                            (0, l.jsx)(o.x, {
                                color: 'interactive-normal',
                                variant: 'text-sm/normal',
                                children: v
                            }),
                            (0, l.jsx)(p, {
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
