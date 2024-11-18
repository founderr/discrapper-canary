n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var l = n(481060),
    r = n(670044),
    a = n(388032),
    s = n(54086);
function o(e) {
    let { channel: t } = e;
    return (0, i.jsxs)('div', {
        className: s.notice,
        children: [
            (0, i.jsx)(r.Z, { id: t.id }),
            (0, i.jsx)('div', {
                className: s.info,
                children: (0, i.jsx)(l.Text, {
                    variant: 'text-sm/medium',
                    children: a.intl.format(a.t.P6Y2Nz, {})
                })
            }),
            (0, i.jsx)('div', {
                className: s.buttons,
                children: (0, i.jsxs)(l.Button, {
                    size: l.Button.Sizes.TINY,
                    look: l.Button.Looks.FILLED,
                    color: l.Button.Colors.PRIMARY,
                    className: s.button,
                    innerClassName: s.buttonInner,
                    onClick: () => {
                        (0, l.openModalLazy)(async () => {
                            let { default: e } = await Promise.all([n.e('70205'), n.e('5863'), n.e('71111')]).then(n.bind(n, 751212));
                            return (n) =>
                                (0, i.jsx)(e, {
                                    ...n,
                                    guildId: t.guild_id,
                                    scrollToChannels: !0
                                });
                        });
                    },
                    children: [
                        a.intl.string(a.t.h850Sk),
                        (0, i.jsx)(l.LinkExternalSmallIcon, {
                            size: 'xs',
                            color: 'currentColor',
                            style: { marginLeft: 4 }
                        })
                    ]
                })
            })
        ]
    });
}
