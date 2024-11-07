n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(873546),
    a = n(373793),
    o = n(399606),
    s = n(481060),
    c = n(434650),
    d = n(955415),
    u = n(706454),
    m = n(973616),
    h = n(914010),
    f = n(594174),
    p = n(626135),
    _ = n(135431),
    g = n(674588),
    E = n(264043),
    C = n(132871),
    I = n(147890),
    x = n(981631),
    N = n(388032),
    v = n(708262);
function T(e) {
    var t, n, T;
    let { code: S, message: A } = e,
        [b, j, Z] = (0, o.Wu)([E.Z], () => [E.Z.getApplication(S), E.Z.isInvalidApplication(S), E.Z.getApplicationFetchState(S)], [S]),
        R = (0, o.e7)([u.default], () => u.default.locale),
        L = (0, o.e7)([h.Z], () => {
            var e;
            return null !== (e = h.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        P = (0, o.e7)([f.default], () => f.default.getCurrentUser()),
        [y, O] = r.useState(!1),
        M = r.useCallback((e) => {
            e && O(!0);
        }, []),
        k = (0, c.O)(M);
    r.useEffect(() => {
        (0, g.gZ)(S);
    }, [S]),
        r.useEffect(() => {
            y &&
                Z === E.M.FETCHED &&
                p.default.track(x.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: S,
                    device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: A.author.id,
                    guild_id: L,
                    channel_id: A.channel_id
                });
        }, [y, S, null == P ? void 0 : P.id, A.channel_id, L, A.author.id, Z]),
        r.useEffect(() => {
            y &&
                j &&
                p.default.track(x.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: A.author.id,
                    guild_id: L,
                    channel_id: A.channel_id
                });
        }, [y, L, j, A.author.id, A.channel_id]);
    let D = (e) => {
        p.default.track(x.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: S,
            device_platform: l.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: L,
            channel_id: A.channel_id
        }),
            (0, I.goToAppDirectory)({
                view: C.ApplicationDirectoryViews.APPLICATION,
                guildId: L,
                applicationId: S,
                entrypoint: { name: C.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
    };
    if (j)
        return (0, i.jsxs)(d.Z, {
            containerRef: k,
            children: [
                (0, i.jsx)(d.Z.Header, { text: N.intl.string(N.t.j4KtLS) }),
                (0, i.jsx)(d.Z.Body, {
                    children: (0, i.jsxs)('div', {
                        className: v.invalidBody,
                        children: [
                            (0, i.jsx)(d.Z.Icon, { expired: !0 }),
                            (0, i.jsx)(d.Z.Info, {
                                expired: !0,
                                title: N.intl.string(N.t.NaQLEx),
                                children: N.intl.string(N.t['0H5OT0'])
                            })
                        ]
                    })
                })
            ]
        });
    if (null == b || Z === E.M.FETCHING)
        return (0, i.jsxs)(d.Z, {
            containerRef: k,
            children: [(0, i.jsx)(d.Z.Header, { text: N.intl.string(N.t.m9hXGR) }), (0, i.jsx)(d.Z.Body, { resolving: !0 })]
        });
    let B = new Intl.NumberFormat(R, {
            notation: 'compact',
            compactDisplay: 'short'
        }),
        U = null !== (n = null === (t = b.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        w = (0, _.Eb)({
            customInstallUrl: b.custom_install_url,
            installParams: b.install_params,
            integrationTypesConfig: b.integration_types_config
        }),
        F = a.Y.GUILD_INSTALL in (null !== (T = b.integration_types_config) && void 0 !== T ? T : {}) && w;
    return (0, i.jsxs)(d.Z, {
        containerRef: k,
        children: [
            (0, i.jsx)(d.Z.Header, { text: N.intl.string(N.t.KC1oZ2) }),
            (0, i.jsxs)(d.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: v.applicationInfoContainer,
                        children: [
                            (0, i.jsx)(d.Z.Icon, {
                                application: m.Z.createFromServer(b),
                                className: v.applicationIcon,
                                onClick: () => D('application_icon')
                            }),
                            (0, i.jsx)(d.Z.Info, {
                                title: (0, i.jsx)(s.Clickable, {
                                    onClick: () => D('application_name'),
                                    children: b.name
                                }),
                                children:
                                    U > 0 &&
                                    F &&
                                    (0, i.jsxs)(s.Clickable, {
                                        className: v.guildCountContainer,
                                        onClick: () => D('application_guild_count'),
                                        children: [
                                            (0, i.jsx)(s.CompassIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 16,
                                                height: 16,
                                                className: v.guildCountIcon
                                            }),
                                            N.intl.format(N.t['6IW6Wl'], { guildCount: B.format(U) })
                                        ]
                                    })
                            })
                        ]
                    }),
                    w &&
                        (0, i.jsx)(d.Z.Button, {
                            onClick: () => {
                                if (null != b)
                                    (0, _.LO)({
                                        applicationId: S,
                                        customInstallUrl: b.custom_install_url,
                                        installParams: b.install_params,
                                        integrationTypesConfig: b.integration_types_config,
                                        guildId: L,
                                        source: 'app_directory_profile_embed'
                                    });
                            },
                            color: d.Z.Button.Colors.GREEN,
                            children: N.intl.string(N.t.NgXl3N)
                        })
                ]
            })
        ]
    });
}
