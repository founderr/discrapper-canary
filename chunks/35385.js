"use strict";
n.r(t), n.d(t, {
  default: function() {
    return f
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  r = n("414456"),
  o = n.n(r),
  s = n("16470"),
  a = n("538282"),
  u = n("882641"),
  d = n("13030"),
  c = n("537461"),
  f = i.memo(i.forwardRef(function(e, t) {
    let {
      disabled: n,
      type: r
    } = e, [f, p, m] = (0, a.useExpressionPickerStore)(e => [e.activeView, e.activeViewType, e.pickerId], s.default), h = i.useCallback(() => {
      (0, a.toggleExpressionPicker)(d.ExpressionPickerViewType.EMOJI, r)
    }, [r]);
    return n ? null : (0, l.jsx)("div", {
      className: o(d.CHAT_INPUT_BUTTON_CLASSNAME, c.buttonContainer),
      ref: t,
      children: (0, l.jsx)(u.default, {
        className: c.emojiButton,
        onClick: h,
        active: f === d.ExpressionPickerViewType.EMOJI && p === r,
        "aria-controls": m,
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