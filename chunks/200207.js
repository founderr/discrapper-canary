i.d(e, {
    I: function () {
        return c;
    }
});
var l = i(735250);
i(470079);
var s = i(557533),
    t = i.n(s),
    r = i(789978),
    a = i(790472),
    o = i(777207),
    d = i(147333),
    u = i(103077);
function c(n) {
    let { title: e, description: i, headerImage: s, onDetails: c, onPurchase: m, PurchaseButton: v, availabilityLabel: p } = n;
    return (0, l.jsx)(r.tE, {
        children: (0, l.jsxs)('div', {
            className: t()(d.wrapper, u.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != m && m();
            },
            children: [
                (0, l.jsx)('div', {
                    className: d.cardHeaderImg,
                    style: null != s ? { backgroundImage: null != s ? 'url('.concat(s.toString(), ')') : void 0 } : void 0,
                    children:
                        null == s &&
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
                            children: e
                        }),
                        null != i &&
                            (0, l.jsx)(o.x, {
                                className: d.description,
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: i
                            })
                    ]
                }),
                null != v &&
                    (0, l.jsxs)('div', {
                        className: d.footer,
                        children: [
                            (0, l.jsx)(o.x, {
                                color: 'interactive-normal',
                                variant: 'text-sm/normal',
                                children: p
                            }),
                            (0, l.jsx)(v, {
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
