"use strict";
n.r(t), n.d(t, {
  default: function() {
    return P
  }
}), n("47120");
var i = n("735250"),
  s = n("470079"),
  l = n("120356"),
  r = n.n(l),
  a = n("481060"),
  u = n("541716"),
  o = n("752305"),
  c = n("893718"),
  d = n("993413"),
  m = n("131704"),
  f = n("474936"),
  p = n("981631"),
  I = n("689938"),
  S = n("746161");
let _ = (0, m.createChannelRecord)({
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
  } = e, [h, x] = s.useState(null != m ? m : P), [A, y] = s.useState((0, o.toRichValue)(h)), g = s.useRef(!1);
  return s.useEffect(() => {
    g.current = !0
  }, []), s.useEffect(() => {
    if (void 0 === m) {
      let e = (0, o.toRichValue)(P);
      x(P), y(e)
    }
  }, [m, P]), (0, i.jsx)("div", {
    className: r()(S.body, E),
    children: (0, i.jsxs)(d.default, {
      title: t,
      errors: n,
      disabled: N,
      children: [(0, i.jsx)(c.default, {
        innerClassName: r()(S.textArea, T),
        editorClassName: S.editorTextArea,
        maxCharacterCount: f.CUSTOM_GIFT_MESSAGE_MAX_LENGTH,
        onChange: function(e, t, n) {
          t !== h && (x(t), y(n), l(t))
        },
        placeholder: p,
        channel: _,
        textValue: h,
        richValue: A,
        type: u.ChatInputTypes.CUSTOM_GIFT,
        onBlur: () => {
          g.current = !1
        },
        onFocus: () => {
          g.current = !0
        },
        focused: g.current,
        onSubmit: function() {
          return new Promise(e => {
            e({
              shouldClear: !1,
              shouldRefocus: !0
            })
          })
        },
        disableThemedBackground: v
      }), (0, i.jsx)(a.HiddenVisually, {
        children: I.default.Messages.MAXIMUM_LENGTH.format({
          maxLength: f.CUSTOM_GIFT_MESSAGE_MAX_LENGTH
        })
      })]
    })
  })
}