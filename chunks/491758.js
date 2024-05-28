"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("512722"),
  i = s.n(l),
  r = s("442837"),
  o = s("481060"),
  d = s("660216"),
  u = s("230711"),
  c = s("825209"),
  S = s("836157"),
  E = s("706454"),
  T = s("494620"),
  _ = s("131951"),
  f = s("556296"),
  m = s("924557"),
  I = s("435064"),
  g = s("894694"),
  N = s("779618"),
  h = s("39604"),
  C = s("442334"),
  O = s("356659"),
  A = s("981631"),
  p = s("37113"),
  R = s("526761"),
  x = s("689938"),
  M = s("487325"),
  L = s("151501"),
  D = s("611273");

function P() {
  let e = (0, r.useStateFromStores)([_.default], () => _.default.getHardwareH264()),
    {
      clipsEnabled: t,
      remindersEnabled: s,
      decoupledClipsEnabled: l,
      clipsLength: P,
      clipsQuality: v
    } = (0, r.useStateFromStoresObject)([I.default], () => I.default.getSettings()),
    b = (0, r.useStateFromStores)([I.default], () => I.default.getHardwareClassification()),
    j = (0, r.useStateFromStores)([f.default], () => f.default.getKeybindForAction(A.GlobalKeybindActions.SAVE_CLIP, !0)),
    {
      enableDecoupledGameClipping: U
    } = S.default.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    }),
    G = (0, N.default)(_.default),
    {
      showClipsHeaderEntrypoint: F
    } = m.ClipsExperiment.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    });
  i()(null != j, "Save clip keybind unset");
  let B = (0, r.useStateFromStores)([E.default], () => E.default.locale),
    y = n.useMemo(() => [{
      value: O.ClipsLengthSettings.SECONDS_30,
      label: x.default.Messages.CLIPS_LENGTH_SECONDS.format({
        count: 30
      })
    }, {
      value: O.ClipsLengthSettings.MINUTES_1,
      label: x.default.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 1
      })
    }, {
      value: O.ClipsLengthSettings.MINUTES_2,
      label: x.default.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 2
      })
    }], [B]),
    k = n.useMemo(() => [{
      value: p.ApplicationStreamResolutions.RESOLUTION_480,
      label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: p.ApplicationStreamResolutions.RESOLUTION_480
      })
    }, {
      value: p.ApplicationStreamResolutions.RESOLUTION_720,
      label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: p.ApplicationStreamResolutions.RESOLUTION_720
      })
    }, {
      value: p.ApplicationStreamResolutions.RESOLUTION_1080,
      label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: p.ApplicationStreamResolutions.RESOLUTION_1080
      })
    }, {
      value: p.ApplicationStreamResolutions.RESOLUTION_1440,
      label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: p.ApplicationStreamResolutions.RESOLUTION_1440
      })
    }, {
      value: p.ApplicationStreamResolutions.RESOLUTION_SOURCE,
      label: x.default.Messages.SCREENSHARE_SOURCE
    }], [B]),
    V = n.useMemo(() => [{
      value: p.ApplicationStreamFPS.FPS_15,
      label: x.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: p.ApplicationStreamFPS.FPS_15
      })
    }, {
      value: p.ApplicationStreamFPS.FPS_30,
      label: x.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: p.ApplicationStreamFPS.FPS_30
      })
    }, {
      value: p.ApplicationStreamFPS.FPS_60,
      label: x.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: p.ApplicationStreamFPS.FPS_60
      })
    }], [B]),
    H = n.useCallback(e => {
      d.default.setKeybind({
        ...j,
        shortcut: e
      })
    }, [j]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(o.FormSection, {
      disabled: !e,
      children: [!e && (0, a.jsx)(T.default, {
        look: T.InfoBoxLooks.WARNING,
        className: L.formItem,
        children: x.default.Messages.CLIPS_SETTINGS_HW_ENCODING_MUST_BE_ENABLED_INFOBOX.format({
          onClick: () => u.default.open(A.UserSettingsSections.VOICE, null, {
            scrollPosition: R.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        })
      }), b === g.ClipsHardwareClassification.BELOW_MINIMUM ? (0, a.jsx)(T.default, {
        look: T.InfoBoxLooks.WARNING,
        className: L.formItem,
        children: x.default.Messages.CLIPS_SETTINGS_UNDER_MIN_SPECS
      }) : null, (0, a.jsx)(o.FormSwitch, {
        hideBorder: !0,
        disabled: !e,
        className: L.formItem,
        value: t,
        note: x.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS_HELP,
        onChange: e => h.updateClipsEnabled({
          clipsEnabled: e,
          trackAnalytics: !0
        }),
        children: x.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
      }), e && (0, a.jsx)(T.default, {
        className: L.formItem,
        children: x.default.Messages.CLIPS_SETTINGS_QUALITY_INFOBOX
      })]
    }), U && G && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.FormDivider, {}), (0, a.jsx)(o.FormSection, {
        className: D.marginTop20,
        disabled: !e,
        children: (0, a.jsx)(o.FormSwitch, {
          hideBorder: !0,
          disabled: !e,
          className: L.formItem,
          value: l,
          note: x.default.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS_HELP,
          onChange: e => h.updateDecoupledClipsEnabled({
            enabled: e,
            trackAnalytics: !0
          }),
          children: x.default.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS
        })
      })]
    }), F && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.FormDivider, {}), (0, a.jsx)(o.FormSection, {
        className: D.marginTop20,
        children: (0, a.jsx)(o.FormSwitch, {
          hideBorder: !0,
          className: L.formItem,
          value: s,
          note: x.default.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS_HELP,
          onChange: e => h.updateRemindersEnabled(e),
          children: x.default.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS
        })
      })]
    }), (0, a.jsx)(o.FormDivider, {}), (0, a.jsxs)(o.FormSection, {
      className: D.marginTop20,
      children: [(0, a.jsx)(C.SelectItem, {
        className: L.formItem,
        select: h.updateClipsLength,
        title: x.default.Messages.CLIPS_SETTINGS_LENGTH,
        note: x.default.Messages.CLIPS_SETTINGS_LENGTH_HELP,
        value: P,
        options: y
      }), (0, a.jsx)(C.SelectItem, {
        className: L.formItem,
        select: e => h.updateClipsQuality({
          resolution: e,
          frameRate: v.frameRate
        }),
        title: x.default.Messages.CLIPS_SETTINGS_RESOLUTION,
        note: x.default.Messages.CLIPS_SETTINGS_RESOLUTION_NOTE,
        value: v.resolution,
        options: k
      }), (0, a.jsx)(C.SelectItem, {
        className: L.formItem,
        select: e => h.updateClipsQuality({
          resolution: v.resolution,
          frameRate: e
        }),
        title: x.default.Messages.CLIPS_SETTINGS_FRAMERATE,
        note: x.default.Messages.CLIPS_SETTINGS_FRAMERATE_NOTE,
        value: v.frameRate,
        options: V
      }), (0, a.jsx)(C.InputItem, {
        className: L.formItem,
        title: x.default.Messages.CLIPS_SETTINGS_KEYBIND,
        note: x.default.Messages.CLIPS_SETTINGS_KEYBIND_HELP,
        children: (0, a.jsx)("div", {
          className: M.keyRecorder,
          children: (0, a.jsx)(c.default, {
            defaultValue: j.shortcut,
            onChange: H
          })
        })
      })]
    })]
  })
}