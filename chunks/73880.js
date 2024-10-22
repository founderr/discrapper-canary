n.d(t, {
    Q8: function () {
        return u;
    },
    jn: function () {
        return d;
    },
    lX: function () {
        return m;
    }
});
var o = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    i = n(481060),
    s = n(489813),
    l = n(592286),
    c = n(738912);
function u(e) {
    let { value: t, placeholder: n, onChange: r, disabled: s, className: u, autofocus: d } = e;
    return (0, o.jsx)(i.TextArea, {
        className: a()(c.paragraphFieldBody, u),
        maxLength: l.RS,
        value: null != t ? t : '',
        placeholder: null != n ? n : '',
        onChange: r,
        disabled: s,
        autoFocus: d,
        autosize: !0
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, o.jsx)(s.hK, {
        title: t.label,
        children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: t, autofocus: n, onChange: r } = e;
    return (0, o.jsx)(s.hK, {
        title: t.label,
        children: (0, o.jsx)(u, {
            className: c.fieldBackground,
            value: t.response,
            onChange: r,
            autofocus: n
        })
    });
}
