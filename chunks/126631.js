n.d(t, {
    Z: function () {
        return T;
    }
}),
    n(47120);
var i = n(200651),
    s = n(192379),
    r = n(481060),
    l = n(541716),
    a = n(752305),
    o = n(893718),
    c = n(313201),
    d = n(131704),
    u = n(993413),
    m = n(981631),
    h = n(388032),
    g = n(376516);
let p = (0, c.hQ)(),
    x = (0, d.kt)({
        id: '1',
        type: m.d4z.DM
    }),
    S = (0, c.hQ)();
function T(e) {
    let { sectionTitle: t, errors: n, onBioChange: c, pendingBio: d, placeholder: T, currentBio: C, disabled: _ = !1 } = e,
        [E, I] = s.useState(null != d ? d : C),
        [f, N] = s.useState((0, a.JM)(E)),
        A = s.useRef(!1);
    return (
        s.useEffect(() => {
            if (void 0 === d) {
                let e = (0, a.JM)(C);
                I(C), N(e);
            }
        }, [d, C]),
        (0, i.jsxs)(u.Z, {
            title: t,
            titleId: p,
            description: h.intl.string(h.t.Bbw6AQ),
            errors: n,
            disabled: _,
            children: [
                (0, i.jsx)(o.Z, {
                    'aria-describedby': S,
                    'aria-labelledby': p,
                    innerClassName: g.bioTextArea,
                    maxCharacterCount: m.tPV,
                    onChange: function (e, t, n) {
                        t !== E && (I(t), N(n), c(t));
                    },
                    placeholder: T,
                    channel: x,
                    textValue: E,
                    richValue: f,
                    type: l.I.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        A.current = !1;
                    },
                    onFocus: () => {
                        A.current = !0;
                    },
                    focused: A.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        });
                    }
                }),
                (0, i.jsx)(r.HiddenVisually, {
                    id: S,
                    children: h.intl.format(h.t['+DFxLS'], { maxLength: m.tPV })
                })
            ]
        })
    );
}
