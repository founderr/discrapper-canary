t.d(s, {
    Z: function () {
        return A;
    }
});
var n = t(735250),
    a = t(481060),
    i = t(518560),
    r = t(526156),
    o = t(924356),
    l = t(122897),
    c = t(821035),
    d = t(694569),
    u = t(394655),
    _ = t(893996),
    E = t(726985),
    T = t(981631),
    I = t(689938),
    S = t(202490);
let N = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(_.Z, {
                    title: I.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: E.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(c.P, {}), (0, n.jsx)(l.Z, {}), (0, n.jsx)(u.Z, {}), (0, n.jsx)(o.Z, {})]
                }),
                (0, n.jsx)(_.Z, {
                    title: I.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: E.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(d.Z, {})
                })
            ]
        }),
    m = () => (0, n.jsx)('div', {}),
    C = () =>
        (0, n.jsx)(_.Z, {
            title: I.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            webSetting: E.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY,
            children: (0, n.jsx)(i.Z, {})
        }),
    g = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: S.settingsSection,
            children: s
        });
    };
function A(e) {
    return (0, n.jsxs)(g, {
        children: [
            (0, n.jsx)(a.HeadingLevel, {
                children: (0, n.jsx)(a.Heading, {
                    variant: 'heading-xl/semibold',
                    children: I.Z.Messages.PRIVACY_AND_SAFETY
                })
            }),
            (0, n.jsx)(r.Z, {
                parentSetting: E.s6.PRIVACY_AND_SAFETY_V2,
                settingsSection: T.oAB.PRIVACY_AND_SAFETY_V2,
                panelClassName: S.tabPanel,
                tabs: [
                    {
                        title: I.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                        component: N,
                        setting: E.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                    },
                    {
                        title: I.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                        component: m,
                        setting: E.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                    },
                    {
                        title: I.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                        component: C,
                        setting: E.s6.PRIVACY_AND_SAFETY_STANDING
                    },
                    {
                        title: I.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                        component: C,
                        setting: E.s6.PRIVACY_AND_SAFETY_ENCRYPTION
                    }
                ]
            })
        ]
    });
}
