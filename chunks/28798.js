var l = n(200651);
n(192379);
var s = n(442837),
    i = n(780384),
    r = n(481060),
    a = n(210887),
    o = n(475595),
    c = n(231338),
    d = n(689938),
    u = n(971704);
t.Z = function (e) {
    let { quest: t } = e,
        n = (0, s.e7)([a.Z], () => a.Z.getState().theme),
        f = (0, i.wj)(n) ? c.BR.DARK : c.BR.LIGHT;
    return (0, l.jsx)('div', {
        className: u.wrapper,
        children: (0, l.jsxs)('div', {
            className: u.content,
            children: [
                (0, l.jsx)('img', {
                    src: (0, o.fh)(t, o.Bd.GAME_TILE, f).url,
                    alt: '',
                    className: u.gameTile
                }),
                (0, l.jsxs)('div', {
                    className: u.copy,
                    children: [
                        (0, l.jsx)(r.Heading, {
                            color: 'always-white',
                            variant: 'text-sm/medium',
                            children: d.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_HEADING.format({ gameTitle: t.config.messages.gameTitle })
                        }),
                        (0, l.jsx)(r.Text, {
                            className: u.subheading,
                            color: 'always-white',
                            variant: 'text-xs/medium',
                            children: d.Z.Messages.QUESTS_STREAM_SOURCE_SELECT_NOTICE_SUBHEADING
                        })
                    ]
                })
            ]
        })
    });
};
