n.d(t, {
  BO: function() {
    return d
  },
  QH: function() {
    return h
  },
  sp: function() {
    return m
  }
});
var r = n(735250),
  o = n(470079),
  a = n(120356),
  s = n.n(a),
  i = n(481060),
  l = n(489813),
  c = n(707592),
  u = n(953136);

function d(e) {
  let {
    disabled: t,
    field: n,
    value: a,
    radioItemClassName: l,
    radioItemIconClassName: c,
    onChange: d
  } = e, {
    choices: h
  } = n, m = o.useMemo(() => h.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: s()(u.multipleChoiceIcon, c)
  })), [h, c]);
  return (0, r.jsx)(i.RadioGroup, {
    disabled: t,
    options: m,
    value: a,
    onChange: d,
    radioItemClassName: l,
    withTransparentBackground: !0
  })
}

function h(e) {
  let {
    formField: t
  } = e, n = null != t.response ? t.choices[t.response] : "";
  return (0, r.jsx)(l.hK, {
    title: t.label,
    children: (0, r.jsx)(c.Gi, {
      className: u.fieldBackground,
      value: n,
      disabled: !0
    })
  })
}

function m(e) {
  let {
    formField: t,
    onChange: n
  } = e;
  return (0, r.jsx)(l.hK, {
    title: t.label,
    children: (0, r.jsx)(d, {
      radioItemClassName: u.fieldBackground,
      field: t,
      value: t.response,
      onChange: n
    })
  })
}