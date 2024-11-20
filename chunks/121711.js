var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(481060),
    s = n(213609),
    o = n(252618),
    c = n(979233),
    d = n(175307),
    u = n(17845),
    h = n(374939),
    m = n(233374),
    p = n(611928),
    g = n(283293),
    f = n(63063),
    _ = n(113434),
    E = n(833435),
    I = n(150560),
    C = n(558652),
    v = n(736683),
    N = n(452081),
    T = n(46140),
    S = n(981631),
    A = n(388032),
    x = n(431418);
t.Z = function () {
    let { tabs: e, selectedTab: t, onSelectTab: n } = (0, N.z)(),
        { onScroll: b, scrollPosition: Z } = (0, c.M)(),
        L = I.Z.getState().getUtmCurrentContext(),
        y = (0, E._)({ location: T.dr.QUEST_HOME_DESKTOP }) ? v.Z : v.j;
    r.useEffect(() => {
        (0, s.h)({
            name: l.ImpressionNames.QUEST_HOME,
            type: l.ImpressionTypes.VIEW,
            properties: {
                utm_source_current: L.utmSourceCurrent,
                utm_medium_current: L.utmMediumCurrent,
                utm_campaign_current: L.utmCampaignCurrent,
                utm_content_current: L.utmContentCurrent,
                tab: t
            }
        });
    }, [t]);
    let O = r.useCallback(() => {
        window.open(f.Z.getArticleURL(S.BhN.QUESTS_LEARN_MORE));
    }, []);
    return (
        (0, o.Tt)({ location: A.intl.string(A.t.JALI2N) }),
        (0, i.jsxs)('div', {
            className: x.container,
            children: [
                (0, i.jsxs)(p.ZP, {
                    children: [(0, i.jsx)('div', { className: x.dragRegion }), (0, i.jsx)(p.z6, { scrollPosition: Z }), (0, i.jsx)(p.aV, { icon: a.QuestsIcon })]
                }),
                (0, i.jsxs)(g.Z, {
                    onScroll: b,
                    children: [
                        (0, i.jsx)(u.Z, {
                            title: A.intl.format(A.t.lmMBf3, {}),
                            description: A.intl.string(A.t.oWCrBg),
                            button: (0, i.jsx)(d.u, {
                                text: A.intl.string(A.t.hvVgAQ),
                                onClick: O
                            }),
                            className: x.bannerContainer,
                            children: (0, i.jsx)('div', {
                                className: x.bannerImage,
                                children: (0, i.jsx)('div', { className: x.bannerGradient })
                            })
                        }),
                        (0, i.jsxs)(h.Z, {
                            children: [
                                (0, i.jsx)(m.Z, {
                                    tabs: e,
                                    selectedTab: t,
                                    onTabSelect: n,
                                    className: x.tabs
                                }),
                                t === _.e5.CLAIMED ? (0, i.jsx)(y, { onSelectTab: n }) : (0, i.jsx)(C.Z, {})
                            ]
                        })
                    ]
                })
            ]
        })
    );
};
