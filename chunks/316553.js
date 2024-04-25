"use strict";
a.r(t), a.d(t, {
  useDiscoveryGameApplicationId: function() {
    return r
  }
});
var n = a("470079"),
  s = a("143927"),
  l = a("207796"),
  i = a("308083");

function r() {
  let e = (0, l.useClanDiscoveryUIStore)(e => e.game, s.default);
  return n.useMemo(() => {
    switch (e) {
      case l.ClanDiscoveryGame.GENSHIN:
        return i.GENSHIN_ID;
      case l.ClanDiscoveryGame.VALORANT:
        return i.VALORANT_ID;
      default:
        return
    }
  }, [e])
}