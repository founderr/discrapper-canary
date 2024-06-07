"use strict";
n.r(t), n.d(t, {
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
    className: d,
    autofocus: u
  } = e;
  return (0, a.jsx)(i.TextArea, {
    className: s()(c.paragraphFieldBody, d),
    maxLength: o.MAX_PARAGRAPH_RESPONSE_LENGTH,
    value: null != t ? t : "",
    placeholder: null != n ? n : "",
    onChange: r,
    disabled: l,
    autoFocus: u,
    autosize: !0
  })
}

function u(e) {
  let {
    formField: t
  } = e;
  return (0, a.jsx)(l.QuestionRenderer, {
    title: t.label,
    children: (0, a.jsx)(d, {
      className: c.fieldBackground,
      value: t.response,
      disabled: !0
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
      value: t.response,
      onChange: r,
      autofocus: n
    })
  })
}