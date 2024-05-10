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
  s = n("442837"),
  a = n("481060"),
  o = n("55563"),
  u = n("551428"),
  d = n("73346"),
  c = n("591759"),
  f = n("110742"),
  p = n("680005"),
  m = n("938337"),
  S = n("981631"),
  h = n("689938"),
  g = n("399461");

function v(e) {
  var t, n, v, x;
  let {
    onClose: T,
    transitionState: C,
    skuId: I,
    appId: E
  } = e, _ = (0, s.useStateFromStores)([u.default], () => u.default.getForSKU(I), [I]), L = (0, s.useStateFromStores)([o.default], () => o.default.get(I), [I]), j = (0, f.useHasActiveEntitlement)(I);
  if (null == L) return null;
  let N = null !== (n = L.name) && void 0 !== n ? n : "",
    R = null !== (v = null == _ ? void 0 : null === (t = _.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== v ? v : void 0,
    y = (null == _ ? void 0 : _.headerBackground) != null && null !== (x = c.default.toURLSafe((0, d.getAssetURL)(E, _.headerBackground, 256))) && void 0 !== x ? x : void 0,
    A = L.type === S.SKUTypes.DURABLE && j,
    b = L.type === S.SKUTypes.DURABLE ? A ? h.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : h.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: O
    } = L;
  return null == O ? null : (0, i.jsxs)(a.ModalRoot, {
    transitionState: C,
    size: a.ModalSize.DYNAMIC,
    className: g.subDetailsModal,
    children: [(0, i.jsx)(m.TrackedCardDetails, {
      appId: E,
      skuId: L.id,
      title: N,
      description: R,
      imgSrc: y,
      tag: null != b ? (0, i.jsx)(r.Tag, {
        text: b
      }) : void 0,
      onClose: T,
      FallbackIcon: l.TicketIcon
    }), (0, i.jsxs)(a.ModalFooter, {
      className: g.footer,
      children: [(0, i.jsx)(a.Button, {
        className: g.backButton,
        onClick: T,
        look: a.ButtonLooks.BLANK,
        children: (0, i.jsx)(a.Text, {
          color: "header-primary",
          tag: "p",
          variant: "heading-md/semibold",
          children: h.default.Messages.BACK
        })
      }), (0, i.jsx)(p.ItemPurchaseButton, {
        appId: E,
        sku: L
      })]
    })]
  })
}