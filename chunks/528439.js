s.d(l, {
  $0: function() {
    return n
  },
  Tm: function() {
    return h
  },
  oT: function() {
    return f
  }
}), s(47120), s(724458), s(653041);
var n, t, r = s(470079),
  i = s(392711),
  a = s(399606),
  o = s(597688),
  c = s(1870),
  u = s(884697),
  d = s(594174),
  m = s(74538),
  E = s(689938);
(t = n || (n = {})).PURCHASE = "purchase", t.PREMIUM_PURCHASE = "premium_purchase", t.PREVIEW = "preview";
let h = {
    id: "None"
  },
  f = {
    id: "Shop"
  };
l.ZP = () => {
  let e = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
    l = m.ZP.canUseCollectibles(e),
    s = (0, a.e7)([c.Z], () => c.Z.purchases),
    [n, t] = (0, a.Wu)([o.Z], () => [o.Z.categories, o.Z.products]);
  return (0, r.useMemo)(() => {
    let e = (0, i.uniqBy)([...(0, u.aj)(s), ...(0, u.XS)(n)], "id").reduce((e, n) => {
      let r = s.get(n.skuId);
      return (0, u.qS)(r) ? (e.premium_purchase.push(n), e) : null != r ? (e.purchase.push(n), e) : !l && (0, u.G1)(t.get(n.skuId)) ? (e.premium_purchase.push(n), e) : (e.preview.push(n), e)
    }, {
      purchase: [],
      premium_purchase: [],
      preview: []
    });
    return [{
      section: "purchase",
      items: [h, f, ...e.purchase],
      height: 12,
      header: E.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: "premium_purchase",
      items: e.premium_purchase,
      height: 12,
      header: E.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: e.preview,
      height: 12,
      header: E.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: l
      } = e;
      return l.length > 0
    })
  }, [n, t, s, l])
}