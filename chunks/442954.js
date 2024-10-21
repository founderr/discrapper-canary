n.d(t, {
    Z: function () {
        return u;
    }
}),
    n(47120);
var r = n(200651),
    a = n(192379),
    l = n(120356),
    i = n.n(l),
    o = n(481060),
    s = n(246992),
    c = n(219299),
    d = n(423705);
function u() {
    let e = {
            BOGOAnnouncementModal: async () => {
                let { default: e } = await n.e('34049').then(n.bind(n, 868508));
                return (t) => (0, r.jsx)(e, { renderModalProps: t });
            },
            PremiumSubscriptionAprilMarketingDecoModal: async () => {
                let { default: e } = await n.e('18327').then(n.bind(n, 731433));
                return (t) => (0, r.jsx)(e, { ...t });
            },
            CollectiblesExpiryModal: async () => {
                let { default: e } = await n.e('77370').then(n.bind(n, 83950));
                return (t) => (0, r.jsx)(e, { ...t });
            }
        },
        t = Object.keys(e).map((e) => ({
            label: e,
            value: e
        })),
        [l, u] = a.useState(t[0].value);
    return (0, r.jsx)(o.ScrollerThin, {
        className: i()(c.panel),
        children: (0, r.jsx)('div', {
            className: d.panelInner,
            children: (0, r.jsxs)('section', {
                className: d.section,
                children: [
                    (0, r.jsx)(o.Heading, {
                        variant: 'heading-md/semibold',
                        children: 'Open a Modal'
                    }),
                    (0, r.jsxs)('div', {
                        className: d.inputRow,
                        children: [
                            (0, r.jsx)(o.Select, {
                                className: d.input,
                                options: t,
                                isSelected: (e) => l === e,
                                placeholder: 'Trial ID',
                                serialize: (e) => String(e),
                                select: (e) => u(e),
                                popoutLayerContext: s.O$
                            }),
                            (0, r.jsx)(o.Button, {
                                onClick: () => {
                                    (0, o.openModalLazy)(e[l]);
                                },
                                children: 'Open'
                            })
                        ]
                    })
                ]
            })
        })
    });
}
