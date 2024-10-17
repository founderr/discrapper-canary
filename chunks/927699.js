s.d(n, {
    Z: function () {
        return T;
    }
}),
    s(47120);
var t = s(735250),
    l = s(470079),
    i = s(120356),
    r = s.n(i),
    a = s(481060),
    c = s(541716),
    o = s(752305),
    u = s(893718),
    d = s(993413),
    _ = s(131704),
    m = s(474936),
    I = s(981631),
    E = s(689938),
    p = s(45785);
let N = (0, _.kt)({
    id: '1',
    type: I.d4z.DM
});
function T(e) {
    let { sectionTitle: n, errors: s, onTextChange: i, pendingText: _, placeholder: I, currentText: T, className: S, innerClassName: x, disabled: h = !1, disableThemedBackground: P = !1 } = e,
        [f, A] = l.useState(null != _ ? _ : T),
        [v, M] = l.useState((0, o.JM)(f)),
        g = l.useRef(!1);
    return (
        l.useEffect(() => {
            g.current = !0;
        }, []),
        l.useEffect(() => {
            if (void 0 === _) {
                let e = (0, o.JM)(T);
                A(T), M(e);
            }
        }, [_, T]),
        (0, t.jsx)('div', {
            className: r()(p.body, S),
            children: (0, t.jsxs)(d.Z, {
                title: n,
                errors: s,
                disabled: h,
                children: [
                    (0, t.jsx)(u.Z, {
                        innerClassName: r()(p.textArea, x),
                        editorClassName: p.editorTextArea,
                        maxCharacterCount: m.$n,
                        onChange: function (e, n, s) {
                            n !== f && (A(n), M(s), i(n));
                        },
                        placeholder: I,
                        channel: N,
                        textValue: f,
                        richValue: v,
                        type: c.I.CUSTOM_GIFT,
                        onBlur: () => {
                            g.current = !1;
                        },
                        onFocus: () => {
                            g.current = !0;
                        },
                        focused: g.current,
                        onSubmit: function () {
                            return new Promise((e) => {
                                e({
                                    shouldClear: !1,
                                    shouldRefocus: !0
                                });
                            });
                        },
                        disableThemedBackground: P
                    }),
                    (0, t.jsx)(a.HiddenVisually, { children: E.Z.Messages.MAXIMUM_LENGTH.format({ maxLength: m.$n }) })
                ]
            })
        })
    );
}
