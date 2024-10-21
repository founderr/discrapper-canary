t.d(s, {
    S: function () {
        return T;
    }
});
var n = t(200651);
t(192379);
var a = t(442837),
    i = t(481060),
    r = t(246992),
    o = t(535664),
    l = t(502087),
    c = t(921801),
    d = t(594174),
    _ = t(726985),
    u = t(474936),
    E = t(410827);
let T = (e) => {
    let { isDevTools: s = !1 } = e,
        t = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
        T = (0, a.e7)([l.Z], () => {
            let e = l.Z.getCreatedAtOverride();
            return null != e ? e.toISOString().substring(0, 10) : '';
        }),
        S = (0, a.e7)([l.Z], () => l.Z.getPremiumTypeOverride()),
        I = (e) => {
            (0, o.u)(new Date(e));
        };
    return (0, n.jsxs)('div', {
        children: [
            (0, n.jsxs)(c.F, {
                setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_PREMIUM_TYPE,
                children: [
                    (0, n.jsx)(i.FormSection, {
                        title: 'Override Client-Side Premium Type',
                        tag: i.FormTitleTags.H3,
                        children: (0, n.jsx)(i.SingleSelect, {
                            options: u.b6,
                            value: S,
                            onChange: (e) => {
                                (0, o.C)(e, t);
                            },
                            popoutLayerContext: s ? r.O$ : void 0
                        })
                    }),
                    (0, n.jsx)(i.Button, {
                        look: i.Button.Looks.LINK,
                        style: { padding: '0' },
                        onClick: () => {
                            (0, o.C)(u.F_, t);
                        },
                        children: 'Reset premium type override'
                    })
                ]
            }),
            (0, n.jsxs)(c.F, {
                setting: _.s6.DEVELOPER_OPTIONS_OVERRIDE_CLIENT_SIDE_ACCOUNT_CREATED_DATA,
                children: [
                    (0, n.jsx)(i.FormSection, {
                        title: 'Override Client-Side Account Created At Date',
                        tag: i.FormTitleTags.H3,
                        children: (0, n.jsx)('input', {
                            type: 'date',
                            value: T,
                            onChange: (e) => I(e.target.value),
                            className: E.datePicker
                        })
                    }),
                    (0, n.jsx)(i.Button, {
                        look: i.Button.Looks.LINK,
                        style: { padding: '0' },
                        type: 'submit',
                        onClick: () => (0, o.u)(void 0),
                        children: 'Reset account created at override'
                    })
                ]
            })
        ]
    });
};
