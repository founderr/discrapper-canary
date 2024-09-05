t.d(s, {
    Z: function () {
        return b;
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
    T = t(993315),
    S = t(883382),
    I = t(940021),
    N = t(402583),
    m = t(821035),
    C = t(694569),
    A = t(394655),
    g = t(230341),
    h = t(893996),
    O = t(726985),
    p = t(981631),
    R = t(689938),
    x = t(202490);
let f = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(h.Z, {
                    title: R.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: O.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(m.P, {}), (0, n.jsx)(E.Z, {}), (0, n.jsx)(A.Z, {}), (0, n.jsx)(u.Z, {}), (0, n.jsx)(_.Z, {})]
                }),
                (0, n.jsx)(h.Z, {
                    title: R.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: O.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(C.Z, {})
                })
            ]
        }),
    M = () =>
        (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)(h.Z, {
                title: R.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                webSetting: O.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                children: [(0, n.jsx)(N.Z, {}), (0, n.jsx)(I.Z, {}), (0, n.jsx)(S.Z, {}), (0, n.jsx)(T.Z, {})]
            })
        }),
    D = () =>
        (0, n.jsx)(h.Z, {
            title: R.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            webSetting: O.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY,
            children: (0, n.jsx)(l.Z, {})
        }),
    P = () =>
        (0, n.jsx)(h.Z, {
            title: R.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY,
            webSetting: O.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
            children: (0, n.jsx)(g.Z, {})
        }),
    L = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: x.settingsSection,
            children: s
        });
    };
function b(e) {
    let { enabled: s } = (0, o.S)({ location: 'PrivacySafetySettingsV2' });
    return (
        a.useEffect(() => {
            (0, r.I)();
        }, []),
        (0, n.jsxs)(L, {
            children: [
                (0, n.jsx)(i.HeadingLevel, {
                    children: (0, n.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: R.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(d.Z, {
                    parentSetting: O.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: p.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: x.tabPanel,
                    tabs: [
                        {
                            title: R.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: f,
                            setting: O.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: R.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: M,
                            setting: O.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: R.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: D,
                            setting: O.s6.PRIVACY_AND_SAFETY_STANDING
                        },
                        {
                            title: R.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                            component: P,
                            setting: O.s6.PRIVACY_AND_SAFETY_ENCRYPTION,
                            predicate: () => s && (0, c.isDesktop)()
                        }
                    ]
                })
            ]
        })
    );
}
