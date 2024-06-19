n.d(t, {
  v: function() {
    return _
  }
}), n(47120);
var a = n(735250),
  r = n(470079),
  o = n(120356),
  s = n.n(o),
  l = n(593473),
  u = n(266067),
  i = n(481060),
  c = n(489863),
  d = n(511540),
  E = n(828878),
  I = n(689938),
  C = n(865522);

function _(e) {
  let {
    onUserCodeAccepted: t,
    usePrefilledCode: n
  } = e, [o, _] = r.useState(() => {
    let {
      user_code: e
    } = l.parse(window.location.search);
    return n && null != e ? e : ""
  }), A = (0, u.TH)(), T = r.useCallback(() => {
    (0, c.c$)(A)
  }, [A]), {
    manualSubmit: f,
    error: h,
    submitting: p
  } = (0, d.c)(o, t, T);
  return (0, a.jsxs)("div", {
    className: C.content,
    children: [(0, a.jsx)(i.Heading, {
      variant: "heading-xl/extrabold",
      className: C.text,
      children: I.Z.Messages.ACTIVATE_DEVICE_TITLE
    }), (0, a.jsx)(i.Text, {
      tag: "p",
      variant: "text-md/medium",
      color: "header-secondary",
      className: C.text,
      children: I.Z.Messages.ACTIVATE_DEVICE_BODY
    }), (0, a.jsx)(i.TextInput, {
      placeholder: I.Z.Messages.ACTIVATE_DEVICE_INPUT_PLACEHOLDER.format({
        number: E.A.USER_CODE_LENGTH
      }),
      maxLength: E.A.USER_CODE_LENGTH,
      className: C.textInputContainer,
      inputClassName: s()(C.textInput, {
        [C.textInputError]: null != h
      }),
      autoComplete: "off",
      autoFocus: !0,
      value: o,
      onChange: _,
      error: h
    }), (0, a.jsx)(i.Button, {
      fullWidth: !0,
      color: i.Button.Colors.BRAND,
      onClick: f,
      submitting: p,
      disabled: o.length !== E.A.USER_CODE_LENGTH,
      children: (0, a.jsx)(i.Text, {
        variant: "text-md/medium",
        children: I.Z.Messages.SUBMIT
      })
    })]
  })
}