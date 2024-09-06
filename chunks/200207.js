l.d(n, {
    I: function () {
        return c;
    }
});
var i = l(735250);
l(470079);
var t = l(557533),
    s = l.n(t),
    a = l(789978),
    r = l(790472),
    o = l(777207),
    d = l(25378),
    u = l(778342);
function c(e) {
    let { title: n, description: l, headerImage: t, onDetails: c, onPurchase: m, PurchaseButton: p, availabilityLabel: v } = e;
    return (0, i.jsx)(a.tE, {
        children: (0, i.jsxs)('div', {
            className: s()(d.wrapper, u.hoverCard),
            tabIndex: 0,
            onClick: () => {
                null != c ? c() : null != m && m();
            },
            children: [
                (0, i.jsx)('div', {
                    className: d.cardHeaderImg,
                    style: null != t ? { backgroundImage: null != t ? 'url('.concat(t.toString(), ')') : void 0 } : void 0,
                    children:
                        null == t &&
                        (0, i.jsx)(r.P, {
                            color: 'white',
                            size: 'custom',
                            height: 80,
                            width: 80
                        })
                }),
                (0, i.jsxs)('div', {
                    className: d.details,
                    children: [
                        (0, i.jsx)(o.x, {
                            color: 'header-primary',
                            variant: 'text-md/semibold',
                            children: n
                        }),
                        null != l &&
                            (0, i.jsx)(o.x, {
                                className: d.description,
                                color: 'text-muted',
                                variant: 'text-sm/normal',
                                children: l
                            })
                    ]
                }),
                null != p &&
                    (0, i.jsxs)('div', {
                        className: d.footer,
                        children: [
                            (0, i.jsx)(o.x, {
                                color: 'interactive-normal',
                                variant: 'text-sm/normal',
                                children: v
                            }),
                            (0, i.jsx)(p, {
                                onClick: (e) => {
                                    e.stopPropagation(), null == m || m();
                                }
                            })
                        ]
                    })
            ]
        })
    });
}
