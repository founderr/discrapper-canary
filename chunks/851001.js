n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    s = n.n(a),
    l = n(481060),
    o = n(100527),
    c = n(906732),
    d = n(70097),
    u = n(526167),
    m = n(140465),
    g = n(104494),
    f = n(639119),
    p = n(635921),
    _ = n(474936),
    h = n(869783),
    E = n(388032),
    b = n(255346),
    x = n(839526),
    C = n(4046),
    T = n(423741);
t.Z = (e) => {
    var t, n;
    let { className: a, isFooterVisible: v, isDarkMode: N, isReducedMotion: I } = e,
        { analyticsLocations: S } = (0, c.ZP)(o.Z.PREMIUM_MARKETING_FOOTER_CTA),
        R = (0, g.Ng)(),
        A = (0, g.Wp)(R, _.Si.TIER_2) ? _.Si.TIER_2 : void 0,
        j = (0, f.N)(),
        P = (0, m.Nx)(),
        Z = (0, u.rO)(),
        M = r.useRef(null),
        [B, O] = r.useState(!1);
    return (
        r.useEffect(() => {
            v && !I && !B && null != M.current && M.current.play();
        }, [v, I, B]),
        (0, i.jsx)(c.Gt, {
            value: S,
            children: (0, i.jsxs)('div', {
                className: s()(b.container, a),
                children: [
                    (0, i.jsx)(l.Heading, {
                        className: b.footerHeader,
                        variant: 'display-md',
                        color: 'header-primary',
                        children: E.intl.string(E.t.lEw32t)
                    }),
                    (0, i.jsx)(p.PK, {
                        subscriptionTier: null !== (n = null == j ? void 0 : null === (t = j.subscription_trial) || void 0 === t ? void 0 : t.sku_id) && void 0 !== n ? n : A,
                        inOfferExperience: P,
                        containerClassName: s()(b.footerCTAContainer),
                        isMarketingPageV2Enabled: !0,
                        isDarkMode: N
                    }),
                    (0, i.jsx)('div', {
                        className: b.footerArtContainer,
                        children: (0, i.jsx)(d.Z, {
                            playsInline: !0,
                            preload: 'auto',
                            poster: C.Z,
                            className: s()(b.footerArt),
                            onEnded: () => {
                                O(!0);
                            },
                            ref: M,
                            children: (0, i.jsx)('source', {
                                src: Z ? x.Z : T.Z,
                                type: Z ? h.m.MP4 : h.m.WEBM
                            })
                        })
                    }),
                    (0, i.jsx)('div', { className: b.leftGradient }),
                    (0, i.jsx)('div', { className: b.rightGradient })
                ]
            })
        })
    );
};
