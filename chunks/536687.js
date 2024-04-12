"use strict";
a.r(t), a.d(t, {
  ConnectedChannelNotices: function() {
    return s
  },
  default: function() {
    return v
  }
});
var n, s, l = a("470079"),
  i = a("442837"),
  r = a("179360"),
  o = a("963202"),
  u = a("897285"),
  d = a("300213"),
  c = a("554747"),
  f = a("499137"),
  E = a("929507"),
  h = a("270144"),
  _ = a("400271"),
  C = a("678513"),
  m = a("899667"),
  S = a("496675"),
  p = a("541566"),
  I = a("192513"),
  T = a("255791"),
  g = a("70956"),
  A = a("267642"),
  N = a("981631");

function v(e) {
  var t;
  let a = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : N.EMPTY_STRING_SNOWFLAKE_ID,
    {
      lastFetchedAt: n
    } = (0, i.useStateFromStoresObject)([m.default], () => ({
      appliedGuildBoosts: m.default.getAppliedGuildBoostsForGuild(a),
      lastFetchedAt: m.default.getLastFetchedAtForGuild(a)
    })),
    {
      lastDismissedGracePeriod: s,
      isGracePeriodVisible: v
    } = (0, i.useStateFromStoresObject)([p.default], () => ({
      lastDismissedGracePeriod: p.default.getLastDismissedGracePeriodForGuild(a),
      isGracePeriodVisible: p.default.isVisible(a)
    })),
    R = (0, i.useStateFromStores)([_.default], () => _.default.isVisible(e)),
    O = (0, i.useStateFromStores)([T.default], () => T.default.isVisible(e)),
    L = (0, i.useStateFromStores)([S.default], () => S.default.can(N.Permissions.ADMINISTRATOR, e)),
    M = null != s && Date.now() - s <= N.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY,
    P = null != e ? e.premiumSubscriberCount : 0,
    x = (0, A.getGuildTierFromAppliedBoostCount)(P, a) !== N.BoostedGuildTiers.NONE,
    y = null != n && Date.now() - n <= 432e5,
    D = !y && !M && L && x,
    b = (0, d.useGuildHasLiveChannelNotice)(a),
    U = (0, i.useStateFromStores)([I.default], () => I.default.isVisible(e)),
    j = E.default.useShouldShowChannelNotice(a),
    G = (0, h.useUnseenEndedApplicationSubscriptionEntitlements)(e),
    {
      enableStudyGroup: w
    } = (0, f.useHubStudyGroupExperiment)(e),
    k = G.length > 0,
    F = w && !(null == e ? void 0 : e.hasFeature(N.GuildFeatures.HUB)),
    {
      enableClanCreation: H
    } = o.ClanExperiment.useExperiment({
      location: "useVisibleConnectedNotice"
    }),
    B = L && H && !(null == e ? void 0 : e.hasFeature(N.GuildFeatures.CLAN)),
    V = (0, c.useGuildUpcomingEventsNotice)(a),
    Y = (0, i.useStateFromStores)([C.default], () => null != C.default.getActiveGuildSignUp(a));
  if (l.useEffect(() => {
      u.default.getGuildEventsForCurrentUser(a)
    }, [a]), l.useEffect(() => {
      let e = -1;
      return D && (e = window.setTimeout(() => {
        null != a && (0, r.fetchAppliedGuildBoostsForGuild)(a)
      }, 30 * Math.random() * g.default.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [a, D]), R) return 0;
  if (v) return 1;
  if (O) return 2;
  else if (b || null != V) return 3;
  else if (U) return 4;
  else if (j) return 5;
  else if (k) return 6;
  else if (F) return 7;
  else if (Y) return 8;
  else if (B) return 9;
  return null
}(n = s || (s = {}))[n.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", n[n.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", n[n.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", n[n.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", n[n.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", n[n.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", n[n.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", n[n.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM", n[n.SIGNUP = 8] = "SIGNUP", n[n.CLAN_UPSELL = 9] = "CLAN_UPSELL"