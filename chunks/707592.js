n.d(t, {
    Gi: function () {
        return u;
    },
    YJ: function () {
        return d;
    },
    zY: function () {
        return m;
    }
});
var o = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    i = n(481060),
    l = n(489813),
    s = n(592286),
    c = n(738912);
function u(e) {
    let { value: t, placeholder: n, onChange: r, disabled: l, autofocus: u, className: d } = e;
    return (0, o.jsx)(i.TextInput, {
        inputClassName: a()(c.textInputFieldBodyInput, d),
        maxLength: s.tL,
        value: null != t ? t : '',
        placeholder: n,
        onChange: r,
        disabled: l,
        autoFocus: u
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, o.jsx)(l.hK, {
        title: t.label,
        children: (0, o.jsx)(i.TextArea, {
            className: a()(c.textInputFieldBodyInput, c.fieldBackground),
            value: t.response,
            disabled: !0,
            autoFocus: !0,
            rows: 2
        })
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: r } = e;
    return (0, o.jsx)(l.hK, {
        title: t.label,
        children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            onChange: r,
            value: t.response,
            autofocus: n
        })
    });
}
