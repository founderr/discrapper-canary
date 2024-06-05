"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("183249"),
  o = a("824385"),
  d = a("481060"),
  c = a("442837"),
  u = a("210753"),
  f = a("77498"),
  m = a("441674"),
  E = a("689938"),
  h = a("75387");
t.default = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: a,
    onClick: i,
    selected: T,
    locked: _ = !1,
    otherGamesCount: C = 0
  } = e, x = (0, d.useToken)(d.tokens.colors.WHITE), {
    isFetching: p,
    coverImageUrl: I
  } = (0, u.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), g = (0, c.useStateFromStores)([f.default], () => {
    var e, a;
    return null !== (a = null === (e = f.default.getGameById(t)) || void 0 === e ? void 0 : e.name) && void 0 !== a ? a : ""
  }), N = r.useCallback(() => {
    null == i || i(t)
  }, [t, i]), A = r.useMemo(() => p ? null : null == I ? (0, n.jsx)("div", {
    className: h.gameUnknownImage,
    children: (0, n.jsx)(l.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, n.jsx)("img", {
    className: h.gameImage,
    alt: g,
    src: I
  }), [I, p, g]);
  return (0, n.jsxs)("div", {
    className: h.selectedGame,
    children: [(0, n.jsxs)(d.Clickable, {
      onClick: N,
      className: s()(a, p ? h.gameImageLoading : void 0, h.gameImageBackground),
      children: [T && (0, n.jsx)("div", {
        className: h.checkBackground,
        children: (0, n.jsx)(m.default, {
          backgroundColor: x.hex(),
          className: s()(h.selectedGameCheck, {
            [h.selectedGameCheckLocked]: _
          })
        })
      }), A, C > 0 && (0, n.jsx)("div", {
        className: h.remainingGame,
        children: (0, n.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: E.default.Messages.COUNT_REMAINING.format({
            count: C
          })
        })
      })]
    }), (0, n.jsxs)(d.Text, {
      className: h.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: [g, _ && (0, n.jsx)(o.LockIcon, {
        width: 12,
        height: 12
      })]
    })]
  })
}