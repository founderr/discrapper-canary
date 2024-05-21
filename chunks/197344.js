"use strict";
n.r(t), n("653041");
var i = n("442837"),
  r = n("292556"),
  s = n("695346"),
  a = n("292959"),
  o = n("626135"),
  l = n("378364"),
  u = n("981631"),
  d = n("689938");

function _() {
  return I() && l.default.experiment.getCurrentConfig({
    location: "holiday_events_is_eligible"
  }, {
    autoTrackExposure: !1
  }).enabled
}

function c() {
  let {
    enabled: e
  } = l.default.experiment.useExperiment({
    location: "holiday_events_use_eligible"
  }, {
    autoTrackExposure: !1
  });
  return I() && e
}

function E() {
  return null != l.default.ringtone && null != l.default.getRingtoneSettingsLabel
}

function I() {
  let e = Date.now();
  return e >= l.default.startTimeMs && e <= l.default.endTimeMs
}
t.default = {
  subscribe: function(e) {
    return l.default.experiment.subscribe({
      location: "holiday_events_subscribe"
    }, e)
  },
  isEligible: _,
  isRingtoneDisabled: function() {
    return null == l.default.ringtone || a.default.isSoundDisabled(l.default.ringtone)
  },
  isRingtoneEligible: function() {
    return _() && E()
  },
  onRingtoneSettingValueChange: function(e) {
    let t = a.default.getDisabledSounds();
    if (null == l.default.ringtone) return;
    let n = t.filter(e => e !== l.default.ringtone);
    !e && n.push(l.default.ringtone), r.default.setDisabledSounds(n), o.default.track(u.AnalyticEvents.EVENT_RINGTONE_TOGGLED, {
      toggled_on: e,
      sound_name: l.default.ringtone
    })
  },
  useIsEligible: c,
  useIsRingtoneDisabled: function() {
    return (0, i.useStateFromStores)([a.default], () => null == l.default.ringtone || a.default.isSoundDisabled(l.default.ringtone))
  },
  useIsRingtoneEligible: function() {
    return c() && E()
  },
  useRingtoneSettingDescription: function() {
    return s.NativePhoneIntegrationEnabled.useSetting() ? void 0 : d.default.Messages.ENABLE_PHONE_INTEGRATION
  },
  useRingtoneSettingValue: function() {
    let e = (0, i.useStateFromStores)([a.default], () => a.default.getDisabledSounds()),
      t = s.NativePhoneIntegrationEnabled.useSetting();
    return null != l.default.ringtone && t && !e.includes(l.default.ringtone)
  },
  getAppSpinnerSources: function() {
    return I() ? l.default.appSpinnerSources : null
  },
  getLoadingTips: function() {
    var e;
    return I() ? null === (e = l.default.getLoadingTips) || void 0 === e ? void 0 : e.call(l.default) : null
  }
}