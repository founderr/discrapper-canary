"use strict";
i.r(t), i.d(t, {
  DisabledTextInputFormField: function() {
    return d
  },
  TextInputFieldBody: function() {
    return c
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
  u = i("819104");

function c(e) {
  let {
    value: t,
    placeholder: i,
    onChange: r,
    disabled: l,
    autofocus: c,
    className: d
  } = e;
  return (0, n.jsx)(a.TextInput, {
    inputClassName: s()(u.textInputFieldBodyInput, d),
    maxLength: o.MAX_TEXT_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: i,
    onChange: r,
    disabled: l,
    autoFocus: c
  })
}

function d(e) {
  let {
    formField: t
  } = e;
  return (0, n.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(c, {
      className: u.fieldBackground,
      value: t.response,
      disabled: !0
    })
  })
}

function f(e) {
  let {
    formField: t,
    autofocus: i,
    onChange: r
  } = e;
  return (0, n.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(c, {
      className: u.fieldBackground,
      onChange: r,
      value: t.response,
      autofocus: i
    })
  })
}