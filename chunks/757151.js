t.d(s, {
    Z: function () {
        return v;
    }
});
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
    O = t(893996),
    p = t(266132),
    R = t(726985),
    x = t(981631),
    f = t(689938),
    M = t(202490);
let D = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(O.Z, {
                    title: f.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: R.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(C.P, {}), (0, n.jsx)(E.Z, {}), (0, n.jsx)(g.Z, {}), (0, n.jsx)(u.Z, {}), (0, n.jsx)(_.Z, {})]
                }),
                (0, n.jsx)(O.Z, {
                    title: f.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: R.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(A.Z, {})
                })
            ]
        }),
    P = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(O.Z, {
                    title: f.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                    webSetting: R.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                    children: [(0, n.jsx)(m.Z, {}), (0, n.jsx)(N.Z, {}), (0, n.jsx)(I.Z, {}), (0, n.jsx)(S.Z, {})]
                }),
                (0, n.jsx)(O.Z, {
                    title: f.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA,
                    webSetting: R.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
                    children: (0, n.jsx)(T.Z, {})
                })
            ]
        }),
    L = () =>
        (0, n.jsx)(O.Z, {
            title: f.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            webSetting: R.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY,
            children: (0, n.jsx)(l.Z, {})
        }),
    b = () =>
        (0, n.jsxs)(O.Z, {
            title: f.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY,
            webSetting: R.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            children: [(0, n.jsx)(h.Z, {}), (0, n.jsx)(p.Z, {})]
        }),
    Z = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: M.settingsSection,
            children: s
        });
    };
function v(e) {
    let { enabled: s } = (0, o.S)({ location: 'PrivacySafetySettingsV2' });
    return (
        a.useEffect(() => {
            (0, r.I)();
        }, []),
        (0, n.jsxs)(Z, {
            children: [
                (0, n.jsx)(i.HeadingLevel, {
                    children: (0, n.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: f.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(d.Z, {
                    parentSetting: R.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: x.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: M.tabPanel,
                    tabs: [
                        {
                            title: f.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: D,
                            setting: R.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: f.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: P,
                            setting: R.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: f.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: L,
                            setting: R.s6.PRIVACY_AND_SAFETY_STANDING
                        },
                        {
                            title: f.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                            component: b,
                            setting: R.s6.PRIVACY_AND_SAFETY_ENCRYPTION,
                            predicate: () => s && (0, c.isDesktop)()
                        }
                    ]
                })
            ]
        })
    );
}
