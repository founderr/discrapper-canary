n.d(t, {
    BO: function () {
        return d;
    },
    QH: function () {
        return m;
    },
    sp: function () {
        return f;
    }
});
var o = n(200651),
    r = n(192379),
    a = n(120356),
    i = n.n(a),
    l = n(481060),
    s = n(489813),
    c = n(707592),
    u = n(738912);
function d(e) {
    let { disabled: t, field: n, value: a, radioItemClassName: s, radioItemIconClassName: c, onChange: d } = e,
        { choices: m } = n,
        f = r.useMemo(
            () =>
                m.map((e, t) => ({
                    name: e,
                    value: t,
                    radioItemIconClassName: i()(u.multipleChoiceIcon, c)
                })),
            [m, c]
        );
    return (0, o.jsx)(l.RadioGroup, {
        disabled: t,
        options: f,
        value: a,
        onChange: d,
        radioItemClassName: s,
        withTransparentBackground: !0
    });
}
function m(e) {
    let { formField: t } = e,
        n = null != t.response ? t.choices[t.response] : '';
    return (0, o.jsx)(s.hK, {
        title: t.label,
        children: (0, o.jsx)(c.Gi, {
            className: u.fieldBackground,
            value: n,
            disabled: !0
        })
    });
}
function f(e) {
    let { formField: t, onChange: n } = e;
    return (0, o.jsx)(s.hK, {
        title: t.label,
        children: (0, o.jsx)(d, {
            radioItemClassName: u.fieldBackground,
            field: t,
            value: t.response,
            onChange: n
        })
    });
}
