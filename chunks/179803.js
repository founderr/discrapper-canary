"use strict";
n.r(t), n.d(t, {
  shouldShowGuildOnboardingUpsell: function() {
    return _
  },
  dismissedGuildOnboardingUpsell: function() {
    return g
  }
}), n("222007");
var i = n("866227"),
  s = n.n(i),
  a = n("151426"),
  l = n("801340"),
  r = n("10641"),
  o = n("872173"),
  u = n("374363"),
  d = n("305961"),
  c = n("696326"),
  f = n("380710"),
  E = n("49111"),
  T = n("994428");
let h = [a.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, a.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, a.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
  p = [0, 1, 7];

function _(e, t) {
  var n;
  let i = d.default.getGuilds(),
    a = Object.entries(i).some(e => {
      let [t, n] = e, i = (0, f.isGuildOnboardingSettingsAvailable)(t), s = n.hasFeature(E.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
      return i && s
    });
  if (a || !(0, f.isGuildOnboardingSettingsAvailable)(e)) return !1;
  let o = null === (n = u.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
    T = null != o ? l.Timestamp.toDate(o) : void 0,
    _ = null != T ? s().diff(T, "days") : null,
    g = h.indexOf(t);
  if (-1 === g) return !1;
  let S = null == _ || _ > p[g];
  if (!S) return !1;
  let I = h.find(e => !(0, r.isDismissibleContentDismissed)(e)) === t;
  if (!I) return !1;
  let {
    showLifecycleUpsells: A
  } = c.default.getCurrentConfig({
    guildId: e,
    location: "7f5b67_1"
  }, {
    disable: a || !(0, f.isGuildOnboardingSettingsAvailable)(e),
    autoTrackExposure: !0
  });
  return A
}

function g(e, t) {
  let n = l.Timestamp.now();
  o.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
    e.guildOnboardingUpsellDismissedAt = n
  }, o.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, r.markDismissibleContentAsDismissed)(t, {
    forceTrack: !0,
    dismissAction: T.ContentDismissActionType.AUTO,
    guildId: e
  })
}