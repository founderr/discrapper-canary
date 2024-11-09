t.d(n, {
    Q8: function () {
        return d;
    },
    jn: function () {
        return u;
    },
    lX: function () {
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
    let { value: n, placeholder: t, onChange: a, disabled: s, className: d, autofocus: u } = e;
    return (0, r.jsx)(o.TextArea, {
        className: i()(c.paragraphFieldBody, d),
        maxLength: l.RS,
        value: null != n ? n : '',
        placeholder: null != t ? t : '',
        onChange: a,
        disabled: s,
        autoFocus: u,
        autosize: !0
    });
}
function u(e) {
    let { formField: n } = e;
    return (0, r.jsx)(s.hK, {
        title: n.label,
        children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            value: n.response,
            disabled: !0
        })
    });
}
function m(e) {
    let { formField: n, autofocus: t, onChange: a } = e;
    return (0, r.jsx)(s.hK, {
        title: n.label,
        children: (0, r.jsx)(d, {
            className: c.fieldBackground,
            value: n.response,
            onChange: a,
            autofocus: t
        })
    });
}
