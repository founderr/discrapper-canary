n.d(t, {
    f: function () {
        return a;
    }
});
var i, a, s = n(735250);
n(470079);
var r = n(120356), l = n.n(r), o = n(780384), c = n(918701), d = n(78826), u = n(981631), _ = n(272467);
(i = a || (a = {}))[i.SMALL = 24] = 'SMALL', i[i.MEDIUM = 32] = 'MEDIUM';
t.Z = function (e) {
    let {
            className: t,
            gameTileSize: n = 24,
            quest: i,
            theme: a = u.BRd.DARK,
            withGameTile: r = !0
        } = e, E = (0, o.wj)(a) ? u.BRd.DARK : u.BRd.LIGHT;
    return (0, s.jsxs)('div', {
        className: l()(_.partnerBranding, t),
        children: [
            r && (0, s.jsx)(d.Fl, {
                id: 'QuestPartnerBranding_gameTile',
                children: e => (0, s.jsx)('img', {
                    ref: e,
                    className: _.partnerBrandingGameTile,
                    alt: '',
                    src: (0, c.uo)(i, E),
                    style: {
                        borderRadius: function (e) {
                            switch (e) {
                            case 24:
                                return 3;
                            case 32:
                                return 4;
                            }
                        }(n),
                        width: n,
                        height: n
                    }
                })
            }),
            (0, s.jsx)(d.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: e => (0, s.jsx)('img', {
                    ref: e,
                    className: _.partnerBrandingLogotype,
                    alt: i.config.messages.gameTitle,
                    src: (0, c.Gs)(i, E)
                })
            })
        ]
    });
};
