"use strict";
n.r(t), n.d(t, {
  MultipleChoiceFieldBody: function() {
    return d
  },
  DisabledMultipleChoiceFormField: function() {
    return f
  },
  MultipleChoiceFormField: function() {
    return E
  }
});
var i = n("37983"),
  r = n("884691"),
  l = n("414456"),
  s = n.n(l),
  o = n("77078"),
  u = n("272460"),
  a = n("621115"),
  c = n("847121");

function d(e) {
  let {
    disabled: t,
    field: n,
    value: l,
    radioItemClassName: u,
    radioItemIconClassName: a,
    onChange: d
  } = e, {
    choices: f
  } = n, E = r.useMemo(() => f.map((e, t) => ({
    name: e,
    value: t,
    radioItemIconClassName: s(c.multipleChoiceIcon, a)
  })), [f, a]);
  return (0, i.jsx)(o.RadioGroup, {
    disabled: t,
    options: E,
    value: l,
    onChange: d,
    radioItemClassName: u,
    withTransparentBackground: !0
  })
}

function f(e) {
  let {
    formField: t
  } = e, n = null != t.response ? t.choices[t.response] : "";
  return (0, i.jsx)(u.QuestionRenderer, {
    title: t.label,
    children: (0, i.jsx)(a.TextInputFieldBody, {
      className: c.fieldBackground,
      value: n,
      disabled: !0
    })
  })
}

function E(e) {
  let {
    formField: t,
    onChange: n
  } = e;
  return (0, i.jsx)(u.QuestionRenderer, {
    title: t.label,
    children: (0, i.jsx)(d, {
      radioItemClassName: c.fieldBackground,
      field: t,
      value: t.response,
      onChange: n
    })
  })
}