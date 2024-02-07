"use strict";
n.r(t), n.d(t, {
  default: function() {
    return g
  }
}), n("222007");
var l = n("37983"),
  i = n("884691"),
  a = n("414456"),
  s = n.n(a),
  r = n("16470"),
  o = n("77078"),
  u = n("200197"),
  d = n("538282"),
  c = n("551305"),
  f = n("595086"),
  p = n("88497"),
  m = n("13030"),
  h = n("782340"),
  E = n("537461"),
  g = i.memo(i.forwardRef(function(e, t) {
    let n, {
        disabled: a,
        type: p
      } = e,
      [g, S] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.pickerId], r.default),
      C = i.useContext(u.default),
      [T, v] = i.useState(!1),
      I = g === m.ExpressionPickerViewType.STICKER,
      _ = i.useCallback(() => {
        (0, d.toggleExpressionPicker)(m.ExpressionPickerViewType.STICKER, p)
      }, [p]);
    i.useEffect(() => {
      let e = () => {
          requestAnimationFrame(() => {
            v(!0)
          })
        },
        t = () => {
          requestAnimationFrame(() => {
            v(!1)
          })
        };
      return C.addListener("sticker-suggestions-shown", e), C.addListener("sticker-suggestions-hidden", t), () => {
        C.removeListener("sticker-suggestions-shown", e), C.removeListener("sticker-suggestions-hidden", t)
      }
    }, [C]);
    let y = (0, o.useRedesignIconContext)().enabled;
    return a ? null : (n = (0, l.jsx)(f.default, {
      className: y ? "" : E.stickerIcon,
      winking: T,
      color: "currentColor"
    }), (0, l.jsx)("div", {
      className: s(m.CHAT_INPUT_BUTTON_CLASSNAME, E.buttonContainer),
      ref: t,
      children: (0, l.jsx)(c.default, {
        innerClassName: s(E.button, E.stickerButton, {
          [E.stickerButtonWithNotification]: !1,
          [E.stickerButtonTilted]: T && !I
        }),
        onClick: _,
        isActive: I,
        "aria-label": h.default.Messages.STICKER_BUTTON_LABEL,
        "aria-expanded": I,
        "aria-haspopup": "dialog",
        "aria-controls": S,
        sparkle: !1,
        notification: null,
        children: n
      })
    }))
  }))