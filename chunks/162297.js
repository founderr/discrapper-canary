n.d(t, {
    Z: function () {
        return O;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(373793),
    o = n(399606),
    s = n(481060),
    c = n(434650),
    d = n(778569),
    u = n(182906),
    m = n(367907),
    h = n(213609),
    f = n(783097),
    p = n(213459),
    _ = n(132871),
    g = n(147890),
    E = n(220082),
    C = n(240991),
    I = n(592125),
    x = n(496675),
    N = n(944486),
    v = n(914010),
    T = n(768581),
    S = n(585483),
    A = n(135431),
    b = n(728345),
    j = n(812206),
    Z = n(981631),
    R = n(388032),
    P = n(363637),
    L = n(413097),
    y = n(970952);
function O(e) {
    let { applicationId: t } = e,
        [n, l, a] = (0, o.Wu)([j.Z], () => [j.Z.getApplication(t), j.Z.isFetchingApplication(t), j.Z.didFetchingApplicationFail(t)], [t]);
    return (r.useEffect(() => {
        null == n && !l && !a && b.ZP.fetchApplication(t);
    }, [n, l, a, t]),
    null != n &&
        (0, A.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(M, { application: n })
        : null;
}
function M(e) {
    var t, n, d, u;
    let { application: E } = e,
        T = (0, o.e7)([v.Z], () => {
            var e;
            return null !== (e = v.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: b,
            name: j,
            description: O
        } = r.useMemo(
            () =>
                (0, f.sl)(E, {
                    fakeAppIconURL: L,
                    size: 56
                }),
            [E]
        ),
        M = r.useMemo(() => (null != O ? (0, C.parseBioReact)(O) : null), [O]),
        [D, B] = r.useState(!1),
        U = r.useCallback((e) => {
            e && B(!0);
        }, []),
        w = (0, c.O)(U);
    r.useEffect(() => {
        D &&
            (0, h.h)({
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: E.id }
            });
    }, [D, E]);
    let F = E.id in (null !== (d = null === (t = (0, p.PL)(!0, !1).result) || void 0 === t ? void 0 : t.sections) && void 0 !== d ? d : {}),
        G = E.id in (null !== (u = null === (n = (0, p.LD)(T, !1).result) || void 0 === n ? void 0 : n.sections) && void 0 !== u ? u : {}),
        V = F || G,
        H = E.isVerified && E.isDiscoverable,
        z = (0, o.e7)([N.Z, I.Z], () => I.Z.getChannel(N.Z.getChannelId())),
        W = (0, o.e7)([x.Z], () => x.Z.can(Z.Plq.SEND_MESSAGES, z));
    return (0, i.jsxs)('div', {
        ref: w,
        className: P.embedContainer,
        children: [
            (0, i.jsx)(k, {
                application: E,
                iconUrl: b
            }),
            (0, i.jsx)('img', {
                className: P.icon,
                alt: E.name,
                src: null != b ? b : y,
                'aria-hidden': !0,
                draggable: !1
            }),
            (0, i.jsxs)('div', {
                className: P.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: P.details,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-lg/bold',
                                color: 'interactive-active',
                                children: j
                            }),
                            null != M &&
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: M
                                })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: P.buttonContainer,
                        children: [
                            (V || H) &&
                                W &&
                                (0, i.jsx)(s.Button, {
                                    color: s.Button.Colors.BRAND,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        var e;
                                        a.Y.USER_INSTALL in (null !== (e = E.integrationTypesConfig) && void 0 !== e ? e : {}) || V
                                            ? S.S.dispatchToLastSubscribed(Z.CkL.OPEN_APP_LAUNCHER, { applicationId: E.id })
                                            : (0, g.goToAppDirectory)({
                                                  guildId: T,
                                                  view: _.ApplicationDirectoryViews.APPLICATION,
                                                  applicationId: E.id,
                                                  entrypoint: { name: _.ApplicationDirectoryEntrypointNames.OAUTH2_EMBED }
                                              });
                                    },
                                    children: R.intl.string(R.t.fbcCzc)
                                }),
                            (0, i.jsx)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                type: 'button',
                                size: s.Button.Sizes.MEDIUM,
                                onClick: () => {
                                    m.ZP.trackWithMetadata(Z.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: E.id }),
                                        (0, A.LO)({
                                            applicationId: E.id,
                                            customInstallUrl: E.customInstallUrl,
                                            installParams: E.installParams,
                                            integrationTypesConfig: E.integrationTypesConfig,
                                            guildId: T,
                                            source: 'app_oauth2_link_embed'
                                        });
                                },
                                children: R.intl.string(R.t.NgXl3N)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function k(e) {
    let { application: t, iconUrl: n } = e,
        r = (0, d.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        l = (0, E.ZP)(n, ''),
        a = t.bot,
        o = null,
        s = {};
    if ((0, f.ye)(t))
        o = (0, i.jsx)(u.Z, {
            imageBackground: r,
            applicationName: t.name,
            imageClassName: P.bannerImage,
            imageNotFoundClassName: P.bannerImage
        });
    else if ((null == a ? void 0 : a.banner) != null) {
        let e = (0, T.aN)({
            id: a.id,
            banner: a.banner,
            size: 280,
            canAnimate: !1
        });
        o = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: P.bannerImage
        });
    } else s = { backgroundColor: l };
    return (0, i.jsx)('div', {
        className: P.banner,
        style: s,
        children: o
    });
}
