t.d(s, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var n = t(200651),
    a = t(192379),
    i = t(481060),
    r = t(541716),
    o = t(752305),
    l = t(893718),
    c = t(313201),
    d = t(131704),
    _ = t(993413),
    u = t(981631),
    E = t(689938),
    T = t(264188);
let S = (0, c.hQ)(),
    I = (0, d.kt)({
        id: '1',
        type: u.d4z.DM
    }),
    N = (0, c.hQ)();
function m(e) {
    let { sectionTitle: s, errors: t, onBioChange: c, pendingBio: d, placeholder: m, currentBio: C, disabled: A = !1 } = e,
        [g, h] = a.useState(null != d ? d : C),
        [O, p] = a.useState((0, o.JM)(g)),
        R = a.useRef(!1);
    return (
        a.useEffect(() => {
            if (void 0 === d) {
                let e = (0, o.JM)(C);
                h(C), p(e);
            }
        }, [d, C]),
        (0, n.jsxs)(_.Z, {
            title: s,
            titleId: S,
            description: E.Z.Messages.USER_SETTINGS_ABOUT_ME_DETAILS,
            errors: t,
            disabled: A,
            children: [
                (0, n.jsx)(l.Z, {
                    'aria-describedby': N,
                    'aria-labelledby': S,
                    innerClassName: T.bioTextArea,
                    maxCharacterCount: u.tPV,
                    onChange: function (e, s, t) {
                        s !== g && (h(s), p(t), c(s));
                    },
                    placeholder: m,
                    channel: I,
                    textValue: g,
                    richValue: O,
                    type: r.I.PROFILE_BIO_INPUT,
                    onBlur: () => {
                        R.current = !1;
                    },
                    onFocus: () => {
                        R.current = !0;
                    },
                    focused: R.current,
                    onSubmit: function () {
                        return new Promise((e) => {
                            e({
                                shouldClear: !1,
                                shouldRefocus: !0
                            });
                        });
                    }
                }),
                (0, n.jsx)(i.HiddenVisually, {
                    id: N,
                    children: E.Z.Messages.MAXIMUM_LENGTH.format({ maxLength: u.tPV })
                })
            ]
        })
    );
}
