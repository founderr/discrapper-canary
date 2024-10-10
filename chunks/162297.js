n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(990547),
    l = n(399606),
    r = n(481060),
    o = n(434650),
    c = n(778569),
    d = n(182906),
    u = n(367907),
    _ = n(213609),
    E = n(783097),
    I = n(220082),
    m = n(240991),
    T = n(914010),
    N = n(768581),
    h = n(135431),
    C = n(728345),
    f = n(812206),
    p = n(981631),
    g = n(689938),
    A = n(166272),
    S = n(413097),
    M = n(970952);
function O(e) {
    let { applicationId: t } = e,
        [n, s, r] = (0, l.Wu)([f.Z], () => [f.Z.getApplication(t), f.Z.isFetchingApplication(t), f.Z.didFetchingApplicationFail(t)], [t]);
    return (a.useEffect(() => {
        null == n && !s && !r && C.ZP.fetchApplication(t);
    }, [n, s, r, t]),
    null != n &&
        (0, h.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(x, { application: n })
        : null;
}
function x(e) {
    let { application: t } = e,
        n = (0, l.e7)([T.Z], () => {
            var e;
            return null !== (e = T.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: c,
            name: d,
            description: I
        } = a.useMemo(
            () =>
                (0, E.sl)(t, {
                    fakeAppIconURL: S,
                    size: 56
                }),
            [t]
        ),
        N = a.useMemo(() => (null != I ? (0, m.parseBioReact)(I) : null), [I]),
        [C, f] = a.useState(!1),
        O = a.useCallback((e) => {
            e && f(!0);
        }, []),
        x = (0, o.O)(O);
    return (
        a.useEffect(() => {
            C &&
                (0, _.h)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                    properties: { application_id: t.id }
                });
        }, [C, t]),
        (0, i.jsxs)('div', {
            ref: x,
            className: A.embedContainer,
            children: [
                (0, i.jsx)(R, {
                    application: t,
                    iconUrl: c
                }),
                (0, i.jsx)('img', {
                    className: A.icon,
                    alt: t.name,
                    src: null != c ? c : M,
                    'aria-hidden': !0,
                    draggable: !1
                }),
                (0, i.jsxs)('div', {
                    className: A.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: A.details,
                            children: [
                                (0, i.jsx)(r.Heading, {
                                    variant: 'heading-lg/bold',
                                    color: 'interactive-active',
                                    children: d
                                }),
                                null != N &&
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: N
                                    })
                            ]
                        }),
                        (0, i.jsx)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            className: A.button,
                            type: 'button',
                            size: r.Button.Sizes.MEDIUM,
                            onClick: () => {
                                u.ZP.trackWithMetadata(p.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: t.id }),
                                    (0, h.LO)({
                                        applicationId: t.id,
                                        customInstallUrl: t.customInstallUrl,
                                        installParams: t.installParams,
                                        integrationTypesConfig: t.integrationTypesConfig,
                                        guildId: n,
                                        source: 'app_oauth2_link_embed'
                                    });
                            },
                            children: g.Z.Messages.APPLICATION_ADD_BUTTON
                        })
                    ]
                })
            ]
        })
    );
}
function R(e) {
    let { application: t, iconUrl: n } = e,
        a = (0, c.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        s = (0, I.ZP)(n, ''),
        l = t.bot,
        r = null,
        o = {};
    if ((0, E.ye)(t))
        r = (0, i.jsx)(d.Z, {
            imageBackground: a,
            applicationName: t.name,
            imageClassName: A.bannerImage,
            imageNotFoundClassName: A.bannerImage
        });
    else if ((null == l ? void 0 : l.banner) != null) {
        let e = (0, N.aN)({
            id: l.id,
            banner: l.banner,
            size: 280,
            canAnimate: !1
        });
        r = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: A.bannerImage
        });
    } else o = { backgroundColor: s };
    return (0, i.jsx)('div', {
        className: A.banner,
        style: o,
        children: r
    });
}
