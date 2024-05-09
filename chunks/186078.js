"use strict";
s.r(t), s.d(t, {
  DisabledMultipleChoiceFormField: function() {
    return T
  },
  MultipleChoiceFieldBody: function() {
    return o
  },
  MultipleChoiceFormField: function() {
    return d
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("481060"),
  _ = s("489813"),
  r = s("707592"),
  u = s("303765");

function o(e) {
  let {
    disabled: t,
    field: s,
    value: i,
    radioItemClassName: _,
    radioItemIconClassName: r,
    onChange: o
  } = e, {
    choices: T
  } = s, d = n.useMemo(() => T.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: E()(u.multipleChoiceIcon, r)
  })), [T, r]);
  return (0, a.jsx)(l.RadioGroup, {
    disabled: t,
    options: d,
    value: i,
    onChange: o,
    radioItemClassName: _,
    withTransparentBackground: !0
  })
}

function T(e) {
  let {
    formField: t
  } = e, s = null != t.response ? t.choices[t.response] : "";
  return (0, a.jsx)(_.QuestionRenderer, {
    title: t.label,
    children: (0, a.jsx)(r.TextInputFieldBody, {
      className: u.fieldBackground,
      value: s,
      disabled: !0
    })
  })
}

function d(e) {
  let {
    formField: t,
    onChange: s
  } = e;
  return (0, a.jsx)(_.QuestionRenderer, {
    title: t.label,
    children: (0, a.jsx)(o, {
      radioItemClassName: u.fieldBackground,
      field: t,
      value: t.response,
      onChange: s
    })
  })
}