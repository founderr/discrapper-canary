"use strict";
t.r(A), t.d(A, {
  default: function() {
    return v
  }
}), t("47120");
var a = t("735250"),
  l = t("470079"),
  s = t("120356"),
  n = t.n(s),
  r = t("153832"),
  o = t("481060"),
  i = t("752305"),
  d = t("893718"),
  u = t("131704"),
  c = t("703558"),
  C = t("981631"),
  f = t("689938"),
  g = t("713695"),
  T = t("709944");
let U = (0, r.v4)(),
  h = (0, u.createChannelRecord)({
    id: "1",
    type: C.ChannelTypes.DM
  });

function m() {
  return new Promise(e => {
    e({
      shouldClear: !1,
      shouldRefocus: !0
    })
  })
}

function I(e) {
  var A;
  let {
    hasError: t,
    maxLength: l,
    text: s
  } = e;
  return (0, a.jsxs)("div", {
    className: n()(T.maxLength, {
      [T.errorOverflow]: t
    }),
    "aria-hidden": "true",
    children: [null !== (A = null == s ? void 0 : s.length) && void 0 !== A ? A : 0, " ", null != l && "/ ".concat(l)]
  })
}

function v(e) {
  var A;
  let {
    "aria-labelledby": t,
    className: s,
    id: r,
    autoFocus: u,
    maxLength: C,
    onChange: T,
    onSubmit: v,
    showCharacterCount: p = !1,
    placeholder: E,
    required: q,
    value: N,
    enableThemedBackground: R = !1,
    parentModalKey: L
  } = e, O = (0, o.useFormContext)(), [x, D] = l.useState(() => (0, i.toRichValue)(N)), P = l.useRef(!0 === u), V = null != t ? t : null == O ? void 0 : O.titleId, j = null !== (A = null == O ? void 0 : O.errorId) && void 0 !== A ? A : U, S = l.useMemo(() => ({
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
    "aria-describedby": j,
    "aria-labelledby": V,
    innerClassName: n()(s, g.textArea),
    id: r,
    maxCharacterCount: C,
    onChange: function(e, A, t) {
      T(A), D(t)
    },
    placeholder: E,
    required: q,
    channel: h,
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
    onSubmit: null != v ? v : m,
    disableThemedBackground: !R,
    parentModalKey: L,
    emojiPickerCloseOnModalOuterClick: !0,
    children: [!0 === p && (0, a.jsx)(I, {
      hasError: null != O.error || null != C && N.length > C,
      text: N,
      maxLength: C
    }), null != C && (0, a.jsx)(o.HiddenVisually, {
      id: U,
      children: f.default.Messages.MAXIMUM_LENGTH.format({
        maxLength: C
      })
    })]
  })
}