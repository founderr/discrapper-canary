"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(143927),
  l = n(532772),
  u = n(570220),
  _ = n(28546),
  c = n(147915),
  d = n(957825),
  E = n(689938),
  I = n(573809);
t.Z = r.memo(r.forwardRef(function(e, t) {
  let {
    disabled: n,
    type: s
  } = e, [T, h] = (0, _.Iu)(e => [e.activeView, e.pickerId], a.Z), S = r.useContext(u.ZP), [f, N] = r.useState(!1), A = T === d.X1.STICKER, m = r.useCallback(() => {
    (0, _.RO)(d.X1.STICKER, s)
  }, [s]);
  r.useEffect(() => {
    let e = () => {
        requestAnimationFrame(() => {
          N(!0)
        })
      },
      t = () => {
        requestAnimationFrame(() => {
          N(!1)
        })
      };
    return S.addListener("sticker-suggestions-shown", e), S.addListener("sticker-suggestions-hidden", t), () => {
      S.removeListener("sticker-suggestions-shown", e), S.removeListener("sticker-suggestions-hidden", t)
    }
  }, [S]);
  let {
    Component: O,
    events: R,
    play: p
  } = (0, l.z)();
  return n ? null : (0, i.jsx)("div", {
    className: o()(d.CT, I.buttonContainer),
    ref: t,
    children: (0, i.jsx)(c.Z, {
      innerClassName: o()(I.button, I.stickerButton, {
        [I.stickerButtonTilted]: f && !A
      }),
      ...R,
      onClick: () => {
        m(), p()
      },
      isActive: A,
      "aria-label": E.Z.Messages.STICKER_BUTTON_LABEL,
      "aria-expanded": A,
      "aria-haspopup": "dialog",
      "aria-controls": h,
      sparkle: !1,
      notification: null,
      children: (0, i.jsx)(O, {
        color: "currentColor"
      })
    })
  })
}))