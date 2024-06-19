n.d(t, {
  Z: function() {
    return p
  }
}), n(47120);
var r = n(735250),
  s = n(470079),
  i = n(120356),
  o = n.n(i),
  a = n(481060),
  l = n(153124),
  c = n(742458),
  u = n(766650),
  d = n(489686),
  h = n(838009);

function p(e) {
  let {
    alpha2: t,
    countryCode: n,
    forceMode: i,
    label: p,
    error: C,
    className: f,
    required: m,
    value: x,
    setRef: N,
    placeholder: g,
    autoFocus: v,
    maxLength: y,
    spellCheck: j,
    autoComplete: A,
    autoCapitalize: E,
    autoCorrect: T,
    onChange: I,
    inputClassName: _
  } = e, w = (0, l.Dt)(), [O, R] = s.useState(!1), Z = (0, c.o9)(i, x);
  return (0, r.jsx)(a.FormItem, {
    title: p,
    error: C,
    className: f,
    required: m,
    tag: "label",
    htmlFor: w,
    children: (0, r.jsxs)("div", {
      className: o()(h.input, d.input, _, {
        [h.error]: null != C,
        [h.focused]: O
      }),
      children: [(0, r.jsx)(u.Z, {
        show: Z,
        alpha2: t,
        countryCode: n
      }), (0, r.jsx)(a.TextInput, {
        id: w,
        name: "email",
        type: i === c.Nz.EMAIL ? "email" : "text",
        value: x,
        inputRef: N,
        placeholder: g,
        "aria-label": p,
        required: m,
        onChange: function(e) {
          let t = (0, c.o9)(i, e) ? n : "";
          I(e, t)
        },
        autoComplete: A,
        autoCapitalize: E,
        autoCorrect: T,
        autoFocus: v,
        maxLength: y,
        spellCheck: j,
        className: d.inputWrapper,
        inputClassName: d.inputField,
        onFocus: () => R(!0),
        onBlur: () => R(!1)
      })]
    })
  })
}