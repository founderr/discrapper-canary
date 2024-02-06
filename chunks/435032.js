"use strict";
t.r(A), t.d(A, {
  default: function() {
    return p
  }
}), t("222007");
var a = t("37983"),
  n = t("884691"),
  l = t("414456"),
  r = t.n(l),
  s = t("748820"),
  o = t("77078"),
  i = t("149022"),
  d = t("681060"),
  u = t("233069"),
  c = t("474643"),
  f = t("49111"),
  C = t("782340"),
  g = t("68233"),
  T = t("253469");
let h = (0, s.v4)(),
  m = (0, u.createChannelRecord)({
    id: "1",
    type: f.ChannelTypes.DM
  });

function U() {
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
    maxLength: n,
    text: l
  } = e;
  return (0, a.jsxs)("div", {
    className: r(T.maxLength, {
      [T.errorOverflow]: t
    }),
    "aria-hidden": "true",
    children: [null !== (A = null == l ? void 0 : l.length) && void 0 !== A ? A : 0, " ", null != n && "/ ".concat(n)]
  })
}

function p(e) {
  var A;
  let {
    "aria-labelledby": t,
    className: l,
    id: s,
    autoFocus: u,
    maxLength: f,
    onChange: T,
    onSubmit: p,
    showCharacterCount: v = !1,
    placeholder: E,
    required: q,
    value: N,
    enableThemedBackground: O = !1,
    parentModalKey: x
  } = e, R = (0, o.useFormContext)(), [L, D] = n.useState(() => (0, i.toRichValue)(N)), P = n.useRef(!0 === u), V = null != t ? t : null == R ? void 0 : R.titleId, j = null !== (A = null == R ? void 0 : R.errorId) && void 0 !== A ? A : h, M = n.useMemo(() => ({
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
    innerClassName: r(l, g.textArea),
    id: s,
    maxCharacterCount: f,
    onChange: function(e, A, t) {
      T(A), D(t)
    },
    placeholder: E,
    required: q,
    channel: m,
    textValue: N,
    richValue: L,
    type: M,
    onBlur: () => {
      P.current = !1
    },
    onFocus: () => {
      P.current = !0
    },
    focused: P.current,
    onSubmit: null != p ? p : U,
    disableThemedBackground: !O,
    parentModalKey: x,
    emojiPickerCloseOnModalOuterClick: !0,
    children: [!0 === v && (0, a.jsx)(I, {
      hasError: null != R.error || null != f && N.length > f,
      text: N,
      maxLength: f
    }), null != f && (0, a.jsx)(o.HiddenVisually, {
      id: h,
      children: C.default.Messages.MAXIMUM_LENGTH.format({
        maxLength: f
      })
    })]
  })
}