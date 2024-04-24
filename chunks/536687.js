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
  o = a("134726"),
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
  I = a("541566"),
  p = a("192513"),
  T = a("255791"),
  g = a("70956"),
  A = a("267642"),
  N = a("981631");

function v(e) {
  var t, a;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : N.EMPTY_STRING_SNOWFLAKE_ID,
    {
      lastFetchedAt: s
    } = (0, i.useStateFromStoresObject)([m.default], () => ({
      appliedGuildBoosts: m.default.getAppliedGuildBoostsForGuild(n),
      lastFetchedAt: m.default.getLastFetchedAtForGuild(n)
    })),
    {
      lastDismissedGracePeriod: v,
      isGracePeriodVisible: R
    } = (0, i.useStateFromStoresObject)([I.default], () => ({
      lastDismissedGracePeriod: I.default.getLastDismissedGracePeriodForGuild(n),
      isGracePeriodVisible: I.default.isVisible(n)
    })),
    O = (0, i.useStateFromStores)([_.default], () => _.default.isVisible(e)),
    L = (0, i.useStateFromStores)([T.default], () => T.default.isVisible(e)),
    M = (0, i.useStateFromStores)([S.default], () => S.default.can(N.Permissions.ADMINISTRATOR, e)),
    P = null != v && Date.now() - v <= N.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY,
    x = null != e ? e.premiumSubscriberCount : 0,
    y = (0, A.getGuildTierFromAppliedBoostCount)(x, n) !== N.BoostedGuildTiers.NONE,
    D = null != s && Date.now() - s <= 432e5,
    b = !D && !P && M && y,
    U = (0, d.useGuildHasLiveChannelNotice)(n),
    j = (0, i.useStateFromStores)([p.default], () => p.default.isVisible(e)),
    G = E.default.useShouldShowChannelNotice(n),
    w = (0, h.useUnseenEndedApplicationSubscriptionEntitlements)(e),
    {
      enableStudyGroup: k
    } = (0, f.useHubStudyGroupExperiment)(e),
    F = w.length > 0,
    B = k && !(null == e ? void 0 : e.hasFeature(N.GuildFeatures.HUB)),
    {
      enableClanCreation: H
    } = o.ClanGuildExperiment.useExperiment({
      guildId: null !== (a = null == e ? void 0 : e.id) && void 0 !== a ? a : "0",
      location: "useVisibleConnectedNotice"
    }),
    V = M && H && !(null == e ? void 0 : e.hasFeature(N.GuildFeatures.CLAN)),
    Y = (0, c.useGuildUpcomingEventsNotice)(n),
    W = (0, i.useStateFromStores)([C.default], () => null != C.default.getActiveGuildSignUp(n));
  if (l.useEffect(() => {
      u.default.getGuildEventsForCurrentUser(n)
    }, [n]), l.useEffect(() => {
      let e = -1;
      return b && (e = window.setTimeout(() => {
        null != n && (0, r.fetchAppliedGuildBoostsForGuild)(n)
      }, 30 * Math.random() * g.default.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [n, b]), O) return 0;
  if (R) return 1;
  if (L) return 2;
  else if (U || null != Y) return 3;
  else if (j) return 4;
  else if (G) return 5;
  else if (F) return 6;
  else if (B) return 7;
  else if (W) return 8;
  else if (V) return 9;
  return null
}(n = s || (s = {}))[n.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", n[n.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", n[n.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", n[n.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", n[n.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", n[n.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", n[n.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", n[n.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM", n[n.SIGNUP = 8] = "SIGNUP", n[n.CLAN_UPSELL = 9] = "CLAN_UPSELL"