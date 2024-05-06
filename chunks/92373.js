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
  m = a("111008");
t.default = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: a,
    onClick: r,
    selected: h
  } = e, E = (0, o.useToken)(o.tokens.colors.WHITE), {
    isFetching: T,
    coverImageUrl: p
  } = (0, d.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), _ = (0, c.useStateFromStores)([u.default], () => {
    var e, a;
    return null !== (a = null === (e = u.default.getGameById(t)) || void 0 === e ? void 0 : e.name) && void 0 !== a ? a : ""
  }), C = i.useCallback(() => {
    null == r || r(t)
  }, [t, r]), g = i.useMemo(() => T ? null : null == p ? (0, n.jsx)("div", {
    className: m.gameUnknownImage,
    children: (0, n.jsx)(l.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, n.jsx)("img", {
    className: m.gameImage,
    alt: _,
    src: p
  }), [p, T, _]);
  return (0, n.jsxs)("div", {
    className: m.selectedGame,
    children: [(0, n.jsxs)(o.Clickable, {
      onClick: C,
      className: s()(a, T ? m.gameImageLoading : void 0, m.gameImageBackground),
      children: [h && (0, n.jsx)("div", {
        className: m.checkBackground,
        children: (0, n.jsx)(f.default, {
          backgroundColor: E.hex(),
          className: m.selectedGameCheck
        })
      }), g]
    }), (0, n.jsx)(o.Text, {
      className: m.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: _
    })]
  })
}