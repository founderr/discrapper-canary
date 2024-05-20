"use strict";
n.r(t), n.d(t, {
  hasGlobalDefaultAvatarDecoration: function() {
    return o
  },
  isAnimatedAvatarDecoration: function() {
    return r
  },
  isEqualAvatarDecoration: function() {
    return s
  },
  parseAvatarDecorationData: function() {
    return a
  }
});
var i = n("392711");
let r = e => e.split("_", 2).includes("a"),
  a = e => "object" == typeof e && null != e && "asset" in e && "string" == typeof e.asset ? "sku_id" in e && "string" == typeof e.sku_id ? {
    asset: e.asset,
    skuId: e.sku_id
  } : "skuId" in e && "string" == typeof e.skuId ? {
    asset: e.asset,
    skuId: e.skuId
  } : {
    asset: e.asset
  } : null,
  s = (e, t) => null == e || null == t ? e === t : (0, i.isEqual)(a(e), a(t)),
  o = (e, t) => {
    var n;
    return null != t && (null == e ? void 0 : null === (n = e.avatarDecoration) || void 0 === n ? void 0 : n.asset) != null
  }