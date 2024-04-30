"use strict";
a.r(t), a.d(t, {
  useFormattedGameNames: function() {
    return d
  }
});
var n = a("392711"),
  s = a.n(n),
  l = a("442837"),
  i = a("77498"),
  r = a("823379"),
  o = a("353093"),
  u = a("308083");

function d(e) {
  return (0, l.useStateFromStores)([i.default], () => {
    let t = s()(e).map(e => {
      var t;
      return null === (t = i.default.getGameById(e)) || void 0 === t ? void 0 : t.name
    }).filter(r.isNotNullish).value();
    return (0, o.formatSelectionList)(t, u.MAX_GAMES_TO_DISPLAY)
  })
}