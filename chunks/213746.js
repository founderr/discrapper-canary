n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(200651);
n(192379);
var r = n(793030),
    l = n(794295),
    a = n(283836),
    s = n(507608),
    o = n(955335),
    c = n(171246),
    d = n(388032),
    u = n(858725);
function h(e) {
    let { application: t } = e;
    return (0, i.jsxs)('div', {
        className: u.storeContainer,
        children: [(0, i.jsx)(m, { application: t }), (0, i.jsx)(p, { application: t })]
    });
}
function m(e) {
    let { application: t } = e,
        { subscriptions: n, otps: l } = (0, a.q)(t.id);
    return (0, i.jsxs)('div', {
        className: u.storeContainer,
        children: [
            n.length > 0 &&
                (0, i.jsxs)('div', {
                    className: u.productSection,
                    children: [
                        (0, i.jsx)(o.r, {
                            subscriptions: n,
                            color: 'header-primary'
                        }),
                        (0, i.jsx)('div', {
                            className: u.products,
                            children: n.map((e) =>
                                (0, i.jsx)(
                                    s.zz,
                                    {
                                        appId: t.id,
                                        listing: e,
                                        subscriptionType: (0, c.KW)(e.skuFlags) ? 'user' : 'guild'
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                }),
            l.length > 0 &&
                (0, i.jsxs)('div', {
                    className: u.productSection,
                    children: [
                        (0, i.jsx)(r.X6, {
                            variant: 'heading-lg/semibold',
                            color: 'header-primary',
                            children: d.intl.string(d.t.yUGTs7)
                        }),
                        (0, i.jsx)('div', {
                            className: u.products,
                            children: l.map((e) =>
                                (0, i.jsx)(
                                    s.hd,
                                    {
                                        skuId: e.skuId,
                                        appId: t.id
                                    },
                                    e.id
                                )
                            )
                        })
                    ]
                })
        ]
    });
}
function p(e) {
    let { application: t } = e,
        n = t.terms_of_service_url,
        a = t.privacy_policy_url;
    if (null == n && null == a) return null;
    let s = (e, t) =>
        (0, i.jsx)(l.Z, {
            href: t,
            children: e
        });
    return (0, i.jsx)('div', {
        className: u.legalContainer,
        children: (0, i.jsx)(r.xv, {
            color: 'header-primary',
            variant: 'text-sm/normal',
            children:
                null != n && null != a
                    ? d.intl.format(d.t.zjYypa, {
                          termsHook: (e) => s(e, n),
                          privacyHook: (e) => s(e, a)
                      })
                    : null != n
                      ? d.intl.format(d.t.YA1hw8, { termsHook: (e) => s(e, n) })
                      : null != a
                        ? d.intl.format(d.t['0LMe/P'], { privacyHook: (e) => s(e, a) })
                        : null
        })
    });
}
