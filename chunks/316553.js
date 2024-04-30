"use strict";
a.r(t), a.d(t, {
  useDiscoveryGameApplicationId: function() {
    return i
  }
});
var n = a("470079"),
  s = a("207796"),
  l = a("308083");

function i(e) {
  let {
    selectedGame: t
  } = e;
  return n.useMemo(() => {
    switch (t) {
      case s.ClanDiscoveryGame.GENSHIN:
        return l.GENSHIN_ID;
      case s.ClanDiscoveryGame.VALORANT:
        return l.VALORANT_ID
    }
  }, [t])
}