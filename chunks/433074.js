n.d(t, {
    Z: function () {
        return A;
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
    f = n(674588),
    h = n(264043),
    N = n(132871),
    p = n(147890),
    C = n(981631),
    g = n(689938),
    S = n(708262);
function A(e) {
    var t, n, A;
    let { code: x, message: R } = e,
        [O, v, M] = (0, l.Wu)([h.Z], () => [h.Z.getApplication(x), h.Z.isInvalidApplication(x), h.Z.getApplicationFetchState(x)], [x]),
        L = (0, l.e7)([d.default], () => d.default.locale),
        Z = (0, l.e7)([E.Z], () => {
            var e;
            return null !== (e = E.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        b = (0, l.e7)([I.default], () => I.default.getCurrentUser()),
        [P, D] = a.useState(!1),
        j = a.useCallback((e) => {
            e && D(!0);
        }, []),
        U = (0, c.O)(j);
    a.useEffect(() => {
        (0, f.gZ)(x);
    }, [x]),
        a.useEffect(() => {
            P &&
                M === h.M.FETCHED &&
                m.default.track(C.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: x,
                    device_platform: s.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: R.author.id,
                    guild_id: Z,
                    channel_id: R.channel_id
                });
        }, [P, x, null == b ? void 0 : b.id, R.channel_id, Z, R.author.id, M]),
        a.useEffect(() => {
            P &&
                v &&
                m.default.track(C.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: s.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: R.author.id,
                    guild_id: Z,
                    channel_id: R.channel_id
                });
        }, [P, Z, v, R.author.id, R.channel_id]);
    let y = (e) => {
        m.default.track(C.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: x,
            device_platform: s.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: Z,
            channel_id: R.channel_id
        }),
            (0, p.goToAppDirectory)({
                view: N.ApplicationDirectoryViews.APPLICATION,
                guildId: Z,
                applicationId: x,
                entrypoint: { name: N.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
            });
    };
    if (v)
        return (0, i.jsxs)(u.Z, {
            containerRef: U,
            children: [
                (0, i.jsx)(u.Z.Header, { text: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER }),
                (0, i.jsx)(u.Z.Body, {
                    children: (0, i.jsxs)('div', {
                        className: S.invalidBody,
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
    if (null == O || M === h.M.FETCHING)
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
        F = r.Y.GUILD_INSTALL in (null !== (A = O.integration_types_config) && void 0 !== A ? A : {}) && G;
    return (0, i.jsxs)(u.Z, {
        containerRef: U,
        children: [
            (0, i.jsx)(u.Z.Header, { text: g.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER }),
            (0, i.jsxs)(u.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: S.applicationInfoContainer,
                        children: [
                            (0, i.jsx)(u.Z.Icon, {
                                application: _.Z.createFromServer(O),
                                className: S.applicationIcon,
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
                                        className: S.guildCountContainer,
                                        onClick: () => y('application_guild_count'),
                                        children: [
                                            (0, i.jsx)(o.CompassIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: 16,
                                                height: 16,
                                                className: S.guildCountIcon
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
                                        applicationId: x,
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
