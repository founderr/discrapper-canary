n.d(t, {
    Z: function () {
        return R;
    }
});
var r = n(47120);
var i = n(735250),
    a = n(470079),
    o = n(873546),
    s = n(373793),
    l = n(399606),
    u = n(481060),
    c = n(434650),
    d = n(955415),
    _ = n(706454),
    E = n(973616),
    f = n(914010),
    h = n(594174),
    p = n(626135),
    m = n(135431),
    I = n(674588),
    T = n(264043),
    g = n(132871),
    S = n(147890),
    A = n(981631),
    v = n(689938),
    N = n(708262);
let O = 16;
function R(e) {
    var t, n, r;
    let { code: R, message: C } = e,
        [y, b, L] = (0, l.Wu)([T.Z], () => [T.Z.getApplication(R), T.Z.isInvalidApplication(R), T.Z.getApplicationFetchState(R)], [R]),
        D = (0, l.e7)([_.default], () => _.default.locale),
        M = (0, l.e7)([f.Z], () => {
            var e;
            return null !== (e = f.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        P = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
        [U, w] = a.useState(!1),
        x = a.useCallback((e) => {
            e && w(!0);
        }, []),
        G = (0, c.O)(x);
    a.useEffect(() => {
        (0, I.gZ)(R);
    }, [R]),
        a.useEffect(() => {
            U &&
                L === T.M.FETCHED &&
                p.default.track(A.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
                    application_id: R,
                    device_platform: o.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: C.author.id,
                    guild_id: M,
                    channel_id: C.channel_id
                });
        }, [U, R, null == P ? void 0 : P.id, C.channel_id, M, C.author.id, L]),
        a.useEffect(() => {
            U &&
                b &&
                p.default.track(A.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
                    device_platform: o.tq ? 'mobile_web' : 'desktop_web',
                    sender_user_id: C.author.id,
                    guild_id: M,
                    channel_id: C.channel_id
                });
        }, [U, M, b, C.author.id, C.channel_id]);
    let k = (e) => {
            p.default.track(A.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
                application_id: R,
                device_platform: o.tq ? 'mobile_web' : 'desktop_web',
                clicked_section: e,
                guild_id: M,
                channel_id: C.channel_id
            }),
                (0, S.goToAppDirectory)({
                    view: g.ApplicationDirectoryViews.APPLICATION,
                    guildId: M,
                    applicationId: R,
                    entrypoint: { name: g.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
                });
        },
        B = () => {
            if (null != y)
                (0, m.L)({
                    applicationId: R,
                    customInstallUrl: y.custom_install_url,
                    installParams: y.install_params,
                    integrationTypesConfig: y.integration_types_config,
                    guildId: M,
                    source: 'app_directory_profile_embed'
                });
        };
    if (b)
        return (0, i.jsxs)(d.Z, {
            containerRef: G,
            children: [
                (0, i.jsx)(d.Z.Header, { text: v.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER }),
                (0, i.jsx)(d.Z.Body, {
                    children: (0, i.jsxs)('div', {
                        className: N.invalidBody,
                        children: [
                            (0, i.jsx)(d.Z.Icon, { expired: !0 }),
                            (0, i.jsx)(d.Z.Info, {
                                expired: !0,
                                title: v.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_TITLE,
                                children: v.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_BODY
                            })
                        ]
                    })
                })
            ]
        });
    if (null == y || L === T.M.FETCHING)
        return (0, i.jsxs)(d.Z, {
            containerRef: G,
            children: [(0, i.jsx)(d.Z.Header, { text: v.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_RESOLVING_HEADER }), (0, i.jsx)(d.Z.Body, { resolving: !0 })]
        });
    let F = new Intl.NumberFormat(D, {
            notation: 'compact',
            compactDisplay: 'short'
        }),
        Z = null !== (n = null === (t = y.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0,
        V = (0, m.E)({
            customInstallUrl: y.custom_install_url,
            installParams: y.install_params,
            integrationTypesConfig: y.integration_types_config
        }),
        H = s.Y.GUILD_INSTALL in (null !== (r = y.integration_types_config) && void 0 !== r ? r : {}) && V,
        Y = Z > 0 && H;
    return (0, i.jsxs)(d.Z, {
        containerRef: G,
        children: [
            (0, i.jsx)(d.Z.Header, { text: v.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER }),
            (0, i.jsxs)(d.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: N.applicationInfoContainer,
                        children: [
                            (0, i.jsx)(d.Z.Icon, {
                                application: E.Z.createFromServer(y),
                                className: N.applicationIcon,
                                onClick: () => k('application_icon')
                            }),
                            (0, i.jsx)(d.Z.Info, {
                                title: (0, i.jsx)(u.Clickable, {
                                    onClick: () => k('application_name'),
                                    children: y.name
                                }),
                                children:
                                    Y &&
                                    (0, i.jsxs)(u.Clickable, {
                                        className: N.guildCountContainer,
                                        onClick: () => k('application_guild_count'),
                                        children: [
                                            (0, i.jsx)(u.CompassIcon, {
                                                size: 'custom',
                                                color: 'currentColor',
                                                width: O,
                                                height: O,
                                                className: N.guildCountIcon
                                            }),
                                            v.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_GUILD_COUNT.format({ guildCount: F.format(Z) })
                                        ]
                                    })
                            })
                        ]
                    }),
                    V &&
                        (0, i.jsx)(d.Z.Button, {
                            onClick: B,
                            color: d.Z.Button.Colors.GREEN,
                            children: v.Z.Messages.APPLICATION_ADD_BUTTON
                        })
                ]
            })
        ]
    });
}
