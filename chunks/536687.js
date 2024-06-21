n.d(t, {
  R: function() {
    return s
  },
  Z: function() {
    return f
  }
});
var i, s, l = n(470079),
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
  g = n(496675),
  p = n(541566),
  N = n(192513),
  T = n(255791),
  C = n(70956),
  S = n(267642),
  A = n(981631);

function f(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : A.lds,
    {
      lastFetchedAt: i
    } = (0, a.cj)([m.Z], () => ({
      appliedGuildBoosts: m.Z.getAppliedGuildBoostsForGuild(n),
      lastFetchedAt: m.Z.getLastFetchedAtForGuild(n)
    })),
    {
      lastDismissedGracePeriod: s,
      isGracePeriodVisible: f
    } = (0, a.cj)([p.Z], () => ({
      lastDismissedGracePeriod: p.Z.getLastDismissedGracePeriodForGuild(n),
      isGracePeriodVisible: p.Z.isVisible(n)
    })),
    Z = (0, a.e7)([_.Z], () => _.Z.isVisible(e)),
    v = (0, a.e7)([T.Z], () => T.Z.isVisible(e)),
    L = (0, a.e7)([g.Z], () => g.Z.can(A.Plq.ADMINISTRATOR, e)),
    O = null != s && Date.now() - s <= A.Dge,
    R = null != e ? e.premiumSubscriberCount : 0,
    x = (0, S.rF)(R, n) !== A.Eu4.NONE,
    M = null != i && Date.now() - i <= 432e5,
    P = !M && !O && L && x,
    D = (0, c.m)(n),
    b = (0, a.e7)([N.Z], () => N.Z.isVisible(e)),
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
      return P && (e = window.setTimeout(() => {
        null != n && (0, r.C0)(n)
      }, 30 * Math.random() * C.Z.Millis.SECOND)), () => {
        window.clearTimeout(e)
      }
    }, [n, P]), Z) return 0;
  if (f) return 1;
  if (v) return 2;
  else if (D || null != k) return 3;
  else if (b) return 4;
  else if (y) return 5;
  else if (G) return 6;
  else if (w) return 7;
  else if (B) return 8;
  return null
}(i = s || (s = {}))[i.ENABLE_PUBLIC_GUILD = 0] = "ENABLE_PUBLIC_GUILD", i[i.APPLIED_GUILD_BOOST_GRACE_PERIOD = 1] = "APPLIED_GUILD_BOOST_GRACE_PERIOD", i[i.MAX_MEMBER_COUNT = 2] = "MAX_MEMBER_COUNT", i[i.GUILD_LIVE_CHANNEL = 3] = "GUILD_LIVE_CHANNEL", i[i.GUILD_MFA_WARNING = 4] = "GUILD_MFA_WARNING", i[i.COMMANDS_MIGRATION = 5] = "COMMANDS_MIGRATION", i[i.APPLICATION_SUBSCRIPTION_EXPIRATION = 6] = "APPLICATION_SUBSCRIPTION_EXPIRATION", i[i.HUB_STUDY_ROOM = 7] = "HUB_STUDY_ROOM", i[i.SIGNUP = 8] = "SIGNUP", i[i.CLAN_UPSELL = 9] = "CLAN_UPSELL"