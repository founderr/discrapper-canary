"use strict";
n.r(t), n.d(t, {
  ConnectedChannelNotices: function() {
    return s
  },
  default: function() {
    return N
  }
});
var a, s, l = n("470079"),
  i = n("442837"),
  r = n("179360"),
  o = n("897285"),
  u = n("300213"),
  d = n("554747"),
  c = n("499137"),
  f = n("929507"),
  E = n("270144"),
  C = n("400271"),
  h = n("678513"),
  _ = n("899667"),
  S = n("496675"),
  m = n("541566"),
  p = n("192513"),
  I = n("255791"),
  g = n("70956"),
  T = n("267642"),
  A = n("981631");

function N(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : A.EMPTY_STRING_SNOWFLAKE_ID,
    {
      lastFetchedAt: a
    } = (0, i.useStateFromStoresObject)([_.default], () => ({
      appliedGuildBoosts: _.default.getAppliedGuildBoostsForGuild(n),
      lastFetchedAt: _.default.getLastFetchedAtForGuild(n)
    })),
    {
      lastDismissedGracePeriod: s,
      isGracePeriodVisible: N
    } = (0, i.useStateFromStoresObject)([m.default], () => ({
      lastDismissedGracePeriod: m.default.getLastDismissedGracePeriodForGuild(n),
      isGracePeriodVisible: m.default.isVisible(n)
    })),
    v = (0, i.useStateFromStores)([C.default], () => C.default.isVisible(e)),
    R = (0, i.useStateFromStores)([I.default], () => I.default.isVisible(e)),
    O = (0, i.useStateFromStores)([S.default], () => S.default.can(A.Permissions.ADMINISTRATOR, e)),
    L = null != s && Date.now() - s <= A.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY,
    P = null != e ? e.premiumSubscriberCount : 0,
    y = (0, T.getGuildTierFromAppliedBoostCount)(P, n) !== A.BoostedGuildTiers.NONE,
    M = null != a && Date.now() - a <= 432e5,
    D = !M && !L && O && y,
    x = (0, u.useGuildHasLiveChannelNotice)(n),
    b = (0, i.useStateFromStores)([p.default], () => p.default.isVisible(e)),
    U = f.default.useShouldShowChannelNotice(n),
    j = (0, E.useUnseenEndedApplicationSubscriptionEntitlements)(e),
    {
      enableStudyGroup: G
    } = (0, c.useHubStudyGroupExperiment)(e),
    w = j.length > 0,
    k = G && !(null == e ? void 0 : e.hasFeature(A.GuildFeatures.HUB)),
    B = (0, d.useGuildUpcomingEventsNotice)(n),
    F = (0, i.useStateFromStores)([h.default], () => null != h.default.getActiveGuildSignUp(n));
  if (l.useEffect(() => {
      o.default.getGuildEventsForCurrentUser(n)
    }, [n]), l.useEffect(() => {
      let e = -1;
      return D && (e = window.setTimeout(() => {
        null != n && (0, r.fetchAppliedGuildBoostsForGuild)(n)
      }, 30 * Math.random() * g.default.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [n, D]), v) return 0;
  if (N) return 1;
  if (R) return 2;
  else if (x || null != B) return 3;
  else if (b) return 4;
  else if (U) return 5;
  else if (w) return 6;
  else if (k) return 7;
  else if (F) return 8;
  return null
}(a = s || (s = {}))[a.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", a[a.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", a[a.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", a[a.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", a[a.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", a[a.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", a[a.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", a[a.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM", a[a.SIGNUP = 8] = "SIGNUP", a[a.CLAN_UPSELL = 9] = "CLAN_UPSELL"