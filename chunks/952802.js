n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var s = n(200651),
    r = n(192379),
    i = n(120356),
    o = n.n(i),
    l = n(481060),
    a = n(313201),
    c = n(742458),
    u = n(766650),
    d = n(343471),
    h = n(311133);
function p(e) {
    let { alpha2: t, countryCode: n, forceMode: i, label: p, error: m, className: f, required: g, value: x, setRef: C, placeholder: v, autoFocus: N, maxLength: j, spellCheck: y, autoComplete: E, autoCapitalize: k, autoCorrect: w, onChange: S, inputClassName: A } = e,
        b = (0, a.Dt)(),
        [T, I] = r.useState(!1),
        P = (0, c.o9)(i, x);
    return (0, s.jsx)(l.FormItem, {
        title: p,
        error: m,
        className: f,
        required: g,
        tag: 'label',
        htmlFor: b,
        children: (0, s.jsxs)('div', {
            className: o()(h.input, d.input, A, {
                [h.error]: null != m,
                [h.focused]: T
            }),
            children: [
                (0, s.jsx)(u.Z, {
                    show: P,
                    alpha2: t,
                    countryCode: n
                }),
                (0, s.jsx)(l.TextInput, {
                    id: b,
                    name: 'email',
                    type: i === c.Nz.EMAIL ? 'email' : 'text',
                    value: x,
                    inputRef: C,
                    placeholder: v,
                    'aria-label': p,
                    required: g,
                    onChange: function (e) {
                        let t = (0, c.o9)(i, e) ? n : '';
                        S(e, t);
                    },
                    autoComplete: E,
                    autoCapitalize: k,
                    autoCorrect: w,
                    autoFocus: N,
                    maxLength: j,
                    spellCheck: y,
                    className: d.inputWrapper,
                    inputClassName: d.inputField,
                    onFocus: () => I(!0),
                    onBlur: () => I(!1)
                })
            ]
        })
    });
}
