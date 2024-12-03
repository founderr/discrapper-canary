t.d(n, {
    EK: function () {
        return d;
    },
    G0: function () {
        return f;
    },
    QC: function () {
        return m;
    },
    dd: function () {
        return h;
    }
}),
    t(47120);
var o = t(200651);
t(192379);
var r = t(120356),
    i = t.n(r),
    a = t(481060),
    s = t(454585),
    l = t(489813),
    c = t(388032),
    u = t(119866);
function d(e) {
    let { terms: n, channelId: t, className: r } = e;
    return (0, o.jsx)('div', {
        className: i()(u.termsFieldBody, r),
        children: n.map((e, n) =>
            (0, o.jsxs)(
                'div',
                {
                    className: u.termsRow,
                    children: [
                        (0, o.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(n + 1, '.')
                        }),
                        (0, o.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            className: u.termsRowContent,
                            children: s.Z.parseGuildVerificationFormRule(e, !0, { channelId: t })
                        })
                    ]
                },
                'term-'.concat(n)
            )
        )
    });
}
function f(e) {
    let { onChange: n, checked: t, disabled: r } = e;
    return (0, o.jsx)(a.Checkbox, {
        size: 20,
        type: a.Checkbox.Types.INVERTED,
        value: t,
        onChange: n,
        disabled: r,
        style: { borderWidth: 2 },
        className: u.checkbox,
        children: (0, o.jsx)(a.Text, {
            variant: 'text-sm/normal',
            children: c.intl.string(c.t['2EXfGB'])
        })
    });
}
function m(e) {
    let { formField: n } = e;
    return (0, o.jsx)(l.Ih, {
        icon: a.BookCheckIcon,
        text: c.intl.string(c.t['2xbmoK']),
        meetsRequirement: !!n.response
    });
}
let h = (e) => {
    let { channelId: n, formField: t, onChange: r } = e;
    return (0, o.jsxs)(l.hK, {
        title: c.intl.string(c.t.Q8OFNz),
        children: [
            (0, o.jsx)(d, {
                className: u.fieldBackground,
                terms: t.values,
                channelId: n
            }),
            (0, o.jsx)(f, {
                onChange: r,
                checked: t.response
            })
        ]
    });
};
