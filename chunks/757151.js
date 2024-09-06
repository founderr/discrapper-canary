t.d(s, {
    Z: function () {
        return V;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(442837),
    r = t(481060),
    o = t(409700),
    l = t(977059),
    c = t(518560),
    d = t(921801),
    _ = t(430824),
    u = t(358085),
    E = t(526156),
    T = t(924356),
    S = t(24400),
    I = t(122897),
    N = t(623196),
    m = t(993315),
    C = t(883382),
    A = t(940021),
    g = t(402583),
    h = t(821035),
    O = t(694569),
    p = t(394655),
    R = t(230341),
    x = t(540204),
    f = t(893996),
    M = t(988043),
    D = t(266132),
    P = t(726985),
    L = t(736530),
    b = t(981631),
    Z = t(689938),
    v = t(202490);
let j = () => {
        var e;
        let [s, t] = a.useState(L.T),
            r = (0, i.e7)([_.Z], () => _.Z.getGuild(s)),
            o = null !== (e = null == r ? void 0 : r.hasFeature(b.oNc.HUB)) && void 0 !== e && e;
        return (0, n.jsxs)(f.Z, {
            title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_SOCIAL_PERMISSIONS,
            webSetting: P.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: [
                (0, n.jsx)(d.F, {
                    setting: P.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                    children: (0, n.jsx)(x.Z, {
                        guildId: s,
                        onChange: t
                    })
                }),
                (0, n.jsx)(M.Z, {
                    guildId: s,
                    isHubGuild: o
                })
            ]
        });
    },
    B = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(f.Z, {
                    title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: P.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(h.P, {}), (0, n.jsx)(I.Z, {}), (0, n.jsx)(p.Z, {}), (0, n.jsx)(S.Z, {}), (0, n.jsx)(T.Z, {})]
                }),
                (0, n.jsx)(j, {}),
                (0, n.jsx)(f.Z, {
                    title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: P.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(O.Z, {})
                })
            ]
        }),
    U = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(f.Z, {
                    title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                    webSetting: P.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                    children: [(0, n.jsx)(g.Z, {}), (0, n.jsx)(A.Z, {}), (0, n.jsx)(C.Z, {}), (0, n.jsx)(m.Z, {})]
                }),
                (0, n.jsx)(f.Z, {
                    title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA,
                    webSetting: P.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
                    children: (0, n.jsx)(N.Z, {})
                })
            ]
        }),
    G = () =>
        (0, n.jsx)(f.Z, {
            title: Z.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            webSetting: P.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY,
            children: (0, n.jsx)(c.Z, {})
        }),
    F = () =>
        (0, n.jsxs)(f.Z, {
            title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY,
            webSetting: P.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            children: [(0, n.jsx)(R.Z, {}), (0, n.jsx)(D.Z, {})]
        }),
    y = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: v.settingsSection,
            children: s
        });
    };
function V(e) {
    let { enabled: s } = (0, l.S)({ location: 'PrivacySafetySettingsV2' });
    return (
        a.useEffect(() => {
            (0, o.I)();
        }, []),
        (0, n.jsxs)(y, {
            children: [
                (0, n.jsx)(r.HeadingLevel, {
                    children: (0, n.jsx)(r.Heading, {
                        variant: 'heading-xl/semibold',
                        children: Z.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(E.Z, {
                    parentSetting: P.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: b.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: v.tabPanel,
                    tabs: [
                        {
                            title: Z.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: B,
                            setting: P.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: Z.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: U,
                            setting: P.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: Z.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: G,
                            setting: P.s6.PRIVACY_AND_SAFETY_STANDING
                        },
                        {
                            title: Z.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                            component: F,
                            setting: P.s6.PRIVACY_AND_SAFETY_ENCRYPTION,
                            predicate: () => s && (0, u.isDesktop)()
                        }
                    ]
                })
            ]
        })
    );
}
