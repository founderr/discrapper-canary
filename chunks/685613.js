n.d(t, {
    US: function () {
        return r;
    },
    fF: function () {
        return l;
    }
});
var i,
    s,
    l,
    r,
    o = n(200651);
n(192379);
var a = n(120356),
    u = n.n(a),
    c = n(692547),
    d = n(469244),
    m = n(780384),
    x = n(113434),
    h = n(302245),
    C = n(475595),
    p = n(78826),
    g = n(46140),
    E = n(981631),
    j = n(789935);
((i = l || (l = {}))[(i.SMALL = 24)] = 'SMALL'), (i[(i.MEDIUM = 32)] = 'MEDIUM'), ((s = r || (r = {}))[(s.SMALL = 2)] = 'SMALL'), (s[(s.MEDIUM = 8)] = 'MEDIUM');
t.ZP = function (e) {
    let { className: t, logotypeClassName: n, gameTileSize: i = 24, quest: s, separatorSpacing: l = 2, theme: r = E.BRd.DARK, withCosponsor: a = !0, withGameTile: T = !0 } = e,
        f = (0, m.wj)(r) ? E.BRd.DARK : E.BRd.LIGHT,
        v = (0, h.vI)(s, g.dr.QUESTS_BAR),
        S = (0, x.Gd)(s.id, f),
        N = a && null != s.config.cosponsorMetadata && null != S;
    return (0, o.jsxs)('div', {
        className: u()(j.partnerBranding, t),
        children: [
            T &&
                (0, o.jsx)(p.Fl, {
                    id: 'QuestPartnerBranding_gameTile',
                    children: (e) =>
                        (0, o.jsx)('img', {
                            ref: e,
                            className: j.partnerBrandingGameTile,
                            alt: '',
                            src: (0, C.fh)(s, C.eC.GAME_TILE, f).url,
                            style: {
                                borderRadius: (function (e) {
                                    switch (e) {
                                        case 24:
                                            return 3;
                                        case 32:
                                            return 4;
                                    }
                                })(i),
                                width: i,
                                height: i
                            }
                        })
                }),
            (0, o.jsx)(p.Fl, {
                id: 'QuestPartnerBranding_gameLogotype',
                children: (e) =>
                    (0, o.jsx)('img', {
                        ref: e,
                        className: u()(j.partnerBrandingLogotype, n, {
                            [j.rewardHighlightLogotype]: v,
                            [j.partnerBrandingLogotypeWithCosponsor]: N
                        }),
                        alt: s.config.messages.gameTitle,
                        src: (0, C.fh)(s, C.eC.LOGO_TYPE, f).url
                    })
            }),
            N &&
                (0, o.jsxs)(o.Fragment, {
                    children: [
                        (0, o.jsx)('div', {
                            className: j.cosponsorBrandSeparatorWrapper,
                            style: { margin: '0 '.concat(l, 'px') },
                            children: (0, o.jsx)(d.P, {
                                className: j.cosponsorBrandSeparator,
                                color: c.Z.colors.WHITE
                            })
                        }),
                        (0, o.jsx)(p.Fl, {
                            id: 'QuestPartnerBranding_cosponsorLogotype',
                            children: (e) => {
                                var t, i;
                                return (0, o.jsx)('img', {
                                    ref: e,
                                    className: u()(j.partnerBrandingLogotype, j.partnerBrandingLogotypeWithCosponsor, n, { [j.rewardHighlightLogotype]: v }),
                                    alt: null !== (i = null === (t = s.config.cosponsorMetadata) || void 0 === t ? void 0 : t.name) && void 0 !== i ? i : '',
                                    src: S.url
                                });
                            }
                        })
                    ]
                })
        ]
    });
};
