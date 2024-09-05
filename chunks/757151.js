t.d(s, {
    Z: function () {
        return M;
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
    _ = t(122897),
    u = t(993315),
    E = t(883382),
    T = t(940021),
    S = t(402583),
    I = t(821035),
    N = t(694569),
    m = t(394655),
    C = t(893996),
    A = t(726985),
    g = t(981631),
    h = t(689938),
    O = t(202490);
let p = () =>
        (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsxs)(C.Z, {
                    title: h.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_CONTENT,
                    webSetting: A.s6.PRIVACY_AND_SAFETY_CONTENT_CATEGORY,
                    children: [(0, n.jsx)(I.P, {}), (0, n.jsx)(_.Z, {}), (0, n.jsx)(m.Z, {}), (0, n.jsx)(d.Z, {}), (0, n.jsx)(c.Z, {})]
                }),
                (0, n.jsx)(C.Z, {
                    title: h.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_FRIEND_REQUESTS,
                    webSetting: A.s6.PRIVACY_AND_SAFETY_FRIEND_REQUESTS_CATEGORY,
                    children: (0, n.jsx)(N.Z, {})
                })
            ]
        }),
    R = () =>
        (0, n.jsx)(n.Fragment, {
            children: (0, n.jsxs)(C.Z, {
                title: h.Z.Messages.PRIVACY_AND_SAFETY_CATEGORY_TITLE_DISCORD_DATA_USAGE,
                webSetting: A.s6.PRIVACY_AND_SAFETY_DISCORD_DATA_USAGE_CATEGORY,
                children: [(0, n.jsx)(S.Z, {}), (0, n.jsx)(T.Z, {}), (0, n.jsx)(E.Z, {}), (0, n.jsx)(u.Z, {})]
            })
        }),
    x = () =>
        (0, n.jsx)(C.Z, {
            title: h.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_SUPPORT_V2,
            webSetting: A.s6.PRIVACY_AND_SAFETY_STANDING_CATEGORY,
            children: (0, n.jsx)(o.Z, {})
        }),
    f = (e) => {
        let { children: s } = e;
        return (0, n.jsx)('div', {
            className: O.settingsSection,
            children: s
        });
    };
function M(e) {
    return (
        a.useEffect(() => {
            (0, r.I)();
        }, []),
        (0, n.jsxs)(f, {
            children: [
                (0, n.jsx)(i.HeadingLevel, {
                    children: (0, n.jsx)(i.Heading, {
                        variant: 'heading-xl/semibold',
                        children: h.Z.Messages.PRIVACY_AND_SAFETY
                    })
                }),
                (0, n.jsx)(l.Z, {
                    parentSetting: A.s6.PRIVACY_AND_SAFETY_V2,
                    settingsSection: g.oAB.PRIVACY_AND_SAFETY_V2,
                    panelClassName: O.tabPanel,
                    tabs: [
                        {
                            title: h.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_CONTENT_SOCIAL,
                            component: p,
                            setting: A.s6.PRIVACY_AND_SAFETY_CONTENT_SOCIAL
                        },
                        {
                            title: h.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_DATA_PRIVACY,
                            component: R,
                            setting: A.s6.PRIVACY_AND_SAFETY_DATA_PRIVACY
                        },
                        {
                            title: h.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_STANDING,
                            component: x,
                            setting: A.s6.PRIVACY_AND_SAFETY_STANDING
                        },
                        {
                            title: h.Z.Messages.PRIVACY_AND_SAFETY_TAB_TITLE_ENCRYPTION,
                            component: x,
                            setting: A.s6.PRIVACY_AND_SAFETY_ENCRYPTION
                        }
                    ]
                })
            ]
        })
    );
}
