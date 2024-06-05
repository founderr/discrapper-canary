"use strict";
a.r(t), a.d(t, {
  useReloadProfileEffectWhenConfigsAreMissing: function() {
    return c
  }
}), a("47120");
var s = a("470079"),
  l = a("979554"),
  r = a("442837"),
  n = a("597688"),
  i = a("365943"),
  o = a("25251");
let c = () => {
  let e = (0, r.useStateFromStores)([n.default], () => n.default.products);
  s.useEffect(() => {
    let t = [...e.values()].filter(e => e.type === l.CollectiblesItemType.PROFILE_EFFECT).some(e => {
      let t = e.items[0].id;
      return null != t && null == o.default.getProfileEffectById(t)
    });
    (0, i.fetchUserProfileEffects)(t)
  }, [e])
}