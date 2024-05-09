"use strict";
s.r(t), s.d(t, {
  DisabledTextInputFormField: function() {
    return o
  },
  TextInputFieldBody: function() {
    return u
  },
  TextInputFormField: function() {
    return T
  }
});
var a = s("735250");
s("470079");
var n = s("120356"),
  i = s.n(n),
  E = s("481060"),
  l = s("489813"),
  _ = s("592286"),
  r = s("303765");

function u(e) {
  let {
    value: t,
    placeholder: s,
    onChange: n,
    disabled: l,
    autofocus: u,
    className: o
  } = e;
  return (0, a.jsx)(E.TextInput, {
    inputClassName: i()(r.textInputFieldBodyInput, o),
    maxLength: _.MAX_TEXT_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: s,
    onChange: n,
    disabled: l,
    autoFocus: u
  })
}

function o(e) {
  let {
    formField: t
  } = e;
  return (0, a.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, a.jsx)(E.TextArea, {
      className: i()(r.textInputFieldBodyInput, r.fieldBackground),
      value: t.response,
      disabled: !0,
      autoFocus: !0,
      rows: 2
    })
  })
}

function T(e) {
  let {
    formField: t,
    autofocus: s,
    onChange: n
  } = e;
  return (0, a.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, a.jsx)(u, {
      className: r.fieldBackground,
      onChange: n,
      value: t.response,
      autofocus: s
    })
  })
}