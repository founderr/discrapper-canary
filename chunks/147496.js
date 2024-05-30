"use strict";
n.r(t), n.d(t, {
  ItemDetailsModal: function() {
    return v
  }
});
var i = n("735250");
n("470079");
var r = n("752843"),
  l = n("790472"),
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

function v(e) {
  var t, n, v, T;
  let {
    onClose: I,
    transitionState: _,
    skuId: g,
    appId: x
  } = e, E = (0, a.useStateFromStores)([o.default], () => o.default.getForSKU(g), [g]), N = (0, a.useStateFromStores)([s.default], () => s.default.get(g), [g]), C = (0, c.useHasActiveEntitlement)(g);
  if (null == N) return null;
  let j = null !== (n = N.name) && void 0 !== n ? n : "",
    R = null !== (v = null == E ? void 0 : null === (t = E.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== v ? v : void 0,
    L = (null == E ? void 0 : E.headerBackground) != null && null !== (T = d.default.toURLSafe((0, u.getAssetURL)(x, E.headerBackground, 256))) && void 0 !== T ? T : void 0,
    A = N.type === m.SKUTypes.DURABLE && C,
    b = N.type === m.SKUTypes.DURABLE ? A ? h.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : h.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: y
    } = N;
  return null == y ? null : (0, i.jsx)(f.CardDetailsModal, {
    appId: x,
    transitionState: _,
    onHeaderTitleClick: I,
    onClose: I,
    footer: (0, i.jsx)(S.ItemPurchaseButton, {
      appId: x,
      sku: N
    }),
    children: (0, i.jsx)(p.TrackedCardDetails, {
      appId: x,
      skuId: N.id,
      title: j,
      description: R,
      imgSrc: L,
      tag: null != b ? (0, i.jsx)(r.Tag, {
        text: b
      }) : void 0,
      FallbackIcon: l.TicketIcon
    })
  })
}