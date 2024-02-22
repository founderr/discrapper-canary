"use strict";
n.r(t), n.d(t, {
  CUSTOM_GIFT_MESSAGE_MAX_LENGTH: function() {
    return I
  },
  default: function() {
    return N
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
let I = 190,
  p = (0, f.createChannelRecord)({
    id: "1",
    type: m.ChannelTypes.DM
  });

function N(e) {
  let {
    sectionTitle: t,
    errors: n,
    onTextChange: a,
    pendingText: f,
    placeholder: m,
    currentText: N,
    className: S,
    innerClassName: P,
    disabled: T = !1,
    disableThemedBackground: A = !1
  } = e, [C, O] = r.useState(null != f ? f : N), [h, R] = r.useState((0, c.toRichValue)(C)), M = r.useRef(!1);
  return r.useEffect(() => {
    M.current = !0
  }, []), r.useEffect(() => {
    if (void 0 === f) {
      let e = (0, c.toRichValue)(N);
      O(N), R(e)
    }
  }, [f, N]), (0, s.jsx)("div", {
    className: l(E.body, S),
    children: (0, s.jsxs)(d.default, {
      title: t,
      errors: n,
      disabled: T,
      children: [(0, s.jsx)(o.default, {
        innerClassName: l(E.textArea, P),
        editorClassName: E.editorTextArea,
        maxCharacterCount: I,
        onChange: function(e, t, n) {
          t !== C && (O(t), R(n), a(t))
        },
        placeholder: m,
        channel: p,
        textValue: C,
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
        disableThemedBackground: A
      }), (0, s.jsx)(i.HiddenVisually, {
        children: _.default.Messages.MAXIMUM_LENGTH.format({
          maxLength: I
        })
      })]
    })
  })
}