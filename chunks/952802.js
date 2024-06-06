"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("47120");
var s = n("735250"),
  r = n("470079"),
  a = n("120356"),
  o = n.n(a),
  i = n("481060"),
  l = n("153124"),
  u = n("742458"),
  c = n("766650"),
  d = n("699359"),
  h = n("12349");

function f(e) {
  let {
    alpha2: t,
    countryCode: n,
    forceMode: a,
    label: f,
    error: p,
    className: C,
    required: m,
    value: x,
    setRef: N,
    placeholder: g,
    autoFocus: v,
    maxLength: y,
    spellCheck: A,
    autoComplete: j,
    autoCapitalize: E,
    autoCorrect: S,
    onChange: T,
    inputClassName: I
  } = e, w = (0, l.useUID)(), [O, _] = r.useState(!1), R = (0, u.shouldShowCountryCodeSelector)(a, x);
  return (0, s.jsx)(i.FormItem, {
    title: f,
    error: p,
    className: C,
    required: m,
    tag: "label",
    htmlFor: w,
    children: (0, s.jsxs)("div", {
      className: o()(h.input, d.input, I, {
        [h.error]: null != p,
        [h.focused]: O
      }),
      children: [(0, s.jsx)(c.default, {
        show: R,
        alpha2: t,
        countryCode: n
      }), (0, s.jsx)(i.TextInput, {
        id: w,
        name: "email",
        type: a === u.PhoneOrEmailSelectorForceMode.EMAIL ? "email" : "text",
        value: x,
        inputRef: N,
        placeholder: g,
        "aria-label": f,
        required: m,
        onChange: function(e) {
          let t = (0, u.shouldShowCountryCodeSelector)(a, e) ? n : "";
          T(e, t)
        },
        autoComplete: j,
        autoCapitalize: E,
        autoCorrect: S,
        autoFocus: v,
        maxLength: y,
        spellCheck: A,
        className: d.inputWrapper,
        inputClassName: d.inputField,
        onFocus: () => _(!0),
        onBlur: () => _(!1)
      })]
    })
  })
}