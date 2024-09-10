n.r(t), n(47120);
var a = n(735250),
    l = n(470079),
    s = n(481060),
    o = n(238675),
    r = n(797863);
let i = Object.entries(o.fw).map((e) => {
        let [t, n] = e;
        return {
            label: t,
            value: n
        };
    }),
    A = Object.entries(o.sJ)
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
        [c, u] = l.useState(null),
        [C, d] = l.useState(null),
        [h, T] = l.useState(null),
        [f, H] = l.useState(''),
        _ = async () => {
            if (c) {
                H('');
                try {
                    await (0, o.qy)(c, {
                        difficulty: null != C ? C : void 0,
                        should_serve_invisible: null != h ? h : void 0
                    });
                } catch (e) {
                    H(e.message);
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
                        value: c,
                        options: i,
                        onChange: (e) => {
                            e !== o.fw.HCAPTCHA_RQDATA && d(null), e !== o.fw.HCAPTCHA_EASY && e !== o.fw.HCAPTCHA_RQDATA && T(null), u(e), H('');
                        }
                    }),
                    c === o.fw.HCAPTCHA_RQDATA &&
                        (0, a.jsx)(s.SingleSelect, {
                            value: C,
                            options: A,
                            onChange: (e) => {
                                c === o.fw.HCAPTCHA_RQDATA && d(e);
                            }
                        }),
                    (c === o.fw.HCAPTCHA_EASY || c === o.fw.HCAPTCHA_RQDATA) &&
                        (0, a.jsx)(s.Checkbox, {
                            value: null != h && h,
                            onChange: (e, t) => T(t),
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
                        onClick: _,
                        disabled: !c,
                        children: 'Trigger Captcha'
                    }),
                    '' !== f && (0, a.jsx)(s.InputError, { error: f })
                ]
            })
        ]
    });
};
