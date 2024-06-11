"use strict";
s.r(t), s.d(t, {
  default: function() {
    return P
  }
});
var a = s("735250"),
  n = s("470079"),
  i = s("512722"),
  l = s.n(i),
  r = s("442837"),
  o = s("481060"),
  d = s("660216"),
  u = s("230711"),
  c = s("825209"),
  S = s("836157"),
  E = s("706454"),
  T = s("494620"),
  _ = s("131951"),
  I = s("556296"),
  N = s("924557"),
  g = s("435064"),
  f = s("894694"),
  m = s("779618"),
  A = s("39604"),
  C = s("442334"),
  O = s("356659"),
  h = s("981631"),
  R = s("37113"),
  p = s("526761"),
  M = s("689938"),
  D = s("487325"),
  x = s("151501"),
  L = s("611273");

function P() {
  let e = (0, r.useStateFromStores)([_.default], () => _.default.getHardwareH264()),
    {
      clipsEnabled: t,
      remindersEnabled: s,
      decoupledClipsEnabled: i,
      clipsLength: P,
      clipsQuality: b
    } = (0, r.useStateFromStoresObject)([g.default], () => g.default.getSettings()),
    v = (0, r.useStateFromStores)([g.default], () => g.default.getHardwareClassification()),
    U = (0, r.useStateFromStores)([I.default], () => I.default.getKeybindForAction(h.GlobalKeybindActions.SAVE_CLIP, !0)),
    {
      enableDecoupledGameClipping: j
    } = S.default.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    }),
    G = (0, m.default)(_.default),
    {
      showClipsHeaderEntrypoint: F
    } = N.ClipsExperiment.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    });
  l()(null != U, "Save clip keybind unset");
  let B = (0, r.useStateFromStores)([E.default], () => E.default.locale),
    y = n.useMemo(() => [{
      value: O.ClipsLengthSettings.SECONDS_30,
      label: M.default.Messages.CLIPS_LENGTH_SECONDS.format({
        count: 30
      })
    }, {
      value: O.ClipsLengthSettings.MINUTES_1,
      label: M.default.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 1
      })
    }, {
      value: O.ClipsLengthSettings.MINUTES_2,
      label: M.default.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 2
      })
    }], [B]),
    V = n.useMemo(() => [{
      value: R.ApplicationStreamResolutions.RESOLUTION_480,
      label: M.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: R.ApplicationStreamResolutions.RESOLUTION_480
      })
    }, {
      value: R.ApplicationStreamResolutions.RESOLUTION_720,
      label: M.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: R.ApplicationStreamResolutions.RESOLUTION_720
      })
    }, {
      value: R.ApplicationStreamResolutions.RESOLUTION_1080,
      label: M.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: R.ApplicationStreamResolutions.RESOLUTION_1080
      })
    }, {
      value: R.ApplicationStreamResolutions.RESOLUTION_1440,
      label: M.default.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: R.ApplicationStreamResolutions.RESOLUTION_1440
      })
    }, {
      value: R.ApplicationStreamResolutions.RESOLUTION_SOURCE,
      label: M.default.Messages.SCREENSHARE_SOURCE
    }], [B]),
    H = n.useMemo(() => [{
      value: R.ApplicationStreamFPS.FPS_15,
      label: M.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: R.ApplicationStreamFPS.FPS_15
      })
    }, {
      value: R.ApplicationStreamFPS.FPS_30,
      label: M.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: R.ApplicationStreamFPS.FPS_30
      })
    }, {
      value: R.ApplicationStreamFPS.FPS_60,
      label: M.default.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: R.ApplicationStreamFPS.FPS_60
      })
    }], [B]),
    Y = n.useCallback(e => {
      d.default.setKeybind({
        ...U,
        shortcut: e
      })
    }, [U]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsxs)(o.FormSection, {
      disabled: !e,
      children: [!e && (0, a.jsx)(T.default, {
        look: T.InfoBoxLooks.WARNING,
        className: x.formItem,
        children: M.default.Messages.CLIPS_SETTINGS_HW_ENCODING_MUST_BE_ENABLED_INFOBOX.format({
          onClick: () => u.default.open(h.UserSettingsSections.VOICE, null, {
            scrollPosition: p.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        })
      }), v === f.ClipsHardwareClassification.BELOW_MINIMUM ? (0, a.jsx)(T.default, {
        look: T.InfoBoxLooks.WARNING,
        className: x.formItem,
        children: M.default.Messages.CLIPS_SETTINGS_UNDER_MIN_SPECS
      }) : null, (0, a.jsx)(o.FormSwitch, {
        hideBorder: !0,
        disabled: !e,
        className: x.formItem,
        value: t,
        note: M.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS_HELP,
        onChange: e => A.updateClipsEnabled({
          clipsEnabled: e,
          trackAnalytics: !0
        }),
        children: M.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
      }), e && (0, a.jsx)(T.default, {
        className: x.formItem,
        children: M.default.Messages.CLIPS_SETTINGS_QUALITY_INFOBOX
      })]
    }), j && G && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.FormDivider, {}), (0, a.jsx)(o.FormSection, {
        className: L.marginTop20,
        disabled: !e,
        children: (0, a.jsx)(o.FormSwitch, {
          hideBorder: !0,
          disabled: !e,
          className: x.formItem,
          value: i,
          note: M.default.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS_HELP,
          onChange: e => A.updateDecoupledClipsEnabled({
            enabled: e,
            trackAnalytics: !0
          }),
          children: M.default.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS
        })
      })]
    }), F && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.FormDivider, {}), (0, a.jsx)(o.FormSection, {
        className: L.marginTop20,
        children: (0, a.jsx)(o.FormSwitch, {
          hideBorder: !0,
          className: x.formItem,
          value: s,
          note: M.default.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS_HELP,
          onChange: e => A.updateRemindersEnabled(e),
          children: M.default.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS
        })
      })]
    }), (0, a.jsx)(o.FormDivider, {}), (0, a.jsxs)(o.FormSection, {
      className: L.marginTop20,
      children: [(0, a.jsx)(C.SelectItem, {
        className: x.formItem,
        select: A.updateClipsLength,
        title: M.default.Messages.CLIPS_SETTINGS_LENGTH,
        note: M.default.Messages.CLIPS_SETTINGS_LENGTH_HELP,
        value: P,
        options: y
      }), (0, a.jsx)(C.SelectItem, {
        className: x.formItem,
        select: e => A.updateClipsQuality({
          resolution: e,
          frameRate: b.frameRate
        }),
        title: M.default.Messages.CLIPS_SETTINGS_RESOLUTION,
        note: M.default.Messages.CLIPS_SETTINGS_RESOLUTION_NOTE,
        value: b.resolution,
        options: V
      }), (0, a.jsx)(C.SelectItem, {
        className: x.formItem,
        select: e => A.updateClipsQuality({
          resolution: b.resolution,
          frameRate: e
        }),
        title: M.default.Messages.CLIPS_SETTINGS_FRAMERATE,
        note: M.default.Messages.CLIPS_SETTINGS_FRAMERATE_NOTE,
        value: b.frameRate,
        options: H
      }), (0, a.jsx)(C.InputItem, {
        className: x.formItem,
        title: M.default.Messages.CLIPS_SETTINGS_KEYBIND,
        note: M.default.Messages.CLIPS_SETTINGS_KEYBIND_HELP,
        children: (0, a.jsx)("div", {
          className: D.keyRecorder,
          children: (0, a.jsx)(c.default, {
            defaultValue: U.shortcut,
            onChange: Y
          })
        })
      })]
    })]
  })
}