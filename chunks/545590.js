"use strict";
l.r(t), l.d(t, {
  default: function() {
    return _
  }
});
var n = l("37983");
l("884691");
var a = l("446674"),
  s = l("90592"),
  i = l("910861"),
  r = l("153335"),
  o = l("191814"),
  u = l("8161"),
  d = l("613676"),
  c = l("713135"),
  f = l("999203"),
  m = l("609734"),
  p = l("777003"),
  T = l("49111"),
  E = l("782340"),
  S = l("431375");

function _(e) {
  let {
    user: t,
    guildId: l
  } = e, _ = (0, a.useStateFromStores)([c.default], () => {
    var e;
    return null === (e = c.default.getUserProfile(t.id)) || void 0 === e ? void 0 : e.application
  }), h = null != _ && (0, d.canInstallApplication)(_.id, _.customInstallUrl, _.installParams), {
    botUpgradeable: I,
    subscriptionGroupListing: A
  } = (0, f.default)({
    user: t,
    guildId: l
  }), g = null != A ? (0, s.getPayableSubscriptionListing)(A) : null, {
    openModal: v
  } = (0, r.default)({
    listing: g,
    guildId: l,
    groupListingId: null == A ? void 0 : A.id,
    showBenefitsFirst: !0,
    analyticsLocation: T.AnalyticsLocations.BOT_PROFILE_POPOUT
  });
  return h || I ? (0, n.jsx)(p.default, {
    children: (0, n.jsxs)("div", {
      className: S.buttonsContainer,
      children: [(0, n.jsx)(m.default, {
        application: _,
        className: S.button
      }), I && (0, n.jsx)(i.default, {
        onClick: v,
        className: S.button,
        children: (0, n.jsxs)("div", {
          className: S.botUpgradeButtonContent,
          children: [(0, n.jsx)(u.default, {
            width: 16,
            height: 16
          }), (0, n.jsx)(o.default, {
            size: 4,
            horizontal: !0
          }), E.default.Messages.BOT_PROFILE_UPGRADE_CTA]
        })
      })]
    })
  }) : null
}