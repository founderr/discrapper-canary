n.d(t, {
    Q8: function () {
        return u;
    },
    jn: function () {
        return d;
    },
    lX: function () {
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
    let { value: t, placeholder: n, onChange: i, disabled: s, className: u, autofocus: d } = e;
    return (0, r.jsx)(o.TextArea, {
        className: a()(c.paragraphFieldBody, u),
        maxLength: l.RS,
        value: null != t ? t : '',
        placeholder: null != n ? n : '',
        onChange: i,
        disabled: s,
        autoFocus: d,
        autosize: !0
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            className: c.fieldBackground,
            value: t.response,
            disabled: !0
        })
    });
}
function _(e) {
    let { formField: t, autofocus: n, onChange: i } = e;
    return (0, r.jsx)(s.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            className: c.fieldBackground,
            value: t.response,
            onChange: i,
            autofocus: n
        })
    });
}
