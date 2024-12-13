n.d(t, {
    v: function () {
        return h;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    o = n(120356),
    i = n.n(o),
    c = n(593473),
    l = n(512969),
    s = n(481060),
    d = n(489863),
    u = n(511540),
    f = n(828878),
    x = n(388032),
    p = n(764809);
function h(e) {
    let { onUserCodeAccepted: t, usePrefilledCode: n } = e,
        [o, h] = r.useState(() => {
            let { user_code: e } = c.parse(window.location.search);
            return n && null != e ? e : '';
        }),
        C = (0, l.TH)(),
        m = r.useCallback(() => {
            (0, d.c$)(C);
        }, [C]),
        { manualSubmit: v, error: g, submitting: _ } = (0, u.c)(o, t, m);
    return (0, a.jsxs)('div', {
        className: p.content,
        children: [
            (0, a.jsxs)('div', {
                className: p.innerContent,
                children: [
                    (0, a.jsx)(s.Heading, {
                        variant: 'heading-xl/extrabold',
                        className: p.text,
                        children: x.intl.string(x.t.KYPNUl)
                    }),
                    (0, a.jsx)(s.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: p.text,
                        children: x.intl.string(x.t.xRHk7e)
                    }),
                    (0, a.jsx)(s.TextInput, {
                        placeholder: x.intl.formatToPlainString(x.t['0tbz6+'], { number: f.A.USER_CODE_LENGTH }),
                        maxLength: f.A.USER_CODE_LENGTH,
                        className: p.textInputContainer,
                        inputClassName: i()(p.textInput, { [p.textInputError]: null != g }),
                        autoComplete: 'off',
                        autoFocus: !0,
                        value: o,
                        onChange: h,
                        error: g
                    })
                ]
            }),
            (0, a.jsx)(s.Button, {
                fullWidth: !0,
                color: s.Button.Colors.BRAND,
                onClick: v,
                submitting: _,
                disabled: o.length !== f.A.USER_CODE_LENGTH,
                children: (0, a.jsx)(s.Text, {
                    variant: 'text-md/medium',
                    children: x.intl.string(x.t['3PatS0'])
                })
            })
        ]
    });
}
