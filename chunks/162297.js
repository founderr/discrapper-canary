n.d(t, {
    Z: function () {
        return D;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(373793),
    o = n(399606),
    s = n(481060),
    c = n(493683),
    d = n(434650),
    u = n(122613),
    m = n(778569),
    h = n(182906),
    f = n(367907),
    p = n(906732),
    _ = n(213609),
    g = n(783097),
    E = n(213459),
    C = n(132871),
    I = n(147890),
    x = n(220082),
    N = n(240991),
    v = n(592125),
    T = n(496675),
    S = n(944486),
    A = n(914010),
    b = n(768581),
    j = n(585483),
    Z = n(135431),
    R = n(728345),
    P = n(812206),
    L = n(981631),
    y = n(388032),
    O = n(363637),
    M = n(413097),
    k = n(970952);
function D(e) {
    let { applicationId: t } = e,
        [n, l, a] = (0, o.Wu)([P.Z], () => [P.Z.getApplication(t), P.Z.isFetchingApplication(t), P.Z.didFetchingApplicationFail(t)], [t]);
    return (r.useEffect(() => {
        null == n && !l && !a && R.ZP.fetchApplication(t);
    }, [n, l, a, t]),
    null != n &&
        (0, Z.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(B, { application: n })
        : null;
}
function B(e) {
    var t, n, m, h, x;
    let { application: b } = e,
        R = null === (t = b.bot) || void 0 === t ? void 0 : t.id,
        P = (0, g.ye)(b) && null != R,
        D = (0, o.e7)([A.Z], () => {
            var e;
            return null !== (e = A.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: B,
            name: w,
            description: F
        } = r.useMemo(
            () =>
                (0, g.sl)(b, {
                    fakeAppIconURL: M,
                    size: 56
                }),
            [b]
        ),
        G = r.useMemo(() => (null != F ? (0, N.parseBioReact)(F) : null), [F]),
        [V, H] = r.useState(!1),
        z = r.useCallback((e) => {
            e && H(!0);
        }, []),
        W = (0, d.O)(z);
    r.useEffect(() => {
        V &&
            (0, _.h)({
                type: l.ImpressionTypes.VIEW,
                name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                properties: { application_id: b.id }
            });
    }, [V, b]);
    let K = b.id in (null !== (h = null === (n = (0, E.PL)(!0, !1).result) || void 0 === n ? void 0 : n.sections) && void 0 !== h ? h : {}),
        Y = b.id in (null !== (x = null === (m = (0, E.LD)(D, !1).result) || void 0 === m ? void 0 : m.sections) && void 0 !== x ? x : {}),
        X = K || Y,
        Q = b.isVerified && b.isDiscoverable,
        q = (0, o.e7)([S.Z, v.Z], () => v.Z.getChannel(S.Z.getChannelId())),
        J = (0, o.e7)([T.Z], () => (null == q ? void 0 : q.isPrivate()) || T.Z.can(L.Plq.SEND_MESSAGES, q)),
        { analyticsLocations: $ } = (0, p.ZP)(),
        ee = async () => {
            if (null != R)
                try {
                    let e = await c.Z.openPrivateChannel(R);
                    await (0, u.Z)({
                        targetApplicationId: b.id,
                        channelId: e,
                        analyticsLocations: $
                    });
                } catch (e) {}
        };
    return (0, i.jsxs)('div', {
        ref: W,
        className: O.embedContainer,
        children: [
            (0, i.jsx)(U, {
                application: b,
                iconUrl: B
            }),
            (0, i.jsx)('img', {
                className: O.icon,
                alt: b.name,
                src: null != B ? B : k,
                'aria-hidden': !0,
                draggable: !1
            }),
            (0, i.jsxs)('div', {
                className: O.body,
                children: [
                    (0, i.jsxs)('div', {
                        className: O.details,
                        children: [
                            (0, i.jsx)(s.Heading, {
                                variant: 'heading-lg/bold',
                                color: 'interactive-active',
                                children: w
                            }),
                            null != G &&
                                (0, i.jsx)(s.Text, {
                                    variant: 'text-sm/normal',
                                    color: 'text-normal',
                                    children: G
                                })
                        ]
                    }),
                    (0, i.jsxs)('div', {
                        className: O.buttonContainer,
                        children: [
                            P &&
                                (0, i.jsx)(s.Button, {
                                    color: s.Button.Colors.BRAND,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: ee,
                                    children: y.intl.string(y.t.QO7rOz)
                                }),
                            (X || Q) &&
                                J &&
                                (0, i.jsx)(s.Button, {
                                    color: P ? s.Button.Colors.PRIMARY : s.Button.Colors.BRAND,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        var e;
                                        a.Y.USER_INSTALL in (null !== (e = b.integrationTypesConfig) && void 0 !== e ? e : {}) || X
                                            ? j.S.dispatchToLastSubscribed(L.CkL.OPEN_APP_LAUNCHER, { applicationId: b.id })
                                            : (0, I.goToAppDirectory)({
                                                  guildId: D,
                                                  view: C.ApplicationDirectoryViews.APPLICATION,
                                                  applicationId: b.id,
                                                  entrypoint: { name: C.ApplicationDirectoryEntrypointNames.OAUTH2_EMBED }
                                              });
                                    },
                                    children: y.intl.string(y.t.fbcCzc)
                                }),
                            (!P || !X) &&
                                (0, i.jsx)(s.Button, {
                                    color: s.Button.Colors.PRIMARY,
                                    type: 'button',
                                    size: s.Button.Sizes.MEDIUM,
                                    onClick: () => {
                                        f.ZP.trackWithMetadata(L.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: b.id }),
                                            (0, Z.LO)({
                                                applicationId: b.id,
                                                customInstallUrl: b.customInstallUrl,
                                                installParams: b.installParams,
                                                integrationTypesConfig: b.integrationTypesConfig,
                                                guildId: D,
                                                source: 'app_oauth2_link_embed'
                                            });
                                    },
                                    children: y.intl.string(y.t.NgXl3N)
                                })
                        ]
                    })
                ]
            })
        ]
    });
}
function U(e) {
    let { application: t, iconUrl: n } = e,
        r = (0, m.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        l = (0, x.ZP)(n, ''),
        a = t.bot,
        o = null,
        s = {};
    if ((0, g.ye)(t))
        o = (0, i.jsx)(h.Z, {
            imageBackground: r,
            applicationName: t.name,
            imageClassName: O.bannerImage,
            imageNotFoundClassName: O.bannerImage
        });
    else if ((null == a ? void 0 : a.banner) != null) {
        let e = (0, b.aN)({
            id: a.id,
            banner: a.banner,
            size: 280,
            canAnimate: !1
        });
        o = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: O.bannerImage
        });
    } else s = { backgroundColor: l };
    return (0, i.jsx)('div', {
        className: O.banner,
        style: s,
        children: o
    });
}
