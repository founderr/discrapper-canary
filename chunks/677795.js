"use strict";
n.r(t), n.d(t, {
  MAX_SUBSCRIPTION_TIERS: function() {
    return h
  },
  RESPONSIVE_MOBILE_WIDTH_SIZE_QUERY: function() {
    return f
  },
  RESPONSIVE_MOBILE_HEIGHT_SMALL_QUERY: function() {
    return E
  },
  GuildRoleSubscriptionBenefitTypes: function() {
    return l
  },
  GuildRoleSubscriptionFormat: function() {
    return u
  },
  TIER_TRIAL_INTERVALS: function() {
    return _
  },
  UserGuildRoleSubscriptionRelationship: function() {
    return c
  },
  CREATOR_REVENUE_PORTAL_URL: function() {
    return m
  },
  CREATOR_REVENUE_SHARE_PERCENTAGE: function() {
    return S
  },
  SERVER_SUBSCRIPTIONS_PREMIUM_CHECKLIST_EDUCATIONAL_URLS: function() {
    return g
  }
});
var i, r, s, a, o, l, u, c, d = n("646718"),
  p = n("843455");
let h = 3,
  f = "(max-width: 485px)",
  E = "(max-height: 450px)";
(i = o || (o = {})).GATING = "GATING", i.GROUP = "GROUP", i.DETAILS = "DETAILS", i.BENEFITS = "BENEFITS", i.CHANNEL_BENEFITS = "CHANNEL_BENEFITS", i.INTANGIBLE_BENEFITS = "INTANGIBLE_BENEFITS ", i.DESIGN = "DESIGN", i.CONFIRMATION = "CONFIRMATION", i.MEMBERS = "MEMBERS", (r = l || (l = {}))[r.CHANNEL = 1] = "CHANNEL", r[r.INTANGIBLE = 2] = "INTANGIBLE", (s = u || (u = {}))[s.SOME_CHANNELS = 0] = "SOME_CHANNELS", s[s.ALL_CHANNELS = 1] = "ALL_CHANNELS";
let _ = [{
  interval: d.SubscriptionIntervalTypes.DAY,
  interval_count: 1
}, {
  interval: d.SubscriptionIntervalTypes.DAY,
  interval_count: 7
}];
(a = c || (c = {}))[a.NONE = 0] = "NONE", a[a.IN_SUBSCRIPTION_SERVER = 1] = "IN_SUBSCRIPTION_SERVER", a[a.SUBSCRIBED = 2] = "SUBSCRIBED";
let m = "https://".concat(p.PRIMARY_DOMAIN, "/creators"),
  S = 90,
  g = Object.freeze({
    PROMO_PAGE_GUIDE: "https://discord.com/creators/say-hello-to-promo-pages-our-new-server-subscriptions-feature",
    CASE_STUDIES: "https://discord.com/creator-portal/learn-from-creators?tab=creator-case-studies",
    SUBSCRIPTION_OFFERING_GUIDE: "https://discord.com/creators/offering-inspiration-",
    TIER_STRUCTURE_GUIDE: "https://discord.com/creators/server-subs-102-to-tier-or-not-to-tier"
  })