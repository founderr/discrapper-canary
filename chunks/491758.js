"use strict";
s.r(t), s.d(t, {
  default: function() {
    return v
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
  I = s("924557"),
  m = s("435064"),
  N = s("894694"),
  g = s("779618"),
  h = s("39604"),
  C = s("442334"),
  A = s("356659"),
  O = s("981631"),
  p = s("37113"),
  R = s("526761"),
  x = s("689938"),
  M = s("487325"),
  D = s("151501"),
  L = s("611273");

function v() {
  let e = (0, r.useStateFromStores)([_.default], () => _.default.getHardwareH264()),
    {
      clipsEnabled: t,
      remindersEnabled: s,
      decoupledClipsEnabled: l,
      clipsLength: v,
      clipsQuality: P
    } = (0, r.useStateFromStoresObject)([m.default], () => m.default.getSettings()),
    b = (0, r.useStateFromStores)([m.default], () => m.default.getHardwareClassification()),
    U = (0, r.useStateFromStores)([f.default], () => f.default.getKeybindForAction(O.GlobalKeybindActions.SAVE_CLIP, !0)),
    {
      enableDecoupledGameClipping: j
    } = S.default.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    }),
    F = (0, g.default)(_.default),
    {
      showClipsHeaderEntrypoint: G
    } = I.ClipsExperiment.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    });
  i()(null != U, "Save clip keybind unset");
  let y = (0, r.useStateFromStores)([E.default], () => E.default.locale),
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
    }], [y]),
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
    }], [y]),
    H = n.useMemo(() => [{
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
    }], [y]),
    w = n.useCallback(e => {
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
        className: D.formItem,
        children: x.default.Messages.CLIPS_SETTINGS_HW_ENCODING_MUST_BE_ENABLED_INFOBOX.format({
          onClick: () => u.default.open(O.UserSettingsSections.VOICE, null, {
            scrollPosition: R.UserSettingsScrollPositions.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        })
      }), b === N.ClipsHardwareClassification.BELOW_MINIMUM ? (0, a.jsx)(T.default, {
        look: T.InfoBoxLooks.WARNING,
        className: D.formItem,
        children: x.default.Messages.CLIPS_SETTINGS_UNDER_MIN_SPECS
      }) : null, (0, a.jsx)(o.FormSwitch, {
        hideBorder: !0,
        disabled: !e,
        className: D.formItem,
        value: t,
        note: x.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS_HELP,
        onChange: e => h.updateClipsEnabled({
          clipsEnabled: e,
          trackAnalytics: !0
        }),
        children: x.default.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
      }), e && (0, a.jsx)(T.default, {
        className: D.formItem,
        children: x.default.Messages.CLIPS_SETTINGS_QUALITY_INFOBOX
      })]
    }), j && F && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.FormDivider, {}), (0, a.jsx)(o.FormSection, {
        className: L.marginTop20,
        disabled: !e,
        children: (0, a.jsx)(o.FormSwitch, {
          hideBorder: !0,
          disabled: !e,
          className: D.formItem,
          value: l,
          note: x.default.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS_HELP,
          onChange: e => h.updateDecoupledClipsEnabled({
            enabled: e,
            trackAnalytics: !0
          }),
          children: x.default.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS
        })
      })]
    }), G && (0, a.jsxs)(a.Fragment, {
      children: [(0, a.jsx)(o.FormDivider, {}), (0, a.jsx)(o.FormSection, {
        className: L.marginTop20,
        children: (0, a.jsx)(o.FormSwitch, {
          hideBorder: !0,
          className: D.formItem,
          value: s,
          note: x.default.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS_HELP,
          onChange: e => h.updateRemindersEnabled(e),
          children: x.default.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS
        })
      })]
    }), (0, a.jsx)(o.FormDivider, {}), (0, a.jsxs)(o.FormSection, {
      className: L.marginTop20,
      children: [(0, a.jsx)(C.SelectItem, {
        className: D.formItem,
        select: h.updateClipsLength,
        title: x.default.Messages.CLIPS_SETTINGS_LENGTH,
        note: x.default.Messages.CLIPS_SETTINGS_LENGTH_HELP,
        value: v,
        options: B
      }), (0, a.jsx)(C.SelectItem, {
        className: D.formItem,
        select: e => h.updateClipsQuality({
          resolution: e,
          frameRate: P.frameRate
        }),
        title: x.default.Messages.CLIPS_SETTINGS_RESOLUTION,
        note: x.default.Messages.CLIPS_SETTINGS_RESOLUTION_NOTE,
        value: P.resolution,
        options: k
      }), (0, a.jsx)(C.SelectItem, {
        className: D.formItem,
        select: e => h.updateClipsQuality({
          resolution: P.resolution,
          frameRate: e
        }),
        title: x.default.Messages.CLIPS_SETTINGS_FRAMERATE,
        note: x.default.Messages.CLIPS_SETTINGS_FRAMERATE_NOTE,
        value: P.frameRate,
        options: H
      }), (0, a.jsx)(C.InputItem, {
        className: D.formItem,
        title: x.default.Messages.CLIPS_SETTINGS_KEYBIND,
        note: x.default.Messages.CLIPS_SETTINGS_KEYBIND_HELP,
        children: (0, a.jsx)("div", {
          className: M.keyRecorder,
          children: (0, a.jsx)(c.default, {
            defaultValue: U.shortcut,
            onChange: w
          })
        })
      })]
    })]
  })
}