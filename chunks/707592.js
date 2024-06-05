"use strict";
n.r(t), n.d(t, {
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
var a = n("735250");
n("470079");
var r = n("120356"),
  s = n.n(r),
  i = n("481060"),
  l = n("489813"),
  o = n("592286"),
  c = n("303765");

function d(e) {
  let {
    value: t,
    placeholder: n,
    onChange: r,
    disabled: l,
    autofocus: d,
    className: u
  } = e;
  return (0, a.jsx)(i.TextInput, {
    inputClassName: s()(c.textInputFieldBodyInput, u),
    maxLength: o.MAX_TEXT_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: n,
    onChange: r,
    disabled: l,
    autoFocus: d
  })
}

function u(e) {
  let {
    formField: t
  } = e;
  return (0, a.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, a.jsx)(i.TextArea, {
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
    autofocus: n,
    onChange: r
  } = e;
  return (0, a.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, a.jsx)(d, {
      className: c.fieldBackground,
      onChange: r,
      value: t.response,
      autofocus: n
    })
  })
}