"use strict";
s.r(t), s.d(t, {
  default: function() {
    return m
  }
}), s("222007");
var a = s("37983"),
  n = s("884691"),
  l = s("414456"),
  r = s.n(l),
  i = s("16470"),
  o = s("538282"),
  u = s("882641"),
  d = s("13030"),
  c = s("350583"),
  m = n.memo(n.forwardRef(function(e, t) {
    let {
      disabled: s,
      type: l,
      className: m,
      onClick: h
    } = e, [f, g] = (0, o.useExpressionPickerStore)(e => [e.activeView, e.activeViewType], i.default), x = n.useCallback(() => {
      (0, o.toggleMultiExpressionPicker)(l), null == h || h()
    }, [l, h]);
    return s ? null : (0, a.jsx)("div", {
      className: r(d.CHAT_INPUT_BUTTON_CLASSNAME, c.buttonContainer),
      ref: t,
      children: (0, a.jsx)(u.default, {
        className: r(c.emojiButton, m),
        onClick: x,
        active: (f === d.ExpressionPickerViewType.GIF || f === d.ExpressionPickerViewType.EMOJI || f === d.ExpressionPickerViewType.STICKER) && g === l,
        tabIndex: 0,
        focusProps: {
          offset: {
            top: 4,
            bottom: 4,
            left: -4,
            right: -4
          }
        }
      })
    })
  }))