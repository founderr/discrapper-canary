t.d(s, {
    Z: function () {
        return T;
    }
});
var n = t(735250),
    a = t(481060),
    i = t(526156),
    r = t(726985),
    o = t(981631),
    l = t(689938),
    c = t(202490);
let d = () => (0, n.jsx)('div', {}),
    u = () => (0, n.jsx)('div', {}),
    _ = () => (0, n.jsx)('div', {}),
    E = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: c.settingsSection,
            children: s
        });
    };
function T(e) {
    return (0, n.jsxs)(E, {
        children: [
            (0, n.jsx)(a.HeadingLevel, {
                children: (0, n.jsx)(a.Heading, {
                    variant: 'heading-xl/semibold',
                    children: l.Z.Messages.PRIVACY_AND_SAFETY
                })
            }),
            (0, n.jsx)(i.Z, {
                parentSetting: r.s6.PRIVACY_AND_SAFETY_V2,
                settingsSection: o.oAB.PRIVACY_AND_SAFETY_V2,
                tabs: [
                    {
                        title: l.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                        component: d,
                        setting: r.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                    },
                    {
                        title: l.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                        component: u,
                        setting: r.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                    },
                    {
                        title: l.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                        component: _,
                        setting: r.s6.PRIVACY_AND_SAFETY_STANDING
                    },
                    {
                        title: l.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                        component: _,
                        setting: r.s6.PRIVACY_AND_SAFETY_ENCRYPTION
                    }
                ]
            })
        ]
    });
}
