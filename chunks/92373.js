"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("803997"),
  i = a.n(l),
  r = a("183249"),
  o = a("481060"),
  u = a("210753"),
  d = a("441674"),
  c = a("343644");
t.default = function(e) {
  let {
    applicationId: t,
    name: a,
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
  }, [t, f]), S = s.useMemo(() => _ ? null : null == C ? (0, n.jsx)("div", {
    className: c.gameUnknownImage,
    children: (0, n.jsx)(r.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, n.jsx)("img", {
    className: c.gameImage,
    alt: a,
    src: C
  }), [C, _, a]);
  return (0, n.jsxs)("div", {
    className: c.selectedGame,
    children: [(0, n.jsxs)(o.Clickable, {
      onClick: m,
      className: i()(l, _ ? c.gameImageLoading : void 0, c.gameImageBackground),
      children: [E && (0, n.jsx)(d.default, {
        backgroundColor: h.hex(),
        className: c.selectedGameCheck
      }), S]
    }), (0, n.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "header-primary",
      children: a
    })]
  })
}