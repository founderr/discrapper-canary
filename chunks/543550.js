"use strict";
a.r(t);
var n = a("735250"),
  s = a("470079"),
  l = a("120356"),
  i = a.n(l),
  r = a("143927"),
  o = a("597312"),
  u = a("207796"),
  d = a("497189"),
  c = a("526282"),
  f = a("183993"),
  E = a("495257");

function h(e) {
  let {
    children: t,
    selectedGame: a,
    className: l
  } = e, r = s.useMemo(() => {
    switch (a) {
      case u.ClanDiscoveryGame.GENSHIN:
        return E.genshinBackgroundImage;
      case u.ClanDiscoveryGame.VALORANT:
        return E.valorantBackgroundImage
    }
  }, [a]);
  return (0, n.jsx)("div", {
    className: i()(r, l),
    children: t
  })
}
t.default = s.memo(function() {
  let e = (0, f.useEligibleGuildsForClans)(),
    t = 0 === e.length,
    a = (0, u.useClanDiscoveryUIStore)(e => e.game, r.default);
  return (0, n.jsx)("div", {
    className: E.scrollerContainer,
    children: (0, n.jsx)(o.ScrollerThin, {
      className: E.scroller,
      fade: !0,
      children: (0, n.jsx)(h, {
        selectedGame: a,
        className: t ? E.userUpsell : E.adminUpsell,
        children: t ? (0, n.jsx)(c.default, {
          selectedGame: a
        }) : (0, n.jsx)(d.default, {
          selectedGame: a,
          guild: e[0]
        })
      })
    })
  })
})