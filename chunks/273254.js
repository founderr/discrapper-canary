"use strict";
n.r(t), n.d(t, {
  useFakeDiscoveryClanForGuild: function() {
    return o
  }
});
var a = n("470079"),
  s = n("468194"),
  l = n("316553"),
  i = n("559469"),
  r = n("308083");

function o(e) {
  let {
    guild: t,
    selectedGame: n
  } = e, o = (0, l.useDiscoveryGameApplicationId)({
    selectedGame: n
  }), u = a.useMemo(() => null == o ? [] : [o], [o]), d = (0, i.useFakeDiscoveryUpsellClans)(o);
  return a.useMemo(() => {
    var e;
    return null == t ? null : {
      ...d[d.length - 1],
      id: t.id,
      name: t.name,
      icon: t.icon,
      description: null !== (e = t.description) && void 0 !== e ? e : "",
      memberCount: 0,
      games: u,
      playstyle: r.ClanPlaystyles.CASUAL,
      traits: [],
      tag: (0, s.getAcronym)(t.name),
      wildcardDescriptors: []
    }
  }, [u, t, d])
}