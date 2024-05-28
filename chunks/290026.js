"use strict";
a.r(t), a.d(t, {
  useReloadProfileEffectWhenConfigsAreMissing: function() {
    return c
  }
}), a("47120");
var s = a("470079"),
  r = a("979554"),
  n = a("442837"),
  l = a("597688"),
  o = a("365943"),
  i = a("25251");
let c = () => {
  let e = (0, n.useStateFromStores)([l.default], () => l.default.products);
  s.useEffect(() => {
    let t = [...e.values()].filter(e => e.type === r.CollectiblesItemType.PROFILE_EFFECT).some(e => {
      let t = e.items[0].id;
      return null != t && null == i.default.getProfileEffectById(t)
    });
    (0, o.fetchUserProfileEffects)(t)
  }, [e])
}