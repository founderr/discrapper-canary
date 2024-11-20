n.d(t, {
    EK: function () {
        return d;
    },
    G0: function () {
        return _;
    },
    QC: function () {
        return m;
    },
    dd: function () {
        return h;
    }
}),
    n(47120);
var r = n(200651);
n(192379);
var i = n(120356),
    o = n.n(i),
    a = n(481060),
    l = n(454585),
    s = n(489813),
    c = n(388032),
    u = n(738912);
function d(e) {
    let { terms: t, channelId: n, className: i } = e;
    return (0, r.jsx)('div', {
        className: o()(u.termsFieldBody, i),
        children: t.map((e, t) =>
            (0, r.jsxs)(
                'div',
                {
                    className: u.termsRow,
                    children: [
                        (0, r.jsx)(a.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(t + 1, '.')
                        }),
                        (0, r.jsx)(a.Text, {
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
function _(e) {
    let { onChange: t, checked: n, disabled: i } = e;
    return (0, r.jsx)(a.Checkbox, {
        size: 20,
        type: a.Checkbox.Types.INVERTED,
        value: n,
        onChange: t,
        disabled: i,
        style: { borderWidth: 2 },
        className: u.checkbox,
        children: (0, r.jsx)(a.Text, {
            variant: 'text-sm/normal',
            children: c.intl.string(c.t['2EXfGB'])
        })
    });
}
function m(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.Ih, {
        icon: a.BookCheckIcon,
        text: c.intl.string(c.t['2xbmoK']),
        meetsRequirement: !!t.response
    });
}
let h = (e) => {
    let { channelId: t, formField: n, onChange: i } = e;
    return (0, r.jsxs)(s.hK, {
        title: c.intl.string(c.t.Q8OFNz),
        children: [
            (0, r.jsx)(d, {
                className: u.fieldBackground,
                terms: n.values,
                channelId: t
            }),
            (0, r.jsx)(_, {
                onChange: i,
                checked: n.response
            })
        ]
    });
};
