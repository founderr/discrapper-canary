n.r(t),
    n.d(t, {
        default: function () {
            return g;
        }
    }),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(442837),
    l = n(481060),
    a = n(809206),
    o = n(118012),
    c = n(25990),
    d = n(155433),
    u = n(981631),
    m = n(388032),
    h = n(367973);
function g(e) {
    var t, n, g, p;
    let { transitionState: x, onSuccess: S, onClose: T, requirementsUpdated: C, noSkip: _ = !1 } = e,
        [E, f] = s.useState(''),
        [I, N] = s.useState(''),
        [A, b] = s.useState(''),
        [v, j] = s.useState(null),
        [O, R] = s.useState(null),
        P = (0, r.e7)([c.Z], () => c.Z.getErrors()),
        D = (0, r.e7)([c.Z], () => c.Z.getFormState()),
        y = s.useRef(null);
    async function B(e) {
        e.preventDefault(), (0, a.b9)();
        let t = !1;
        if (('' === I ? (j(m.intl.string(m.t['/7/oPT'])), (t = !0)) : j(null), I !== A ? (R(m.intl.string(m.t.IEKYZ2)), (t = !0)) : R(null), t)) return;
        let n = await (0, a.Mn)({
            password: E,
            newPassword: I
        });
        if (null == n ? void 0 : n.ok) S();
        else {
            var i;
            (null == n ? void 0 : null === (i = n.body) || void 0 === i ? void 0 : i.username) != null && (0, d.P)();
        }
    }
    return (
        s.useEffect(() => {
            if (x === l.ModalTransitionState.ENTERED) {
                var e;
                null === (e = y.current) || void 0 === e || e.focus();
            }
        }, [x]),
        (0, i.jsxs)(l.ModalRoot, {
            transitionState: x,
            children: [
                (0, i.jsxs)(l.ModalHeader, {
                    separator: !1,
                    className: h.header,
                    children: [
                        (0, i.jsx)(o.Z, {
                            color: o.Z.Colors.HEADER_PRIMARY,
                            size: o.Z.Sizes.SIZE_24,
                            className: h.title,
                            children: m.intl.string(m.t['geta7+'])
                        }),
                        (0, i.jsx)(l.Text, {
                            color: 'header-secondary',
                            variant: 'text-md/normal',
                            className: h.subtitle,
                            children: C ? m.intl.string(m.t['37iHbW']) : m.intl.string(m.t.iOurYm)
                        }),
                        !0 !== _ &&
                            (0, i.jsx)(l.ModalCloseButton, {
                                onClick: T,
                                className: h.modalCloseButton
                            })
                    ]
                }),
                (0, i.jsxs)('form', {
                    onSubmit: B,
                    children: [
                        (0, i.jsxs)(l.ModalContent, {
                            className: h.content,
                            children: [
                                (0, i.jsx)(l.FormItem, {
                                    title: m.intl.string(m.t.WBqMRU),
                                    error: null == P ? void 0 : null === (t = P.password) || void 0 === t ? void 0 : t[0],
                                    children: (0, i.jsx)(l.TextInput, {
                                        type: 'password',
                                        value: E,
                                        onChange: f,
                                        inputRef: y
                                    })
                                }),
                                (0, i.jsx)(l.FormItem, {
                                    className: h.newPassword,
                                    title: m.intl.string(m.t['8dM4FB']),
                                    error: null !== (p = null !== (g = null == P ? void 0 : null === (n = P.new_password) || void 0 === n ? void 0 : n[0]) && void 0 !== g ? g : v) && void 0 !== p ? p : void 0,
                                    children: (0, i.jsx)(l.TextInput, {
                                        type: 'password',
                                        value: I,
                                        onChange: N
                                    })
                                }),
                                (0, i.jsx)(l.FormItem, {
                                    className: h.newPassword,
                                    title: m.intl.string(m.t.iQG2KC),
                                    error: null != O ? O : void 0,
                                    children: (0, i.jsx)(l.TextInput, {
                                        type: 'password',
                                        value: A,
                                        onChange: b
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)(l.ModalFooter, {
                            children: [
                                (0, i.jsx)(l.Button, {
                                    type: 'submit',
                                    color: l.Button.Colors.BRAND,
                                    size: l.Button.Sizes.MEDIUM,
                                    submitting: D === u.QZA.SUBMITTING,
                                    children: m.intl.string(m.t.i4jeWV)
                                }),
                                !0 !== _ &&
                                    (0, i.jsx)(l.Button, {
                                        className: h.cancel,
                                        look: l.Button.Looks.LINK,
                                        color: l.Button.Colors.PRIMARY,
                                        onClick: T,
                                        children: m.intl.string(m.t['ETE/oK'])
                                    })
                            ]
                        })
                    ]
                })
            ]
        })
    );
}
