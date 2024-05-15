"use strict";
a.r(t), a.d(t, {
  DisabledParagraphFormField: function() {
    return u
  },
  ParagraphFieldBody: function() {
    return d
  },
  ParagraphFormField: function() {
    return f
  }
});
var n = a("735250");
a("470079");
var r = a("120356"),
  i = a.n(r),
  l = a("481060"),
  s = a("489813"),
  o = a("592286"),
  c = a("303765");

function d(e) {
  let {
    value: t,
    placeholder: a,
    onChange: r,
    disabled: s,
    className: d,
    autofocus: u
  } = e;
  return (0, n.jsx)(l.TextArea, {
    className: i()(c.paragraphFieldBody, d),
    maxLength: o.MAX_PARAGRAPH_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: null != a ? a : "",
    onChange: r,
    disabled: s,
    autoFocus: u,
    autosize: !0
  })
}

function u(e) {
  let {
    formField: t
  } = e;
  return (0, n.jsx)(s.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(d, {
      className: c.fieldBackground,
      value: t.response,
      disabled: !0
    })
  })
}

function f(e) {
  let {
    formField: t,
    autofocus: a,
    onChange: r
  } = e;
  return (0, n.jsx)(s.QuestionRenderer, {
    title: t.label,
    children: (0, n.jsx)(d, {
      className: c.fieldBackground,
      value: t.response,
      onChange: r,
      autofocus: a
    })
  })
}