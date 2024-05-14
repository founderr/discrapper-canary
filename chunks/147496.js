"use strict";
n.r(t), n.d(t, {
  ItemDetailsModal: function() {
    return v
  }
});
var i = n("735250");
n("470079");
var l = n("752843"),
  r = n("790472"),
  s = n("442837"),
  a = n("481060"),
  o = n("55563"),
  u = n("551428"),
  d = n("73346"),
  c = n("591759"),
  f = n("110742"),
  p = n("680005"),
  m = n("938337"),
  h = n("981631"),
  S = n("689938"),
  g = n("399461");

function v(e) {
  var t, n, v, T;
  let {
    onClose: x,
    transitionState: _,
    skuId: I,
    appId: C
  } = e, E = (0, s.useStateFromStores)([u.default], () => u.default.getForSKU(I), [I]), L = (0, s.useStateFromStores)([o.default], () => o.default.get(I), [I]), j = (0, f.useHasActiveEntitlement)(I);
  if (null == L) return null;
  let N = null !== (n = L.name) && void 0 !== n ? n : "",
    R = null !== (v = null == E ? void 0 : null === (t = E.description) || void 0 === t ? void 0 : t.trim()) && void 0 !== v ? v : void 0,
    b = (null == E ? void 0 : E.headerBackground) != null && null !== (T = c.default.toURLSafe((0, d.getAssetURL)(C, E.headerBackground, 256))) && void 0 !== T ? T : void 0,
    y = L.type === h.SKUTypes.DURABLE && j,
    A = L.type === h.SKUTypes.DURABLE ? y ? S.default.Messages.STOREFRONT_DURABLE_AVAILABILITY_NONE : S.default.Messages.STOREFRONT_DURABLE_AVAILABILITY : void 0,
    {
      price: O
    } = L;
  return null == O ? null : (0, i.jsxs)(a.ModalRoot, {
    transitionState: _,
    size: a.ModalSize.DYNAMIC,
    className: g.subDetailsModal,
    children: [(0, i.jsx)(m.TrackedCardDetails, {
      appId: C,
      skuId: L.id,
      title: N,
      description: R,
      imgSrc: b,
      tag: null != A ? (0, i.jsx)(l.Tag, {
        text: A
      }) : void 0,
      onClose: x,
      FallbackIcon: r.TicketIcon
    }), (0, i.jsxs)(a.ModalFooter, {
      className: g.footer,
      children: [(0, i.jsx)(a.Button, {
        className: g.backButton,
        onClick: x,
        look: a.ButtonLooks.BLANK,
        children: (0, i.jsx)(a.Text, {
          color: "header-primary",
          tag: "p",
          variant: "heading-md/semibold",
          children: S.default.Messages.BACK
        })
      }), (0, i.jsx)(p.ItemPurchaseButton, {
        appId: C,
        sku: L
      })]
    })]
  })
}