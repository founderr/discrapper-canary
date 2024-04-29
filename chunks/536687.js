"use strict";
n.r(t), n.d(t, {
  ConnectedChannelNotices: function() {
    return s
  },
  default: function() {
    return v
  }
});
var a, s, l = n("470079"),
  i = n("442837"),
  r = n("179360"),
  o = n("134726"),
  u = n("897285"),
  d = n("300213"),
  c = n("554747"),
  f = n("499137"),
  E = n("929507"),
  h = n("270144"),
  _ = n("400271"),
  C = n("678513"),
  m = n("899667"),
  S = n("496675"),
  p = n("541566"),
  I = n("192513"),
  T = n("255791"),
  g = n("70956"),
  A = n("267642"),
  N = n("981631");

function v(e) {
  var t, n;
  let a = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : N.EMPTY_STRING_SNOWFLAKE_ID,
    {
      lastFetchedAt: s
    } = (0, i.useStateFromStoresObject)([m.default], () => ({
      appliedGuildBoosts: m.default.getAppliedGuildBoostsForGuild(a),
      lastFetchedAt: m.default.getLastFetchedAtForGuild(a)
    })),
    {
      lastDismissedGracePeriod: v,
      isGracePeriodVisible: R
    } = (0, i.useStateFromStoresObject)([p.default], () => ({
      lastDismissedGracePeriod: p.default.getLastDismissedGracePeriodForGuild(a),
      isGracePeriodVisible: p.default.isVisible(a)
    })),
    L = (0, i.useStateFromStores)([_.default], () => _.default.isVisible(e)),
    O = (0, i.useStateFromStores)([T.default], () => T.default.isVisible(e)),
    M = (0, i.useStateFromStores)([S.default], () => S.default.can(N.Permissions.ADMINISTRATOR, e)),
    P = null != v && Date.now() - v <= N.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY,
    x = null != e ? e.premiumSubscriberCount : 0,
    y = (0, A.getGuildTierFromAppliedBoostCount)(x, a) !== N.BoostedGuildTiers.NONE,
    D = null != s && Date.now() - s <= 432e5,
    b = !D && !P && M && y,
    U = (0, d.useGuildHasLiveChannelNotice)(a),
    j = (0, i.useStateFromStores)([I.default], () => I.default.isVisible(e)),
    G = E.default.useShouldShowChannelNotice(a),
    w = (0, h.useUnseenEndedApplicationSubscriptionEntitlements)(e),
    {
      enableStudyGroup: k
    } = (0, f.useHubStudyGroupExperiment)(e),
    F = w.length > 0,
    B = k && !(null == e ? void 0 : e.hasFeature(N.GuildFeatures.HUB)),
    {
      enableClanCreation: H
    } = o.ClanGuildExperiment.useExperiment({
      guildId: null !== (n = null == e ? void 0 : e.id) && void 0 !== n ? n : "0",
      location: "useVisibleConnectedNotice"
    }),
    V = M && H && !(null == e ? void 0 : e.hasFeature(N.GuildFeatures.CLAN)),
    Y = (0, c.useGuildUpcomingEventsNotice)(a),
    W = (0, i.useStateFromStores)([C.default], () => null != C.default.getActiveGuildSignUp(a));
  if (l.useEffect(() => {
      u.default.getGuildEventsForCurrentUser(a)
    }, [a]), l.useEffect(() => {
      let e = -1;
      return b && (e = window.setTimeout(() => {
        null != a && (0, r.fetchAppliedGuildBoostsForGuild)(a)
      }, 30 * Math.random() * g.default.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [a, b]), L) return 0;
  if (R) return 1;
  if (O) return 2;
  else if (U || null != Y) return 3;
  else if (j) return 4;
  else if (G) return 5;
  else if (F) return 6;
  else if (B) return 7;
  else if (W) return 8;
  else if (V) return 9;
  return null
}(a = s || (s = {}))[a.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", a[a.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", a[a.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", a[a.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", a[a.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", a[a.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", a[a.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", a[a.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM", a[a.SIGNUP = 8] = "SIGNUP", a[a.CLAN_UPSELL = 9] = "CLAN_UPSELL"