n.d(t, {
  Z: function() {
    return _
  }
});
var s = n(735250);
n(470079);
var i = n(442837),
  l = n(481060),
  a = n(270144),
  r = n(488915),
  o = n(171246),
  c = n(696906),
  u = n(981631),
  d = n(689938),
  E = n(463329);

function _(e) {
  let {
    applicationId: t,
    guildId: n
  } = e, _ = (0, a.IX)(t), {
    listingsLoaded: I
  } = (0, a.FE)(t, null == _ ? void 0 : _.primarySkuId), T = (0, i.e7)([r.Z], () => r.Z.getSubscriptionGroupListingForApplication(t), [t]), m = null != T ? (0, o.Pw)(T) : null, {
    openModal: N,
    canOpenModal: h
  } = (0, c.Z)({
    guildId: n,
    groupListingId: null == T ? void 0 : T.id,
    showBenefitsFirst: !0,
    analyticsLocation: u.Sbl.INTERACTION_RESPONSE,
    skuId: null == m ? void 0 : m.id
  });
  return (0, s.jsx)(l.Button, {
    color: l.Button.Colors.BRAND,
    size: l.Button.Sizes.SMALL,
    onClick: () => N(),
    disabled: !h || !I,
    children: (0, s.jsxs)("div", {
      className: E.button,
      children: [(0, s.jsx)(l.ShopIcon, {
        size: "xs",
        color: "white"
      }), d.Z.Messages.INTERACTION_PREMIUM_UPSELL_CTA]
    })
  })
}