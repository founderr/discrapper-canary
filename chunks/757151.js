t.d(s, {
    Z: function () {
        return U;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(409700),
    o = t(977059),
    l = t(518560),
    c = t(358085),
    d = t(526156),
    _ = t(924356),
    u = t(24400),
    E = t(122897),
    T = t(623196),
    S = t(993315),
    I = t(883382),
    N = t(940021),
    m = t(402583),
    C = t(821035),
    A = t(694569),
    g = t(394655),
    h = t(230341),
    O = t(540204),
    p = t(893996),
    R = t(266132),
    x = t(726985),
    f = t(736530),
    M = t(981631),
    D = t(689938),
    P = t(202490);
let L = () => {
        let [e, s] = a.useState(f.T);
        return (0, n.jsx)(p.Z, {
            title: D.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_SOCIAL_PERMISSIONS,
            webSetting: x.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: (0, n.jsx)(O.Z, {
                guildId: e,
                onChange: s
            })
        });
    },
    b = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(p.Z, {
                    title: D.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: x.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(C.P, {}), (0, n.jsx)(E.Z, {}), (0, n.jsx)(g.Z, {}), (0, n.jsx)(u.Z, {}), (0, n.jsx)(_.Z, {})]
                }),
                (0, n.jsx)(L, {}),
                (0, n.jsx)(p.Z, {
                    title: D.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: x.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(A.Z, {})
                })
            ]
        }),
    Z = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(p.Z, {
                    title: D.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                    webSetting: x.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                    children: [(0, n.jsx)(m.Z, {}), (0, n.jsx)(N.Z, {}), (0, n.jsx)(I.Z, {}), (0, n.jsx)(S.Z, {})]
                }),
                (0, n.jsx)(p.Z, {
                    title: D.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA,
                    webSetting: x.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
                    children: (0, n.jsx)(T.Z, {})
                })
            ]
        }),
    v = () =>
        (0, n.jsx)(p.Z, {
            title: D.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            webSetting: x.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY,
            children: (0, n.jsx)(l.Z, {})
        }),
    j = () =>
        (0, n.jsxs)(p.Z, {
            title: D.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY,
            webSetting: x.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            children: [(0, n.jsx)(h.Z, {}), (0, n.jsx)(R.Z, {})]
        }),
    B = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: P.settingsSection,
            children: s
        });
    };
function U(e) {
    let { enabled: s } = (0, o.S)({ location: 'PrivacySafetySettingsV2' });
    return (
        a.useEffect(() => {
            (0, r.I)();
        }, []),
        (0, n.jsxs)(B, {
            children: [
                (0, n.jsx)(i.HeadingLevel, {
                    children: (0, n.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: D.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(d.Z, {
                    parentSetting: x.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: M.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: P.tabPanel,
                    tabs: [
                        {
                            title: D.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: b,
                            setting: x.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: D.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: Z,
                            setting: x.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: D.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: v,
                            setting: x.s6.PRIVACY_AND_SAFETY_STANDING
                        },
                        {
                            title: D.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                            component: j,
                            setting: x.s6.PRIVACY_AND_SAFETY_ENCRYPTION,
                            predicate: () => s && (0, c.isDesktop)()
                        }
                    ]
                })
            ]
        })
    );
}
