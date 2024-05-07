"use strict";
n.r(t), n.d(t, {
  useDiscoveryGameApplicationId: function() {
    return l
  }
});
var a = n("470079"),
  s = n("207796"),
  i = n("308083");

function l(e) {
  let {
    selectedGame: t
  } = e;
  return a.useMemo(() => {
    switch (t) {
      case s.ClanDiscoveryGame.GENSHIN:
        return i.GENSHIN_ID;
      case s.ClanDiscoveryGame.VALORANT:
        return i.VALORANT_ID
    }
  }, [t])
}