"use strict";
n.r(t), n.d(t, {
  ItemDetailsModal: function() {
    return T
  }
});
var i = n("735250");
n("470079");
var l = n("752843"),
  r = n("606327"),
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

function T(e) {
  var t, n, T, v;
  let {
    onClose: _,
    transitionState: g,
    skuId: I,
    appId: x,
    onHeaderTitleClick: E
  } = e, N = (0, a.useStateFromStores)([o.default], () => o.default.getForSKU(I), [I]), C = (0, a.useStateFromStores)([s.default], () => s.default.get(I), [I]), j = (0, c.useHasActiveEntitlement)(I);
  if (null == C) return null;
  let R = null !== (n = C.name) && void 0 !== n ? n : "",
    L = null !== (T = null == N ? void 0 : null === (t = N.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== T ? T : void 0,
    A = (null == N ? void 0 : N.headerBackground) != null && null !== (v = d.default.toURLSafe((0, u.getAssetURL)(x, N.headerBackground, 256))) && void 0 !== v ? v : void 0,
    y = C.type === m.SKUTypes.DURABLE && j,
    b = C.type === m.SKUTypes.DURABLE ? y ? h.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : h.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: O
    } = C;
  return null == O ? null : (0, i.jsx)(f.CardDetailsModal, {
    appId: x,
    transitionState: g,
    onHeaderTitleClick: null != E ? E : _,
    onClose: _,
    footer: (0, i.jsx)(S.ItemPurchaseButton, {
      appId: x,
      sku: C
    }),
    children: (0, i.jsx)(p.TrackedCardDetails, {
      appId: x,
      skuId: C.id,
      title: R,
      description: L,
      imgSrc: A,
      tag: null != b ? (0, i.jsx)(l.Tag, {
        text: b
      }) : void 0,
      FallbackIcon: r.TicketIcon
    })
  })
}