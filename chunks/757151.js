t.d(s, {
    Z: function () {
        return C;
    }
});
var n = t(735250),
    a = t(481060),
    i = t(526156),
    r = t(924356),
    o = t(122897),
    l = t(821035),
    c = t(394655),
    d = t(893996),
    u = t(726985),
    _ = t(981631),
    E = t(689938),
    T = t(202490);
let I = () =>
        (0, n.jsxs)(d.Z, {
            title: E.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
            webSetting: u.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [(0, n.jsx)(l.P, {}), (0, n.jsx)(o.Z, {}), (0, n.jsx)(c.Z, {}), (0, n.jsx)(r.Z, {})]
        }),
    S = () => (0, n.jsx)('div', {}),
    N = () => (0, n.jsx)('div', {}),
    m = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: T.settingsSection,
            children: s
        });
    };
function C(e) {
    return (0, n.jsxs)(m, {
        children: [
            (0, n.jsx)(a.HeadingLevel, {
                children: (0, n.jsx)(a.Heading, {
                    variant: 'heading-xl/semibold',
                    children: E.Z.Messages.PRIVACY_AND_SAFETY
                })
            }),
            (0, n.jsx)(i.Z, {
                parentSetting: u.s6.PRIVACY_AND_SAFETY_V2,
                settingsSection: _.oAB.PRIVACY_AND_SAFETY_V2,
                panelClassName: T.tabPanel,
                tabs: [
                    {
                        title: E.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                        component: I,
                        setting: u.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                    },
                    {
                        title: E.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                        component: S,
                        setting: u.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                    },
                    {
                        title: E.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                        component: N,
                        setting: u.s6.PRIVACY_AND_SAFETY_STANDING
                    },
                    {
                        title: E.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                        component: N,
                        setting: u.s6.PRIVACY_AND_SAFETY_ENCRYPTION
                    }
                ]
            })
        ]
    });
}
