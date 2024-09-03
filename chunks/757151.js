t.d(s, {
    Z: function () {
        return N;
    }
});
var n = t(735250),
    a = t(481060),
    i = t(526156),
    r = t(122897),
    o = t(821035),
    l = t(893996),
    c = t(726985),
    d = t(981631),
    u = t(689938),
    _ = t(202490);
let E = () =>
        (0, n.jsxs)(l.Z, {
            title: u.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
            webSetting: c.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
            children: [(0, n.jsx)(o.P, {}), (0, n.jsx)(r.Z, {})]
        }),
    T = () => (0, n.jsx)('div', {}),
    I = () => (0, n.jsx)('div', {}),
    S = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: _.settingsSection,
            children: s
        });
    };
function N(e) {
    return (0, n.jsxs)(S, {
        children: [
            (0, n.jsx)(a.HeadingLevel, {
                children: (0, n.jsx)(a.Heading, {
                    variant: 'heading-xl/semibold',
                    children: u.Z.Messages.PRIVACY_AND_SAFETY
                })
            }),
            (0, n.jsx)(i.Z, {
                parentSetting: c.s6.PRIVACY_AND_SAFETY_V2,
                settingsSection: d.oAB.PRIVACY_AND_SAFETY_V2,
                panelClassName: _.tabPanel,
                tabs: [
                    {
                        title: u.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                        component: E,
                        setting: c.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                    },
                    {
                        title: u.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                        component: T,
                        setting: c.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                    },
                    {
                        title: u.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                        component: I,
                        setting: c.s6.PRIVACY_AND_SAFETY_STANDING
                    },
                    {
                        title: u.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                        component: I,
                        setting: c.s6.PRIVACY_AND_SAFETY_ENCRYPTION
                    }
                ]
            })
        ]
    });
}
