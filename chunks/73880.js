n.d(t, {
  Q8: function() {
    return u
  },
  jn: function() {
    return d
  },
  lX: function() {
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
    className: u,
    autofocus: d
  } = e;
  return (0, r.jsx)(s.TextArea, {
    className: a()(c.paragraphFieldBody, u),
    maxLength: l.RS,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: o,
    disabled: i,
    autoFocus: d,
    autosize: !0
  })
}

function d(e) {
  let {
    formField: t
  } = e;
  return (0, r.jsx)(i.hK, {
    title: t.label,
    children: (0, r.jsx)(u, {
      className: c.fieldBackground,
      value: t.response,
      disabled: !0
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
      value: t.response,
      onChange: o,
      autofocus: n
    })
  })
}