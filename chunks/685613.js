n.d(t, {
    f: function () {
        return a;
    }
});
var s,
    a,
    i = n(735250);
n(470079);
var l = n(120356),
    r = n.n(l),
    o = n(780384),
    u = n(302245),
    d = n(475595),
    c = n(78826),
    E = n(46140),
    m = n(981631),
    C = n(789935);
((s = a || (a = {}))[(s.SMALL = 24)] = 'SMALL'), (s[(s.MEDIUM = 32)] = 'MEDIUM');
t.Z = function (e) {
    let { className: t, gameTileSize: n = 24, quest: s, theme: a = m.BRd.DARK, withGameTile: l = !0 } = e,
        x = (0, o.wj)(a) ? m.BRd.DARK : m.BRd.LIGHT,
        _ = (0, u.vI)(s, E.dr.QUESTS_BAR);
    return (0, i.jsxs)('div', {
        className: r()(C.partnerBranding, t),
        children: [
            l &&
                (0, i.jsx)(c.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, i.jsx)('img', {
                            ref: e,
                            className: C.partnerBrandingGameTile,
                            alt: '',
                            src: (0, d.fh)(s, d.Bd.GAME_TILE, x).url,
                            style: {
                                borderRadius: (function (e) {
                                    switch (e) {
                                        case 24:
                                            return 3;
                                        case 32:
                                            return 4;
                                    }
                                })(n),
                                width: n,
                                height: n
                            }
                        })
                }),
            (0, i.jsx)(c.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, i.jsx)('img', {
                        ref: e,
                        className: r()(C.partnerBrandingLogotype, { [C.rewardHighlightLogotype]: _ }),
                        alt: s.config.messages.gameTitle,
                        src: (0, d.fh)(s, d.Bd.LOGO_TYPE, x).url
                    })
            })
        ]
    });
};
