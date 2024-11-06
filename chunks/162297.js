n.d(t, {
    Z: function () {
        return P;
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
    u = n(778569),
    d = n(182906),
    m = n(367907),
    h = n(213609),
    f = n(783097),
    p = n(213459),
    g = n(132871),
    _ = n(147890),
    C = n(220082),
    E = n(240991),
    I = n(914010),
    x = n(768581),
    v = n(585483),
    N = n(135431),
    T = n(728345),
    S = n(812206),
    b = n(981631),
    A = n(388032),
    j = n(166272),
    Z = n(413097),
    R = n(970952);
function P(e) {
    let { applicationId: t } = e,
        [n, l, a] = (0, o.Wu)([S.Z], () => [S.Z.getApplication(t), S.Z.isFetchingApplication(t), S.Z.didFetchingApplicationFail(t)], [t]);
    return (r.useEffect(() => {
        null == n && !l && !a && T.ZP.fetchApplication(t);
    }, [n, l, a, t]),
    null != n &&
        (0, N.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(y, { application: n })
        : null;
}
function y(e) {
    var t, n, u, d;
    let { application: C } = e,
        x = (0, o.e7)([I.Z], () => {
            var e;
            return null !== (e = I.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: T,
            name: S,
            description: P
        } = r.useMemo(
            () =>
                (0, f.sl)(C, {
                    fakeAppIconURL: Z,
                    size: 56
                }),
            [C]
        ),
        y = r.useMemo(() => (null != P ? (0, E.parseBioReact)(P) : null), [P]),
        [O, M] = r.useState(!1),
        k = r.useCallback((e) => {
            e && M(!0);
        }, []),
        D = (0, c.O)(k);
    r.useEffect(() => {
        O &&
            (0, h.h)({
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: C.id }
            });
    }, [O, C]);
    let B = C.id in (null !== (u = null === (t = (0, p.PL)(!0, !1).result) || void 0 === t ? void 0 : t.sections) && void 0 !== u ? u : {}),
        w = C.id in (null !== (d = null === (n = (0, p.LD)(x, !1).result) || void 0 === n ? void 0 : n.sections) && void 0 !== d ? d : {}),
        U = B || w,
        F = C.isVerified && C.isDiscoverable;
    return (0, i.jsxs)('div', {
        ref: D,
        className: j.embedContainer,
        children: [
            (0, i.jsx)(L, {
                application: C,
                iconUrl: T
            }),
            (0, i.jsx)('img', {
                className: j.icon,
                alt: C.name,
                src: null != T ? T : R,
                'aria-hidden': !0,
                draggable: !1
            }),
            (0, i.jsxs)('div', {
                className: j.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: j.details,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-lg/bold',
                                color: 'interactive-active',
                                children: S
                            }),
                            null != y &&
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: y
                                })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: j.buttonContainer,
                        children: [
                            (U || F) &&
                                (0, i.jsx)(s.Button, {
                                    color: s.Button.Colors.BRAND,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        var e;
                                        a.Y.USER_INSTALL in (null !== (e = C.integrationTypesConfig) && void 0 !== e ? e : {}) || U
                                            ? v.S.dispatchToLastSubscribed(b.CkL.OPEN_APP_LAUNCHER, { applicationId: C.id })
                                            : (0, _.goToAppDirectory)({
                                                  guildId: x,
                                                  view: g.ApplicationDirectoryViews.APPLICATION,
                                                  applicationId: C.id,
                                                  entrypoint: { name: g.ApplicationDirectoryEntrypointNames.OAUTH2_EMBED }
                                              });
                                    },
                                    children: A.intl.string(A.t.fbcCzc)
                                }),
                            (0, i.jsx)(s.Button, {
                                color: s.Button.Colors.PRIMARY,
                                type: 'button',
                                size: s.Button.Sizes.MEDIUM,
                                onClick: () => {
                                    m.ZP.trackWithMetadata(b.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: C.id }),
                                        (0, N.LO)({
                                            applicationId: C.id,
                                            customInstallUrl: C.customInstallUrl,
                                            installParams: C.installParams,
                                            integrationTypesConfig: C.integrationTypesConfig,
                                            guildId: x,
                                            source: 'app_oauth2_link_embed'
                                        });
                                },
                                children: A.intl.string(A.t.NgXl3N)
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function L(e) {
    let { application: t, iconUrl: n } = e,
        r = (0, u.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        l = (0, C.ZP)(n, ''),
        a = t.bot,
        o = null,
        s = {};
    if ((0, f.ye)(t))
        o = (0, i.jsx)(d.Z, {
            imageBackground: r,
            applicationName: t.name,
            imageClassName: j.bannerImage,
            imageNotFoundClassName: j.bannerImage
        });
    else if ((null == a ? void 0 : a.banner) != null) {
        let e = (0, x.aN)({
            id: a.id,
            banner: a.banner,
            size: 280,
            canAnimate: !1
        });
        o = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: j.bannerImage
        });
    } else s = { backgroundColor: l };
    return (0, i.jsx)('div', {
        className: j.banner,
        style: s,
        children: o
    });
}
