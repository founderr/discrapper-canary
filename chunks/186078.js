"use strict";
n.r(t), n.d(t, {
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
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("481060"),
  o = n("489813"),
  c = n("707592"),
  d = n("303765");

function u(e) {
  let {
    disabled: t,
    field: n,
    value: s,
    radioItemClassName: o,
    radioItemIconClassName: c,
    onChange: u
  } = e, {
    choices: f
  } = n, m = r.useMemo(() => f.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: i()(d.multipleChoiceIcon, c)
  })), [f, c]);
  return (0, a.jsx)(l.RadioGroup, {
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
  } = e, n = null != t.response ? t.choices[t.response] : "";
  return (0, a.jsx)(o.QuestionRenderer, {
    title: t.label,
    children: (0, a.jsx)(c.TextInputFieldBody, {
      className: d.fieldBackground,
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
  return (0, a.jsx)(o.QuestionRenderer, {
    title: t.label,
    children: (0, a.jsx)(u, {
      radioItemClassName: d.fieldBackground,
      field: t,
      value: t.response,
      onChange: n
    })
  })
}