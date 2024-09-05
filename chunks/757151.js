t.d(s, {
    Z: function () {
        return p;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(409700),
    o = t(518560),
    l = t(526156),
    c = t(924356),
    d = t(122897),
    u = t(402583),
    _ = t(821035),
    E = t(694569),
    T = t(394655),
    S = t(893996),
    I = t(726985),
    N = t(981631),
    m = t(689938),
    C = t(202490);
let g = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(S.Z, {
                    title: m.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: I.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(_.P, {}), (0, n.jsx)(d.Z, {}), (0, n.jsx)(T.Z, {}), (0, n.jsx)(c.Z, {})]
                }),
                (0, n.jsx)(S.Z, {
                    title: m.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: I.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(E.Z, {})
                })
            ]
        }),
    A = () =>
        (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)(S.Z, {
                title: m.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                webSetting: I.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                children: (0, n.jsx)(u.Z, {})
            })
        }),
    h = () =>
        (0, n.jsx)(S.Z, {
            title: m.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            webSetting: I.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY,
            children: (0, n.jsx)(o.Z, {})
        }),
    O = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: C.settingsSection,
            children: s
        });
    };
function p(e) {
    return (
        a.useEffect(() => {
            (0, r.I)();
        }, []),
        (0, n.jsxs)(O, {
            children: [
                (0, n.jsx)(i.HeadingLevel, {
                    children: (0, n.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: m.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(l.Z, {
                    parentSetting: I.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: N.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: C.tabPanel,
                    tabs: [
                        {
                            title: m.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: g,
                            setting: I.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: m.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: A,
                            setting: I.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: m.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: h,
                            setting: I.s6.PRIVACY_AND_SAFETY_STANDING
                        },
                        {
                            title: m.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                            component: h,
                            setting: I.s6.PRIVACY_AND_SAFETY_ENCRYPTION
                        }
                    ]
                })
            ]
        })
    );
}
