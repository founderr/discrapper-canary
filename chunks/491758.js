"use strict";
s.r(t), s.d(t, {
  default: function() {
    return D
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
  g = s("435064"),
  I = s("894694"),
  N = s("779618"),
  h = s("39604"),
  C = s("442334"),
  A = s("356659"),
  p = s("981631"),
  O = s("37113"),
  R = s("526761"),
  x = s("689938"),
  M = s("487325"),
  v = s("151501"),
  L = s("611273");

function D() {
  let e = (0, r.useStateFromStores)([_.default], () => _.default.getHardwareH264()),
    {
      clipsEnabled: t,
      remindersEnabled: s,
      decoupledClipsEnabled: l,
      clipsLength: D,
      clipsQuality: P
    } = (0, r.useStateFromStoresObject)([g.default], () => g.default.getSettings()),
    b = (0, r.useStateFromStores)([g.default], () => g.default.getHardwareClassification()),
    j = (0, r.useStateFromStores)([f.default], () => f.default.getKeybindForAction(p.GlobalKeybindActions.SAVE_CLIP, !0)),
    {
      enableDecoupledGameClipping: U
    } = S.default.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    }),
    y = (0, N.default)(_.default),
    {
      showClipsHeaderEntrypoint: F
    } = m.ClipsExperiment.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    });
  i()(null != j, "Save clip keybind unset");
  let G = (0, r.useStateFromStores)([E.default], () => E.default.locale),
    B = n.useMemo(() => [{
      value: A.ClipsLengthSettings.SECONDS_30,
      label: x.default.Messages.CLIPS_LENGTH_SECONDS.format({
        count: 30
      })
    }, {
      value: A.ClipsLengthSettings.MINUTES_1,
      label: x.default.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 1
      })
    }, {
      value: A.ClipsLengthSettings.MINUTES_2,
      label: x.default.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 2
      })
    }], [G]),
    k = n.useMemo(() => [{
      value: O.ApplicationStreamResolutions.RESOLUTION_480,
      label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: O.ApplicationStreamResolutions.RESOLUTION_480
      })
    }, {
      value: O.ApplicationStreamResolutions.RESOLUTION_720,
      label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: O.ApplicationStreamResolutions.RESOLUTION_720
      })
    }, {
      value: O.ApplicationStreamResolutions.RESOLUTION_1080,
      label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: O.ApplicationStreamResolutions.RESOLUTION_1080
      })
    }, {
      value: O.ApplicationStreamResolutions.RESOLUTION_1440,
      label: x.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: O.ApplicationStreamResolutions.RESOLUTION_1440
      })
    }, {
      value: O.ApplicationStreamResolutions.RESOLUTION_SOURCE,
      label: x.default.Messages.SCREENSHARE_SOURCE
    }], [G]),
    H = n.useMemo(() => [{
      value: O.ApplicationStreamFPS.FPS_15,
      label: x.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: O.ApplicationStreamFPS.FPS_15
      })
    }, {
      value: O.ApplicationStreamFPS.FPS_30,
      label: x.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: O.ApplicationStreamFPS.FPS_30
      })
    }, {
      value: O.ApplicationStreamFPS.FPS_60,
      label: x.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: O.ApplicationStreamFPS.FPS_60
      })
    }], [G]),
    w = n.useCallback(e => {
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
        className: v.formItem,
        children: x.default.Messages.CLIPS_SETTINGS_HW_ENCODING_MUST_BE_ENABLED_INFOBOX.format({
          onClick: () => u.default.open(p.UserSettingsSections.VOICE, null, {
            scrollPosition: R.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        })
      }), b === I.ClipsHardwareClassification.BELOW_MINIMUM ? (0, a.jsx)(T.default, {
        look: T.InfoBoxLooks.WARNING,
        className: v.formItem,
        children: x.default.Messages.CLIPS_SETTINGS_UNDER_MIN_SPECS
      }) : null, (0, a.jsx)(o.FormSwitch, {
        hideBorder: !0,
        disabled: !e,
        className: v.formItem,
        value: t,
        note: x.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS_HELP,
        onChange: e => h.updateClipsEnabled({
          clipsEnabled: e,
          trackAnalytics: !0
        }),
        children: x.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
      }), e && (0, a.jsx)(T.default, {
        className: v.formItem,
        children: x.default.Messages.CLIPS_SETTINGS_QUALITY_INFOBOX
      })]
    }), U && y && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.FormDivider, {}), (0, a.jsx)(o.FormSection, {
        className: L.marginTop20,
        disabled: !e,
        children: (0, a.jsx)(o.FormSwitch, {
          hideBorder: !0,
          disabled: !e,
          className: v.formItem,
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
        className: L.marginTop20,
        children: (0, a.jsx)(o.FormSwitch, {
          hideBorder: !0,
          className: v.formItem,
          value: s,
          note: x.default.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS_HELP,
          onChange: e => h.updateRemindersEnabled(e),
          children: x.default.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS
        })
      })]
    }), (0, a.jsx)(o.FormDivider, {}), (0, a.jsxs)(o.FormSection, {
      className: L.marginTop20,
      children: [(0, a.jsx)(C.SelectItem, {
        className: v.formItem,
        select: h.updateClipsLength,
        title: x.default.Messages.CLIPS_SETTINGS_LENGTH,
        note: x.default.Messages.CLIPS_SETTINGS_LENGTH_HELP,
        value: D,
        options: B
      }), (0, a.jsx)(C.SelectItem, {
        className: v.formItem,
        select: e => h.updateClipsQuality({
          resolution: e,
          frameRate: P.frameRate
        }),
        title: x.default.Messages.CLIPS_SETTINGS_RESOLUTION,
        note: x.default.Messages.CLIPS_SETTINGS_RESOLUTION_NOTE,
        value: P.resolution,
        options: k
      }), (0, a.jsx)(C.SelectItem, {
        className: v.formItem,
        select: e => h.updateClipsQuality({
          resolution: P.resolution,
          frameRate: e
        }),
        title: x.default.Messages.CLIPS_SETTINGS_FRAMERATE,
        note: x.default.Messages.CLIPS_SETTINGS_FRAMERATE_NOTE,
        value: P.frameRate,
        options: H
      }), (0, a.jsx)(C.InputItem, {
        className: v.formItem,
        title: x.default.Messages.CLIPS_SETTINGS_KEYBIND,
        note: x.default.Messages.CLIPS_SETTINGS_KEYBIND_HELP,
        children: (0, a.jsx)("div", {
          className: M.keyRecorder,
          children: (0, a.jsx)(c.default, {
            defaultValue: j.shortcut,
            onChange: w
          })
        })
      })]
    })]
  })
}