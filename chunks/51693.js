n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(47120),
    n(773603);
var l = n(200651),
    i = n(192379),
    s = n(658550),
    r = n(481060),
    o = n(507453),
    a = n(388032);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: u, isSlideReady: c } = e,
        [h, f] = i.useState(!1),
        [m, g] = i.useState(null),
        [S, x] = i.useState(''),
        v = i.useRef(null);
    return (
        i.useEffect(() => {
            if (c) {
                var e;
                null === (e = v.current) || void 0 === e || e.focus();
            }
        }, [c]),
        (0, l.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    f(!0),
                    n({
                        mfaType: 'totp',
                        data: S
                    })
                        .catch((e) => {
                            var t, n;
                            g(null !== (n = e.message) && void 0 !== n ? n : null === (t = e.body) || void 0 === t ? void 0 : t.message);
                        })
                        .finally(() => {
                            f(!1);
                        });
            },
            children: [
                (0, l.jsx)(o.Z.SlideHeader, { onClose: u }),
                (0, l.jsx)(o.Z.SlideContent, {
                    children: (0, l.jsxs)(r.FormItem, {
                        title: a.intl.string(a.t.HZPBOT),
                        children: [
                            (0, l.jsx)(r.TextInput, {
                                inputRef: v,
                                onChange: x,
                                placeholder: a.intl.string(a.t.tARzgo),
                                maxLength: s.gH,
                                minLength: s.gH,
                                value: S,
                                autoComplete: 'one-time-code',
                                spellCheck: 'false',
                                disabled: h
                            }),
                            (0, l.jsx)(o.Z.SlideError, { error: m })
                        ]
                    })
                }),
                (0, l.jsx)(o.Z.SlideFooter, {
                    mfaChallenge: t,
                    setSlide: d,
                    showConfirm: !0,
                    disabled: S.length !== s.gH,
                    submitting: h
                })
            ]
        })
    );
}
