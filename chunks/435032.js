"use strict";
t.r(A), t.d(A, {
  default: function() {
    return I
  }
}), t("222007");
var a = t("37983"),
  l = t("884691"),
  n = t("414456"),
  s = t.n(n),
  r = t("748820"),
  i = t("77078"),
  o = t("149022"),
  d = t("681060"),
  u = t("233069"),
  c = t("474643"),
  f = t("49111"),
  g = t("782340"),
  C = t("68233"),
  h = t("253469");
let T = (0, r.v4)(),
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

function p(e) {
  var A;
  let {
    hasError: t,
    maxLength: l,
    text: n
  } = e;
  return (0, a.jsxs)("div", {
    className: s(h.maxLength, {
      [h.errorOverflow]: t
    }),
    "aria-hidden": "true",
    children: [null !== (A = null == n ? void 0 : n.length) && void 0 !== A ? A : 0, " ", null != l && "/ ".concat(l)]
  })
}

function I(e) {
  var A;
  let {
    "aria-labelledby": t,
    className: n,
    id: r,
    autoFocus: u,
    maxLength: f,
    onChange: h,
    onSubmit: I,
    showCharacterCount: v = !1,
    placeholder: E,
    required: q,
    value: D,
    enableThemedBackground: N = !1,
    parentModalKey: O
  } = e, L = (0, i.useFormContext)(), [R, x] = l.useState(() => (0, o.toRichValue)(D)), P = l.useRef(!0 === u), V = null != t ? t : null == L ? void 0 : L.titleId, j = null !== (A = null == L ? void 0 : L.errorId) && void 0 !== A ? A : T, M = l.useMemo(() => ({
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
    innerClassName: s(n, C.textArea),
    id: r,
    maxCharacterCount: f,
    onChange: function(e, A, t) {
      h(A), x(t)
    },
    placeholder: E,
    required: q,
    channel: m,
    textValue: D,
    richValue: R,
    type: M,
    onBlur: () => {
      P.current = !1
    },
    onFocus: () => {
      P.current = !0
    },
    focused: P.current,
    onSubmit: null != I ? I : U,
    disableThemedBackground: !N,
    parentModalKey: O,
    emojiPickerCloseOnModalOuterClick: !0,
    children: [!0 === v && (0, a.jsx)(p, {
      hasError: null != L.error || null != f && D.length > f,
      text: D,
      maxLength: f
    }), null != f && (0, a.jsx)(i.HiddenVisually, {
      id: T,
      children: g.default.Messages.MAXIMUM_LENGTH.format({
        maxLength: f
      })
    })]
  })
}