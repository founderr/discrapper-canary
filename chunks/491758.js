t.d(s, {
  Z: function() {
    return Z
  }
});
var n = t(735250),
  i = t(470079),
  a = t(512722),
  l = t.n(a),
  r = t(442837),
  o = t(481060),
  c = t(660216),
  E = t(230711),
  d = t(825209),
  _ = t(836157),
  T = t(706454),
  S = t(494620),
  u = t(131951),
  I = t(556296),
  N = t(924557),
  A = t(435064),
  C = t(894694),
  O = t(779618),
  m = t(39604),
  h = t(442334),
  g = t(356659),
  R = t(981631),
  M = t(37113),
  x = t(526761),
  p = t(689938),
  D = t(404007),
  L = t(655714),
  P = t(331651);

function Z() {
  let e = (0, r.e7)([u.Z], () => u.Z.getHardwareEncoding()),
    {
      clipsEnabled: s,
      remindersEnabled: t,
      decoupledClipsEnabled: a,
      clipsLength: Z,
      clipsQuality: f
    } = (0, r.cj)([A.Z], () => A.Z.getSettings()),
    v = (0, r.e7)([A.Z], () => A.Z.getHardwareClassification()),
    j = (0, r.e7)([I.Z], () => I.Z.getKeybindForAction(R.kg4.SAVE_CLIP, !0)),
    {
      enableDecoupledGameClipping: U
    } = _.Z.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    }),
    B = (0, O.Z)(u.Z),
    {
      showClipsHeaderEntrypoint: b
    } = N.NV.useExperiment({
      location: "clips_recording_settings"
    }, {
      autoTrackExposure: !1
    });
  l()(null != j, "Save clip keybind unset");
  let G = (0, r.e7)([T.default], () => T.default.locale),
    F = i.useMemo(() => [{
      value: g.OT.SECONDS_30,
      label: p.Z.Messages.CLIPS_LENGTH_SECONDS.format({
        count: 30
      })
    }, {
      value: g.OT.MINUTES_1,
      label: p.Z.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 1
      })
    }, {
      value: g.OT.MINUTES_2,
      label: p.Z.Messages.CLIPS_LENGTH_MINUTES.format({
        count: 2
      })
    }], [G]),
    V = i.useMemo(() => [{
      value: M.LY.RESOLUTION_480,
      label: p.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: M.LY.RESOLUTION_480
      })
    }, {
      value: M.LY.RESOLUTION_720,
      label: p.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: M.LY.RESOLUTION_720
      })
    }, {
      value: M.LY.RESOLUTION_1080,
      label: p.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: M.LY.RESOLUTION_1080
      })
    }, {
      value: M.LY.RESOLUTION_1440,
      label: p.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
        resolution: M.LY.RESOLUTION_1440
      })
    }, {
      value: M.LY.RESOLUTION_SOURCE,
      label: p.Z.Messages.SCREENSHARE_SOURCE
    }], [G]),
    y = i.useMemo(() => [{
      value: M.ws.FPS_15,
      label: p.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: M.ws.FPS_15
      })
    }, {
      value: M.ws.FPS_30,
      label: p.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: M.ws.FPS_30
      })
    }, {
      value: M.ws.FPS_60,
      label: p.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
        fps: M.ws.FPS_60
      })
    }], [G]),
    Y = i.useCallback(e => {
      c.Z.setKeybind({
        ...j,
        shortcut: e
      })
    }, [j]);
  return (0, n.jsxs)(n.Fragment, {
    children: [(0, n.jsxs)(o.FormSection, {
      disabled: !e,
      children: [!e && (0, n.jsx)(S.Z, {
        look: S.z.WARNING,
        className: L.formItem,
        children: p.Z.Messages.CLIPS_SETTINGS_HW_ENCODING_MUST_BE_ENABLED_INFOBOX.format({
          onClick: () => E.Z.open(R.oAB.VOICE, null, {
            scrollPosition: x.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        })
      }), v === C.x.BELOW_MINIMUM ? (0, n.jsx)(S.Z, {
        look: S.z.WARNING,
        className: L.formItem,
        children: p.Z.Messages.CLIPS_SETTINGS_UNDER_MIN_SPECS
      }) : null, (0, n.jsx)(o.FormSwitch, {
        hideBorder: !0,
        disabled: !e,
        className: L.formItem,
        value: s,
        note: p.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS_HELP,
        onChange: e => m.em({
          clipsEnabled: e,
          trackAnalytics: !0
        }),
        children: p.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
      }), e && (0, n.jsx)(S.Z, {
        className: L.formItem,
        children: p.Z.Messages.CLIPS_SETTINGS_QUALITY_INFOBOX
      })]
    }), U && B && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(o.FormDivider, {}), (0, n.jsx)(o.FormSection, {
        className: P.marginTop20,
        disabled: !e,
        children: (0, n.jsx)(o.FormSwitch, {
          hideBorder: !0,
          disabled: !e,
          className: L.formItem,
          value: a,
          note: p.Z.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS_HELP,
          onChange: e => m._Q({
            enabled: e,
            trackAnalytics: !0
          }),
          children: p.Z.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS
        })
      })]
    }), b && (0, n.jsxs)(n.Fragment, {
      children: [(0, n.jsx)(o.FormDivider, {}), (0, n.jsx)(o.FormSection, {
        className: P.marginTop20,
        children: (0, n.jsx)(o.FormSwitch, {
          hideBorder: !0,
          className: L.formItem,
          value: t,
          note: p.Z.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS_HELP,
          onChange: e => m.N0(e),
          children: p.Z.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS
        })
      })]
    }), (0, n.jsx)(o.FormDivider, {}), (0, n.jsxs)(o.FormSection, {
      className: P.marginTop20,
      children: [(0, n.jsx)(h.Q, {
        className: L.formItem,
        select: m.eU,
        title: p.Z.Messages.CLIPS_SETTINGS_LENGTH,
        note: p.Z.Messages.CLIPS_SETTINGS_LENGTH_HELP,
        value: Z,
        options: F
      }), (0, n.jsx)(h.Q, {
        className: L.formItem,
        select: e => m.yi({
          resolution: e,
          frameRate: f.frameRate
        }),
        title: p.Z.Messages.CLIPS_SETTINGS_RESOLUTION,
        note: p.Z.Messages.CLIPS_SETTINGS_RESOLUTION_NOTE,
        value: f.resolution,
        options: V
      }), (0, n.jsx)(h.Q, {
        className: L.formItem,
        select: e => m.yi({
          resolution: f.resolution,
          frameRate: e
        }),
        title: p.Z.Messages.CLIPS_SETTINGS_FRAMERATE,
        note: p.Z.Messages.CLIPS_SETTINGS_FRAMERATE_NOTE,
        value: f.frameRate,
        options: y
      }), (0, n.jsx)(h.O, {
        className: L.formItem,
        title: p.Z.Messages.CLIPS_SETTINGS_KEYBIND,
        note: p.Z.Messages.CLIPS_SETTINGS_KEYBIND_HELP,
        children: (0, n.jsx)("div", {
          className: D.keyRecorder,
          children: (0, n.jsx)(d.Z, {
            defaultValue: j.shortcut,
            onChange: Y
          })
        })
      })]
    })]
  })
}