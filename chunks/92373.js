var a = t(735250),
  r = t(470079),
  s = t(120356),
  i = t.n(s),
  l = t(481060),
  o = t(442837),
  c = t(210753),
  d = t(77498),
  u = t(689938),
  m = t(209367);
n.Z = function(e) {
  let {
    applicationId: n,
    imageContainerClassName: t,
    onClick: s,
    selected: h,
    locked: C = !1,
    otherGamesCount: x = 0
  } = e, f = (0, l.useToken)(l.tokens.colors.WHITE), {
    isFetching: E,
    coverImageUrl: T
  } = (0, c.$)(n, {
    coverImageHeight: 336,
    coverImageWidth: 252
  }), _ = (0, o.e7)([d.Z], () => {
    var e, t;
    return null !== (t = null === (e = d.Z.getDetectableGame(n)) || void 0 === e ? void 0 : e.name) && void 0 !== t ? t : ""
  }), I = r.useCallback(() => {
    null == s || s(n)
  }, [n, s]), g = r.useMemo(() => E ? null : null == T ? (0, a.jsx)("div", {
    className: m.gameUnknownImage,
    children: (0, a.jsx)(l.UnknownGameIcon, {
      size: "lg"
    })
  }) : (0, a.jsx)("img", {
    className: m.gameImage,
    alt: _,
    src: T
  }), [T, E, _]);
  return (0, a.jsxs)("div", {
    className: m.selectedGame,
    children: [(0, a.jsxs)(l.Clickable, {
      onClick: I,
      className: i()(t, E ? m.gameImageLoading : void 0, m.gameImageBackground),
      children: [h && (0, a.jsx)("div", {
        className: m.checkBackground,
        children: (0, a.jsx)(l.CircleCheckIcon, {
          size: "md",
          color: "currentColor",
          secondaryColor: f.hex(),
          className: i()(m.selectedGameCheck, {
            [m.selectedGameCheckLocked]: C
          })
        })
      }), g, x > 0 && (0, a.jsx)("div", {
        className: m.remainingGame,
        children: (0, a.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: u.Z.Messages.COUNT_REMAINING.format({
            count: x
          })
        })
      })]
    }), (0, a.jsxs)(l.Text, {
      className: m.gameName,
      variant: "text-xs/normal",
      color: "header-primary",
      children: [_, C && (0, a.jsx)(l.LockIcon, {
        size: "xxs"
      })]
    })]
  })
}