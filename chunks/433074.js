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
    u = n(955415),
    d = n(706454),
    m = n(973616),
    f = n(914010),
    h = n(594174),
    p = n(626135),
    g = n(135431),
    _ = n(674588),
    C = n(264043),
    E = n(132871),
    I = n(147890),
    x = n(981631),
    v = n(388032),
    N = n(708262);
function T(e) {
    var t, n, T;
    let { code: S, message: b } = e,
        [A, j, Z] = (0, o.Wu)([C.Z], () => [C.Z.getApplication(S), C.Z.isInvalidApplication(S), C.Z.getApplicationFetchState(S)], [S]),
        R = (0, o.e7)([d.default], () => d.default.locale),
        P = (0, o.e7)([f.Z], () => {
            var e;
            return null !== (e = f.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        y = (0, o.e7)([h.default], () => h.default.getCurrentUser()),
        [L, O] = r.useState(!1),
        M = r.useCallback((e) => {
            e && O(!0);
        }, []),
        k = (0, c.O)(M);
    r.useEffect(() => {
        (0, _.gZ)(S);
    }, [S]),
        r.useEffect(() => {
            L &&
                Z === C.M.FETCHED &&
                p.default.track(x.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: S,
                    device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: b.author.id,
                    guild_id: P,
                    channel_id: b.channel_id
                });
        }, [L, S, null == y ? void 0 : y.id, b.channel_id, P, b.author.id, Z]),
        r.useEffect(() => {
            L &&
                j &&
                p.default.track(x.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: l.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: b.author.id,
                    guild_id: P,
                    channel_id: b.channel_id
                });
        }, [L, P, j, b.author.id, b.channel_id]);
    let D = (e) => {
        p.default.track(x.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: S,
            device_platform: l.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: P,
            channel_id: b.channel_id
        }),
            (0, I.goToAppDirectory)({
                view: E.ApplicationDirectoryViews.APPLICATION,
                guildId: P,
                applicationId: S,
                entrypoint: { name: E.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
    };
    if (j)
        return (0, i.jsxs)(u.Z, {
            containerRef: k,
            children: [
                (0, i.jsx)(u.Z.Header, { text: v.intl.string(v.t.j4KtLS) }),
                (0, i.jsx)(u.Z.Body, {
                    children: (0, i.jsxs)('div', {
                        className: N.invalidBody,
                        children: [
                            (0, i.jsx)(u.Z.Icon, { expired: !0 }),
                            (0, i.jsx)(u.Z.Info, {
                                expired: !0,
                                title: v.intl.string(v.t.NaQLEx),
                                children: v.intl.string(v.t['0H5OT0'])
                            })
                        ]
                    })
                })
            ]
        });
    if (null == A || Z === C.M.FETCHING)
        return (0, i.jsxs)(u.Z, {
            containerRef: k,
            children: [(0, i.jsx)(u.Z.Header, { text: v.intl.string(v.t.m9hXGR) }), (0, i.jsx)(u.Z.Body, { resolving: !0 })]
        });
    let B = new Intl.NumberFormat(R, {
            notation: 'compact',
            compactDisplay: 'short'
        }),
        w = null !== (n = null === (t = A.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        U = (0, g.Eb)({
            customInstallUrl: A.custom_install_url,
            installParams: A.install_params,
            integrationTypesConfig: A.integration_types_config
        }),
        F = a.Y.GUILD_INSTALL in (null !== (T = A.integration_types_config) && void 0 !== T ? T : {}) && U;
    return (0, i.jsxs)(u.Z, {
        containerRef: k,
        children: [
            (0, i.jsx)(u.Z.Header, { text: v.intl.string(v.t.KC1oZ2) }),
            (0, i.jsxs)(u.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: N.applicationInfoContainer,
                        children: [
                            (0, i.jsx)(u.Z.Icon, {
                                application: m.Z.createFromServer(A),
                                className: N.applicationIcon,
                                onClick: () => D('application_icon')
                            }),
                            (0, i.jsx)(u.Z.Info, {
                                title: (0, i.jsx)(s.Clickable, {
                                    onClick: () => D('application_name'),
                                    children: A.name
                                }),
                                children:
                                    w > 0 &&
                                    F &&
                                    (0, i.jsxs)(s.Clickable, {
                                        className: N.guildCountContainer,
                                        onClick: () => D('application_guild_count'),
                                        children: [
                                            (0, i.jsx)(s.CompassIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 16,
                                                height: 16,
                                                className: N.guildCountIcon
                                            }),
                                            v.intl.format(v.t['6IW6Wl'], { guildCount: B.format(w) })
                                        ]
                                    })
                            })
                        ]
                    }),
                    U &&
                        (0, i.jsx)(u.Z.Button, {
                            onClick: () => {
                                if (null != A)
                                    (0, g.LO)({
                                        applicationId: S,
                                        customInstallUrl: A.custom_install_url,
                                        installParams: A.install_params,
                                        integrationTypesConfig: A.integration_types_config,
                                        guildId: P,
                                        source: 'app_directory_profile_embed'
                                    });
                            },
                            color: u.Z.Button.Colors.GREEN,
                            children: v.intl.string(v.t.NgXl3N)
                        })
                ]
            })
        ]
    });
}
