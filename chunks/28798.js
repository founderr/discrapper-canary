var l = n(200651);
n(192379);
var i = n(442837),
    r = n(780384),
    s = n(481060),
    a = n(210887),
    o = n(475595),
    c = n(231338),
    d = n(388032),
    u = n(81959);
t.Z = function (e) {
    let { quest: t } = e,
        n = (0, i.e7)([a.Z], () => a.Z.getState().theme),
        f = (0, r.wj)(n) ? c.BR.DARK : c.BR.LIGHT;
    return (0, l.jsx)('div', {
        className: u.wrapper,
        children: (0, l.jsxs)('div', {
            className: u.content,
            children: [
                (0, l.jsx)('img', {
                    src: (0, o.fh)(t, o.eC.GAME_TILE, f).url,
                    alt: '',
                    className: u.gameTile
                }),
                (0, l.jsxs)('div', {
                    className: u.copy,
                    children: [
                        (0, l.jsx)(s.Heading, {
                            color: 'always-white',
                            variant: 'text-sm/medium',
                            children: d.intl.format(d.t['5nMfBQ'], { gameTitle: t.config.messages.gameTitle })
                        }),
                        (0, l.jsx)(s.Text, {
                            className: u.subheading,
                            color: 'always-white',
                            variant: 'text-xs/medium',
                            children: d.intl.string(d.t.mjbPtb)
                        })
                    ]
                })
            ]
        })
    });
};
