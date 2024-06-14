"use strict";
n.r(e), n.d(e, {
  ItemDetailsModal: function() {
    return T
  }
});
var i = n("735250");
n("470079");
var r = n("752843"),
  l = n("606327"),
  a = n("442837"),
  s = n("55563"),
  o = n("551428"),
  u = n("73346"),
  d = n("591759"),
  c = n("110742"),
  f = n("886253"),
  S = n("680005"),
  p = n("938337"),
  m = n("981631"),
  h = n("689938");

function T(t) {
  var e, n, T, _;
  let {
    onClose: I,
    transitionState: v,
    skuId: E,
    appId: g,
    onHeaderTitleClick: x
  } = t, C = (0, a.useStateFromStores)([o.default], () => o.default.getForSKU(E), [E]), L = (0, a.useStateFromStores)([s.default], () => s.default.get(E), [E]), N = (0, c.useHasActiveEntitlement)(E);
  if (null == L) return null;
  let R = null !== (n = L.name) && void 0 !== n ? n : "",
    j = null !== (T = null == C ? void 0 : null === (e = C.description) || void 0 === e ? void 0 : e.trim()) && void 0 !== T ? T : void 0,
    A = (null == C ? void 0 : C.headerBackground) != null && null !== (_ = d.default.toURLSafe((0, u.getAssetURL)(g, C.headerBackground, 256))) && void 0 !== _ ? _ : void 0,
    O = L.type === m.SKUTypes.DURABLE && N,
    y = L.type === m.SKUTypes.DURABLE ? O ? h.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : h.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: b
    } = L;
  return null == b ? null : (0, i.jsx)(f.CardDetailsModal, {
    appId: g,
    skuId: L.id,
    transitionState: v,
    onHeaderTitleClick: null != x ? x : I,
    onClose: I,
    footer: (0, i.jsx)(S.ItemPurchaseButton, {
      appId: g,
      sku: L
    }),
    children: (0, i.jsx)(p.TrackedCardDetails, {
      appId: g,
      skuId: L.id,
      title: R,
      description: j,
      imgSrc: A,
      tag: null != y ? (0, i.jsx)(r.Tag, {
        text: y
      }) : void 0,
      FallbackIcon: l.TicketIcon
    })
  })
}