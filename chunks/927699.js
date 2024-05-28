"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("47120");
var i = n("735250"),
  l = n("470079"),
  s = n("120356"),
  a = n.n(s),
  r = n("481060"),
  u = n("541716"),
  o = n("752305"),
  c = n("893718"),
  d = n("993413"),
  m = n("131704"),
  p = n("474936"),
  f = n("981631"),
  S = n("689938"),
  I = n("905179");
let _ = (0, m.createChannelRecord)({
  id: "1",
  type: f.ChannelTypes.DM
});

function P(e) {
  let {
    sectionTitle: t,
    errors: n,
    onTextChange: s,
    pendingText: m,
    placeholder: f,
    currentText: P,
    className: E,
    innerClassName: T,
    disabled: v = !1,
    disableThemedBackground: h = !1
  } = e, [N, x] = l.useState(null != m ? m : P), [A, y] = l.useState((0, o.toRichValue)(N)), C = l.useRef(!1);
  return l.useEffect(() => {
    C.current = !0
  }, []), l.useEffect(() => {
    if (void 0 === m) {
      let e = (0, o.toRichValue)(P);
      x(P), y(e)
    }
  }, [m, P]), (0, i.jsx)("div", {
    className: a()(I.body, E),
    children: (0, i.jsxs)(d.default, {
      title: t,
      errors: n,
      disabled: v,
      children: [(0, i.jsx)(c.default, {
        innerClassName: a()(I.textArea, T),
        editorClassName: I.editorTextArea,
        maxCharacterCount: p.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
        onChange: function(e, t, n) {
          t !== N && (x(t), y(n), s(t))
        },
        placeholder: f,
        channel: _,
        textValue: N,
        richValue: A,
        type: u.ChatInputTypes.CUSTOM_GIFT,
        onBlur: () => {
          C.current = !1
        },
        onFocus: () => {
          C.current = !0
        },
        focused: C.current,
        onSubmit: function() {
          return new Promise(e => {
            e({
              shouldClear: !1,
              shouldRefocus: !0
            })
          })
        },
        disableThemedBackground: h
      }), (0, i.jsx)(r.HiddenVisually, {
        children: S.default.Messages.MAXIMUM_LENGTH.format({
          maxLength: p.CUSTOM_GIFT_MESSAGE_MAX_LENGTH
        })
      })]
    })
  })
}