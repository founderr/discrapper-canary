t.d(s, {
    Z: function () {
        return g;
    }
});
var n = t(735250),
    a = t(481060),
    i = t(518560),
    r = t(526156),
    o = t(924356),
    l = t(122897),
    c = t(821035),
    d = t(394655),
    u = t(893996),
    _ = t(726985),
    E = t(981631),
    T = t(689938),
    I = t(202490);
let S = () =>
        (0, n.jsxs)(u.Z, {
            title: T.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
            webSetting: _.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [(0, n.jsx)(c.P, {}), (0, n.jsx)(l.Z, {}), (0, n.jsx)(d.Z, {}), (0, n.jsx)(o.Z, {})]
        }),
    N = () => (0, n.jsx)('div', {}),
    m = () =>
        (0, n.jsx)(u.Z, {
            title: T.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            webSetting: _.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY,
            children: (0, n.jsx)(i.Z, {})
        }),
    C = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: I.settingsSection,
            children: s
        });
    };
function g(e) {
    return (0, n.jsxs)(C, {
        children: [
            (0, n.jsx)(a.HeadingLevel, {
                children: (0, n.jsx)(a.Heading, {
                    variant: 'heading-xl/semibold',
                    children: T.Z.Messages.PRIVACY_AND_SAFETY
                })
            }),
            (0, n.jsx)(r.Z, {
                parentSetting: _.s6.PRIVACY_AND_SAFETY_V2,
                settingsSection: E.oAB.PRIVACY_AND_SAFETY_V2,
                panelClassName: I.tabPanel,
                tabs: [
                    {
                        title: T.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                        component: S,
                        setting: _.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                    },
                    {
                        title: T.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                        component: N,
                        setting: _.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                    },
                    {
                        title: T.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                        component: m,
                        setting: _.s6.PRIVACY_AND_SAFETY_STANDING
                    },
                    {
                        title: T.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                        component: m,
                        setting: _.s6.PRIVACY_AND_SAFETY_ENCRYPTION
                    }
                ]
            })
        ]
    });
}
