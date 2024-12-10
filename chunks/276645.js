n.d(t, {
    Z: function () {
        return s;
    }
});
var i = n(200651);
n(192379);
var r = n(481060),
    l = n(970731),
    a = n(388032),
    o = n(733926);
function s(e) {
    let { guildId: t, markAsDismissed: s } = e;
    return (0, i.jsx)(l.ZP, {
        className: o.container,
        asset: (0, i.jsx)('img', {
            className: o.image,
            src: n(297806),
            alt: ''
        }),
        header: a.intl.string(a.t['2l9beX']),
        headerClassName: o.header,
        content: a.intl.string(a.t.gdqdND),
        buttonCTA: a.intl.string(a.t.RzWDqa),
        buttonProps: {
            color: r.ButtonColors.WHITE,
            innerClassName: o.primaryButton
        },
        onClick: () => {
            (0, r.openModalLazy)(async () => {
                let { default: e } = await Promise.all([n.e('5863'), n.e('97984')]).then(n.bind(n, 751212));
                return (n) =>
                    (0, i.jsx)(e, {
                        ...n,
                        guildId: t
                    });
            });
        },
        secondaryButtonCTA: a.intl.string(a.t.TulDPj),
        secondaryButtonProps: {
            look: r.ButtonLooks.LINK,
            color: r.ButtonColors.WHITE
        },
        markAsDismissed: s
    });
}
