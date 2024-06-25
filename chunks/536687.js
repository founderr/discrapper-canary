n.d(t, {
  R: function() {
    return i
  },
  Z: function() {
    return f
  }
});
var s, i, l = n(470079),
  a = n(442837),
  r = n(179360),
  o = n(897285),
  c = n(300213),
  u = n(554747),
  d = n(499137),
  E = n(929507),
  h = n(270144),
  _ = n(400271),
  I = n(678513),
  m = n(899667),
  T = n(496675),
  g = n(541566),
  p = n(192513),
  N = n(255791),
  S = n(70956),
  C = n(267642),
  A = n(981631);

function f(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : A.lds,
    {
      lastFetchedAt: s
    } = (0, a.cj)([m.Z], () => ({
      appliedGuildBoosts: m.Z.getAppliedGuildBoostsForGuild(n),
      lastFetchedAt: m.Z.getLastFetchedAtForGuild(n)
    })),
    {
      lastDismissedGracePeriod: i,
      isGracePeriodVisible: f
    } = (0, a.cj)([g.Z], () => ({
      lastDismissedGracePeriod: g.Z.getLastDismissedGracePeriodForGuild(n),
      isGracePeriodVisible: g.Z.isVisible(n)
    })),
    Z = (0, a.e7)([_.Z], () => _.Z.isVisible(e)),
    L = (0, a.e7)([N.Z], () => N.Z.isVisible(e)),
    O = (0, a.e7)([T.Z], () => T.Z.can(A.Plq.ADMINISTRATOR, e)),
    v = null != i && Date.now() - i <= A.Dge,
    R = null != e ? e.premiumSubscriberCount : 0,
    P = (0, C.rF)(R, n) !== A.Eu4.NONE,
    x = null != s && Date.now() - s <= 432e5,
    M = !x && !v && O && P,
    D = (0, c.m)(n),
    b = (0, a.e7)([p.Z], () => p.Z.isVisible(e)),
    y = E.Z.useShouldShowChannelNotice(n),
    j = (0, h.h6)(e),
    {
      enableStudyGroup: U
    } = (0, d.s)(e),
    G = j.length > 0,
    w = U && !(null == e ? void 0 : e.hasFeature(A.oNc.HUB)),
    k = (0, u.Vm)(n),
    B = (0, a.e7)([I.Z], () => null != I.Z.getActiveGuildSignUp(n));
  if (l.useEffect(() => {
      o.Z.getGuildEventsForCurrentUser(n)
    }, [n]), l.useEffect(() => {
      let e = -1;
      return M && (e = window.setTimeout(() => {
        null != n && (0, r.C0)(n)
      }, 30 * Math.random() * S.Z.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [n, M]), Z) return 0;
  if (f) return 1;
  if (L) return 2;
  else if (D || null != k) return 3;
  else if (b) return 4;
  else if (y) return 5;
  else if (G) return 6;
  else if (w) return 7;
  else if (B) return 8;
  return null
}(s = i || (i = {}))[s.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", s[s.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", s[s.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", s[s.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", s[s.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", s[s.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", s[s.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", s[s.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM", s[s.SIGNUP = 8] = "SIGNUP", s[s.CLAN_UPSELL = 9] = "CLAN_UPSELL"