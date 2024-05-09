"use strict";
s.r(t), s.d(t, {
  DisabledParagraphFormField: function() {
    return o
  },
  ParagraphFieldBody: function() {
    return u
  },
  ParagraphFormField: function() {
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
    className: u,
    autofocus: o
  } = e;
  return (0, a.jsx)(E.TextArea, {
    className: i()(r.paragraphFieldBody, u),
    maxLength: _.MAX_PARAGRAPH_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: null != s ? s : "",
    onChange: n,
    disabled: l,
    autoFocus: o,
    autosize: !0
  })
}

function o(e) {
  let {
    formField: t
  } = e;
  return (0, a.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, a.jsx)(u, {
      className: r.fieldBackground,
      value: t.response,
      disabled: !0
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
      value: t.response,
      onChange: n,
      autofocus: s
    })
  })
}