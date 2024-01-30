"use strict";
n.r(t), n.d(t, {
  shouldShowGuildOnboardingUpsell: function() {
    return _
  },
  dismissedGuildOnboardingUpsell: function() {
    return S
  }
}), n("222007");
var i = n("866227"),
  s = n.n(i),
  l = n("151426"),
  a = n("801340"),
  r = n("10641"),
  u = n("872173"),
  o = n("374363"),
  d = n("305961"),
  c = n("696326"),
  f = n("380710"),
  E = n("49111"),
  T = n("994428");
let h = [l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
  p = [0, 1, 7];

function _(e, t) {
  var n;
  let i = d.default.getGuilds(),
    l = Object.entries(i).some(e => {
      let [t, n] = e, i = (0, f.isGuildOnboardingSettingsAvailable)(t), s = n.hasFeature(E.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
      return i && s
    });
  if (l || !(0, f.isGuildOnboardingSettingsAvailable)(e)) return !1;
  let u = null === (n = o.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
    T = null != u ? a.Timestamp.toDate(u) : void 0,
    _ = null != T ? s().diff(T, "days") : null,
    S = h.indexOf(t);
  if (-1 === S) return !1;
  let g = null == _ || _ > p[S];
  if (!g) return !1;
  let I = h.find(e => !(0, r.isDismissibleContentDismissed)(e)) === t;
  if (!I) return !1;
  let {
    showLifecycleUpsells: A
  } = c.default.getCurrentConfig({
    guildId: e,
    location: "7f5b67_1"
  }, {
    disable: l || !(0, f.isGuildOnboardingSettingsAvailable)(e),
    autoTrackExposure: !0
  });
  return A
}

function S(e, t) {
  let n = a.Timestamp.now();
  u.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
    e.guildOnboardingUpsellDismissedAt = n
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, r.markDismissibleContentAsDismissed)(t, {
    forceTrack: !0,
    dismissAction: T.ContentDismissActionType.AUTO,
    guildId: e
  })
}