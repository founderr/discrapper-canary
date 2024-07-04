n.d(t, {
    Z: function () {
        return S;
    }
});
var i = n(735250), s = n(470079), a = n(120356), r = n.n(a), l = n(186325), o = n(780384), c = n(481060), d = n(410030), u = n(810090), _ = n(113434), h = n(497505), E = n(918701), I = n(78826), m = n(670638), g = n(981631), p = n(689938), T = n(985164);
function S(e) {
    let {
            quest: t,
            isHovering: n,
            onCtxMenuClose: a,
            onCtxMenuOpen: S,
            onCtxMenuSelect: C
        } = e, f = (0, E.ph)(t), N = (0, d.ZP)(), A = (0, o.wj)(N) ? g.BRd.DARK : g.BRd.LIGHT, Z = A === g.BRd.DARK, L = s.useMemo(() => (0, E.nP)(t.config.assets.questBarHero), [t]), v = s.useContext(l.S).reducedMotion.enabled, O = (0, E.Mi)(t, h.jn.GIFT_INVENTORY_FOR_YOU), R = (0, _.tP)(t), x = s.useRef(n), b = s.useRef(null);
    return s.useEffect(() => {
        if (L && null != b.current)
            return x.current !== n && (n ? b.current.play() : (b.current.pause(), b.current.currentTime = 0)), x.current = n, () => {
                var e;
                null === (e = b.current) || void 0 === e || e.pause();
            };
    }, [
        n,
        L
    ]), (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsxs)('div', {
                className: T.container,
                children: [
                    (0, i.jsx)('div', {
                        className: T.heroAssetWrapper,
                        children: L ? (0, i.jsx)(I.Fl, {
                            id: 'QuestBarV2ContentExpanded_heroAnimated',
                            children: e => (null != e.current && (b.current = e.current), (0, i.jsx)(u.Z, {
                                ref: e,
                                autoPlay: !v && n,
                                loop: !0,
                                playsInline: !0,
                                className: T.heroAsset,
                                controls: !1,
                                children: (0, i.jsx)('source', {
                                    src: f,
                                    type: (0, E.mN)(f)
                                })
                            }))
                        }) : (0, i.jsx)(I.Fl, {
                            id: 'QuestTileBanner',
                            children: e => (0, i.jsx)('img', {
                                ref: e,
                                alt: '',
                                className: T.heroAsset,
                                src: f
                            })
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: r()(T.overlay, {
                            [T.darkThemeGradient]: Z,
                            [T.lightThemeGradient]: !Z
                        })
                    }),
                    (0, i.jsx)('div', {
                        className: T.positionContentOverBackground,
                        children: (0, i.jsxs)('div', {
                            className: T.contents,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: T.topRow,
                                    children: [
                                        O && !R && (0, i.jsx)('div', {
                                            className: T.pill,
                                            children: (0, i.jsx)(c.Text, {
                                                variant: 'eyebrow',
                                                color: 'always-white',
                                                className: T.eyebrowText,
                                                children: p.Z.Messages.RECOMMENDED
                                            })
                                        }),
                                        (0, i.jsx)(m.r, {
                                            onOpen: S,
                                            onClose: a,
                                            onSelect: C,
                                            questContent: h.jn.QUEST_HOME_DESKTOP,
                                            quest: t,
                                            hideLearnMore: !0,
                                            shouldShowDisclosure: !0,
                                            showShareLink: !0,
                                            children: e => (0, i.jsx)(c.Clickable, {
                                                ...e,
                                                className: T.submenuWrapper,
                                                'aria-label': p.Z.Messages.ACTIONS,
                                                children: (0, i.jsx)(c.MoreHorizontalIcon, {
                                                    size: 'md',
                                                    color: 'currentColor',
                                                    className: r()(T.submenuIcon)
                                                })
                                            })
                                        })
                                    ]
                                }),
                                (0, i.jsx)(I.Fl, {
                                    id: 'QuestPartnerBranding_gameLogotype',
                                    children: e => (0, i.jsx)('img', {
                                        ref: e,
                                        className: T.partnerBranding,
                                        alt: t.config.messages.gameTitle,
                                        src: (0, E.Gs)(t, A)
                                    })
                                }),
                                (0, i.jsx)('div', {
                                    className: T.bottomRow,
                                    children: (0, i.jsx)(c.Text, {
                                        variant: 'text-sm/medium',
                                        color: 'text-muted',
                                        children: p.Z.Messages.QUESTS_PROMOTED_BY_BRAND.format({ brandName: t.config.messages.gamePublisher })
                                    })
                                })
                            ]
                        })
                    })
                ]
            }),
            (0, i.jsx)('div', { className: T.spacer })
        ]
    });
}
