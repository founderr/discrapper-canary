n.d(t, {
    BO: function () {
        return d;
    },
    QH: function () {
        return _;
    },
    sp: function () {
        return m;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    l = n(481060),
    s = n(489813),
    c = n(707592),
    u = n(633656);
function d(e) {
    let { disabled: t, field: n, value: a, radioItemClassName: s, radioItemIconClassName: c, onChange: d } = e,
        { choices: _ } = n,
        m = i.useMemo(
            () =>
                _.map((e, t) => ({
                    name: e,
                    value: t,
                    radioItemIconClassName: o()(u.multipleChoiceIcon, c)
                })),
            [_, c]
        );
    return (0, r.jsx)(l.RadioGroup, {
        disabled: t,
        options: m,
        value: a,
        onChange: d,
        radioItemClassName: s,
        withTransparentBackground: !0
    });
}
function _(e) {
    let { formField: t } = e,
        n = null != t.response ? t.choices[t.response] : '';
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(c.Gi, {
            className: u.fieldBackground,
            value: n,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: t, onChange: n } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            radioItemClassName: u.fieldBackground,
            field: t,
            value: t.response,
            onChange: n
        })
    });
}
