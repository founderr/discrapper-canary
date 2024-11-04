n.d(t, {
    Z: function () {
        return o;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    a = n(970731),
    l = n(388032),
    s = n(56681);
function o(e) {
    let { guildId: t, markAsDismissed: o } = e;
    return (0, i.jsx)(a.ZP, {
        className: s.container,
        asset: (0, i.jsx)('img', {
            className: s.image,
            src: n(297806),
            alt: ''
        }),
        header: l.intl.string(l.t['2l9beX']),
        headerClassName: s.header,
        content: l.intl.string(l.t.gdqdND),
        buttonCTA: l.intl.string(l.t.RzWDqa),
        buttonProps: {
            color: r.ButtonColors.WHITE,
            innerClassName: s.primaryButton
        },
        onClick: () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('5863'), n.e('53658')]).then(n.bind(n, 751212));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t
                    });
            });
        },
        secondaryButtonCTA: l.intl.string(l.t.TulDPj),
        secondaryButtonProps: {
            look: r.ButtonLooks.LINK,
            color: r.ButtonColors.WHITE
        },
        markAsDismissed: o
    });
}
