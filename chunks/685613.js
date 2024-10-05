n.d(t, {
    f: function () {
        return a;
    }
});
var s,
    a,
    i = n(735250);
n(470079);
var o = n(120356),
    r = n.n(o),
    l = n(780384),
    u = n(302245),
    d = n(475595),
    c = n(78826),
    m = n(46140),
    E = n(981631),
    x = n(789935);
((s = a || (a = {}))[(s.SMALL = 24)] = 'SMALL'), (s[(s.MEDIUM = 32)] = 'MEDIUM');
t.Z = function (e) {
    let { className: t, gameTileSize: n = 24, quest: s, theme: a = E.BRd.DARK, withGameTile: o = !0 } = e,
        C = (0, l.wj)(a) ? E.BRd.DARK : E.BRd.LIGHT,
        h = (0, u.vI)(s, m.dr.QUESTS_BAR);
    return (0, i.jsxs)('div', {
        className: r()(x.partnerBranding, t),
        children: [
            o &&
                (0, i.jsx)(c.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, i.jsx)('img', {
                            ref: e,
                            className: x.partnerBrandingGameTile,
                            alt: '',
                            src: (0, d.fh)(s, d.Bd.GAME_TILE, C).url,
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
                        className: r()(x.partnerBrandingLogotype, { [x.rewardHighlightLogotype]: h }),
                        alt: s.config.messages.gameTitle,
                        src: (0, d.fh)(s, d.Bd.LOGO_TYPE, C).url
                    })
            })
        ]
    });
};
