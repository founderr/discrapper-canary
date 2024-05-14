"use strict";
a.r(t);
var n = a("735250"),
  r = a("470079"),
  i = a("120356"),
  s = a.n(i),
  l = a("183249"),
  o = a("824385"),
  c = a("481060"),
  d = a("442837"),
  u = a("210753"),
  f = a("77498"),
  m = a("441674"),
  h = a("689938"),
  E = a("75387");
t.default = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: a,
    onClick: i,
    selected: T,
    locked: p = !1,
    remainingGame: C = 0
  } = e, _ = (0, c.useToken)(c.tokens.colors.WHITE), {
    isFetching: x,
    coverImageUrl: g
  } = (0, u.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), I = (0, d.useStateFromStores)([f.default], () => {
    var e, a;
    return null !== (a = null === (e = f.default.getGameById(t)) || void 0 === e ? void 0 : e.name) && void 0 !== a ? a : ""
  }), v = r.useCallback(() => {
    null == i || i(t)
  }, [t, i]), N = r.useMemo(() => x ? null : null == g ? (0, n.jsx)("div", {
    className: E.gameUnknownImage,
    children: (0, n.jsx)(l.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, n.jsx)("img", {
    className: E.gameImage,
    alt: I,
    src: g
  }), [g, x, I]);
  return (0, n.jsxs)("div", {
    className: E.selectedGame,
    children: [(0, n.jsxs)(c.Clickable, {
      onClick: v,
      className: s()(a, x ? E.gameImageLoading : void 0, E.gameImageBackground),
      children: [T && (0, n.jsx)("div", {
        className: E.checkBackground,
        children: (0, n.jsx)(m.default, {
          backgroundColor: _.hex(),
          className: s()(E.selectedGameCheck, {
            [E.selectedGameCheckLocked]: p
          })
        })
      }), N, C > 0 && (0, n.jsx)("div", {
        className: E.remainingGame,
        children: (0, n.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: h.default.Messages.COUNT_REMAINING.format({
            count: C
          })
        })
      })]
    }), (0, n.jsxs)(c.Text, {
      className: E.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: [I, p && (0, n.jsx)(o.LockIcon, {
        width: 12,
        height: 12
      })]
    })]
  })
}