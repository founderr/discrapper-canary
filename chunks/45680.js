"use strict";
n.r(t), n.d(t, {
  useGameNamesString: function() {
    return o
  }
});
var a = n("470079"),
  s = n("442837"),
  l = n("77498"),
  i = n("823379"),
  r = n("353093");
let o = e => {
  let t = (0, s.useStateFromStoresArray)([l.default], () => e.map(e => {
    var t;
    return null === (t = l.default.getGameById(e)) || void 0 === t ? void 0 : t.name
  }).filter(i.isNotNullish));
  return a.useMemo(() => t.length > 0 ? (0, r.formatSelectionList)(t) : null, [t])
}