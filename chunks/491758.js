t.d(s, {
  Z: function() {
    return P
  }
});
var n = t(735250),
  a = t(470079),
  i = t(512722),
  r = t.n(i),
  o = t(442837),
  l = t(481060),
  c = t(660216),
  d = t(230711),
  _ = t(825209),
  E = t(836157),
  u = t(706454),
  T = t(494620),
  S = t(131951),
  I = t(556296),
  N = t(924557),
  C = t(435064),
  m = t(894694),
  A = t(779618),
  O = t(39604),
  g = t(442334),
  h = t(356659),
  R = t(981631),
  p = t(37113),
  x = t(526761),
  M = t(689938),
  D = t(404007),
  f = t(655714),
  L = t(331651);

function P() {
  let e = (0, o.e7)([S.Z], () => S.Z.getHardwareEncoding()),
    {
      clipsEnabled: s,
      remindersEnabled: t,
      decoupledClipsEnabled: i,
      clipsLength: P,
      clipsQuality: Z
    } = (0, o.cj)([C.Z], () => C.Z.getSettings()),
    v = (0, o.e7)([C.Z], () => C.Z.getHardwareClassification()),
    b = (0, o.e7)([I.Z], () => I.Z.getKeybindForAction(R.kg4.SAVE_CLIP, !0)),
    {
      enableDecoupledGameClipping: j
    } = E.Z.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    }),
    U = (0, A.Z)(S.Z),
    {
      showClipsHeaderEntrypoint: B
    } = N.NV.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    });
  r()(null != b, "Save clip keybind unset");
  let G = (0, o.e7)([u.default], () => u.default.locale),
    F = a.useMemo(() => [{
      value: h.OT.SECONDS_30,
      label: M.Z.Messages.CLIPS_LENGTH_SECONDS.format({
        count: 30
      })
    }, {
      value: h.OT.MINUTES_1,
      label: M.Z.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 1
      })
    }, {
      value: h.OT.MINUTES_2,
      label: M.Z.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 2
      })
    }], [G]),
    V = a.useMemo(() => [{
      value: p.LY.RESOLUTION_480,
      label: M.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: p.LY.RESOLUTION_480
      })
    }, {
      value: p.LY.RESOLUTION_720,
      label: M.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: p.LY.RESOLUTION_720
      })
    }, {
      value: p.LY.RESOLUTION_1080,
      label: M.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: p.LY.RESOLUTION_1080
      })
    }, {
      value: p.LY.RESOLUTION_1440,
      label: M.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: p.LY.RESOLUTION_1440
      })
    }, {
      value: p.LY.RESOLUTION_SOURCE,
      label: M.Z.Messages.SCREENSHARE_SOURCE
    }], [G]),
    y = a.useMemo(() => [{
      value: p.ws.FPS_15,
      label: M.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: p.ws.FPS_15
      })
    }, {
      value: p.ws.FPS_30,
      label: M.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: p.ws.FPS_30
      })
    }, {
      value: p.ws.FPS_60,
      label: M.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: p.ws.FPS_60
      })
    }], [G]),
    Y = a.useCallback(e => {
      c.Z.setKeybind({
        ...b,
        shortcut: e
      })
    }, [b]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(l.FormSection, {
      disabled: !e,
      children: [!e && (0, n.jsx)(T.Z, {
        look: T.z.WARNING,
        className: f.formItem,
        children: M.Z.Messages.CLIPS_SETTINGS_HW_ENCODING_MUST_BE_ENABLED_INFOBOX.format({
          onClick: () => d.Z.open(R.oAB.VOICE, null, {
            scrollPosition: x.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        })
      }), v === m.x.BELOW_MINIMUM ? (0, n.jsx)(T.Z, {
        look: T.z.WARNING,
        className: f.formItem,
        children: M.Z.Messages.CLIPS_SETTINGS_UNDER_MIN_SPECS
      }) : null, (0, n.jsx)(l.FormSwitch, {
        hideBorder: !0,
        disabled: !e,
        className: f.formItem,
        value: s,
        note: M.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS_HELP,
        onChange: e => O.em({
          clipsEnabled: e,
          trackAnalytics: !0
        }),
        children: M.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
      }), e && (0, n.jsx)(T.Z, {
        className: f.formItem,
        children: M.Z.Messages.CLIPS_SETTINGS_QUALITY_INFOBOX
      })]
    }), j && U && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(l.FormDivider, {}), (0, n.jsx)(l.FormSection, {
        className: L.marginTop20,
        disabled: !e,
        children: (0, n.jsx)(l.FormSwitch, {
          hideBorder: !0,
          disabled: !e,
          className: f.formItem,
          value: i,
          note: M.Z.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS_HELP,
          onChange: e => O._Q({
            enabled: e,
            trackAnalytics: !0
          }),
          children: M.Z.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS
        })
      })]
    }), B && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(l.FormDivider, {}), (0, n.jsx)(l.FormSection, {
        className: L.marginTop20,
        children: (0, n.jsx)(l.FormSwitch, {
          hideBorder: !0,
          className: f.formItem,
          value: t,
          note: M.Z.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS_HELP,
          onChange: e => O.N0(e),
          children: M.Z.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS
        })
      })]
    }), (0, n.jsx)(l.FormDivider, {}), (0, n.jsxs)(l.FormSection, {
      className: L.marginTop20,
      children: [(0, n.jsx)(g.Q, {
        className: f.formItem,
        select: O.eU,
        title: M.Z.Messages.CLIPS_SETTINGS_LENGTH,
        note: M.Z.Messages.CLIPS_SETTINGS_LENGTH_HELP,
        value: P,
        options: F
      }), (0, n.jsx)(g.Q, {
        className: f.formItem,
        select: e => O.yi({
          resolution: e,
          frameRate: Z.frameRate
        }),
        title: M.Z.Messages.CLIPS_SETTINGS_RESOLUTION,
        note: M.Z.Messages.CLIPS_SETTINGS_RESOLUTION_NOTE,
        value: Z.resolution,
        options: V
      }), (0, n.jsx)(g.Q, {
        className: f.formItem,
        select: e => O.yi({
          resolution: Z.resolution,
          frameRate: e
        }),
        title: M.Z.Messages.CLIPS_SETTINGS_FRAMERATE,
        note: M.Z.Messages.CLIPS_SETTINGS_FRAMERATE_NOTE,
        value: Z.frameRate,
        options: y
      }), (0, n.jsx)(g.O, {
        className: f.formItem,
        title: M.Z.Messages.CLIPS_SETTINGS_KEYBIND,
        note: M.Z.Messages.CLIPS_SETTINGS_KEYBIND_HELP,
        children: (0, n.jsx)("div", {
          className: D.keyRecorder,
          children: (0, n.jsx)(_.Z, {
            defaultValue: b.shortcut,
            onChange: Y
          })
        })
      })]
    })]
  })
}