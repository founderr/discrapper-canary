"use strict";
i.r(t), i.d(t, {
  DisabledMultipleChoiceFormField: function() {
    return f
  },
  MultipleChoiceFieldBody: function() {
    return d
  },
  MultipleChoiceFormField: function() {
    return p
  }
});
var n = i("735250"),
  r = i("470079"),
  s = i("120356"),
  a = i.n(s),
  l = i("481060"),
  o = i("489813"),
  c = i("707592"),
  u = i("819104");

function d(e) {
  let {
    disabled: t,
    field: i,
    value: s,
    radioItemClassName: o,
    radioItemIconClassName: c,
    onChange: d
  } = e, {
    choices: f
  } = i, p = r.useMemo(() => f.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: a()(u.multipleChoiceIcon, c)
  })), [f, c]);
  return (0, n.jsx)(l.RadioGroup, {
    disabled: t,
    options: p,
    value: s,
    onChange: d,
    radioItemClassName: o,
    withTransparentBackground: !0
  })
}

function f(e) {
  let {
    formField: t
  } = e, i = null != t.response ? t.choices[t.response] : "";
  return (0, n.jsx)(o.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(c.TextInputFieldBody, {
      className: u.fieldBackground,
      value: i,
      disabled: !0
    })
  })
}

function p(e) {
  let {
    formField: t,
    onChange: i
  } = e;
  return (0, n.jsx)(o.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(d, {
      radioItemClassName: u.fieldBackground,
      field: t,
      value: t.response,
      onChange: i
    })
  })
}