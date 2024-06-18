"use strict";
n(47120);
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(143927),
  l = n(442837),
  u = n(114101),
  _ = n(481060),
  c = n(28546),
  d = n(581883),
  E = n(147915),
  I = n(459273),
  T = n(981631),
  h = n(957825),
  S = n(689938),
  f = n(838329);
t.Z = r.memo(r.forwardRef(function(e, t) {
  let {
    disabled: n,
    type: s
  } = e, [N, A] = r.useState(!1), m = (0, l.e7)([d.Z], () => {
    var e, t;
    return N && Object.values(null !== (t = null === (e = d.Z.frecencyWithoutFetchingLatest.favoriteGifs) || void 0 === e ? void 0 : e.gifs) && void 0 !== t ? t : {}).length <= 2
  }), [O, R, p] = (0, c.Iu)(e => [e.activeView, e.activeViewType, e.pickerId], a.Z), g = r.useRef(0), C = r.useCallback(() => {
    A(!0), clearTimeout(g.current), g.current = setTimeout(() => {
      A(!1), g.current = 0
    }, 2e3)
  }, []);
  (0, I.yp)({
    event: T.CkL.FAVORITE_GIF,
    handler: C
  });
  let v = r.useCallback(() => {
      (0, c.RO)(h.X1.GIF, s)
    }, [s]),
    {
      Component: L,
      events: D,
      play: M
    } = (0, u.V)();
  if (n) return null;
  let P = O === h.X1.GIF && R === s;
  return (0, i.jsx)(_.Tooltip, {
    text: m ? S.Z.Messages.GIF_TOOLTIP_FAVORITED_PICKER_BUTTON : null,
    forceOpen: !0,
    children: e => (0, i.jsx)("div", {
      ref: t,
      className: o()(h.CT, f.buttonContainer),
      ...e,
      children: (0, i.jsx)(E.Z, {
        innerClassName: f.button,
        onMouseEnter: D.onMouseEnter,
        onMouseLeave: D.onMouseLeave,
        onClick: () => {
          v(), M()
        },
        isActive: P,
        pulse: N,
        "aria-label": S.Z.Messages.GIF_BUTTON_LABEL,
        "aria-expanded": P,
        "aria-haspopup": "dialog",
        "aria-controls": p,
        children: (0, i.jsx)(L, {
          color: "currentColor"
        })
      })
    })
  })
}))