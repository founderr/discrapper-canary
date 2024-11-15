n.d(t, {
    Z: function () {
        return f;
    }
});
var r = n(200651);
n(192379);
var a = n(120356),
    l = n.n(a),
    i = n(481060),
    o = n(963886),
    c = n(110478),
    s = n(423932),
    d = n(601948),
    u = n(594174),
    h = n(75590),
    m = n(971436);
let x = () => {
    Promise.all([n.e('52030'), n.e('91598')])
        .then(n.bind(n, 24031))
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
function f() {
    let e = u.default.getCurrentUser(),
        t = null == e ? void 0 : e.isStaff();
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)('div', {
                className: l()(h.buttonsContainer, m.marginBottom20),
                children: (0, r.jsx)(d.S, { isDevTools: !0 })
            }),
            (0, r.jsx)('div', {
                className: l()(h.buttonsContainer, m.marginBottom20),
                children: (0, r.jsx)(i.Button, {
                    onClick: x,
                    children: 'Launch MFA'
                })
            }),
            (0, r.jsx)('div', {
                className: l()(h.buttonsContainer, m.marginBottom20),
                children: (0, r.jsx)(i.Button, {
                    onClick: () => (0, s.Z)(),
                    children: 'Launch Vibing Wumpus'
                })
            }),
            t &&
                (0, r.jsx)('div', {
                    className: l()(h.buttonsContainer, m.marginBottom20),
                    children: (0, r.jsx)(i.Button, {
                        onClick: () => (0, c.N)(),
                        children: 'Launch Captcha Test Tool'
                    })
                }),
            t &&
                (0, r.jsx)('div', {
                    className: l()(h.buttonsContainer, m.marginBottom20),
                    children: (0, r.jsx)(i.Button, {
                        onClick: () => (0, o.E)(),
                        children: 'Launch Age Verification Test Tool'
                    })
                })
        ]
    });
}
