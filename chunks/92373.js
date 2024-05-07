"use strict";
n.r(t);
var a = n("735250"),
  r = n("470079"),
  s = n("120356"),
  i = n.n(s),
  l = n("183249"),
  o = n("824385"),
  c = n("481060"),
  d = n("442837"),
  u = n("210753"),
  f = n("77498"),
  m = n("441674"),
  h = n("689938"),
  p = n("111008");
t.default = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: n,
    onClick: s,
    selected: T,
    locked: E = !1,
    remainingGame: C = 0
  } = e, _ = (0, c.useToken)(c.tokens.colors.WHITE), {
    isFetching: x,
    coverImageUrl: g
  } = (0, u.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), I = (0, d.useStateFromStores)([f.default], () => {
    var e, n;
    return null !== (n = null === (e = f.default.getGameById(t)) || void 0 === e ? void 0 : e.name) && void 0 !== n ? n : ""
  }), N = r.useCallback(() => {
    null == s || s(t)
  }, [t, s]), v = r.useMemo(() => x ? null : null == g ? (0, a.jsx)("div", {
    className: p.gameUnknownImage,
    children: (0, a.jsx)(l.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, a.jsx)("img", {
    className: p.gameImage,
    alt: I,
    src: g
  }), [g, x, I]);
  return (0, a.jsxs)("div", {
    className: p.selectedGame,
    children: [(0, a.jsxs)(c.Clickable, {
      onClick: N,
      className: i()(n, x ? p.gameImageLoading : void 0, p.gameImageBackground),
      children: [T && (0, a.jsx)("div", {
        className: p.checkBackground,
        children: (0, a.jsx)(m.default, {
          backgroundColor: _.hex(),
          className: i()(p.selectedGameCheck, {
            [p.selectedGameCheckLocked]: E
          })
        })
      }), v, C > 0 && (0, a.jsx)("div", {
        className: p.remainingGame,
        children: (0, a.jsx)(c.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: h.default.Messages.COUNT_REMAINING.format({
            count: C
          })
        })
      })]
    }), (0, a.jsxs)(c.Text, {
      className: p.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: [I, E && (0, a.jsx)(o.LockIcon, {
        width: 12,
        height: 12
      })]
    })]
  })
}