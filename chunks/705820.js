"use strict";
n.r(t), n.d(t, {
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
  m = n("646718"),
  _ = n("49111"),
  E = n("782340"),
  I = n("716397");
let p = (0, f.createChannelRecord)({
  id: "1",
  type: _.ChannelTypes.DM
});

function N(e) {
  let {
    sectionTitle: t,
    errors: n,
    onTextChange: a,
    pendingText: f,
    placeholder: _,
    currentText: N,
    className: S,
    innerClassName: P,
    disabled: T = !1,
    disableThemedBackground: A = !1
  } = e, [C, O] = r.useState(null != f ? f : N), [h, M] = r.useState((0, c.toRichValue)(C)), R = r.useRef(!1);
  return r.useEffect(() => {
    R.current = !0
  }, []), r.useEffect(() => {
    if (void 0 === f) {
      let e = (0, c.toRichValue)(N);
      O(N), M(e)
    }
  }, [f, N]), (0, s.jsx)("div", {
    className: l(I.body, S),
    children: (0, s.jsxs)(d.default, {
      title: t,
      errors: n,
      disabled: T,
      children: [(0, s.jsx)(o.default, {
        innerClassName: l(I.textArea, P),
        editorClassName: I.editorTextArea,
        maxCharacterCount: m.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
        onChange: function(e, t, n) {
          t !== C && (O(t), M(n), a(t))
        },
        placeholder: _,
        channel: p,
        textValue: C,
        richValue: h,
        type: u.ChatInputTypes.CUSTOM_GIFT,
        onBlur: () => {
          R.current = !1
        },
        onFocus: () => {
          R.current = !0
        },
        focused: R.current,
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
        children: E.default.Messages.MAXIMUM_LENGTH.format({
          maxLength: m.CUSTOM_GIFT_MESSAGE_MAX_LENGTH
        })
      })]
    })
  })
}