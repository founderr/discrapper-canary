"use strict";
n.r(t), n.d(t, {
  ConnectedChannelNotices: function() {
    return s
  },
  default: function() {
    return R
  }
});
var a, s, l = n("470079"),
  i = n("442837"),
  r = n("179360"),
  o = n("963202"),
  u = n("897285"),
  d = n("300213"),
  c = n("554747"),
  f = n("499137"),
  E = n("929507"),
  _ = n("270144"),
  h = n("400271"),
  C = n("678513"),
  m = n("899667"),
  S = n("496675"),
  I = n("541566"),
  T = n("192513"),
  p = n("255791"),
  g = n("70956"),
  N = n("267642"),
  A = n("981631");

function R(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : A.EMPTY_STRING_SNOWFLAKE_ID,
    {
      lastFetchedAt: a
    } = (0, i.useStateFromStoresObject)([m.default], () => ({
      appliedGuildBoosts: m.default.getAppliedGuildBoostsForGuild(n),
      lastFetchedAt: m.default.getLastFetchedAtForGuild(n)
    })),
    {
      lastDismissedGracePeriod: s,
      isGracePeriodVisible: R
    } = (0, i.useStateFromStoresObject)([I.default], () => ({
      lastDismissedGracePeriod: I.default.getLastDismissedGracePeriodForGuild(n),
      isGracePeriodVisible: I.default.isVisible(n)
    })),
    O = (0, i.useStateFromStores)([h.default], () => h.default.isVisible(e)),
    v = (0, i.useStateFromStores)([p.default], () => p.default.isVisible(e)),
    L = (0, i.useStateFromStores)([S.default], () => S.default.can(A.Permissions.ADMINISTRATOR, e)),
    P = null != s && Date.now() - s <= A.GRACE_PERIOD_CHANNEL_NOTICE_SHOW_DELAY,
    M = null != e ? e.premiumSubscriberCount : 0,
    y = (0, N.getGuildTierFromAppliedBoostCount)(M, n) !== A.BoostedGuildTiers.NONE,
    D = null != a && Date.now() - a <= 432e5,
    x = !D && !P && L && y,
    b = (0, d.useGuildHasLiveChannelNotice)(n),
    U = (0, i.useStateFromStores)([T.default], () => T.default.isVisible(e)),
    j = E.default.useShouldShowChannelNotice(n),
    G = (0, _.useUnseenEndedApplicationSubscriptionEntitlements)(e),
    {
      enableStudyGroup: w
    } = (0, f.useHubStudyGroupExperiment)(e),
    k = G.length > 0,
    F = w && !(null == e ? void 0 : e.hasFeature(A.GuildFeatures.HUB)),
    {
      enableClanCreation: B
    } = o.ClanExperiment.useExperiment({
      location: "useVisibleConnectedNotice"
    }),
    H = L && B && !(null == e ? void 0 : e.hasFeature(A.GuildFeatures.CLAN)),
    V = (0, c.useGuildUpcomingEventsNotice)(n),
    Y = (0, i.useStateFromStores)([C.default], () => null != C.default.getActiveGuildSignUp(n));
  if (l.useEffect(() => {
      u.default.getGuildEventsForCurrentUser(n)
    }, [n]), l.useEffect(() => {
      let e = -1;
      return x && (e = window.setTimeout(() => {
        null != n && (0, r.fetchAppliedGuildBoostsForGuild)(n)
      }, 30 * Math.random() * g.default.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [n, x]), O) return 0;
  if (R) return 1;
  if (v) return 2;
  else if (b || null != V) return 3;
  else if (U) return 4;
  else if (j) return 5;
  else if (k) return 6;
  else if (F) return 7;
  else if (Y) return 8;
  else if (H) return 9;
  return null
}(a = s || (s = {}))[a.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", a[a.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", a[a.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", a[a.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", a[a.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", a[a.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", a[a.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", a[a.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM", a[a.SIGNUP = 8] = "SIGNUP", a[a.CLAN_UPSELL = 9] = "CLAN_UPSELL"