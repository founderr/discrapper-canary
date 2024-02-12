"use strict";
n.r(t), n.d(t, {
  shouldShowGuildOnboardingUpsell: function() {
    return g
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
  o = n("872173"),
  u = n("374363"),
  d = n("305961"),
  c = n("299039"),
  f = n("696326"),
  E = n("380710"),
  T = n("49111"),
  h = n("994428");
let _ = [l.DismissibleContent.GUILD_ONBOARDING_UPSELL_MODAL_V2, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_CHANNEL_NOTICE, l.DismissibleContent.GUILD_ONBOARDING_UPSELL_NAGBAR],
  p = [0, 1, 7];

function g(e, t) {
  var n;
  let i = d.default.getGuilds(),
    l = c.default.entries(i).some(e => {
      let [t, n] = e, i = (0, E.isGuildOnboardingSettingsAvailable)(t), s = n.hasFeature(T.GuildFeatures.GUILD_ONBOARDING_EVER_ENABLED);
      return i && s
    });
  if (l || !(0, E.isGuildOnboardingSettingsAvailable)(e)) return !1;
  let o = null === (n = u.default.settings.userContent) || void 0 === n ? void 0 : n.guildOnboardingUpsellDismissedAt,
    h = null != o ? a.Timestamp.toDate(o) : void 0,
    g = null != h ? s().diff(h, "days") : null,
    S = _.indexOf(t);
  if (-1 === S) return !1;
  let I = null == g || g > p[S];
  if (!I) return !1;
  let A = _.find(e => !(0, r.isDismissibleContentDismissed)(e)) === t;
  if (!A) return !1;
  let {
    showLifecycleUpsells: N
  } = f.default.getCurrentConfig({
    guildId: e,
    location: "7f5b67_1"
  }, {
    disable: l || !(0, E.isGuildOnboardingSettingsAvailable)(e),
    autoTrackExposure: !0
  });
  return N
}

function S(e, t) {
  let n = a.Timestamp.now();
  o.PreloadedUserSettingsActionCreators.updateAsync("userContent", e => {
    e.guildOnboardingUpsellDismissedAt = n
  }, o.UserSettingsDelay.INFREQUENT_USER_ACTION), null != t && (0, r.markDismissibleContentAsDismissed)(t, {
    forceTrack: !0,
    dismissAction: h.ContentDismissActionType.AUTO,
    guildId: e
  })
}