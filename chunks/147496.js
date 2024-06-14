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
    transitionState: I,
    skuId: g,
    appId: x,
    onHeaderTitleClick: E
  } = e, C = (0, a.useStateFromStores)([o.default], () => o.default.getForSKU(g), [g]), N = (0, a.useStateFromStores)([s.default], () => s.default.get(g), [g]), j = (0, c.useHasActiveEntitlement)(g);
  if (null == N) return null;
  let R = null !== (n = N.name) && void 0 !== n ? n : "",
    L = null !== (T = null == C ? void 0 : null === (t = C.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== T ? T : void 0,
    A = (null == C ? void 0 : C.headerBackground) != null && null !== (v = d.default.toURLSafe((0, u.getAssetURL)(x, C.headerBackground, 256))) && void 0 !== v ? v : void 0,
    b = N.type === m.SKUTypes.DURABLE && j,
    y = N.type === m.SKUTypes.DURABLE ? b ? h.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : h.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: O
    } = N;
  return null == O ? null : (0, i.jsx)(f.CardDetailsModal, {
    appId: x,
    transitionState: I,
    onHeaderTitleClick: null != E ? E : _,
    onClose: _,
    footer: (0, i.jsx)(S.ItemPurchaseButton, {
      appId: x,
      sku: N
    }),
    children: (0, i.jsx)(p.TrackedCardDetails, {
      appId: x,
      skuId: N.id,
      title: R,
      description: L,
      imgSrc: A,
      tag: null != y ? (0, i.jsx)(l.Tag, {
        text: y
      }) : void 0,
      FallbackIcon: r.TicketIcon
    })
  })
}