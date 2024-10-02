n.d(t, {
    f: function () {
        return r;
    }
});
var r,
    i = n(735250);
n(470079);
var a = n(120356),
    o = n.n(a),
    s = n(780384),
    l = n(302245),
    u = n(475595),
    c = n(78826),
    d = n(46140),
    _ = n(981631),
    E = n(789935);
function f(e) {
    switch (e) {
        case 24:
            return 3;
        case 32:
            return 4;
    }
}
function h(e) {
    let { className: t, gameTileSize: n = 24, quest: r, theme: a = _.BRd.DARK, withGameTile: h = !0 } = e,
        p = (0, s.wj)(a) ? _.BRd.DARK : _.BRd.LIGHT,
        m = (0, l.vI)(r, d.dr.QUESTS_BAR);
    return (0, i.jsxs)('div', {
        className: o()(E.partnerBranding, t),
        children: [
            h &&
                (0, i.jsx)(c.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, i.jsx)('img', {
                            ref: e,
                            className: E.partnerBrandingGameTile,
                            alt: '',
                            src: (0, u.fh)(r, u.Bd.GAME_TILE, p).url,
                            style: {
                                borderRadius: f(n),
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
                        className: o()(E.partnerBrandingLogotype, { [E.rewardHighlightLogotype]: m }),
                        alt: r.config.messages.gameTitle,
                        src: (0, u.fh)(r, u.Bd.LOGO_TYPE, p).url
                    })
            })
        ]
    });
}
!(function (e) {
    (e[(e.SMALL = 24)] = 'SMALL'), (e[(e.MEDIUM = 32)] = 'MEDIUM');
})(r || (r = {})),
    (t.Z = h);
