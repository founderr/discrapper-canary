"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  l = n("120356"),
  a = n.n(l),
  r = n("481060"),
  u = n("541716"),
  o = n("752305"),
  c = n("893718"),
  d = n("993413"),
  m = n("131704"),
  f = n("474936"),
  p = n("981631"),
  _ = n("689938"),
  S = n("488453");
let I = (0, m.createChannelRecord)({
  id: "1",
  type: p.ChannelTypes.DM
});

function P(e) {
  let {
    sectionTitle: t,
    errors: n,
    onTextChange: l,
    pendingText: m,
    placeholder: p,
    currentText: P,
    className: E,
    innerClassName: T,
    disabled: N = !1,
    disableThemedBackground: v = !1
  } = e, [h, x] = s.useState(null != m ? m : P), [A, C] = s.useState((0, o.toRichValue)(h)), y = s.useRef(!1);
  return s.useEffect(() => {
    y.current = !0
  }, []), s.useEffect(() => {
    if (void 0 === m) {
      let e = (0, o.toRichValue)(P);
      x(P), C(e)
    }
  }, [m, P]), (0, i.jsx)("div", {
    className: a()(S.body, E),
    children: (0, i.jsxs)(d.default, {
      title: t,
      errors: n,
      disabled: N,
      children: [(0, i.jsx)(c.default, {
        innerClassName: a()(S.textArea, T),
        editorClassName: S.editorTextArea,
        maxCharacterCount: f.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
        onChange: function(e, t, n) {
          t !== h && (x(t), C(n), l(t))
        },
        placeholder: p,
        channel: I,
        textValue: h,
        richValue: A,
        type: u.ChatInputTypes.CUSTOM_GIFT,
        onBlur: () => {
          y.current = !1
        },
        onFocus: () => {
          y.current = !0
        },
        focused: y.current,
        onSubmit: function() {
          return new Promise(e => {
            e({
              shouldClear: !1,
              shouldRefocus: !0
            })
          })
        },
        disableThemedBackground: v
      }), (0, i.jsx)(r.HiddenVisually, {
        children: _.default.Messages.MAXIMUM_LENGTH.format({
          maxLength: f.CUSTOM_GIFT_MESSAGE_MAX_LENGTH
        })
      })]
    })
  })
}