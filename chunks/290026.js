"use strict";
l.r(t), l.d(t, {
  useReloadProfileEffectWhenConfigsAreMissing: function() {
    return c
  }
}), l("47120");
var a = l("470079"),
  s = l("979554"),
  r = l("442837"),
  n = l("597688"),
  i = l("365943"),
  o = l("25251");
let c = () => {
  let e = (0, r.useStateFromStores)([n.default], () => n.default.products);
  a.useEffect(() => {
    let t = [...e.values()].filter(e => e.type === s.CollectiblesItemType.PROFILE_EFFECT).some(e => {
      let t = e.items[0].id;
      return null != t && null == o.default.getProfileEffectById(t)
    });
    (0, i.fetchUserProfileEffects)(t)
  }, [e])
}