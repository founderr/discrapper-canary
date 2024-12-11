n.d(t, {
    Z: function () {
        return m;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(442837),
    s = n(481060),
    o = n(541716),
    l = n(28546),
    u = n(970731),
    c = n(210887),
    d = n(921944),
    f = n(957825),
    _ = n(231338),
    p = n(388032),
    h = n(551049);
function m(e) {
    let { markAsDismissed: t } = e,
        n = (0, a.e7)([c.Z], () => c.Z.theme) === _.BR.LIGHT ? 'light' : 'dark',
        m = i.useCallback(() => {
            (0, l.RO)(f.X1.SOUNDBOARD, o.Ie.NORMAL);
        }, []);
    return (0, r.jsx)(u.ZP, {
        asset: (0, r.jsxs)('div', {
            className: h.headerContainer,
            children: [
                (0, r.jsx)('img', {
                    className: h.asset,
                    src: 'https://cdn.discordapp.com/assets/premium/roadblocks/soundboard_'.concat(n, '.png'),
                    alt: ''
                }),
                (0, r.jsx)(s.Button, {
                    className: h.close,
                    'aria-label': p.intl.string(p.t.cpT0Cg),
                    look: s.Button.Looks.BLANK,
                    size: s.Button.Sizes.NONE,
                    onClick: () => t(d.L.USER_DISMISS),
                    children: (0, r.jsx)(s.XSmallIcon, {
                        size: 'xs',
                        className: h.closeIcon,
                        color: 'white'
                    })
                })
            ]
        }),
        header: p.intl.string(p.t.dDj3ER),
        content: p.intl.string(p.t['0lZmoa']),
        buttonCTA: p.intl.string(p.t.RzWDqa),
        buttonProps: { color: s.ButtonColors.WHITE },
        caretPosition: u.DF.BOTTOM_RIGHT,
        onClick: m,
        markAsDismissed: t
    });
}
