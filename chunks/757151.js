t.d(s, {
    Z: function () {
        return F;
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
    x = t(190014),
    f = t(301812),
    M = t(988043),
    D = t(919539),
    P = t(266132),
    L = t(726985),
    b = t(981631),
    Z = t(689938),
    v = t(129503);
let j = () =>
        (0, n.jsxs)(R.Z, {
            title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_SOCIAL_PERMISSIONS,
            webSetting: L.s6.PRIVACY_AND_SAFETY_SOCIAL_PERMISSIONS_CATEGORY,
            children: [
                (0, n.jsx)(c.F, {
                    setting: L.s6.PRIVACY_AND_SAFETY_SERVER_SELECTOR,
                    children: (0, n.jsx)(O.Z, {})
                }),
                (0, n.jsxs)(p.Z, {
                    children: [(0, n.jsx)(M.Z, {}), (0, n.jsx)(D.Z, {}), (0, n.jsx)(f.Z, {}), (0, n.jsx)(x.Z, {})]
                })
            ]
        }),
    B = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(R.Z, {
                    title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: L.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(C.P, {}), (0, n.jsx)(E.Z, {}), (0, n.jsx)(g.Z, {}), (0, n.jsx)(u.Z, {}), (0, n.jsx)(_.Z, {})]
                }),
                (0, n.jsx)(j, {}),
                (0, n.jsx)(R.Z, {
                    title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: L.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(A.Z, {})
                })
            ]
        }),
    U = () => {
        let { enabled: e } = (0, o.S)({ location: 'PrivacySafetySettingsV2' });
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(R.Z, {
                    title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                    webSetting: L.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                    children: [(0, n.jsx)(m.Z, {}), (0, n.jsx)(N.Z, {}), (0, n.jsx)(I.Z, {}), (0, n.jsx)(S.Z, {})]
                }),
                (0, n.jsx)(R.Z, {
                    title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_REQUEST_DATA,
                    webSetting: L.s6.PRIVACY_AND_SAFETY_RECEIVE_DISCORD_DATA_CATEGORY,
                    children: (0, n.jsx)(T.Z, {})
                }),
                e
                    ? (0, n.jsxs)(R.Z, {
                          title: Z.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_VOICE_SECURITY,
                          webSetting: L.s6.PRIVACY_AND_SAFETY_VOICE_SECURITY,
                          children: [(0, n.jsx)(h.Z, {}), (0, n.jsx)(P.Z, {})]
                      })
                    : null
            ]
        });
    },
    G = () => (0, n.jsx)(l.Z, {});
function F(e) {
    return (
        a.useEffect(() => {
            (0, r.I)();
        }, []),
        (0, n.jsxs)('div', {
            className: v.settingsPage,
            children: [
                (0, n.jsx)(i.HeadingLevel, {
                    children: (0, n.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: Z.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(d.Z, {
                    parentSetting: L.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: b.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: v.tabPanel,
                    tabs: [
                        {
                            title: Z.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: B,
                            setting: L.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: Z.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: U,
                            setting: L.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: Z.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: G,
                            setting: L.s6.PRIVACY_AND_SAFETY_STANDING
                        }
                    ]
                })
            ]
        })
    );
}
