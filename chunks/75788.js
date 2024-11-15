n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var o = n(200651),
    s = n(192379),
    l = n(442837),
    a = n(481060),
    i = n(479531),
    r = n(393869),
    d = n(25990),
    c = n(388032),
    u = n(374808);
function E(e) {
    var t;
    let { isSlideReady: n, error: E, setEmailToken: _, setError: m, onNext: N, onClose: x } = e,
        [A, C] = s.useState(!1),
        [h, M] = s.useState(''),
        [S, p] = s.useState(!1),
        f = (0, l.e7)([d.Z], () => d.Z.getErrors()),
        I = s.useRef(null);
    s.useEffect(() => {
        if (n) {
            var e;
            null === (e = I.current) || void 0 === e || e.focus();
        }
    }, [n]);
    let g = async (e) => {
            e.preventDefault(), m(null), C(!0);
            try {
                let { token: e } = await (0, r.w)(h);
                _(e), N();
            } catch (e) {
                m(new i.Z(e).getAnyErrorMessage());
            } finally {
                C(!1);
            }
        },
        R = async () => {
            if (!S) {
                p(!0);
                try {
                    await (0, r.i)(!0), (0, a.showToast)((0, a.createToast)(c.intl.string(c.t['84yeo6']), a.ToastType.SUCCESS));
                } catch (t) {
                    let e = new i.Z(t).getAnyErrorMessage();
                    null != e && (0, a.showToast)((0, a.createToast)(e, a.ToastType.FAILURE));
                } finally {
                    p(!1);
                }
            }
        };
    return (0, o.jsxs)('form', {
        onSubmit: g,
        children: [
            (0, o.jsxs)(a.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                    (0, o.jsx)(a.Heading, {
                        className: u.title,
                        variant: 'heading-xl/extrabold',
                        children: c.intl.string(c.t.jMGc4O)
                    }),
                    (0, o.jsx)(a.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: u.subtitle,
                        children: c.intl.string(c.t.SZJow8)
                    }),
                    (0, o.jsx)(a.ModalCloseButton, {
                        onClick: x,
                        className: u.modalCloseButton
                    })
                ]
            }),
            (0, o.jsxs)(a.ModalContent, {
                className: u.content,
                children: [
                    (0, o.jsx)(a.FormItem, {
                        title: c.intl.string(c.t['8mZX6O']),
                        error: null != E ? E : null == f ? void 0 : null === (t = f.email_token) || void 0 === t ? void 0 : t[0],
                        children: (0, o.jsx)(a.TextInput, {
                            value: h,
                            onChange: M,
                            inputRef: I
                        })
                    }),
                    (0, o.jsx)(a.Text, {
                        className: u.help,
                        variant: 'text-sm/normal',
                        children: c.intl.format(c.t.P0sak5, { onResend: R })
                    })
                ]
            }),
            (0, o.jsx)(a.ModalFooter, {
                children: (0, o.jsx)(a.Button, {
                    type: 'submit',
                    color: a.Button.Colors.BRAND,
                    size: a.Button.Sizes.MEDIUM,
                    submitting: A,
                    children: c.intl.string(c.t.PDTjLC)
                })
            })
        ]
    });
}
