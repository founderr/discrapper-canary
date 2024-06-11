"use strict";
s.r(t), s("47120");
var a = s("470079"),
  n = s("597688"),
  i = s("884697"),
  l = s("223143");
t.default = e => {
  let [t, s] = a.useState(), {
    categories: r,
    purchases: o
  } = (0, l.default)();
  return a.useEffect(() => {
    (null == t || 0 === t.size) && s(r)
  }, [r, t]), a.useMemo(() => {
    if (null != e) return e;
    if (null == t) return;
    let s = (0, i.getAvatarDecorations)(o, t).filter(e => {
      let {
        skuId: t
      } = e, s = n.default.getProduct(t);
      return (0, i.isPremiumCollectiblesProduct)(s)
    });
    return s[Math.floor(Math.random() * s.length)]
  }, [t, e, o])
}