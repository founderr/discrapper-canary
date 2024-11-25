n.d(t, {
    BO: function () {
        return d;
    },
    QH: function () {
        return _;
    },
    sp: function () {
        return h;
    }
});
var r = n(200651),
    i = n(192379),
    a = n(120356),
    o = n.n(a),
    s = n(481060),
    l = n(489813),
    c = n(707592),
    u = n(119866);
function d(e) {
    let { disabled: t, field: n, value: a, radioItemClassName: l, radioItemIconClassName: c, onChange: d } = e,
        { choices: _ } = n,
        h = i.useMemo(
            () =>
                _.map((e, t) => ({
                    name: e,
                    value: t,
                    radioItemIconClassName: o()(u.multipleChoiceIcon, c)
                })),
            [_, c]
        );
    return (0, r.jsx)(s.RadioGroup, {
        disabled: t,
        options: h,
        value: a,
        onChange: d,
        radioItemClassName: l,
        withTransparentBackground: !0
    });
}
function _(e) {
    let { formField: t } = e,
        n = null != t.response ? t.choices[t.response] : '';
    return (0, r.jsx)(l.hK, {
        title: t.label,
        children: (0, r.jsx)(c.Gi, {
            className: u.fieldBackground,
            value: n,
            disabled: !0
        })
    });
}
function h(e) {
    let { formField: t, onChange: n } = e;
    return (0, r.jsx)(l.hK, {
        title: t.label,
        children: (0, r.jsx)(d, {
            radioItemClassName: u.fieldBackground,
            field: t,
            value: t.response,
            onChange: n
        })
    });
}
