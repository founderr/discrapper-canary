var i = n(200651),
    s = n(192379),
    r = n(120356),
    l = n.n(r),
    a = n(115434),
    o = n(264181),
    c = n(399606),
    d = n(481060),
    u = n(100527),
    m = n(906732),
    g = n(626135),
    h = n(335131),
    p = n(874703),
    x = n(410154),
    T = n(302800),
    S = n(981631),
    _ = n(474936),
    E = n(388032),
    C = n(782376),
    f = n(786792),
    I = n(161594);
let N = (e) => {
    var t, n, s, r, a;
    let { displayOptions: o, marketingVariant: c } = e;
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)('div', {
                className: C.artContainer,
                'aria-hidden': !0,
                role: 'presentation',
                children: (0, i.jsx)('img', {
                    src: null !== (s = null == o ? void 0 : o.artSrc) && void 0 !== s ? s : I,
                    className: l()(C.art, { [C.tideArt]: null != c && c === x.C5.TIDE }),
                    alt: ''
                })
            }),
            (0, i.jsxs)('div', {
                className: C.mainColumn,
                children: [
                    (0, i.jsx)(d.Heading, {
                        variant: 'heading-lg/extrabold',
                        color: (null == o ? void 0 : o.revertTextColor) ? 'redesign-button-overlay-text' : 'currentColor',
                        className: C.title,
                        children: null !== (r = null == o ? void 0 : null === (t = o.title) || void 0 === t ? void 0 : t.call(o)) && void 0 !== r ? r : E.intl.string(E.t['4Emkur'])
                    }),
                    (0, i.jsx)(d.Text, {
                        variant: 'text-sm/normal',
                        color: (null == o ? void 0 : o.revertTextColor) ? 'redesign-button-overlay-text' : 'currentColor',
                        children: null !== (a = null == o ? void 0 : null === (n = o.description) || void 0 === n ? void 0 : n.call(o)) && void 0 !== a ? a : E.intl.string(E.t.gn7SZW)
                    })
                ]
            })
        ]
    });
};
t.Z = () => {
    var e;
    let t;
    let { analyticsLocations: n } = (0, m.ZP)(u.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL),
        r = s.useRef(null),
        I = (0, x.ZP)('CollectiblesUpsellBanner'),
        A = (0, c.e7)([p.Z], () => p.Z.getMarketingBySurface(a.K.EDIT_PROFILE_SETTINGS));
    return (
        (t =
            (null == A ? void 0 : A.type) === o.Z.BANNER
                ? {
                      artSrc: A.popoutAsset,
                      backgroundSrc: A.asset,
                      title: () => A.title,
                      description: () => A.body,
                      revertTextColor: A.revertTextColor
                  }
                : T.GX[I]),
        s.useEffect(() => {
            g.default.track(S.rMx.PREMIUM_UPSELL_VIEWED, {
                type: _.cd.COLLECTIBLES_PROFILE_SETTINGS_UPSELL,
                location_stack: n,
                version: null == A ? void 0 : A.version
            });
        }, [n, null == A ? void 0 : A.version]),
        (0, i.jsxs)('div', {
            ref: r,
            className: l()(C.container, { [C.robertContainer]: I === x.C5.ROBERT }),
            style: { backgroundImage: 'url('.concat(null !== (e = null == t ? void 0 : t.backgroundSrc) && void 0 !== e ? e : f, ')') },
            children: [
                (0, i.jsx)(N, {
                    displayOptions: t,
                    marketingVariant: I
                }),
                (0, i.jsx)(d.Button, {
                    onClick: () => {
                        (0, h.mK)({
                            analyticsLocations: n,
                            analyticsSource: u.Z.COLLECTIBLES_PROFILE_SETTINGS_UPSELL
                        });
                    },
                    className: C.ctaButton,
                    color: d.Button.Colors.BRAND_INVERTED,
                    children: E.intl.string(E.t.fYfGgI)
                })
            ]
        })
    );
};
