"use strict";
a.r(t), a.d(t, {
  useGameNamesString: function() {
    return u
  }
});
var n = a("470079"),
  s = a("442837"),
  l = a("77498"),
  i = a("823379"),
  r = a("353093"),
  o = a("308083");
let u = e => {
  let t = (0, s.useStateFromStoresArray)([l.default], () => e.map(e => {
    var t;
    return null === (t = l.default.getGameById(e)) || void 0 === t ? void 0 : t.name
  }).filter(i.isNotNullish));
  return n.useMemo(() => t.length > 0 ? (0, r.formatSelectionList)(t, o.MAX_GAMES_TO_DISPLAY) : null, [t])
}