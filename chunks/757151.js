t.d(s, {
    Z: function () {
        return y;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(409700),
    o = t(977059),
    l = t(518560),
    c = t(921801),
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
    p = t(546957),
    R = t(893996),
    x = t(864239),
    f = t(190014),
    M = t(301812),
    D = t(988043),
    P = t(919539),
    L = t(266132),
    b = t(726985),
    Z = t(981631),
    v = t(689938),
    j = t(129503);
let B = () =>
        (0, n.jsxs)(R.Z, {
            title: v.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_SOCIAL_PERMISSIONS,
            webSetting: b.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: [
                (0, n.jsx)(c.F, {
                    setting: b.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                    children: (0, n.jsx)(O.Z, {})
                }),
                (0, n.jsxs)(p.Z, {
                    children: [(0, n.jsx)(D.Z, {}), (0, n.jsx)(P.Z, {}), (0, n.jsx)(M.Z, {}), (0, n.jsx)(f.Z, {}), (0, n.jsx)(x.Z, {})]
                })
            ]
        }),
    U = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(R.Z, {
                    title: v.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: b.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(C.P, {}), (0, n.jsx)(E.Z, {}), (0, n.jsx)(g.Z, {}), (0, n.jsx)(u.Z, {}), (0, n.jsx)(_.Z, {})]
                }),
                (0, n.jsx)(B, {}),
                (0, n.jsx)(R.Z, {
                    title: v.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: b.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(A.Z, {})
                })
            ]
        }),
    G = () => {
        let { enabled: e } = (0, o.S)({ location: 'PrivacySafetySettingsV2' });
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(R.Z, {
                    title: v.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                    webSetting: b.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                    children: [(0, n.jsx)(m.Z, {}), (0, n.jsx)(N.Z, {}), (0, n.jsx)(I.Z, {}), (0, n.jsx)(S.Z, {})]
                }),
                (0, n.jsx)(R.Z, {
                    title: v.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA,
                    webSetting: b.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
                    children: (0, n.jsx)(T.Z, {})
                }),
                e
                    ? (0, n.jsxs)(R.Z, {
                          title: v.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY,
                          webSetting: b.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                          children: [(0, n.jsx)(h.Z, {}), (0, n.jsx)(L.Z, {})]
                      })
                    : null
            ]
        });
    },
    F = () => (0, n.jsx)(l.Z, {});
function y(e) {
    return (
        a.useEffect(() => {
            (0, r.I)();
        }, []),
        (0, n.jsxs)('div', {
            className: j.settingsPage,
            children: [
                (0, n.jsx)(i.HeadingLevel, {
                    children: (0, n.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: v.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(d.Z, {
                    parentSetting: b.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: Z.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: j.tabPanel,
                    tabs: [
                        {
                            title: v.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: U,
                            setting: b.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: v.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: G,
                            setting: b.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: v.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: F,
                            setting: b.s6.PRIVACY_AND_SAFETY_STANDING
                        }
                    ]
                })
            ]
        })
    );
}
