"use strict";
n.r(t);
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("183249"),
  o = n("481060"),
  c = n("442837"),
  d = n("210753"),
  u = n("77498"),
  f = n("441674"),
  m = n("689938"),
  h = n("111008");
t.default = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: n,
    onClick: s,
    selected: p,
    remainingGame: T = 0
  } = e, E = (0, o.useToken)(o.tokens.colors.WHITE), {
    isFetching: C,
    coverImageUrl: _
  } = (0, d.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), x = (0, c.useStateFromStores)([u.default], () => {
    var e, n;
    return null !== (n = null === (e = u.default.getGameById(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
  }), g = r.useCallback(() => {
    null == s || s(t)
  }, [t, s]), I = r.useMemo(() => C ? null : null == _ ? (0, a.jsx)("div", {
    className: h.gameUnknownImage,
    children: (0, a.jsx)(l.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, a.jsx)("img", {
    className: h.gameImage,
    alt: x,
    src: _
  }), [_, C, x]);
  return (0, a.jsxs)("div", {
    className: h.selectedGame,
    children: [(0, a.jsxs)(o.Clickable, {
      onClick: g,
      className: i()(n, C ? h.gameImageLoading : void 0, h.gameImageBackground),
      children: [p && (0, a.jsx)("div", {
        className: h.checkBackground,
        children: (0, a.jsx)(f.default, {
          backgroundColor: E.hex(),
          className: h.selectedGameCheck
        })
      }), I, T > 0 && (0, a.jsx)("div", {
        className: h.remainingGame,
        children: (0, a.jsx)(o.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: m.default.Messages.COUNT_REMAINING.format({
            count: T
          })
        })
      })]
    }), (0, a.jsx)(o.Text, {
      className: h.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: x
    })]
  })
}