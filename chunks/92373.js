"use strict";
n.r(t);
var a = n("735250"),
  r = n("470079"),
  i = n("120356"),
  s = n.n(i),
  l = n("183249"),
  o = n("481060"),
  c = n("442837"),
  d = n("210753"),
  u = n("77498"),
  f = n("441674"),
  m = n("111008");
t.default = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: n,
    onClick: i,
    selected: h
  } = e, p = (0, o.useToken)(o.tokens.colors.WHITE), {
    isFetching: T,
    coverImageUrl: E
  } = (0, d.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), C = (0, c.useStateFromStores)([u.default], () => {
    var e, n;
    return null !== (n = null === (e = u.default.getGameById(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
  }), _ = r.useCallback(() => {
    null == i || i(t)
  }, [t, i]), g = r.useMemo(() => T ? null : null == E ? (0, a.jsx)("div", {
    className: m.gameUnknownImage,
    children: (0, a.jsx)(l.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, a.jsx)("img", {
    className: m.gameImage,
    alt: C,
    src: E
  }), [E, T, C]);
  return (0, a.jsxs)("div", {
    className: m.selectedGame,
    children: [(0, a.jsxs)(o.Clickable, {
      onClick: _,
      className: s()(n, T ? m.gameImageLoading : void 0, m.gameImageBackground),
      children: [h && (0, a.jsx)("div", {
        className: m.checkBackground,
        children: (0, a.jsx)(f.default, {
          backgroundColor: p.hex(),
          className: m.selectedGameCheck
        })
      }), g]
    }), (0, a.jsx)(o.Text, {
      className: m.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: C
    })]
  })
}