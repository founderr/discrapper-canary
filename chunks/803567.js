s.d(t, {
  Z: function() {
return P;
  }
}), s(653041);
var n, a, i = s(735250);
s(470079);
var r = s(120356),
  o = s.n(r),
  l = s(442837),
  c = s(780384),
  d = s(481060),
  _ = s(846027),
  E = s(921801),
  u = s(463395),
  T = s(131951),
  I = s(285952),
  S = s(153124),
  N = s(626135),
  C = s(63063),
  m = s(210887),
  A = s(726985),
  g = s(981631),
  h = s(689938),
  O = s(549856);
let p = s(775322),
  R = s(853453),
  x = (0, S.hQ)();
(a = n || (n = {}))[a.NONE = 0] = 'NONE', a[a.STANDARD = 1] = 'STANDARD', a[a.KRISP = 2] = 'KRISP';
let M = {
  page: g.ZY5.USER_SETTINGS,
  section: g.jXE.SETTINGS_VOICE_AND_VIDEO
};

function f(e) {
  let t = e.currentTarget;
  N.default.track(g.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
text: t.text,
href: t.href,
location: {
  page: g.ZY5.USER_SETTINGS,
  section: g.jXE.SETTINGS_VOICE_AND_VIDEO
}
  });
}

function D() {
  let e = (0, l.e7)([m.Z], () => m.Z.theme),
{
  noiseCancellation: t,
  noiseSuppression: s,
  noiseSuppressionSupported: n,
  noiseCancellationSupported: a
} = (0, l.cj)([T.Z], () => ({
  noiseCancellation: T.Z.getNoiseCancellation(),
  noiseSuppression: T.Z.getNoiseSuppression(),
  noiseSuppressionSupported: T.Z.isNoiseSuppressionSupported(),
  noiseCancellationSupported: T.Z.isNoiseCancellationSupported()
}));
  if (!n && !a)
return null;
  let r = [];
  return a && r.push({
name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_KRISP,
value: 2
  }), n && r.push({
name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_STANDARD,
value: 1
  }), r.push({
name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DISABLED,
value: 0
  }), (0, i.jsxs)(d.FormSection, {
className: O.marginBottom20,
children: [
  (0, i.jsx)(d.FormTitle, {
    id: x,
    tag: d.FormTitleTags.H3,
    className: O.marginBottom8,
    children: h.Z.Messages.NOISE_SUPPRESSION
  }),
  (0, i.jsx)(d.FormText, {
    type: d.FormText.Types.DESCRIPTION,
    className: O.marginBottom8,
    children: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DESCRIPTION
  }),
  (0, i.jsx)(d.RadioGroup, {
    options: r,
    onChange: e => {
      _.Z.setNoiseCancellation(2 === e.value, M), _.Z.setNoiseSuppression(1 === e.value, M);
    },
    value: t ? 2 : s ? 1 : 0
  }),
  a && (0, i.jsx)(d.FormNotice, {
    className: O.marginBottom8,
    type: d.FormNoticeTypes.PRIMARY,
    imageData: {
      src: (0, c.ap)(e) ? p : R,
      width: 70,
      height: 40
    },
    align: I.Z.Align.CENTER,
    body: (0, i.jsx)(d.Anchor, {
      href: C.Z.getArticleURL(g.BhN.NOISE_SUPPRESSION),
      onClick: f,
      children: h.Z.Messages.LEARN_MORE
    })
  }),
  (0, i.jsx)(d.FormDivider, {})
]
  });
}

function P() {
  let {
inputMode: e,
inputDeviceId: t,
echoCancellation: s,
automaticGainControl: n,
vadAutoThreshold: a,
vadUseKrisp: r
  } = (0, l.cj)([T.Z], () => ({
inputMode: T.Z.getMode(),
inputDeviceId: T.Z.getInputDeviceId(),
echoCancellation: T.Z.getEchoCancellation(),
automaticGainControl: T.Z.getAutomaticGainControl(),
vadAutoThreshold: T.Z.getModeOptions().autoThreshold,
vadUseKrisp: T.Z.getModeOptions().vadUseKrisp
  })), {
hasEchoCancellation: c,
hasNoiseSuppression: I,
hasAutomaticGainControl: S
  } = (0, l.cj)([u.Z], () => ({
hasEchoCancellation: u.Z.hasEchoCancellation(t),
hasNoiseSuppression: u.Z.hasNoiseSuppression(t),
hasAutomaticGainControl: u.Z.hasAutomaticGainControl(t)
  }), [t]), N = c || I || S, C = e === g.pM4.VOICE_ACTIVITY && a;
  return (0, i.jsxs)(d.FormSection, {
className: O.marginBottom20,
title: h.Z.Messages.FORM_LABEL_VOICE_PROCESSING,
children: [
  N && (0, i.jsx)(d.FormText, {
    className: O.marginBottom20,
    type: d.FormText.Types.DESCRIPTION,
    children: h.Z.Messages.FORM_HELP_CERTIFIED_VOICE_PROCESSING
  }),
  (0, i.jsx)(E.F, {
    setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
    children: (0, i.jsx)(d.FormSwitch, {
      className: o()(O.marginTop8, O.marginBottom20),
      value: s,
      onChange: e => _.Z.setEchoCancellation(e, {
        page: g.ZY5.USER_SETTINGS,
        section: g.jXE.SETTINGS_VOICE_AND_VIDEO
      }),
      disabled: c,
      children: h.Z.Messages.ECHO_CANCELLATION
    })
  }),
  (0, i.jsx)(E.F, {
    setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
    children: (0, i.jsx)(D, {})
  }),
  (0, i.jsx)(E.F, {
    setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
    children: (0, i.jsx)(d.FormSwitch, {
      value: r,
      onChange: t => _.Z.setMode(e, {
        vadUseKrisp: t
      }),
      note: h.Z.Messages.USER_SETTINGS_DISABLE_ADVANCED_VOICE_ACTIVITY,
      disabled: !C,
      children: h.Z.Messages.ADVANCED_VOICE_ACTIVITY
    })
  }),
  (0, i.jsx)(E.F, {
    setting: A.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
    children: (0, i.jsx)(d.FormSwitch, {
      className: '',
      value: n,
      onChange: e => _.Z.setAutomaticGainControl(e, {
        page: g.ZY5.USER_SETTINGS,
        section: g.jXE.SETTINGS_VOICE_AND_VIDEO
      }),
      note: h.Z.Messages.USER_SETTINGS_AUTOMATIC_GAIN_CONTROL,
      disabled: S,
      children: h.Z.Messages.AUTOMATIC_GAIN_CONTROL
    })
  })
]
  });
}