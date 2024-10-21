n.d(t, {
    Z: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651),
    a = n(192379),
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
    f = n(768581),
    h = n(135431),
    N = n(728345),
    p = n(812206),
    C = n(981631),
    g = n(689938),
    S = n(166272),
    A = n(413097),
    x = n(970952);
function R(e) {
    let { applicationId: t } = e,
        [n, s, l] = (0, r.Wu)([p.Z], () => [p.Z.getApplication(t), p.Z.isFetchingApplication(t), p.Z.didFetchingApplicationFail(t)], [t]);
    return (a.useEffect(() => {
        null == n && !s && !l && N.ZP.fetchApplication(t);
    }, [n, s, l, t]),
    null != n &&
        (0, h.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(v, { application: n })
        : null;
}
function v(e) {
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
                    fakeAppIconURL: A,
                    size: 56
                }),
            [t]
        ),
        f = a.useMemo(() => (null != I ? (0, m.parseBioReact)(I) : null), [I]),
        [N, p] = a.useState(!1),
        R = a.useCallback((e) => {
            e && p(!0);
        }, []),
        v = (0, o.O)(R);
    return (
        a.useEffect(() => {
            N &&
                (0, _.h)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                    properties: { application_id: t.id }
                });
        }, [N, t]),
        (0, i.jsxs)('div', {
            ref: v,
            className: S.embedContainer,
            children: [
                (0, i.jsx)(O, {
                    application: t,
                    iconUrl: c
                }),
                (0, i.jsx)('img', {
                    className: S.icon,
                    alt: t.name,
                    src: null != c ? c : x,
                    'aria-hidden': !0,
                    draggable: !1
                }),
                (0, i.jsxs)('div', {
                    className: S.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: S.details,
                            children: [
                                (0, i.jsx)(l.Heading, {
                                    variant: 'heading-lg/bold',
                                    color: 'interactive-active',
                                    children: u
                                }),
                                null != f &&
                                    (0, i.jsx)(l.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: f
                                    })
                            ]
                        }),
                        (0, i.jsx)(l.Button, {
                            color: l.Button.Colors.PRIMARY,
                            className: S.button,
                            type: 'button',
                            size: l.Button.Sizes.MEDIUM,
                            onClick: () => {
                                d.ZP.trackWithMetadata(C.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: t.id }),
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
function O(e) {
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
            imageClassName: S.bannerImage,
            imageNotFoundClassName: S.bannerImage
        });
    else if ((null == r ? void 0 : r.banner) != null) {
        let e = (0, f.aN)({
            id: r.id,
            banner: r.banner,
            size: 280,
            canAnimate: !1
        });
        l = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: S.bannerImage
        });
    } else o = { backgroundColor: s };
    return (0, i.jsx)('div', {
        className: S.banner,
        style: o,
        children: l
    });
}
