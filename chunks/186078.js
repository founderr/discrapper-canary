"use strict";
a.r(t), a.d(t, {
  DisabledMultipleChoiceFormField: function() {
    return f
  },
  MultipleChoiceFieldBody: function() {
    return u
  },
  MultipleChoiceFormField: function() {
    return m
  }
});
var n = a("735250"),
  r = a("470079"),
  s = a("120356"),
  i = a.n(s),
  l = a("481060"),
  o = a("489813"),
  c = a("707592"),
  d = a("303765");

function u(e) {
  let {
    disabled: t,
    field: a,
    value: s,
    radioItemClassName: o,
    radioItemIconClassName: c,
    onChange: u
  } = e, {
    choices: f
  } = a, m = r.useMemo(() => f.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: i()(d.multipleChoiceIcon, c)
  })), [f, c]);
  return (0, n.jsx)(l.RadioGroup, {
    disabled: t,
    options: m,
    value: s,
    onChange: u,
    radioItemClassName: o,
    withTransparentBackground: !0
  })
}

function f(e) {
  let {
    formField: t
  } = e, a = null != t.response ? t.choices[t.response] : "";
  return (0, n.jsx)(o.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(c.TextInputFieldBody, {
      className: d.fieldBackground,
      value: a,
      disabled: !0
    })
  })
}

function m(e) {
  let {
    formField: t,
    onChange: a
  } = e;
  return (0, n.jsx)(o.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(u, {
      radioItemClassName: d.fieldBackground,
      field: t,
      value: t.response,
      onChange: a
    })
  })
}