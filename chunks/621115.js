"use strict";
n.r(t), n.d(t, {
  TextInputFieldBody: function() {
    return c
  },
  DisabledTextInputFormField: function() {
    return d
  },
  TextInputFormField: function() {
    return f
  }
});
var i = n("37983");
n("884691");
var r = n("414456"),
  l = n.n(r),
  s = n("77078"),
  o = n("272460"),
  u = n("394294"),
  a = n("847121");

function c(e) {
  let {
    value: t,
    placeholder: n,
    onChange: r,
    disabled: o,
    className: c
  } = e;
  return (0, i.jsx)(s.TextInput, {
    inputClassName: l(a.textInputFieldBodyInput, c),
    maxLength: u.MAX_TEXT_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: n,
    onChange: r,
    disabled: o
  })
}

function d(e) {
  let {
    formField: t
  } = e;
  return (0, i.jsx)(o.QuestionRenderer, {
    title: t.label,
    children: (0, i.jsx)(c, {
      className: a.fieldBackground,
      value: t.response,
      disabled: !0
    })
  })
}

function f(e) {
  let {
    formField: t,
    onChange: n
  } = e;
  return (0, i.jsx)(o.QuestionRenderer, {
    title: t.label,
    children: (0, i.jsx)(c, {
      className: a.fieldBackground,
      onChange: n,
      value: t.response
    })
  })
}