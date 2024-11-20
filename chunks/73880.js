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
    o = n.n(i),
    a = n(481060),
    l = n(489813),
    s = n(592286),
    c = n(738912);
function u(e) {
    let { value: t, placeholder: n, onChange: i, disabled: l, className: u, autofocus: d } = e;
    return (0, r.jsx)(a.TextArea, {
        className: o()(c.paragraphFieldBody, u),
        maxLength: s.RS,
        value: null != t ? t : '',
        placeholder: null != n ? n : '',
        onChange: i,
        disabled: l,
        autoFocus: d,
        autosize: !0
    });
}
function d(e) {
    let { formField: t } = e;
    return (0, r.jsx)(l.hK, {
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
    return (0, r.jsx)(l.hK, {
        title: t.label,
        children: (0, r.jsx)(u, {
            className: c.fieldBackground,
            value: t.response,
            onChange: i,
            autofocus: n
        })
    });
}
