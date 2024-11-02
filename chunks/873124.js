n.d(t, {
    Z: function () {
        return a;
    }
}),
    n(47120),
    n(773603);
var l = n(200651),
    i = n(192379),
    s = n(481060),
    r = n(507453),
    o = n(388032);
function a(e) {
    let { mfaChallenge: t, finish: n, setSlide: a, onClose: d, isSlideReady: u } = e,
        [c, h] = i.useState(!1),
        [f, m] = i.useState(null),
        [g, S] = i.useState(''),
        x = i.useRef(null);
    return (
        i.useEffect(() => {
            if (u) {
                var e;
                null === (e = x.current) || void 0 === e || e.focus();
            }
        }, [u]),
        (0, l.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    h(!0),
                    n({
                        mfaType: 'password',
                        data: g
                    })
                        .catch((e) => {
                            var t, n;
                            m(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message);
                        })
                        .finally(() => {
                            h(!1);
                        });
            },
            children: [
                (0, l.jsx)(r.Z.SlideHeader, { onClose: d }),
                (0, l.jsx)(r.Z.SlideContent, {
                    children: (0, l.jsxs)(s.FormItem, {
                        title: o.intl.string(o.t['CIGa+/']),
                        children: [
                            (0, l.jsx)(s.TextInput, {
                                inputRef: x,
                                onChange: S,
                                value: g,
                                type: 'password',
                                autoComplete: 'password',
                                spellCheck: 'false',
                                disabled: c
                            }),
                            (0, l.jsx)(r.Z.SlideError, { error: f })
                        ]
                    })
                }),
                (0, l.jsx)(r.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: a,
                    showConfirm: !0,
                    disabled: 0 === g.length,
                    submitting: c
                })
            ]
        })
    );
}
