n.d(t, {
    Z: function () {
        return p;
    }
}),
    n(47120);
var i = n(192379),
    s = n(913527),
    r = n.n(s),
    l = n(442837),
    a = n(812206),
    o = n(430824),
    c = n(551428),
    d = n(937615),
    u = n(488915),
    m = n(171246),
    h = n(981631),
    g = n(388032);
function p(e) {
    var t;
    let n = (0, m.bZ)(e),
        s = (0, l.e7)([u.Z], () => u.Z.getSubscriptionListingForPlan(n), [n]),
        p = (0, l.e7)([c.Z], () => (null != s ? c.Z.getForSKU(s.id) : null), [s]),
        x = (0, l.e7)([u.Z], () => (null != s ? u.Z.getSubscriptionGroupListingForSubscriptionListing(s.id) : null), [s]),
        S = null == p ? void 0 : p.applicationId,
        T = (0, l.e7)([a.Z], () => (null != S ? a.Z.getApplication(S) : null), [S]),
        C = null === (t = e.metadata) || void 0 === t ? void 0 : t.application_subscription_guild_id,
        _ = (0, l.e7)([o.Z], () => o.Z.getGuild(C), [C]),
        [E, I] = i.useState(!1),
        f =
            null == s
                ? void 0
                : (function (e) {
                      let { listing: t, subscription: n } = e,
                          i = n.currentPeriodEnd,
                          s = t.subscription_plans[0],
                          l = (0, d.T4)(s.price, s.currency),
                          a = n.createdAt,
                          o = n.status === h.O0b.CANCELED,
                          c = t.soft_deleted,
                          u = n.status === h.O0b.PAST_DUE;
                      return {
                          subscribedSinceDate: a,
                          currentPeriodEndDate: i,
                          currentPeriodEndLabel: r()().isAfter(n.currentPeriodEnd) ? g.intl.string(g.t.ntDlmJ) : g.intl.string(g.t.sq33d3),
                          subscriptionPlanPrice: l,
                          isCancelled: o,
                          isDeleted: c,
                          isPastDue: u
                      };
                  })({
                      listing: s,
                      subscription: e
                  });
    return {
        application: T,
        guild: _,
        expanded: E,
        handleToggleExpanded: () => I((e) => !e),
        listing: s,
        storeListing: p,
        groupListing: x,
        subscriptionInfo: f
    };
}
