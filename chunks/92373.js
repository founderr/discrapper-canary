"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("183249"),
  o = n("481060"),
  u = n("210753"),
  d = n("441674"),
  c = n("343644");
t.default = function(e) {
  let {
    applicationId: t,
    name: n,
    imageContainerClassName: l,
    onClick: f,
    selected: E
  } = e, h = (0, o.useToken)(o.tokens.colors.WHITE), {
    isFetching: _,
    coverImageUrl: C
  } = (0, u.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), m = s.useCallback(() => {
    null == f || f(t)
  }, [t, f]), S = s.useMemo(() => _ ? null : null == C ? (0, a.jsx)("div", {
    className: c.gameUnknownImage,
    children: (0, a.jsx)(r.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, a.jsx)("img", {
    className: c.gameImage,
    alt: n,
    src: C
  }), [C, _, n]);
  return (0, a.jsxs)("div", {
    className: c.selectedGame,
    children: [(0, a.jsxs)(o.Clickable, {
      onClick: m,
      className: i()(l, _ ? c.gameImageLoading : void 0, c.gameImageBackground),
      children: [E && (0, a.jsx)(d.default, {
        backgroundColor: h.hex(),
        className: c.selectedGameCheck
      }), S]
    }), (0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "header-primary",
      children: n
    })]
  })
}