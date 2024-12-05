n.d(t, {
    Z: function () {
        return S;
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
    g = n(388032),
    h = n(341258);
let p = (0, c.hQ)(),
    x = (0, d.kt)({
        id: '1',
        type: m.d4z.DM
    }),
    T = (0, c.hQ)();
function S(e) {
    let { sectionTitle: t, errors: n, onBioChange: c, pendingBio: d, placeholder: S, currentBio: _, disabled: E = !1 } = e,
        [C, f] = s.useState(null != d ? d : _),
        [I, N] = s.useState((0, a.JM)(C)),
        A = s.useRef(!1);
    return (
        s.useEffect(() => {
            if (void 0 === d) {
                let e = (0, a.JM)(_);
                f(_), N(e);
            }
        }, [d, _]),
        (0, i.jsxs)(u.Z, {
            title: t,
            titleId: p,
            description: g.intl.string(g.t.Bbw6AQ),
            errors: n,
            disabled: E,
            children: [
                (0, i.jsx)(o.Z, {
                    'aria-describedby': T,
                    'aria-labelledby': p,
                    innerClassName: h.bioTextArea,
                    maxCharacterCount: m.tPV,
                    onChange: function (e, t, n) {
                        t !== C && (f(t), N(n), c(t));
                    },
                    placeholder: S,
                    channel: x,
                    textValue: C,
                    richValue: I,
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
                    id: T,
                    children: g.intl.format(g.t['+DFxLS'], { maxLength: m.tPV })
                })
            ]
        })
    );
}
