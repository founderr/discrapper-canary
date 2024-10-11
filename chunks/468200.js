n.d(t, {
    Z: function () {
        return u;
    }
});
var i = n(735250);
n(470079);
var s = n(481060),
    a = n(688465),
    l = n(690221),
    r = n(689938),
    o = n(188090),
    c = n(495841);
function u(e) {
    let { channel: t } = e;
    return (0, i.jsxs)(s.Dialog, {
        className: o.bar,
        children: [
            (0, i.jsxs)('div', {
                className: o.header,
                children: [
                    (0, i.jsx)(s.Heading, {
                        color: 'text-muted',
                        variant: 'heading-md/semibold',
                        className: o.title,
                        children: r.Z.Messages.CONSUMABLE_HD_STREAMING_MENU_TITLE
                    }),
                    (0, i.jsx)(a.Z, {})
                ]
            }),
            (0, i.jsx)(s.Clickable, {
                className: o.button,
                onClick: () => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await n.e('39473').then(n.bind(n, 447564));
                        return (n) =>
                            (0, i.jsx)(e, {
                                channel: t,
                                ...n
                            });
                    });
                },
                children: (0, i.jsxs)('div', {
                    className: o.buttonContent,
                    children: [
                        (0, i.jsx)('img', {
                            src: c,
                            alt: r.Z.Messages.CONSUMABLE_HD_STREAMING_LIST_ITEM_IMG_ALT
                        }),
                        (0, i.jsxs)(s.Text, {
                            variant: 'text-sm/medium',
                            children: [' ', r.Z.Messages.CONSUMABLE_HD_STREAMING_LIST_ITEM]
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', { className: o.divider }),
            (0, i.jsx)(l.Z, {
                onClick: () => {},
                children: (0, i.jsx)(s.Text, {
                    color: 'text-link',
                    variant: 'text-xs/medium',
                    children: r.Z.Messages.CONSUMABLE_HD_STREAMING_MENU_LEARN_MORE
                })
            })
        ]
    });
}
