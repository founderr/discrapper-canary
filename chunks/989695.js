var s, i, l, a, r = n(442837),
  o = n(704215),
  c = n(570140),
  u = n(150340),
  d = n(496675);

function E() {
  return !0
}
class h extends(a = r.ZP.Store) {
  initialize() {
    this.waitFor(d.Z), this.syncWith([d.Z], E)
  }
  channelNoticePredicate(e) {
    return (0, u.S)(e.id, o.z.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
  }
}
l = "GuildOnboardingUpsellNoticeStore", (i = "displayName") in(s = h) ? Object.defineProperty(s, i, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[i] = l, t.Z = new h(c.Z)