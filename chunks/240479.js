n.d(e, {
    v: function () {
        return C;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    o = n(120356),
    s = n.n(o),
    c = n(593473),
    i = n(512969),
    l = n(481060),
    u = n(489863),
    d = n(511540),
    f = n(828878),
    _ = n(689938),
    p = n(74939);
function C(t) {
    let { onUserCodeAccepted: e, usePrefilledCode: n } = t,
        [o, C] = r.useState(() => {
            let { user_code: t } = c.parse(window.location.search);
            return n && null != t ? t : '';
        }),
        E = (0, i.TH)(),
        I = r.useCallback(() => {
            (0, u.c$)(E);
        }, [E]),
        { manualSubmit: A, error: h, submitting: T } = (0, d.c)(o, e, I);
    return (0, a.jsxs)('div', {
        className: p.content,
        children: [
            (0, a.jsxs)('div', {
                className: p.innerContent,
                children: [
                    (0, a.jsx)(l.Heading, {
                        variant: 'heading-xl/extrabold',
                        className: p.text,
                        children: _.Z.Messages.ACTIVATE_DEVICE_TITLE
                    }),
                    (0, a.jsx)(l.Text, {
                        variant: 'text-md/medium',
                        color: 'header-secondary',
                        className: p.text,
                        children: _.Z.Messages.ACTIVATE_DEVICE_BODY
                    }),
                    (0, a.jsx)(l.TextInput, {
                        placeholder: _.Z.Messages.ACTIVATE_DEVICE_INPUT_PLACEHOLDER.format({ number: f.A.USER_CODE_LENGTH }),
                        maxLength: f.A.USER_CODE_LENGTH,
                        className: p.textInputContainer,
                        inputClassName: s()(p.textInput, { [p.textInputError]: null != h }),
                        autoComplete: 'off',
                        autoFocus: !0,
                        value: o,
                        onChange: C,
                        error: h
                    })
                ]
            }),
            (0, a.jsx)(l.Button, {
                fullWidth: !0,
                color: l.Button.Colors.BRAND,
                onClick: A,
                submitting: T,
                disabled: o.length !== f.A.USER_CODE_LENGTH,
                children: (0, a.jsx)(l.Text, {
                    variant: 'text-md/medium',
                    children: _.Z.Messages.CONTINUE
                })
            })
        ]
    });
}
