"use strict";
s.r(t);
var a = s("735250"),
  n = s("470079"),
  i = s("120356"),
  E = s.n(i),
  l = s("183249"),
  _ = s("824385"),
  r = s("481060"),
  u = s("442837"),
  o = s("210753"),
  T = s("77498"),
  d = s("441674"),
  A = s("689938"),
  I = s("75387");
t.default = function(e) {
  let {
    applicationId: t,
    imageContainerClassName: s,
    onClick: i,
    selected: L,
    locked: c = !1,
    remainingGame: N = 0
  } = e, S = (0, r.useToken)(r.tokens.colors.WHITE), {
    isFetching: g,
    coverImageUrl: D
  } = (0, o.useDetectableGameSupplementalData)(t, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), C = (0, u.useStateFromStores)([T.default], () => {
    var e, s;
    return null !== (s = null === (e = T.default.getGameById(t)) || void 0 === e ? void 0 : e.name) && void 0 !== s ? s : ""
  }), f = n.useCallback(() => {
    null == i || i(t)
  }, [t, i]), O = n.useMemo(() => g ? null : null == D ? (0, a.jsx)("div", {
    className: I.gameUnknownImage,
    children: (0, a.jsx)(l.UnknownGameIcon, {
      height: 32,
      width: 32
    })
  }) : (0, a.jsx)("img", {
    className: I.gameImage,
    alt: C,
    src: D
  }), [D, g, C]);
  return (0, a.jsxs)("div", {
    className: I.selectedGame,
    children: [(0, a.jsxs)(r.Clickable, {
      onClick: f,
      className: E()(s, g ? I.gameImageLoading : void 0, I.gameImageBackground),
      children: [L && (0, a.jsx)("div", {
        className: I.checkBackground,
        children: (0, a.jsx)(d.default, {
          backgroundColor: S.hex(),
          className: E()(I.selectedGameCheck, {
            [I.selectedGameCheckLocked]: c
          })
        })
      }), O, N > 0 && (0, a.jsx)("div", {
        className: I.remainingGame,
        children: (0, a.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: A.default.Messages.COUNT_REMAINING.format({
            count: N
          })
        })
      })]
    }), (0, a.jsxs)(r.Text, {
      className: I.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: [C, c && (0, a.jsx)(_.LockIcon, {
        width: 12,
        height: 12
      })]
    })]
  })
}