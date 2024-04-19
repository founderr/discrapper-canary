"use strict";
n.r(t);
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("183249"),
  o = n("481060"),
  u = n("442837"),
  d = n("210753"),
  c = n("77498"),
  f = n("441674"),
  E = n("343644");
t.default = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: n,
    onClick: l,
    selected: h
  } = e, _ = (0, o.useToken)(o.tokens.colors.WHITE), {
    isFetching: C,
    coverImageUrl: m
  } = (0, d.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), S = (0, u.useStateFromStores)([c.default], () => {
    var e, n;
    return null !== (n = null === (e = c.default.getGameById(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
  }), I = s.useCallback(() => {
    null == l || l(t)
  }, [t, l]), p = s.useMemo(() => C ? null : null == m ? (0, a.jsx)("div", {
    className: E.gameUnknownImage,
    children: (0, a.jsx)(r.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, a.jsx)("img", {
    className: E.gameImage,
    alt: S,
    src: m
  }), [m, C, S]);
  return (0, a.jsxs)("div", {
    className: E.selectedGame,
    children: [(0, a.jsxs)(o.Clickable, {
      onClick: I,
      className: i()(n, C ? E.gameImageLoading : void 0, E.gameImageBackground),
      children: [h && (0, a.jsx)(f.default, {
        backgroundColor: _.hex(),
        className: E.selectedGameCheck
      }), p]
    }), (0, a.jsx)(o.Text, {
      variant: "text-xs/normal",
      color: "header-primary",
      children: S
    })]
  })
}