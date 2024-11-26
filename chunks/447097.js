n.d(t, {
    Z: function () {
        return d;
    }
}),
    n(757143),
    n(47120),
    n(773603);
var l = n(200651),
    i = n(192379),
    r = n(658550),
    s = n(481060),
    o = n(507453),
    a = n(388032);
function d(e) {
    let { mfaChallenge: t, finish: n, setSlide: d, onClose: u, isSlideReady: c } = e,
        [h, f] = i.useState(!1),
        [m, g] = i.useState(null),
        [S, x] = i.useState(''),
        p = i.useRef(null),
        v = a.intl.string(a.t['C/ZAw8']),
        j = a.intl.string(a.t.fZSi1N),
        C = i.useCallback(
            (e) => {
                x(e), g(null);
            },
            [x, g]
        );
    return (
        i.useEffect(() => {
            if (c) {
                var e;
                null === (e = p.current) || void 0 === e || e.focus();
            }
        }, [c]),
        (0, l.jsxs)('form', {
            onSubmit: (e) => {
                e.preventDefault(),
                    f(!0),
                    n({
                        mfaType: 'backup',
                        data: S.replace(/-/g, '')
                    })
                        .catch((e) => {
                            var t, n;
                            g(null !== (n = null === (t = e.body) || void 0 === t ? void 0 : t.message) && void 0 !== n ? n : e.message);
                        })
                        .finally(() => {
                            f(!1);
                        });
            },
            children: [
                (0, l.jsx)(o.Z.SlideHeader, { onClose: u }),
                (0, l.jsx)(o.Z.SlideContent, {
                    children: (0, l.jsxs)(s.FormItem, {
                        title: v,
                        children: [
                            (0, l.jsx)(s.TextInput, {
                                inputRef: p,
                                onChange: C,
                                placeholder: j,
                                maxLength: r.tL,
                                minLength: r.th,
                                value: S,
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
                    disabled: S.length < 8,
                    submitting: h
                })
            ]
        })
    );
}
