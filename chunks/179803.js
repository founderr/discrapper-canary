"use strict";
n.r(t), n.d(t, {
  shouldShowGuildOnboardingUpsell: function() {
    return p
  },
  dismissedGuildOnboardingUpsell: function() {
    return g
  }
}), n("222007");
var s = n("866227"),
  i = n.n(s),
  r = n("151426"),
  a = n("801340"),
  l = n("10641"),
  u = n("872173"),
  o = n("374363"),
  d = n("305961"),
  c = n("299039"),
  E = n("696326"),
  S = n("380710"),
  f = n("49111"),
  _ = n("994428");
let T = [r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
  C = [0, 1, 7];

function p(e, t) {
  var n;
  let s = d.default.getGuilds(),
    r = c.default.entries(s).some(e => {
      let [t, n] = e, s = (0, S.isGuildOnboardingSettingsAvailable)(t), i = n.hasFeature(f.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
      return s && i
    });
  if (r || !(0, S.isGuildOnboardingSettingsAvailable)(e)) return !1;
  let u = null === (n = o.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
    _ = null != u ? a.Timestamp.toDate(u) : void 0,
    p = null != _ ? i().diff(_, "days") : null,
    g = T.indexOf(t);
  if (-1 === g) return !1;
  let A = null == p || p > C[g];
  if (!A) return !1;
  let h = T.find(e => !(0, l.isDismissibleContentDismissed)(e)) === t;
  if (!h) return !1;
  let {
    showLifecycleUpsells: I
  } = E.default.getCurrentConfig({
    guildId: e,
    location: "7f5b67_1"
  }, {
    disable: r || !(0, S.isGuildOnboardingSettingsAvailable)(e),
    autoTrackExposure: !0
  });
  return I
}

function g(e, t) {
  let n = a.Timestamp.now();
  u.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
    e.guildOnboardingUpsellDismissedAt = n
  }, u.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, l.markDismissibleContentAsDismissed)(t, {
    forceTrack: !0,
    dismissAction: _.ContentDismissActionType.AUTO,
    guildId: e
  })
}