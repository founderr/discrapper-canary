n.d(t, {
  Gi: function() {
    return u
  },
  YJ: function() {
    return d
  },
  zY: function() {
    return h
  }
});
var r = n(735250);
n(470079);
var o = n(120356),
  a = n.n(o),
  s = n(481060),
  i = n(489813),
  l = n(592286),
  c = n(953136);

function u(e) {
  let {
    value: t,
    placeholder: n,
    onChange: o,
    disabled: i,
    autofocus: u,
    className: d
  } = e;
  return (0, r.jsx)(s.TextInput, {
    inputClassName: a()(c.textInputFieldBodyInput, d),
    maxLength: l.tL,
    value: null != t ? t : "",
    placeholder: n,
    onChange: o,
    disabled: i,
    autoFocus: u
  })
}

function d(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(i.hK, {
    title: t.label,
    children: (0, r.jsx)(s.TextArea, {
      className: a()(c.textInputFieldBodyInput, c.fieldBackground),
      value: t.response,
      disabled: !0,
      autoFocus: !0,
      rows: 2
    })
  })
}

function h(e) {
  let {
    formField: t,
    autofocus: n,
    onChange: o
  } = e;
  return (0, r.jsx)(i.hK, {
    title: t.label,
    children: (0, r.jsx)(u, {
      className: c.fieldBackground,
      onChange: o,
      value: t.response,
      autofocus: n
    })
  })
}