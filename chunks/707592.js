"use strict";
a.r(t), a.d(t, {
  DisabledTextInputFormField: function() {
    return u
  },
  TextInputFieldBody: function() {
    return c
  },
  TextInputFormField: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  s = a("481060"),
  l = a("489813"),
  o = a("592286"),
  d = a("303765");

function c(e) {
  let {
    value: t,
    placeholder: a,
    onChange: r,
    disabled: l,
    autofocus: c,
    className: u
  } = e;
  return (0, n.jsx)(s.TextInput, {
    inputClassName: i()(d.textInputFieldBodyInput, u),
    maxLength: o.MAX_TEXT_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: a,
    onChange: r,
    disabled: l,
    autoFocus: c
  })
}

function u(e) {
  let {
    formField: t
  } = e;
  return (0, n.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(s.TextArea, {
      className: i()(d.textInputFieldBodyInput, d.fieldBackground),
      value: t.response,
      disabled: !0,
      autoFocus: !0,
      rows: 2
    })
  })
}

function f(e) {
  let {
    formField: t,
    autofocus: a,
    onChange: r
  } = e;
  return (0, n.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(c, {
      className: d.fieldBackground,
      onChange: r,
      value: t.response,
      autofocus: a
    })
  })
}