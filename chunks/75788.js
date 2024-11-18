n.d(t, {
    Z: function () {
        return E;
    }
}),
    n(47120);
var o = n(200651),
    s = n(192379),
    l = n(442837),
    r = n(481060),
    i = n(479531),
    a = n(393869),
    c = n(25990),
    d = n(388032),
    u = n(374808);
function E(e) {
    var t;
    let { isSlideReady: n, error: E, setEmailToken: _, setError: m, onNext: N, onClose: x } = e,
        [A, C] = s.useState(!1),
        [h, M] = s.useState(''),
        [S, p] = s.useState(!1),
        f = (0, l.e7)([c.Z], () => c.Z.getErrors()),
        I = s.useRef(null);
    s.useEffect(() => {
        if (n) {
            var e;
            null === (e = I.current) || void 0 === e || e.focus();
        }
    }, [n]);
    let j = async (e) => {
            e.preventDefault(), m(null), C(!0);
            try {
                let { token: e } = await (0, a.w)(h);
                _(e), N();
            } catch (e) {
                m(new i.Z(e).getAnyErrorMessage());
            } finally {
                C(!1);
            }
        },
        g = async () => {
            if (!S) {
                p(!0);
                try {
                    await (0, a.i)(!0), (0, r.showToast)((0, r.createToast)(d.intl.string(d.t['84yeo6']), r.ToastType.SUCCESS));
                } catch (t) {
                    let e = new i.Z(t).getAnyErrorMessage();
                    null != e && (0, r.showToast)((0, r.createToast)(e, r.ToastType.FAILURE));
                } finally {
                    p(!1);
                }
            }
        };
    return (0, o.jsxs)('form', {
        onSubmit: j,
        children: [
            (0, o.jsxs)(r.ModalHeader, {
                separator: !1,
                className: u.header,
                children: [
                    (0, o.jsx)(r.Heading, {
                        className: u.title,
                        variant: 'heading-xl/extrabold',
                        children: d.intl.string(d.t.jMGc4O)
                    }),
                    (0, o.jsx)(r.Text, {
                        color: 'header-secondary',
                        variant: 'text-md/normal',
                        className: u.subtitle,
                        children: d.intl.string(d.t.SZJow8)
                    }),
                    (0, o.jsx)(r.ModalCloseButton, {
                        onClick: x,
                        className: u.modalCloseButton
                    })
                ]
            }),
            (0, o.jsxs)(r.ModalContent, {
                className: u.content,
                children: [
                    (0, o.jsx)(r.FormItem, {
                        title: d.intl.string(d.t['8mZX6O']),
                        error: null != E ? E : null == f ? void 0 : null === (t = f.email_token) || void 0 === t ? void 0 : t[0],
                        children: (0, o.jsx)(r.TextInput, {
                            value: h,
                            onChange: M,
                            inputRef: I
                        })
                    }),
                    (0, o.jsx)(r.Text, {
                        className: u.help,
                        variant: 'text-sm/normal',
                        children: d.intl.format(d.t.P0sak5, { onResend: g })
                    })
                ]
            }),
            (0, o.jsx)(r.ModalFooter, {
                children: (0, o.jsx)(r.Button, {
                    type: 'submit',
                    color: r.Button.Colors.BRAND,
                    size: r.Button.Sizes.MEDIUM,
                    submitting: A,
                    children: d.intl.string(d.t.PDTjLC)
                })
            })
        ]
    });
}
