t.d(s, {
  Z: function() {
return L;
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
  I = t(131951),
  S = t(556296),
  N = t(924557),
  C = t(435064),
  m = t(894694),
  A = t(779618),
  h = t(39604),
  g = t(442334),
  O = t(356659),
  p = t(981631),
  R = t(37113),
  x = t(526761),
  M = t(689938),
  D = t(899013),
  f = t(992133),
  P = t(224499);

function L() {
  let e = (0, o.e7)([I.Z], () => I.Z.getHardwareEncoding()),
{
  clipsEnabled: s,
  remindersEnabled: t,
  decoupledClipsEnabled: i,
  clipsLength: L,
  clipsQuality: Z
} = (0, o.cj)([C.Z], () => C.Z.getSettings()),
b = (0, o.e7)([C.Z], () => C.Z.getHardwareClassification()),
v = (0, o.e7)([S.Z], () => S.Z.getKeybindForAction(p.kg4.SAVE_CLIP, !0)),
{
  enableDecoupledGameClipping: j
} = E.Z.useExperiment({
  location: 'clips_recording_settings'
}, {
  autoTrackExposure: !1
}),
B = (0, A.Z)(I.Z),
{
  showClipsHeaderEntrypoint: U
} = N.NV.useExperiment({
  location: 'clips_recording_settings'
}, {
  autoTrackExposure: !1
});
  r()(null != v, 'Save clip keybind unset');
  let G = (0, o.e7)([u.default], () => u.default.locale),
F = a.useMemo(() => [{
    value: O.OT.SECONDS_30,
    label: M.Z.Messages.CLIPS_LENGTH_SECONDS.format({
      count: 30
    })
  },
  {
    value: O.OT.MINUTES_1,
    label: M.Z.Messages.CLIPS_LENGTH_MINUTES.format({
      count: 1
    })
  },
  {
    value: O.OT.MINUTES_2,
    label: M.Z.Messages.CLIPS_LENGTH_MINUTES.format({
      count: 2
    })
  }
], [G]),
y = a.useMemo(() => [{
    value: R.LY.RESOLUTION_480,
    label: M.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
      resolution: R.LY.RESOLUTION_480
    })
  },
  {
    value: R.LY.RESOLUTION_720,
    label: M.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
      resolution: R.LY.RESOLUTION_720
    })
  },
  {
    value: R.LY.RESOLUTION_1080,
    label: M.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
      resolution: R.LY.RESOLUTION_1080
    })
  },
  {
    value: R.LY.RESOLUTION_1440,
    label: M.Z.Messages.SCREENSHARE_RESOLUTION_ABBREVIATED.format({
      resolution: R.LY.RESOLUTION_1440
    })
  },
  {
    value: R.LY.RESOLUTION_SOURCE,
    label: M.Z.Messages.SCREENSHARE_SOURCE
  }
], [G]),
V = a.useMemo(() => [{
    value: R.ws.FPS_15,
    label: M.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
      fps: R.ws.FPS_15
    })
  },
  {
    value: R.ws.FPS_30,
    label: M.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
      fps: R.ws.FPS_30
    })
  },
  {
    value: R.ws.FPS_60,
    label: M.Z.Messages.SCREENSHARE_FPS_ABBREVIATED.format({
      fps: R.ws.FPS_60
    })
  }
], [G]),
Y = a.useCallback(e => {
  c.Z.setKeybind({
    ...v,
    shortcut: e
  });
}, [v]);
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsxs)(l.FormSection, {
    disabled: !e,
    children: [
      !e && (0, n.jsx)(T.Z, {
        look: T.z.WARNING,
        className: f.formItem,
        children: M.Z.Messages.CLIPS_SETTINGS_HW_ENCODING_MUST_BE_ENABLED_INFOBOX.format({
          onClick: () => d.Z.open(p.oAB.VOICE, null, {
            scrollPosition: x.KQ.VoiceAndVideoScrollPositions.HARDWARE_ACCELERATION
          })
        })
      }),
      b === m.x.BELOW_MINIMUM ? (0, n.jsx)(T.Z, {
        look: T.z.WARNING,
        className: f.formItem,
        children: M.Z.Messages.CLIPS_SETTINGS_UNDER_MIN_SPECS
      }) : null,
      (0, n.jsx)(l.FormSwitch, {
        hideBorder: !0,
        disabled: !e,
        className: f.formItem,
        value: s,
        note: M.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS_HELP,
        onChange: e => h.em({
          clipsEnabled: e,
          trackAnalytics: !0
        }),
        children: M.Z.Messages.CLIPS_SETTINGS_ENABLE_CLIPS
      }),
      e && (0, n.jsx)(T.Z, {
        className: f.formItem,
        children: M.Z.Messages.CLIPS_SETTINGS_QUALITY_INFOBOX
      })
    ]
  }),
  j && B && (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)(l.FormDivider, {}),
      (0, n.jsx)(l.FormSection, {
        className: P.marginTop20,
        disabled: !e,
        children: (0, n.jsx)(l.FormSwitch, {
          hideBorder: !0,
          disabled: !e,
          className: f.formItem,
          value: i,
          note: M.Z.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS_HELP,
          onChange: e => h._Q({
            enabled: e,
            trackAnalytics: !0
          }),
          children: M.Z.Messages.CLIPS_SETTINGS_ENABLE_DECOUPLED_CLIPS
        })
      })
    ]
  }),
  U && (0, n.jsxs)(n.Fragment, {
    children: [
      (0, n.jsx)(l.FormDivider, {}),
      (0, n.jsx)(l.FormSection, {
        className: P.marginTop20,
        children: (0, n.jsx)(l.FormSwitch, {
          hideBorder: !0,
          className: f.formItem,
          value: t,
          note: M.Z.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS_HELP,
          onChange: e => h.N0(e),
          children: M.Z.Messages.CLIPS_SETTINGS_ENABLE_REMINDERS
        })
      })
    ]
  }),
  (0, n.jsx)(l.FormDivider, {}),
  (0, n.jsxs)(l.FormSection, {
    className: P.marginTop20,
    children: [
      (0, n.jsx)(g.Q, {
        className: f.formItem,
        select: h.eU,
        title: M.Z.Messages.CLIPS_SETTINGS_LENGTH,
        note: M.Z.Messages.CLIPS_SETTINGS_LENGTH_HELP,
        value: L,
        options: F
      }),
      (0, n.jsx)(g.Q, {
        className: f.formItem,
        select: e => h.yi({
          resolution: e,
          frameRate: Z.frameRate
        }),
        title: M.Z.Messages.CLIPS_SETTINGS_RESOLUTION,
        note: M.Z.Messages.CLIPS_SETTINGS_RESOLUTION_NOTE,
        value: Z.resolution,
        options: y
      }),
      (0, n.jsx)(g.Q, {
        className: f.formItem,
        select: e => h.yi({
          resolution: Z.resolution,
          frameRate: e
        }),
        title: M.Z.Messages.CLIPS_SETTINGS_FRAMERATE,
        note: M.Z.Messages.CLIPS_SETTINGS_FRAMERATE_NOTE,
        value: Z.frameRate,
        options: V
      }),
      (0, n.jsx)(g.O, {
        className: f.formItem,
        title: M.Z.Messages.CLIPS_SETTINGS_KEYBIND,
        note: M.Z.Messages.CLIPS_SETTINGS_KEYBIND_HELP,
        children: (0, n.jsx)('div', {
          className: D.keyRecorder,
          children: (0, n.jsx)(_.Z, {
            defaultValue: v.shortcut,
            onChange: Y
          })
        })
      })
    ]
  })
]
  });
}