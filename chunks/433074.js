n.d(t, {
    Z: function () {
        return O;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(873546),
    s = n(399606),
    l = n(481060),
    u = n(434650),
    c = n(955415),
    d = n(706454),
    _ = n(973616),
    E = n(914010),
    f = n(594174),
    h = n(626135),
    p = n(135431),
    m = n(674588),
    I = n(264043),
    T = n(132871),
    g = n(147890),
    S = n(981631),
    A = n(689938),
    v = n(708262);
let N = 16;
function O(e) {
    var t, n;
    let { code: r, message: O } = e,
        [R, C, y] = (0, s.Wu)([I.Z], () => [I.Z.getApplication(r), I.Z.isInvalidApplication(r), I.Z.getApplicationFetchState(r)], [r]),
        b = (0, s.e7)([d.default], () => d.default.locale),
        L = (0, s.e7)([E.Z], () => {
            var e;
            return null !== (e = E.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        D = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
        [M, P] = a.useState(!1),
        U = a.useCallback((e) => {
            e && P(!0);
        }, []),
        w = (0, u.O)(U);
    a.useEffect(() => {
        (0, m.gZ)(r);
    }, [r]),
        a.useEffect(() => {
            M &&
                y === I.M.FETCHED &&
                h.default.track(S.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: r,
                    device_platform: o.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: O.author.id,
                    guild_id: L,
                    channel_id: O.channel_id
                });
        }, [M, r, null == D ? void 0 : D.id, O.channel_id, L, O.author.id, y]),
        a.useEffect(() => {
            M &&
                C &&
                h.default.track(S.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: o.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: O.author.id,
                    guild_id: L,
                    channel_id: O.channel_id
                });
        }, [M, L, C, O.author.id, O.channel_id]);
    let x = (e) => {
            h.default.track(S.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
                application_id: r,
                device_platform: o.tq ? 'mobile_web' : 'desktop_web',
                clicked_section: e,
                guild_id: L,
                channel_id: O.channel_id
            }),
                (0, g.goToAppDirectory)({
                    view: T.ApplicationDirectoryViews.APPLICATION,
                    guildId: L,
                    applicationId: r,
                    entrypoint: { name: T.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
                });
        },
        G = () => {
            if (null != R)
                (0, p.L)({
                    applicationId: r,
                    customInstallUrl: R.custom_install_url,
                    installParams: R.install_params,
                    integrationTypesConfig: R.integration_types_config,
                    guildId: L,
                    source: 'app_directory_profile_embed'
                });
        };
    if (C)
        return (0, i.jsxs)(c.Z, {
            containerRef: w,
            children: [
                (0, i.jsx)(c.Z.Header, { text: A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER }),
                (0, i.jsx)(c.Z.Body, {
                    children: (0, i.jsxs)('div', {
                        className: v.invalidBody,
                        children: [
                            (0, i.jsx)(c.Z.Icon, { expired: !0 }),
                            (0, i.jsx)(c.Z.Info, {
                                expired: !0,
                                title: A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_TITLE,
                                children: A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_BODY
                            })
                        ]
                    })
                })
            ]
        });
    if (null == R || y === I.M.FETCHING)
        return (0, i.jsxs)(c.Z, {
            containerRef: w,
            children: [(0, i.jsx)(c.Z.Header, { text: A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_RESOLVING_HEADER }), (0, i.jsx)(c.Z.Body, { resolving: !0 })]
        });
    let k = new Intl.NumberFormat(b, {
        notation: 'compact',
        compactDisplay: 'short'
    }).format(null !== (n = null === (t = R.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0);
    return (0, i.jsxs)(c.Z, {
        containerRef: w,
        children: [
            (0, i.jsx)(c.Z.Header, { text: A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER }),
            (0, i.jsxs)(c.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: v.applicationInfoContainer,
                        children: [
                            (0, i.jsx)(c.Z.Icon, {
                                application: _.Z.createFromServer(R),
                                className: v.applicationIcon,
                                onClick: () => x('application_icon')
                            }),
                            (0, i.jsx)(c.Z.Info, {
                                title: (0, i.jsx)(l.Clickable, {
                                    onClick: () => x('application_name'),
                                    children: R.name
                                }),
                                children: (0, i.jsxs)(l.Clickable, {
                                    className: v.guildCountContainer,
                                    onClick: () => x('application_guild_count'),
                                    children: [
                                        (0, i.jsx)(l.CompassIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: N,
                                            height: N,
                                            className: v.guildCountIcon
                                        }),
                                        A.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_GUILD_COUNT.format({ guildCount: k })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(c.Z.Button, {
                        onClick: G,
                        color: c.Z.Button.Colors.GREEN,
                        children: A.Z.Messages.APPLICATION_ADD_BUTTON
                    })
                ]
            })
        ]
    });
}
