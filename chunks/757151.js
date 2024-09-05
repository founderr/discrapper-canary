t.d(s, {
    Z: function () {
        return R;
    }
});
var n = t(735250),
    a = t(470079),
    i = t(481060),
    r = t(409700),
    o = t(518560),
    l = t(526156),
    c = t(924356),
    d = t(24400),
    u = t(122897),
    _ = t(402583),
    E = t(821035),
    T = t(694569),
    S = t(394655),
    I = t(893996),
    N = t(726985),
    m = t(981631),
    C = t(689938),
    g = t(202490);
let A = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(I.Z, {
                    title: C.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: N.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(E.P, {}), (0, n.jsx)(u.Z, {}), (0, n.jsx)(S.Z, {}), (0, n.jsx)(d.Z, {}), (0, n.jsx)(c.Z, {})]
                }),
                (0, n.jsx)(I.Z, {
                    title: C.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: N.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(T.Z, {})
                })
            ]
        }),
    h = () =>
        (0, n.jsx)(n.Fragment, {
            children: (0, n.jsx)(I.Z, {
                title: C.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                webSetting: N.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                children: (0, n.jsx)(_.Z, {})
            })
        }),
    O = () =>
        (0, n.jsx)(I.Z, {
            title: C.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            webSetting: N.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY,
            children: (0, n.jsx)(o.Z, {})
        }),
    p = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: g.settingsSection,
            children: s
        });
    };
function R(e) {
    return (
        a.useEffect(() => {
            (0, r.I)();
        }, []),
        (0, n.jsxs)(p, {
            children: [
                (0, n.jsx)(i.HeadingLevel, {
                    children: (0, n.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: C.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(l.Z, {
                    parentSetting: N.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: m.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: g.tabPanel,
                    tabs: [
                        {
                            title: C.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: A,
                            setting: N.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: C.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: h,
                            setting: N.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: C.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: O,
                            setting: N.s6.PRIVACY_AND_SAFETY_STANDING
                        },
                        {
                            title: C.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                            component: O,
                            setting: N.s6.PRIVACY_AND_SAFETY_ENCRYPTION
                        }
                    ]
                })
            ]
        })
    );
}
