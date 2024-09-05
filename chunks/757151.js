t.d(s, {
    Z: function () {
        return Z;
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
    p = t(726985),
    R = t(981631),
    x = t(689938),
    f = t(202490);
let M = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(O.Z, {
                    title: x.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: p.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(C.P, {}), (0, n.jsx)(E.Z, {}), (0, n.jsx)(g.Z, {}), (0, n.jsx)(u.Z, {}), (0, n.jsx)(_.Z, {})]
                }),
                (0, n.jsx)(O.Z, {
                    title: x.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: p.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(A.Z, {})
                })
            ]
        }),
    D = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(O.Z, {
                    title: x.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                    webSetting: p.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                    children: [(0, n.jsx)(m.Z, {}), (0, n.jsx)(N.Z, {}), (0, n.jsx)(I.Z, {}), (0, n.jsx)(S.Z, {})]
                }),
                (0, n.jsx)(O.Z, {
                    title: x.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA,
                    webSetting: p.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
                    children: (0, n.jsx)(T.Z, {})
                })
            ]
        }),
    P = () =>
        (0, n.jsx)(O.Z, {
            title: x.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            webSetting: p.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY,
            children: (0, n.jsx)(l.Z, {})
        }),
    L = () =>
        (0, n.jsx)(O.Z, {
            title: x.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY,
            webSetting: p.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            children: (0, n.jsx)(h.Z, {})
        }),
    b = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: f.settingsSection,
            children: s
        });
    };
function Z(e) {
    let { enabled: s } = (0, o.S)({ location: 'PrivacySafetySettingsV2' });
    return (
        a.useEffect(() => {
            (0, r.I)();
        }, []),
        (0, n.jsxs)(b, {
            children: [
                (0, n.jsx)(i.HeadingLevel, {
                    children: (0, n.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: x.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(d.Z, {
                    parentSetting: p.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: R.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: f.tabPanel,
                    tabs: [
                        {
                            title: x.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: M,
                            setting: p.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: x.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: D,
                            setting: p.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: x.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: P,
                            setting: p.s6.PRIVACY_AND_SAFETY_STANDING
                        },
                        {
                            title: x.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                            component: L,
                            setting: p.s6.PRIVACY_AND_SAFETY_ENCRYPTION,
                            predicate: () => s && (0, c.isDesktop)()
                        }
                    ]
                })
            ]
        })
    );
}
