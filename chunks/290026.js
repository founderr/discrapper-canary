"use strict";
s.r(t), s.d(t, {
  useReloadProfileEffectWhenConfigsAreMissing: function() {
    return c
  }
}), s("47120");
var a = s("470079"),
  l = s("979554"),
  r = s("442837"),
  n = s("597688"),
  i = s("365943"),
  o = s("25251");
let c = () => {
  let e = (0, r.useStateFromStores)([n.default], () => n.default.products);
  a.useEffect(() => {
    let t = [...e.values()].filter(e => e.type === l.CollectiblesItemType.PROFILE_EFFECT).some(e => {
      let t = e.items[0].id;
      return null != t && null == o.default.getProfileEffectById(t)
    });
    (0, i.fetchUserProfileEffects)(t)
  }, [e])
}