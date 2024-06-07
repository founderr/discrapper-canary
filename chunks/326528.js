"use strict";
s.r(t), s.d(t, {
  useGameSettingsTabs: function() {
    return T
  }
});
var a = s("895070"),
  n = s("785511"),
  l = s("194632"),
  i = s("683692"),
  r = s("358085"),
  o = s("394644"),
  d = s("295545"),
  u = s("168308"),
  c = s("726985"),
  S = s("332325"),
  E = s("689938");

function T() {
  let e = (0, u.useShouldShowOverlaySettings)(),
    t = (0, o.useViewableSettingsFilterFromSearch)(c.WebSetting.GAMES);
  return function(e, t, s) {
    var o;
    let d = (o = e, [{
      id: S.GameSettingsTab.MY_GAMES,
      title: E.default.Messages.MY_GAMES,
      icon: n.DpadIcon,
      predicate: () => !r.isPlatformEmbedded,
      setting: c.WebSetting.GAMES_MY_GAMES
    }, {
      id: S.GameSettingsTab.CLIPS,
      title: E.default.Messages.CLIPS,
      icon: a.ClipsIcon,
      setting: c.WebSetting.GAMES_CLIPS
    }, {
      id: S.GameSettingsTab.OVERLAY,
      title: E.default.Messages.SETTINGS_GAMES_OVERLAY,
      icon: i.ScreenSystemRequirementsIcon,
      predicate: () => !o,
      setting: c.WebSetting.GAMES_OVERLAY
    }, {
      id: S.GameSettingsTab.ACTIVITY_PRIVACY,
      title: E.default.Messages.ACTIVITY_PRIVACY,
      icon: l.FlashIcon,
      setting: c.WebSetting.GAMES_ACTIVITY_PRIVACY
    }]).filter(e => null == e.predicate || !e.predicate());
    if (t && null != s && s.size > 0) {
      let e = d.filter(e => s.has(e.setting));
      return e.length > 0 ? e : d
    }
    return d
  }(e, (0, d.useIsEligibleForUserSettingsSearchDesktop)({
    location: "settings"
  }), t)
}