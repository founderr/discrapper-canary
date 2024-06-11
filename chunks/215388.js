"use strict";
t.r(A), t.d(A, {
  default: function() {
    return I
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  s = t("120356"),
  r = t.n(s),
  n = t("153832"),
  i = t("481060"),
  o = t("752305"),
  d = t("893718"),
  u = t("131704"),
  c = t("703558"),
  g = t("981631"),
  f = t("689938"),
  C = t("713695"),
  h = t("709944");
let T = (0, n.v4)(),
  U = (0, u.createChannelRecord)({
    id: "1",
    type: g.ChannelTypes.DM
  });

function p() {
  return new Promise(e => {
    e({
      shouldClear: !1,
      shouldRefocus: !0
    })
  })
}

function m(e) {
  var A;
  let {
    hasError: t,
    maxLength: l,
    text: s
  } = e;
  return (0, a.jsxs)("div", {
    className: r()(h.maxLength, {
      [h.errorOverflow]: t
    }),
    "aria-hidden": "true",
    children: [null !== (A = null == s ? void 0 : s.length) && void 0 !== A ? A : 0, " ", null != l && "/ ".concat(l)]
  })
}

function I(e) {
  var A;
  let {
    "aria-labelledby": t,
    className: s,
    id: n,
    autoFocus: u,
    maxLength: g,
    onChange: h,
    onSubmit: I,
    showCharacterCount: v = !1,
    placeholder: E,
    required: q,
    value: D,
    enableThemedBackground: N = !1,
    parentModalKey: O
  } = e, L = (0, i.useFormContext)(), [R, x] = l.useState(() => (0, o.toRichValue)(D)), P = l.useRef(!0 === u), V = null != t ? t : null == L ? void 0 : L.titleId, S = null !== (A = null == L ? void 0 : L.errorId) && void 0 !== A ? A : T, j = l.useMemo(() => ({
    analyticsName: "simple",
    autocomplete: {
      alwaysUseLayer: !0,
      small: !0
    },
    disableAutoFocus: !0 !== u,
    drafts: {
      type: c.DraftType.ChannelMessage
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
  }), [u]);
  return (0, a.jsxs)(d.default, {
    "aria-describedby": S,
    "aria-labelledby": V,
    innerClassName: r()(s, C.textArea),
    id: n,
    maxCharacterCount: g,
    onChange: function(e, A, t) {
      h(A), x(t)
    },
    placeholder: E,
    required: q,
    channel: U,
    textValue: D,
    richValue: R,
    type: j,
    onBlur: () => {
      P.current = !1
    },
    onFocus: () => {
      P.current = !0
    },
    focused: P.current,
    onSubmit: null != I ? I : p,
    disableThemedBackground: !N,
    parentModalKey: O,
    emojiPickerCloseOnModalOuterClick: !0,
    children: [!0 === v && (0, a.jsx)(m, {
      hasError: null != L.error || null != g && D.length > g,
      text: D,
      maxLength: g
    }), null != g && (0, a.jsx)(i.HiddenVisually, {
      id: T,
      children: f.default.Messages.MAXIMUM_LENGTH.format({
        maxLength: g
      })
    })]
  })
}