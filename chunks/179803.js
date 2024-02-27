"use strict";
n.r(t), n.d(t, {
  shouldShowGuildOnboardingUpsell: function() {
    return A
  },
  dismissedGuildOnboardingUpsell: function() {
    return p
  }
}), n("222007");
var s = n("866227"),
  i = n.n(s),
  r = n("151426"),
  a = n("801340"),
  u = n("10641"),
  l = n("872173"),
  o = n("374363"),
  d = n("305961"),
  c = n("299039"),
  E = n("696326"),
  S = n("380710"),
  _ = n("49111"),
  f = n("994428");
let T = [r.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, r.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
  C = [0, 1, 7];

function A(e, t) {
  var n;
  let s = d.default.getGuilds(),
    r = c.default.entries(s).some(e => {
      let [t, n] = e, s = (0, S.isGuildOnboardingSettingsAvailable)(t), i = n.hasFeature(_.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
      return s && i
    });
  if (r || !(0, S.isGuildOnboardingSettingsAvailable)(e)) return !1;
  let l = null === (n = o.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
    f = null != l ? a.Timestamp.toDate(l) : void 0,
    A = null != f ? i().diff(f, "days") : null,
    p = T.indexOf(t);
  if (-1 === p) return !1;
  let I = null == A || A > C[p];
  if (!I) return !1;
  let R = T.find(e => !(0, u.isDismissibleContentDismissed)(e)) === t;
  if (!R) return !1;
  let {
    showLifecycleUpsells: g
  } = E.default.getCurrentConfig({
    guildId: e,
    location: "7f5b67_1"
  }, {
    disable: r || !(0, S.isGuildOnboardingSettingsAvailable)(e),
    autoTrackExposure: !0
  });
  return g
}

function p(e, t) {
  let n = a.Timestamp.now();
  l.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
    e.guildOnboardingUpsellDismissedAt = n
  }, l.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, u.markDismissibleContentAsDismissed)(t, {
    forceTrack: !0,
    dismissAction: f.ContentDismissActionType.AUTO,
    guildId: e
  })
}