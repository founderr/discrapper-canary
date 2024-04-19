"use strict";
a.r(t);
var n, s, l, i, r = a("442837"),
  o = a("524437"),
  u = a("570140"),
  d = a("150340"),
  c = a("496675");

function f() {
  return !0
}
class E extends(i = r.default.Store) {
  initialize() {
    this.waitFor(c.default), this.syncWith([c.default], f)
  }
  channelNoticePredicate(e) {
    return (0, d.shouldShowGuildOnboardingUpsell)(e.id, o.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE)
  }
}
l = "GuildOnboardingUpsellNoticeStore", (s = "displayName") in(n = E) ? Object.defineProperty(n, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : n[s] = l, t.default = new E(u.default)