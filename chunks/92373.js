"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("183249"),
  o = a("481060"),
  u = a("442837"),
  d = a("210753"),
  c = a("77498"),
  f = a("441674"),
  E = a("75387");
t.default = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: a,
    onClick: l,
    selected: h
  } = e, _ = (0, o.useToken)(o.tokens.colors.WHITE), {
    isFetching: C,
    coverImageUrl: m
  } = (0, d.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), S = (0, u.useStateFromStores)([c.default], () => {
    var e, a;
    return null !== (a = null === (e = c.default.getGameById(t)) || void 0 === e ? void 0 : e.name) && void 0 !== a ? a : ""
  }), p = s.useCallback(() => {
    null == l || l(t)
  }, [t, l]), I = s.useMemo(() => C ? null : null == m ? (0, n.jsx)("div", {
    className: E.gameUnknownImage,
    children: (0, n.jsx)(r.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, n.jsx)("img", {
    className: E.gameImage,
    alt: S,
    src: m
  }), [m, C, S]);
  return (0, n.jsxs)("div", {
    className: E.selectedGame,
    children: [(0, n.jsxs)(o.Clickable, {
      onClick: p,
      className: i()(a, C ? E.gameImageLoading : void 0, E.gameImageBackground),
      children: [h && (0, n.jsx)("div", {
        className: E.checkBackground,
        children: (0, n.jsx)(f.default, {
          backgroundColor: _.hex(),
          className: E.selectedGameCheck
        })
      }), I]
    }), (0, n.jsx)(o.Text, {
      className: E.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: S
    })]
  })
}