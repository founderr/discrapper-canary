s.d(n, {
  $0: function() {
    return l
  },
  Tm: function() {
    return f
  },
  oT: function() {
    return h
  }
}), s(47120), s(724458), s(653041);
var l, t, i = s(470079),
  r = s(392711),
  a = s(399606),
  o = s(597688),
  c = s(1870),
  u = s(884697),
  d = s(594174),
  E = s(74538),
  m = s(689938);
(t = l || (l = {})).PURCHASE = "purchase", t.PREMIUM_PURCHASE = "premium_purchase", t.PREVIEW = "preview";
let f = {
    id: "None"
  },
  h = {
    id: "Shop"
  };
n.ZP = () => {
  let e = (0, a.e7)([d.default], () => d.default.getCurrentUser()),
    n = E.ZP.canUseCollectibles(e),
    s = (0, a.e7)([c.Z], () => c.Z.purchases),
    [l, t] = (0, a.Wu)([o.Z], () => [o.Z.categories, o.Z.products]);
  return (0, i.useMemo)(() => {
    let e = (0, r.uniqBy)([...(0, u.aj)(s), ...(0, u.XS)(l)], "id").reduce((e, l) => {
      let i = s.get(l.skuId);
      return (0, u.qS)(i) ? (e.premium_purchase.push(l), e) : null != i ? (e.purchase.push(l), e) : !n && (0, u.G1)(t.get(l.skuId)) ? (e.premium_purchase.push(l), e) : (e.preview.push(l), e)
    }, {
      purchase: [],
      premium_purchase: [],
      preview: []
    });
    return [{
      section: "purchase",
      items: [f, h, ...e.purchase],
      height: 12,
      header: m.Z.Messages.CHANGE_DECORATION_MODAL_PURCHASE_HEADER
    }, {
      section: "premium_purchase",
      items: e.premium_purchase,
      height: 12,
      header: m.Z.Messages.CHANGE_DECORATION_MODAL_PREMIUM_STARTER_HEADER
    }, {
      section: "preview",
      items: e.preview,
      height: 12,
      header: m.Z.Messages.PROFILE_EFFECT_MODAL_SHOP_PREVIEW_HEADER
    }].filter(e => {
      let {
        items: n
      } = e;
      return n.length > 0
    })
  }, [l, t, s, n])
}