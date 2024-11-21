n.d(t, {
    Gi: function () {
        return u;
    },
    YJ: function () {
        return d;
    },
    zY: function () {
        return _;
    }
});
var r = n(200651);
n(192379);
var i = n(120356),
    a = n.n(i),
    o = n(481060),
    s = n(489813),
    l = n(592286),
    c = n(738912);
function u(e) {
    let { value: t, placeholder: n, onChange: i, disabled: s, autofocus: u, className: d } = e;
    return (0, r.jsx)(o.TextInput, {
        inputClassName: a()(c.textInputFieldBodyInput, d),
        maxLength: l.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: i,
        disabled: s,
        autoFocus: u
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(o.TextArea, {
            className: a()(c.textInputFieldBodyInput, c.fieldBackground),
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function _(e) {
    let { formField: t, autofocus: n, onChange: i } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            className: c.fieldBackground,
            onChange: i,
            value: t.response,
            autofocus: n
        })
    });
}
