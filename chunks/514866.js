r.d(t, {
    Z: function () {
        return p;
    }
});
var a = r(735250);
r(470079);
var n = r(120356),
    i = r.n(n),
    o = r(481060),
    l = r(45114),
    c = r(110478),
    s = r(423932),
    d = r(601948),
    u = r(594174),
    h = r(804637),
    m = r(224499);
let g = () => {
    Promise.all([r.e('52030'), r.e('55900')])
        .then(r.bind(r, 24031))
        .then((e) => {
            let { openMFAModal: t } = e;
            t(
                {
                    ticket: 'ticket',
                    methods: [
                        {
                            type: 'webauthn',
                            challenge: '{}'
                        },
                        {
                            type: 'totp',
                            backup_codes_allowed: !0
                        },
                        { type: 'sms' },
                        { type: 'password' }
                    ]
                },
                console.log,
                console.error
            );
        });
};
function p() {
    let e = u.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff();
    return (0, a.jsxs)(a.Fragment, {
        children: [
            (0, a.jsx)('div', {
                className: i()(h.buttonsContainer, m.marginBottom20),
                children: (0, a.jsx)(d.S, { isDevTools: !0 })
            }),
            (0, a.jsx)('div', {
                className: i()(h.buttonsContainer, m.marginBottom20),
                children: (0, a.jsx)(o.Button, {
                    onClick: g,
                    children: 'Launch MFA'
                })
            }),
            (0, a.jsx)('div', {
                className: i()(h.buttonsContainer, m.marginBottom20),
                children: (0, a.jsx)(o.Button, {
                    onClick: () => (0, s.Z)(),
                    children: 'Launch Vibing Wumpus'
                })
            }),
            (0, a.jsx)('div', {
                className: i()(h.buttonsContainer, m.marginBottom20),
                children: (0, a.jsx)(o.Button, {
                    onClick: l.YJ,
                    children: 'Clear Message Requests Read State'
                })
            }),
            t &&
                (0, a.jsx)('div', {
                    className: i()(h.buttonsContainer, m.marginBottom20),
                    children: (0, a.jsx)(o.Button, {
                        onClick: () => (0, c.N)(),
                        children: 'Launch Captcha Test Tool'
                    })
                })
        ]
    });
}
