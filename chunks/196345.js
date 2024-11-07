n.d(t, {
    EK: function () {
        return d;
    },
    G0: function () {
        return m;
    },
    QC: function () {
        return f;
    },
    dd: function () {
        return p;
    }
}),
    n(47120);
var o = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    i = n(481060),
    l = n(454585),
    s = n(489813),
    c = n(388032),
    u = n(633656);
function d(e) {
    let { terms: t, channelId: n, className: r } = e;
    return (0, o.jsx)('div', {
        className: a()(u.termsFieldBody, r),
        children: t.map((e, t) =>
            (0, o.jsxs)(
                'div',
                {
                    className: u.termsRow,
                    children: [
                        (0, o.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(t + 1, '.')
                        }),
                        (0, o.jsx)(i.Text, {
                            variant: 'text-md/normal',
                            className: u.termsRowContent,
                            children: l.Z.parseGuildVerificationFormRule(e, !0, { channelId: n })
                        })
                    ]
                },
                'term-'.concat(t)
            )
        )
    });
}
function m(e) {
    let { onChange: t, checked: n, disabled: r } = e;
    return (0, o.jsx)(i.Checkbox, {
        size: 20,
        type: i.Checkbox.Types.INVERTED,
        value: n,
        onChange: t,
        disabled: r,
        style: { borderWidth: 2 },
        className: u.checkbox,
        children: (0, o.jsx)(i.Text, {
            variant: 'text-sm/normal',
            children: c.intl.string(c.t['2EXfGB'])
        })
    });
}
function f(e) {
    let { formField: t } = e;
    return (0, o.jsx)(s.Ih, {
        icon: i.BookCheckIcon,
        text: c.intl.string(c.t['2xbmoK']),
        meetsRequirement: !!t.response
    });
}
let p = (e) => {
    let { channelId: t, formField: n, onChange: r } = e;
    return (0, o.jsxs)(s.hK, {
        title: c.intl.string(c.t.Q8OFNz),
        children: [
            (0, o.jsx)(d, {
                className: u.fieldBackground,
                terms: n.values,
                channelId: t
            }),
            (0, o.jsx)(m, {
                onChange: r,
                checked: n.response
            })
        ]
    });
};
