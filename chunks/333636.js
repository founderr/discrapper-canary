n.r(t), n(47120);
var a = n(735250),
    l = n(470079),
    s = n(481060),
    o = n(238675),
    r = n(677065);
let i = Object.entries(o.fw).map((e) => {
        let [t, n] = e;
        return {
            label: t,
            value: n
        };
    }),
    c = Object.entries(o.sJ)
        .map((e) => {
            let [t, n] = e;
            return {
                label: t,
                value: n
            };
        })
        .filter((e) => {
            let { value: t } = e;
            return 'number' == typeof t;
        });
t.default = function (e) {
    let { onClose: t, transitionState: n } = e,
        [u, d] = l.useState(null),
        [A, C] = l.useState(null),
        [h, f] = l.useState(null),
        [T, p] = l.useState(''),
        S = async () => {
            if (u) {
                p('');
                try {
                    await (0, o.qy)(u, {
                        difficulty: null != A ? A : void 0,
                        should_serve_invisible: null != h ? h : void 0
                    });
                } catch (e) {
                    p(e.message);
                }
            }
        };
    return (0, a.jsxs)(s.ModalRoot, {
        transitionState: n,
        children: [
            (0, a.jsxs)(s.ModalHeader, {
                className: r.header,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: 'heading-lg/semibold',
                        children: 'Captcha Test Tool'
                    }),
                    (0, a.jsx)(s.ModalCloseButton, { onClick: t })
                ]
            }),
            (0, a.jsxs)(s.ModalContent, {
                className: r.content,
                children: [
                    (0, a.jsx)(s.SingleSelect, {
                        value: u,
                        options: i,
                        onChange: (e) => {
                            e !== o.fw.HCAPTCHA_RQDATA && C(null), e !== o.fw.HCAPTCHA_EASY && f(null), d(e), p('');
                        }
                    }),
                    u === o.fw.HCAPTCHA_RQDATA &&
                        (0, a.jsx)(s.SingleSelect, {
                            value: A,
                            options: c,
                            onChange: (e) => {
                                u === o.fw.HCAPTCHA_RQDATA && C(e);
                            }
                        }),
                    u === o.fw.HCAPTCHA_EASY &&
                        (0, a.jsx)(s.Checkbox, {
                            value: null != h && h,
                            onChange: (e, t) => f(t),
                            children: (0, a.jsx)(s.Text, {
                                variant: 'text-md/normal',
                                children: 'Should serve invisible?'
                            })
                        })
                ]
            }),
            (0, a.jsxs)(s.ModalFooter, {
                className: r.footer,
                children: [
                    (0, a.jsx)(s.Button, {
                        onClick: S,
                        disabled: !u,
                        children: 'Trigger Captcha'
                    }),
                    '' !== T && (0, a.jsx)(s.InputError, { error: T })
                ]
            })
        ]
    });
};
