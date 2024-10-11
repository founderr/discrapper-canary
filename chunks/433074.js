n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(873546),
    l = n(373793),
    r = n(399606),
    o = n(481060),
    c = n(434650),
    d = n(955415),
    u = n(706454),
    _ = n(973616),
    E = n(914010),
    I = n(594174),
    m = n(626135),
    T = n(135431),
    N = n(674588),
    h = n(264043),
    C = n(132871),
    p = n(147890),
    f = n(981631),
    g = n(689938),
    A = n(708262);
function S(e) {
    var t, n, S;
    let { code: M, message: O } = e,
        [x, R, v] = (0, r.Wu)([h.Z], () => [h.Z.getApplication(M), h.Z.isInvalidApplication(M), h.Z.getApplicationFetchState(M)], [M]),
        Z = (0, r.e7)([u.default], () => u.default.locale),
        L = (0, r.e7)([E.Z], () => {
            var e;
            return null !== (e = E.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        P = (0, r.e7)([I.default], () => I.default.getCurrentUser()),
        [b, D] = a.useState(!1),
        j = a.useCallback((e) => {
            e && D(!0);
        }, []),
        U = (0, c.O)(j);
    a.useEffect(() => {
        (0, N.gZ)(M);
    }, [M]),
        a.useEffect(() => {
            b &&
                v === h.M.FETCHED &&
                m.default.track(f.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: M,
                    device_platform: s.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: O.author.id,
                    guild_id: L,
                    channel_id: O.channel_id
                });
        }, [b, M, null == P ? void 0 : P.id, O.channel_id, L, O.author.id, v]),
        a.useEffect(() => {
            b &&
                R &&
                m.default.track(f.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: s.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: O.author.id,
                    guild_id: L,
                    channel_id: O.channel_id
                });
        }, [b, L, R, O.author.id, O.channel_id]);
    let y = (e) => {
        m.default.track(f.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: M,
            device_platform: s.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: L,
            channel_id: O.channel_id
        }),
            (0, p.goToAppDirectory)({
                view: C.ApplicationDirectoryViews.APPLICATION,
                guildId: L,
                applicationId: M,
                entrypoint: { name: C.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
    };
    if (R)
        return (0, i.jsxs)(d.Z, {
            containerRef: U,
            children: [
                (0, i.jsx)(d.Z.Header, { text: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER }),
                (0, i.jsx)(d.Z.Body, {
                    children: (0, i.jsxs)('div', {
                        className: A.invalidBody,
                        children: [
                            (0, i.jsx)(d.Z.Icon, { expired: !0 }),
                            (0, i.jsx)(d.Z.Info, {
                                expired: !0,
                                title: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_TITLE,
                                children: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_BODY
                            })
                        ]
                    })
                })
            ]
        });
    if (null == x || v === h.M.FETCHING)
        return (0, i.jsxs)(d.Z, {
            containerRef: U,
            children: [(0, i.jsx)(d.Z.Header, { text: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_RESOLVING_HEADER }), (0, i.jsx)(d.Z.Body, { resolving: !0 })]
        });
    let B = new Intl.NumberFormat(Z, {
            notation: 'compact',
            compactDisplay: 'short'
        }),
        k = null !== (n = null === (t = x.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        G = (0, T.Eb)({
            customInstallUrl: x.custom_install_url,
            installParams: x.install_params,
            integrationTypesConfig: x.integration_types_config
        }),
        F = l.Y.GUILD_INSTALL in (null !== (S = x.integration_types_config) && void 0 !== S ? S : {}) && G;
    return (0, i.jsxs)(d.Z, {
        containerRef: U,
        children: [
            (0, i.jsx)(d.Z.Header, { text: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER }),
            (0, i.jsxs)(d.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: A.applicationInfoContainer,
                        children: [
                            (0, i.jsx)(d.Z.Icon, {
                                application: _.Z.createFromServer(x),
                                className: A.applicationIcon,
                                onClick: () => y('application_icon')
                            }),
                            (0, i.jsx)(d.Z.Info, {
                                title: (0, i.jsx)(o.Clickable, {
                                    onClick: () => y('application_name'),
                                    children: x.name
                                }),
                                children:
                                    k > 0 &&
                                    F &&
                                    (0, i.jsxs)(o.Clickable, {
                                        className: A.guildCountContainer,
                                        onClick: () => y('application_guild_count'),
                                        children: [
                                            (0, i.jsx)(o.CompassIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 16,
                                                height: 16,
                                                className: A.guildCountIcon
                                            }),
                                            g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_GUILD_COUNT.format({ guildCount: B.format(k) })
                                        ]
                                    })
                            })
                        ]
                    }),
                    G &&
                        (0, i.jsx)(d.Z.Button, {
                            onClick: () => {
                                if (null != x)
                                    (0, T.LO)({
                                        applicationId: M,
                                        customInstallUrl: x.custom_install_url,
                                        installParams: x.install_params,
                                        integrationTypesConfig: x.integration_types_config,
                                        guildId: L,
                                        source: 'app_directory_profile_embed'
                                    });
                            },
                            color: d.Z.Button.Colors.GREEN,
                            children: g.Z.Messages.APPLICATION_ADD_BUTTON
                        })
                ]
            })
        ]
    });
}
