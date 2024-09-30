t.d(n, {
    I: function () {
        return u;
    }
});
var a = t(735250);
t(470079);
var i = t(557533),
    l = t.n(i),
    s = t(789978),
    r = t(790472),
    o = t(777207),
    d = t(147333),
    c = t(103077);
function u(e) {
    let { title: n, description: t, headerImage: i, onDetails: u, onPurchase: p, PurchaseButton: m, availabilityLabel: v } = e;
    return (0, a.jsx)(s.tE, {
        children: (0, a.jsxs)('div', {
            className: l()(d.wrapper, c.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != u ? u() : null != p && p();
            },
            children: [
                (0, a.jsx)('div', {
                    className: d.cardHeaderImg,
                    style: null != i ? { backgroundImage: null != i ? 'url('.concat(i.toString(), ')') : void 0 } : void 0,
                    children:
                        null == i &&
                        (0, a.jsx)(r.P, {
                            color: 'white',
                            size: 'custom',
                            height: 80,
                            width: 80
                        })
                }),
                (0, a.jsxs)('div', {
                    className: d.details,
                    children: [
                        (0, a.jsx)(o.x, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: n
                        }),
                        null != t &&
                            (0, a.jsx)(o.x, {
                                className: d.description,
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: t
                            })
                    ]
                }),
                null != m &&
                    (0, a.jsxs)('div', {
                        className: d.footer,
                        children: [
                            (0, a.jsx)(o.x, {
                                color: 'interactive-normal',
                                variant: 'text-sm/normal',
                                children: v
                            }),
                            (0, a.jsx)(m, {
                                onClick: (e) => {
                                    e.stopPropagation(), null == p || p();
                                }
                            })
                        ]
                    })
            ]
        })
    });
}
