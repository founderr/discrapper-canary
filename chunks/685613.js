n.d(t, {
    f: function () {
        return o;
    }
});
var s,
    o,
    a = n(735250);
n(470079);
var i = n(120356),
    r = n.n(i),
    l = n(780384),
    u = n(918701),
    c = n(302245),
    d = n(78826),
    C = n(46140),
    m = n(981631),
    E = n(272326);
((s = o || (o = {}))[(s.SMALL = 24)] = 'SMALL'), (s[(s.MEDIUM = 32)] = 'MEDIUM');
t.Z = function (e) {
    let { className: t, gameTileSize: n = 24, quest: s, theme: o = m.BRd.DARK, withGameTile: i = !0 } = e,
        p = (0, l.wj)(o) ? m.BRd.DARK : m.BRd.LIGHT,
        x = (0, c.vI)(s, C.dr.QUESTS_BAR);
    return (0, a.jsxs)('div', {
        className: r()(E.partnerBranding, t),
        children: [
            i &&
                (0, a.jsx)(d.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, a.jsx)('img', {
                            ref: e,
                            className: E.partnerBrandingGameTile,
                            alt: '',
                            src: (0, u.uo)(s, p),
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
            (0, a.jsx)(d.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, a.jsx)('img', {
                        ref: e,
                        className: r()(E.partnerBrandingLogotype, { [E.rewardHighlightLogotype]: x }),
                        alt: s.config.messages.gameTitle,
                        src: (0, u.Gs)(s, p)
                    })
            })
        ]
    });
};
