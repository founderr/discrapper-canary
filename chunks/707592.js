"use strict";
i.r(t), i.d(t, {
  DisabledTextInputFormField: function() {
    return d
  },
  TextInputFieldBody: function() {
    return u
  },
  TextInputFormField: function() {
    return f
  }
});
var n = i("735250");
i("470079");
var r = i("120356"),
  s = i.n(r),
  a = i("481060"),
  l = i("489813"),
  o = i("592286"),
  c = i("819104");

function u(e) {
  let {
    value: t,
    placeholder: i,
    onChange: r,
    disabled: l,
    className: u
  } = e;
  return (0, n.jsx)(a.TextInput, {
    inputClassName: s()(c.textInputFieldBodyInput, u),
    maxLength: o.MAX_TEXT_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: i,
    onChange: r,
    disabled: l
  })
}

function d(e) {
  let {
    formField: t
  } = e;
  return (0, n.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(u, {
      className: c.fieldBackground,
      value: t.response,
      disabled: !0
    })
  })
}

function f(e) {
  let {
    formField: t,
    onChange: i
  } = e;
  return (0, n.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(u, {
      className: c.fieldBackground,
      onChange: i,
      value: t.response
    })
  })
}