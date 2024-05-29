"use strict";
a.r(t), a.d(t, {
  DisabledTextInputFormField: function() {
    return u
  },
  TextInputFieldBody: function() {
    return d
  },
  TextInputFormField: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  s = a.n(r),
  i = a("481060"),
  l = a("489813"),
  o = a("592286"),
  c = a("303765");

function d(e) {
  let {
    value: t,
    placeholder: a,
    onChange: r,
    disabled: l,
    autofocus: d,
    className: u
  } = e;
  return (0, n.jsx)(i.TextInput, {
    inputClassName: s()(c.textInputFieldBodyInput, u),
    maxLength: o.MAX_TEXT_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: a,
    onChange: r,
    disabled: l,
    autoFocus: d
  })
}

function u(e) {
  let {
    formField: t
  } = e;
  return (0, n.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(i.TextArea, {
      className: s()(c.textInputFieldBodyInput, c.fieldBackground),
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
    children: (0, n.jsx)(d, {
      className: c.fieldBackground,
      onChange: r,
      value: t.response,
      autofocus: a
    })
  })
}