n.d(t, {
    f: function () {
        return s;
    }
});
var i,
    s,
    a = n(735250);
n(470079);
var r = n(120356),
    l = n.n(r),
    o = n(780384),
    c = n(918701),
    u = n(302245),
    d = n(78826),
    _ = n(46140),
    E = n(981631),
    I = n(272326);
((i = s || (s = {}))[(i.SMALL = 24)] = 'SMALL'), (i[(i.MEDIUM = 32)] = 'MEDIUM');
t.Z = function (e) {
    let { className: t, gameTileSize: n = 24, quest: i, theme: s = E.BRd.DARK, withGameTile: r = !0 } = e,
        m = (0, o.wj)(s) ? E.BRd.DARK : E.BRd.LIGHT,
        T = (0, u.vI)(i, _.dr.QUESTS_BAR);
    return (0, a.jsxs)('div', {
        className: l()(I.partnerBranding, t),
        children: [
            r &&
                (0, a.jsx)(d.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, a.jsx)('img', {
                            ref: e,
                            className: I.partnerBrandingGameTile,
                            alt: '',
                            src: (0, c.uo)(i, m),
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
                        className: l()(I.partnerBrandingLogotype, { [I.rewardHighlightLogotype]: T }),
                        alt: i.config.messages.gameTitle,
                        src: (0, c.Gs)(i, m)
                    })
            })
        ]
    });
};
