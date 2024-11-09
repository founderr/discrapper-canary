t.d(n, {
    Gi: function () {
        return d;
    },
    YJ: function () {
        return u;
    },
    zY: function () {
        return m;
    }
});
var r = t(200651);
t(192379);
var a = t(120356),
    i = t.n(a),
    o = t(481060),
    s = t(489813),
    l = t(592286),
    c = t(738912);
function d(e) {
    let { value: n, placeholder: t, onChange: a, disabled: s, autofocus: d, className: u } = e;
    return (0, r.jsx)(o.TextInput, {
        inputClassName: i()(c.textInputFieldBodyInput, u),
        maxLength: l.tL,
        value: null != n ? n : '',
        placeholder: t,
        onChange: a,
        disabled: s,
        autoFocus: d
    });
}
function u(e) {
    let { formField: n } = e;
    return (0, r.jsx)(s.hK, {
        title: n.label,
        children: (0, r.jsx)(o.TextArea, {
            className: i()(c.textInputFieldBodyInput, c.fieldBackground),
            value: n.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function m(e) {
    let { formField: n, autofocus: t, onChange: a } = e;
    return (0, r.jsx)(s.hK, {
        title: n.label,
        children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            onChange: a,
            value: n.response,
            autofocus: t
        })
    });
}
