"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("442837"),
  r = n("270144"),
  s = n("171246"),
  a = n("621853"),
  o = n("981631");

function l(e) {
  var t;
  let {
    user: n,
    guildId: l
  } = e, u = (0, i.useStateFromStores)([a.default], () => {
    var e;
    return null === (e = a.default.getUserProfile(n.id)) || void 0 === e ? void 0 : e.application
  }, [n]), {
    applicationSubscriptionListingsShown: d
  } = (0, r.default)({
    applicationId: null == u ? void 0 : u.id,
    groupListingId: null == u ? void 0 : u.primarySkuId,
    guildId: l
  }), {
    activeSubscriptionListing: _,
    activeEntitlement: c,
    subscriptionGroupListing: E
  } = (0, r.useActiveSubscriptionListingForApplication)(null == u ? void 0 : u.id, l), I = null !== (t = null == E ? void 0 : E.sku_flags) && void 0 !== t ? t : 0, T = (0, s.isApplicationUserSubscription)(I) || null != l && l !== o.ME && (0, s.isApplicationGuildSubscription)(I), f = null != c;
  return d ? {
    botUpgraded: f,
    botUpgradeable: !f && d && T,
    activeSubscriptionListing: _,
    subscriptionGroupListing: E
  } : {
    botUpgraded: !1,
    botUpgradeable: !1,
    activeSubscriptionListing: null,
    subscriptionGroupListing: null
  }
}