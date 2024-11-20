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
    o = n(120356),
    a = n.n(o),
    l = n(481060),
    s = n(489813),
    c = n(707592),
    u = n(738912);
function d(e) {
    let { disabled: t, field: n, value: o, radioItemClassName: s, radioItemIconClassName: c, onChange: d } = e,
        { choices: _ } = n,
        m = i.useMemo(
            () =>
                _.map((e, t) => ({
                    name: e,
                    value: t,
                    radioItemIconClassName: a()(u.multipleChoiceIcon, c)
                })),
            [_, c]
        );
    return (0, r.jsx)(l.RadioGroup, {
        disabled: t,
        options: m,
        value: o,
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
