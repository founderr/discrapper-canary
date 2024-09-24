i.d(e, {
    I: function () {
        return c;
    }
});
var l = i(735250);
i(470079);
var t = i(557533),
    r = i.n(t),
    s = i(789978),
    a = i(790472),
    d = i(777207),
    o = i(147333),
    u = i(103077);
function c(n) {
    let { title: e, description: i, headerImage: t, onDetails: c, onPurchase: p, PurchaseButton: v, availabilityLabel: m } = n;
    return (0, l.jsx)(s.tE, {
        children: (0, l.jsxs)('div', {
            className: r()(o.wrapper, u.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != p && p();
            },
            children: [
                (0, l.jsx)('div', {
                    className: o.cardHeaderImg,
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
                    className: o.details,
                    children: [
                        (0, l.jsx)(d.x, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: e
                        }),
                        null != i &&
                            (0, l.jsx)(d.x, {
                                className: o.description,
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: i
                            })
                    ]
                }),
                null != v &&
                    (0, l.jsxs)('div', {
                        className: o.footer,
                        children: [
                            (0, l.jsx)(d.x, {
                                color: 'interactive-normal',
                                variant: 'text-sm/normal',
                                children: m
                            }),
                            (0, l.jsx)(v, {
                                onClick: (n) => {
                                    n.stopPropagation(), null == p || p();
                                }
                            })
                        ]
                    })
            ]
        })
    });
}
