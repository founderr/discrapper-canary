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
  m = n("88497"),
  p = n("13030"),
  h = n("782340"),
  E = n("350583"),
  g = i.memo(i.forwardRef(function(e, t) {
    let n, {
        disabled: a,
        type: m
      } = e,
      [g, C] = (0, d.useExpressionPickerStore)(e => [e.activeView, e.pickerId], r.default),
      S = i.useContext(u.default),
      [T, I] = i.useState(!1),
      v = g === p.ExpressionPickerViewType.STICKER,
      _ = i.useCallback(() => {
        (0, d.toggleExpressionPicker)(p.ExpressionPickerViewType.STICKER, m)
      }, [m]);
    i.useEffect(() => {
      let e = () => {
          requestAnimationFrame(() => {
            I(!0)
          })
        },
        t = () => {
          requestAnimationFrame(() => {
            I(!1)
          })
        };
      return S.addListener("sticker-suggestions-shown", e), S.addListener("sticker-suggestions-hidden", t), () => {
        S.removeListener("sticker-suggestions-shown", e), S.removeListener("sticker-suggestions-hidden", t)
      }
    }, [S]);
    let N = (0, o.useRedesignIconContext)().enabled;
    return a ? null : (n = (0, l.jsx)(f.default, {
      className: N ? "" : E.stickerIcon,
      winking: T,
      color: "currentColor"
    }), (0, l.jsx)("div", {
      className: s(p.CHAT_INPUT_BUTTON_CLASSNAME, E.buttonContainer),
      ref: t,
      children: (0, l.jsx)(c.default, {
        innerClassName: s(E.button, E.stickerButton, {
          [E.stickerButtonWithNotification]: !1,
          [E.stickerButtonTilted]: T && !v
        }),
        onClick: _,
        isActive: v,
        "aria-label": h.default.Messages.STICKER_BUTTON_LABEL,
        "aria-expanded": v,
        "aria-haspopup": "dialog",
        "aria-controls": C,
        sparkle: !1,
        notification: null,
        children: n
      })
    }))
  }))