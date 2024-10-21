n.d(e, {
    v: function () {
        return E;
    }
}),
    n(47120);
var a = n(200651),
    r = n(192379),
    o = n(120356),
    s = n.n(o),
    i = n(593473),
    l = n(512969),
    c = n(481060),
    u = n(489863),
    d = n(511540),
    f = n(828878),
    p = n(689938),
    _ = n(74939);
function E(t) {
    let { onUserCodeAccepted: e, usePrefilledCode: n } = t,
        [o, E] = r.useState(() => {
            let { user_code: t } = i.parse(window.location.search);
            return n && null != t ? t : '';
        }),
        I = (0, l.TH)(),
        C = r.useCallback(() => {
            (0, u.c$)(I);
        }, [I]),
        { manualSubmit: h, error: A, submitting: T } = (0, d.c)(o, e, C);
    return (0, a.jsxs)('div', {
        className: _.content,
        children: [
            (0, a.jsx)(c.Heading, {
                variant: 'heading-xl/extrabold',
                className: _.text,
                children: p.Z.Messages.ACTIVATE_DEVICE_TITLE
            }),
            (0, a.jsx)(c.Text, {
                tag: 'p',
                variant: 'text-md/medium',
                color: 'header-secondary',
                className: _.text,
                children: p.Z.Messages.ACTIVATE_DEVICE_BODY
            }),
            (0, a.jsx)(c.TextInput, {
                placeholder: p.Z.Messages.ACTIVATE_DEVICE_INPUT_PLACEHOLDER.format({ number: f.A.USER_CODE_LENGTH }),
                maxLength: f.A.USER_CODE_LENGTH,
                className: _.textInputContainer,
                inputClassName: s()(_.textInput, { [_.textInputError]: null != A }),
                autoComplete: 'off',
                autoFocus: !0,
                value: o,
                onChange: E,
                error: A
            }),
            (0, a.jsx)(c.Button, {
                fullWidth: !0,
                color: c.Button.Colors.BRAND,
                onClick: h,
                submitting: T,
                disabled: o.length !== f.A.USER_CODE_LENGTH,
                children: (0, a.jsx)(c.Text, {
                    variant: 'text-md/medium',
                    children: p.Z.Messages.SUBMIT
                })
            })
        ]
    });
}
