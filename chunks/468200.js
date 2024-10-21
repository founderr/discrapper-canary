n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(200651);
n(192379);
var s = n(481060),
    a = n(688465),
    l = n(690221),
    r = n(447564),
    o = n(689938),
    c = n(188090),
    u = n(495841);
function d(e) {
    let { channel: t } = e;
    return (0, i.jsxs)(s.Dialog, {
        className: c.bar,
        children: [
            (0, i.jsxs)('div', {
                className: c.header,
                children: [
                    (0, i.jsx)(s.Heading, {
                        color: 'text-muted',
                        variant: 'heading-md/semibold',
                        className: c.title,
                        children: o.Z.Messages.CONSUMABLE_HD_STREAMING_MENU_TITLE
                    }),
                    (0, i.jsx)(a.Z, {})
                ]
            }),
            (0, i.jsx)(s.Clickable, {
                className: c.button,
                onClick: () => {
                    (0, s.openModalLazy)(
                        async () => {
                            let { default: e } = await Promise.resolve().then(n.bind(n, 447564));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    channel: t,
                                    ...n
                                });
                        },
                        { modalKey: r.HD_STREAMING_POTION_MODAL_KEY }
                    );
                },
                children: (0, i.jsxs)('div', {
                    className: c.buttonContent,
                    children: [
                        (0, i.jsx)('img', {
                            src: u,
                            alt: o.Z.Messages.CONSUMABLE_HD_STREAMING_LIST_ITEM_IMG_ALT
                        }),
                        (0, i.jsxs)(s.Text, {
                            variant: 'text-sm/medium',
                            children: [' ', o.Z.Messages.CONSUMABLE_HD_STREAMING_LIST_ITEM]
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', { className: c.divider }),
            (0, i.jsx)(l.Z, {
                onClick: () => {},
                children: (0, i.jsx)(s.Text, {
                    color: 'text-link',
                    variant: 'text-xs/medium',
                    children: o.Z.Messages.CONSUMABLE_HD_STREAMING_MENU_LEARN_MORE
                })
            })
        ]
    });
}
