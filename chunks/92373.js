"use strict";
a.r(t);
var n = a("735250"),
  i = a("470079"),
  r = a("120356"),
  s = a.n(r),
  l = a("183249"),
  o = a("481060"),
  c = a("442837"),
  d = a("210753"),
  u = a("77498"),
  f = a("441674"),
  m = a("689938"),
  h = a("111008");
t.default = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: a,
    onClick: r,
    selected: E,
    remainingGame: T = 0
  } = e, p = (0, o.useToken)(o.tokens.colors.WHITE), {
    isFetching: _,
    coverImageUrl: C
  } = (0, d.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), x = (0, c.useStateFromStores)([u.default], () => {
    var e, a;
    return null !== (a = null === (e = u.default.getGameById(t)) || void 0 === e ? void 0 : e.name) && void 0 !== a ? a : ""
  }), g = i.useCallback(() => {
    null == r || r(t)
  }, [t, r]), I = i.useMemo(() => _ ? null : null == C ? (0, n.jsx)("div", {
    className: h.gameUnknownImage,
    children: (0, n.jsx)(l.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, n.jsx)("img", {
    className: h.gameImage,
    alt: x,
    src: C
  }), [C, _, x]);
  return (0, n.jsxs)("div", {
    className: h.selectedGame,
    children: [(0, n.jsxs)(o.Clickable, {
      onClick: g,
      className: s()(a, _ ? h.gameImageLoading : void 0, h.gameImageBackground),
      children: [E && (0, n.jsx)("div", {
        className: h.checkBackground,
        children: (0, n.jsx)(f.default, {
          backgroundColor: p.hex(),
          className: h.selectedGameCheck
        })
      }), I, T > 0 && (0, n.jsx)("div", {
        className: h.remainingGame,
        children: (0, n.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: m.default.Messages.COUNT_REMAINING.format({
            count: T
          })
        })
      })]
    }), (0, n.jsx)(o.Text, {
      className: h.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: x
    })]
  })
}