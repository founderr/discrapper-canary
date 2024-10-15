n.d(t, {
    Z: function () {
        return S;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(873546),
    r = n(373793),
    l = n(399606),
    o = n(481060),
    c = n(434650),
    u = n(955415),
    d = n(706454),
    _ = n(973616),
    E = n(914010),
    I = n(594174),
    m = n(626135),
    T = n(135431),
    h = n(674588),
    N = n(264043),
    f = n(132871),
    C = n(147890),
    p = n(981631),
    g = n(689938),
    A = n(708262);
function S(e) {
    var t, n, S;
    let { code: R, message: x } = e,
        [O, M, v] = (0, l.Wu)([N.Z], () => [N.Z.getApplication(R), N.Z.isInvalidApplication(R), N.Z.getApplicationFetchState(R)], [R]),
        L = (0, l.e7)([d.default], () => d.default.locale),
        Z = (0, l.e7)([E.Z], () => {
            var e;
            return null !== (e = E.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        P = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
        [b, D] = a.useState(!1),
        j = a.useCallback((e) => {
            e && D(!0);
        }, []),
        U = (0, c.O)(j);
    a.useEffect(() => {
        (0, h.gZ)(R);
    }, [R]),
        a.useEffect(() => {
            b &&
                v === N.M.FETCHED &&
                m.default.track(p.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: R,
                    device_platform: s.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: x.author.id,
                    guild_id: Z,
                    channel_id: x.channel_id
                });
        }, [b, R, null == P ? void 0 : P.id, x.channel_id, Z, x.author.id, v]),
        a.useEffect(() => {
            b &&
                M &&
                m.default.track(p.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: s.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: x.author.id,
                    guild_id: Z,
                    channel_id: x.channel_id
                });
        }, [b, Z, M, x.author.id, x.channel_id]);
    let y = (e) => {
        m.default.track(p.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: R,
            device_platform: s.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: Z,
            channel_id: x.channel_id
        }),
            (0, C.goToAppDirectory)({
                view: f.ApplicationDirectoryViews.APPLICATION,
                guildId: Z,
                applicationId: R,
                entrypoint: { name: f.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
    };
    if (M)
        return (0, i.jsxs)(u.Z, {
            containerRef: U,
            children: [
                (0, i.jsx)(u.Z.Header, { text: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER }),
                (0, i.jsx)(u.Z.Body, {
                    children: (0, i.jsxs)('div', {
                        className: A.invalidBody,
                        children: [
                            (0, i.jsx)(u.Z.Icon, { expired: !0 }),
                            (0, i.jsx)(u.Z.Info, {
                                expired: !0,
                                title: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_TITLE,
                                children: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_BODY
                            })
                        ]
                    })
                })
            ]
        });
    if (null == O || v === N.M.FETCHING)
        return (0, i.jsxs)(u.Z, {
            containerRef: U,
            children: [(0, i.jsx)(u.Z.Header, { text: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_RESOLVING_HEADER }), (0, i.jsx)(u.Z.Body, { resolving: !0 })]
        });
    let B = new Intl.NumberFormat(L, {
            notation: 'compact',
            compactDisplay: 'short'
        }),
        k = null !== (n = null === (t = O.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        G = (0, T.Eb)({
            customInstallUrl: O.custom_install_url,
            installParams: O.install_params,
            integrationTypesConfig: O.integration_types_config
        }),
        F = r.Y.GUILD_INSTALL in (null !== (S = O.integration_types_config) && void 0 !== S ? S : {}) && G;
    return (0, i.jsxs)(u.Z, {
        containerRef: U,
        children: [
            (0, i.jsx)(u.Z.Header, { text: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER }),
            (0, i.jsxs)(u.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: A.applicationInfoContainer,
                        children: [
                            (0, i.jsx)(u.Z.Icon, {
                                application: _.Z.createFromServer(O),
                                className: A.applicationIcon,
                                onClick: () => y('application_icon')
                            }),
                            (0, i.jsx)(u.Z.Info, {
                                title: (0, i.jsx)(o.Clickable, {
                                    onClick: () => y('application_name'),
                                    children: O.name
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
                        (0, i.jsx)(u.Z.Button, {
                            onClick: () => {
                                if (null != O)
                                    (0, T.LO)({
                                        applicationId: R,
                                        customInstallUrl: O.custom_install_url,
                                        installParams: O.install_params,
                                        integrationTypesConfig: O.integration_types_config,
                                        guildId: Z,
                                        source: 'app_directory_profile_embed'
                                    });
                            },
                            color: u.Z.Button.Colors.GREEN,
                            children: g.Z.Messages.APPLICATION_ADD_BUTTON
                        })
                ]
            })
        ]
    });
}
