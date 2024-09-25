t.d(A, {
    Z: function () {
        return f;
    }
}),
    t(47120);
var n = t(735250),
    a = t(470079),
    s = t(120356),
    r = t.n(s),
    o = t(772848),
    l = t(481060),
    i = t(752305),
    d = t(893718),
    c = t(131704),
    u = t(703558),
    C = t(981631),
    g = t(689938),
    T = t(463859),
    I = t(37823);
let U = (0, o.Z)(),
    p = (0, c.kt)({
        id: '1',
        type: C.d4z.DM
    });
function h() {
    return new Promise((e) => {
        e({
            shouldClear: !1,
            shouldRefocus: !0
        });
    });
}
function m(e) {
    var A;
    let { hasError: t, maxLength: a, text: s } = e;
    return (0, n.jsxs)('div', {
        className: r()(I.maxLength, { [I.errorOverflow]: t }),
        'aria-hidden': 'true',
        children: [null !== (A = null == s ? void 0 : s.length) && void 0 !== A ? A : 0, ' ', null != a && '/ '.concat(a)]
    });
}
function f(e) {
    var A;
    let { 'aria-labelledby': t, className: s, id: o, autoFocus: c, maxLength: C, onChange: I, onSubmit: f, showCharacterCount: v = !1, placeholder: q, required: E, value: O, enableThemedBackground: N = !1, parentModalKey: D } = e,
        R = (0, l.useFormContext)(),
        [L, x] = a.useState(() => (0, i.JM)(O)),
        b = a.useRef(!0 === c),
        P = null != t ? t : null == R ? void 0 : R.titleId,
        V = null !== (A = null == R ? void 0 : R.errorId) && void 0 !== A ? A : U,
        S = a.useMemo(
            () => ({
                analyticsName: 'simple',
                autocomplete: {
                    alwaysUseLayer: !0,
                    small: !0
                },
                disableAutoFocus: !0 !== c,
                drafts: { type: u.d.ChannelMessage },
                emojis: { button: !0 },
                permissions: { requireSendMessages: !1 },
                submit: {
                    useDisabledStylesOnSubmit: !0,
                    disableEnterToSubmit: !0
                }
            }),
            [c]
        );
    return (0, n.jsxs)(d.Z, {
        'aria-describedby': V,
        'aria-labelledby': P,
        innerClassName: r()(s, T.textArea),
        id: o,
        maxCharacterCount: C,
        onChange: function (e, A, t) {
            I(A), x(t);
        },
        placeholder: q,
        required: E,
        channel: p,
        textValue: O,
        richValue: L,
        type: S,
        onBlur: () => {
            b.current = !1;
        },
        onFocus: () => {
            b.current = !0;
        },
        focused: b.current,
        onSubmit: null != f ? f : h,
        disableThemedBackground: !N,
        parentModalKey: D,
        emojiPickerCloseOnModalOuterClick: !0,
        children: [
            !0 === v &&
                (0, n.jsx)(m, {
                    hasError: null != R.error || (null != C && O.length > C),
                    text: O,
                    maxLength: C
                }),
            null != C &&
                (0, n.jsx)(l.HiddenVisually, {
                    id: U,
                    children: g.Z.Messages.MAXIMUM_LENGTH.format({ maxLength: C })
                })
        ]
    });
}
