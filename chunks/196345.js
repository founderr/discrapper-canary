t.d(n, {
    EK: function () {
        return u;
    },
    G0: function () {
        return m;
    },
    QC: function () {
        return f;
    },
    dd: function () {
        return h;
    }
}),
    t(47120);
var r = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    o = t(481060),
    s = t(454585),
    l = t(489813),
    c = t(388032),
    d = t(738912);
function u(e) {
    let { terms: n, channelId: t, className: a } = e;
    return (0, r.jsx)('div', {
        className: i()(d.termsFieldBody, a),
        children: n.map((e, n) =>
            (0, r.jsxs)(
                'div',
                {
                    className: d.termsRow,
                    children: [
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            color: 'text-muted',
                            children: ''.concat(n + 1, '.')
                        }),
                        (0, r.jsx)(o.Text, {
                            variant: 'text-md/normal',
                            className: d.termsRowContent,
                            children: s.Z.parseGuildVerificationFormRule(e, !0, { channelId: t })
                        })
                    ]
                },
                'term-'.concat(n)
            )
        )
    });
}
function m(e) {
    let { onChange: n, checked: t, disabled: a } = e;
    return (0, r.jsx)(o.Checkbox, {
        size: 20,
        type: o.Checkbox.Types.INVERTED,
        value: t,
        onChange: n,
        disabled: a,
        style: { borderWidth: 2 },
        className: d.checkbox,
        children: (0, r.jsx)(o.Text, {
            variant: 'text-sm/normal',
            children: c.intl.string(c.t['2EXfGB'])
        })
    });
}
function f(e) {
    let { formField: n } = e;
    return (0, r.jsx)(l.Ih, {
        icon: o.BookCheckIcon,
        text: c.intl.string(c.t['2xbmoK']),
        meetsRequirement: !!n.response
    });
}
let h = (e) => {
    let { channelId: n, formField: t, onChange: a } = e;
    return (0, r.jsxs)(l.hK, {
        title: c.intl.string(c.t.Q8OFNz),
        children: [
            (0, r.jsx)(u, {
                className: d.fieldBackground,
                terms: t.values,
                channelId: n
            }),
            (0, r.jsx)(m, {
                onChange: a,
                checked: t.response
            })
        ]
    });
};
