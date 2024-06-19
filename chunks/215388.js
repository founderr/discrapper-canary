t.d(A, {
  Z: function() {
    return v
  }
}), t(47120);
var n = t(735250),
  a = t(470079),
  s = t(120356),
  r = t.n(s),
  l = t(772848),
  o = t(481060),
  i = t(752305),
  d = t(893718),
  c = t(131704),
  u = t(703558),
  C = t(981631),
  g = t(689938),
  T = t(884027),
  U = t(313586);
let m = (0, l.Z)(),
  I = (0, c.kt)({
    id: "1",
    type: C.d4z.DM
  });

function h() {
  return new Promise(e => {
    e({
      shouldClear: !1,
      shouldRefocus: !0
    })
  })
}

function p(e) {
  var A;
  let {
    hasError: t,
    maxLength: a,
    text: s
  } = e;
  return (0, n.jsxs)("div", {
    className: r()(U.maxLength, {
      [U.errorOverflow]: t
    }),
    "aria-hidden": "true",
    children: [null !== (A = null == s ? void 0 : s.length) && void 0 !== A ? A : 0, " ", null != a && "/ ".concat(a)]
  })
}

function v(e) {
  var A;
  let {
    "aria-labelledby": t,
    className: s,
    id: l,
    autoFocus: c,
    maxLength: C,
    onChange: U,
    onSubmit: v,
    showCharacterCount: q = !1,
    placeholder: f,
    required: E,
    value: N,
    enableThemedBackground: O = !1,
    parentModalKey: D
  } = e, R = (0, o.useFormContext)(), [x, L] = a.useState(() => (0, i.JM)(N)), P = a.useRef(!0 === c), V = null != t ? t : null == R ? void 0 : R.titleId, Z = null !== (A = null == R ? void 0 : R.errorId) && void 0 !== A ? A : m, S = a.useMemo(() => ({
    analyticsName: "simple",
    autocomplete: {
      alwaysUseLayer: !0,
      small: !0
    },
    disableAutoFocus: !0 !== c,
    drafts: {
      type: u.d.ChannelMessage
    },
    emojis: {
      button: !0
    },
    permissions: {
      requireSendMessages: !1
    },
    submit: {
      useDisabledStylesOnSubmit: !0,
      disableEnterToSubmit: !0
    }
  }), [c]);
  return (0, n.jsxs)(d.Z, {
    "aria-describedby": Z,
    "aria-labelledby": V,
    innerClassName: r()(s, T.textArea),
    id: l,
    maxCharacterCount: C,
    onChange: function(e, A, t) {
      U(A), L(t)
    },
    placeholder: f,
    required: E,
    channel: I,
    textValue: N,
    richValue: x,
    type: S,
    onBlur: () => {
      P.current = !1
    },
    onFocus: () => {
      P.current = !0
    },
    focused: P.current,
    onSubmit: null != v ? v : h,
    disableThemedBackground: !O,
    parentModalKey: D,
    emojiPickerCloseOnModalOuterClick: !0,
    children: [!0 === q && (0, n.jsx)(p, {
      hasError: null != R.error || null != C && N.length > C,
      text: N,
      maxLength: C
    }), null != C && (0, n.jsx)(o.HiddenVisually, {
      id: m,
      children: g.Z.Messages.MAXIMUM_LENGTH.format({
        maxLength: C
      })
    })]
  })
}