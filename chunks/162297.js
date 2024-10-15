n.d(t, {
    Z: function () {
        return x;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(990547),
    r = n(399606),
    l = n(481060),
    o = n(434650),
    c = n(778569),
    u = n(182906),
    d = n(367907),
    _ = n(213609),
    E = n(783097),
    I = n(220082),
    m = n(240991),
    T = n(914010),
    h = n(768581),
    N = n(135431),
    f = n(728345),
    C = n(812206),
    p = n(981631),
    g = n(689938),
    A = n(166272),
    S = n(413097),
    R = n(970952);
function x(e) {
    let { applicationId: t } = e,
        [n, s, l] = (0, r.Wu)([C.Z], () => [C.Z.getApplication(t), C.Z.isFetchingApplication(t), C.Z.didFetchingApplicationFail(t)], [t]);
    return (a.useEffect(() => {
        null == n && !s && !l && f.ZP.fetchApplication(t);
    }, [n, s, l, t]),
    null != n &&
        (0, N.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(O, { application: n })
        : null;
}
function O(e) {
    let { application: t } = e,
        n = (0, r.e7)([T.Z], () => {
            var e;
            return null !== (e = T.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: c,
            name: u,
            description: I
        } = a.useMemo(
            () =>
                (0, E.sl)(t, {
                    fakeAppIconURL: S,
                    size: 56
                }),
            [t]
        ),
        h = a.useMemo(() => (null != I ? (0, m.parseBioReact)(I) : null), [I]),
        [f, C] = a.useState(!1),
        x = a.useCallback((e) => {
            e && C(!0);
        }, []),
        O = (0, o.O)(x);
    return (
        a.useEffect(() => {
            f &&
                (0, _.h)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                    properties: { application_id: t.id }
                });
        }, [f, t]),
        (0, i.jsxs)('div', {
            ref: O,
            className: A.embedContainer,
            children: [
                (0, i.jsx)(M, {
                    application: t,
                    iconUrl: c
                }),
                (0, i.jsx)('img', {
                    className: A.icon,
                    alt: t.name,
                    src: null != c ? c : R,
                    'aria-hidden': !0,
                    draggable: !1
                }),
                (0, i.jsxs)('div', {
                    className: A.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: A.details,
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: 'heading-lg/bold',
                                    color: 'interactive-active',
                                    children: u
                                }),
                                null != h &&
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: h
                                    })
                            ]
                        }),
                        (0, i.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            className: A.button,
                            type: 'button',
                            size: l.Button.Sizes.MEDIUM,
                            onClick: () => {
                                d.ZP.trackWithMetadata(p.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: t.id }),
                                    (0, N.LO)({
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
function M(e) {
    let { application: t, iconUrl: n } = e,
        a = (0, c.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        s = (0, I.ZP)(n, ''),
        r = t.bot,
        l = null,
        o = {};
    if ((0, E.ye)(t))
        l = (0, i.jsx)(u.Z, {
            imageBackground: a,
            applicationName: t.name,
            imageClassName: A.bannerImage,
            imageNotFoundClassName: A.bannerImage
        });
    else if ((null == r ? void 0 : r.banner) != null) {
        let e = (0, h.aN)({
            id: r.id,
            banner: r.banner,
            size: 280,
            canAnimate: !1
        });
        l = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: A.bannerImage
        });
    } else o = { backgroundColor: s };
    return (0, i.jsx)('div', {
        className: A.banner,
        style: o,
        children: l
    });
}
