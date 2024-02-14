"use strict";
n.r(t), n.d(t, {
  CUSTOM_GIFT_MESSAGE_MAX_LENGTH: function() {
    return p
  },
  default: function() {
    return S
  }
}), n("222007");
var s = n("37983"),
  r = n("884691"),
  a = n("414456"),
  l = n.n(a),
  i = n("77078"),
  u = n("850391"),
  c = n("149022"),
  o = n("681060"),
  d = n("570697"),
  f = n("233069"),
  m = n("49111"),
  _ = n("782340"),
  E = n("716397");
let p = 190,
  I = (0, f.createChannelRecord)({
    id: "1",
    type: m.ChannelTypes.DM
  });

function S(e) {
  let {
    sectionTitle: t,
    errors: n,
    onTextChange: a,
    pendingText: f,
    placeholder: m,
    currentText: S,
    className: N,
    innerClassName: P,
    disabled: T = !1,
    disableThemedBackground: C = !1
  } = e, [A, O] = r.useState(null != f ? f : S), [h, R] = r.useState((0, c.toRichValue)(A)), M = r.useRef(!1);
  return r.useEffect(() => {
    M.current = !0
  }, []), r.useEffect(() => {
    if (void 0 === f) {
      let e = (0, c.toRichValue)(S);
      O(S), R(e)
    }
  }, [f, S]), (0, s.jsx)("div", {
    className: l(E.body, N),
    children: (0, s.jsxs)(d.default, {
      title: t,
      errors: n,
      disabled: T,
      children: [(0, s.jsx)(o.default, {
        innerClassName: l(E.textArea, P),
        editorClassName: E.editorTextArea,
        maxCharacterCount: p,
        onChange: function(e, t, n) {
          t !== A && (O(t), R(n), a(t))
        },
        placeholder: m,
        channel: I,
        textValue: A,
        richValue: h,
        type: u.ChatInputTypes.CUSTOM_GIFT,
        onBlur: () => {
          M.current = !1
        },
        onFocus: () => {
          M.current = !0
        },
        focused: M.current,
        onSubmit: function() {
          return new Promise(e => {
            e({
              shouldClear: !1,
              shouldRefocus: !0
            })
          })
        },
        disableThemedBackground: C
      }), (0, s.jsx)(i.HiddenVisually, {
        children: _.default.Messages.MAXIMUM_LENGTH.format({
          maxLength: p
        })
      })]
    })
  })
}