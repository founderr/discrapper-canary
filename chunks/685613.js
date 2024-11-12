n.d(t, {
    f: function () {
        return s;
    }
});
var i,
    s,
    l = n(200651);
n(192379);
var r = n(120356),
    o = n.n(r),
    a = n(780384),
    u = n(302245),
    c = n(475595),
    d = n(78826),
    m = n(46140),
    x = n(981631),
    h = n(789935);
((i = s || (s = {}))[(i.SMALL = 24)] = 'SMALL'), (i[(i.MEDIUM = 32)] = 'MEDIUM');
t.Z = function (e) {
    let { className: t, gameTileSize: n = 24, quest: i, theme: s = x.BRd.DARK, withGameTile: r = !0 } = e,
        C = (0, a.wj)(s) ? x.BRd.DARK : x.BRd.LIGHT,
        g = (0, u.vI)(i, m.dr.QUESTS_BAR);
    return (0, l.jsxs)('div', {
        className: o()(h.partnerBranding, t),
        children: [
            r &&
                (0, l.jsx)(d.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, l.jsx)('img', {
                            ref: e,
                            className: h.partnerBrandingGameTile,
                            alt: '',
                            src: (0, c.fh)(i, c.eC.GAME_TILE, C).url,
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
            (0, l.jsx)(d.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, l.jsx)('img', {
                        ref: e,
                        className: o()(h.partnerBrandingLogotype, { [h.rewardHighlightLogotype]: g }),
                        alt: i.config.messages.gameTitle,
                        src: (0, c.fh)(i, c.eC.LOGO_TYPE, C).url
                    })
            })
        ]
    });
};
