t.d(s, {
  Z: function() {
    return P
  }
}), t(653041);
var n, i, a = t(735250);
t(470079);
var l = t(120356),
  r = t.n(l),
  o = t(442837),
  c = t(780384),
  E = t(481060),
  d = t(846027),
  _ = t(921801),
  T = t(463395),
  S = t(131951),
  u = t(285952),
  I = t(153124),
  N = t(626135),
  A = t(63063),
  C = t(210887),
  O = t(726985),
  m = t(981631),
  h = t(689938),
  g = t(331651);
let R = t(775322),
  M = t(853453),
  x = (0, I.hQ)();
(i = n || (n = {}))[i.NONE = 0] = "NONE", i[i.STANDARD = 1] = "STANDARD", i[i.KRISP = 2] = "KRISP";
let D = {
  page: m.ZY5.USER_SETTINGS,
  section: m.jXE.SETTINGS_VOICE_AND_VIDEO
};

function p(e) {
  let s = e.currentTarget;
  N.default.track(m.rMx.NOISE_CANCELLATION_LINK_CLICKED, {
    text: s.text,
    href: s.href,
    location: {
      page: m.ZY5.USER_SETTINGS,
      section: m.jXE.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function L() {
  let e = (0, o.e7)([C.Z], () => C.Z.theme),
    {
      noiseCancellation: s,
      noiseSuppression: t,
      noiseSuppressionSupported: n,
      noiseCancellationSupported: i
    } = (0, o.cj)([S.Z], () => ({
      noiseCancellation: S.Z.getNoiseCancellation(),
      noiseSuppression: S.Z.getNoiseSuppression(),
      noiseSuppressionSupported: S.Z.isNoiseSuppressionSupported(),
      noiseCancellationSupported: S.Z.isNoiseCancellationSupported()
    }));
  if (!n && !i) return null;
  let l = [];
  return i && l.push({
    name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_KRISP,
    value: 2
  }), n && l.push({
    name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_STANDARD,
    value: 1
  }), l.push({
    name: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DISABLED,
    value: 0
  }), (0, a.jsxs)(E.FormSection, {
    className: g.marginBottom20,
    children: [(0, a.jsx)(E.FormTitle, {
      id: x,
      tag: E.FormTitleTags.H3,
      className: g.marginBottom8,
      children: h.Z.Messages.NOISE_SUPPRESSION
    }), (0, a.jsx)(E.FormText, {
      type: E.FormText.Types.DESCRIPTION,
      className: g.marginBottom8,
      children: h.Z.Messages.USER_SETTINGS_NOISE_CANCELLATION_DESCRIPTION
    }), (0, a.jsx)(E.RadioGroup, {
      options: l,
      onChange: e => {
        d.Z.setNoiseCancellation(2 === e.value, D), d.Z.setNoiseSuppression(1 === e.value, D)
      },
      value: s ? 2 : t ? 1 : 0
    }), i && (0, a.jsx)(E.FormNotice, {
      className: g.marginBottom8,
      type: E.FormNoticeTypes.PRIMARY,
      imageData: {
        src: (0, c.ap)(e) ? R : M,
        width: 70,
        height: 40
      },
      align: u.Z.Align.CENTER,
      body: (0, a.jsx)(E.Anchor, {
        href: A.Z.getArticleURL(m.BhN.NOISE_SUPPRESSION),
        onClick: p,
        children: h.Z.Messages.LEARN_MORE
      })
    }), (0, a.jsx)(E.FormDivider, {})]
  })
}

function P() {
  let {
    inputMode: e,
    inputDeviceId: s,
    echoCancellation: t,
    automaticGainControl: n,
    vadAutoThreshold: i,
    vadUseKrisp: l
  } = (0, o.cj)([S.Z], () => ({
    inputMode: S.Z.getMode(),
    inputDeviceId: S.Z.getInputDeviceId(),
    echoCancellation: S.Z.getEchoCancellation(),
    automaticGainControl: S.Z.getAutomaticGainControl(),
    vadAutoThreshold: S.Z.getModeOptions().autoThreshold,
    vadUseKrisp: S.Z.getModeOptions().vadUseKrisp
  })), {
    hasEchoCancellation: c,
    hasNoiseSuppression: u,
    hasAutomaticGainControl: I
  } = (0, o.cj)([T.Z], () => ({
    hasEchoCancellation: T.Z.hasEchoCancellation(s),
    hasNoiseSuppression: T.Z.hasNoiseSuppression(s),
    hasAutomaticGainControl: T.Z.hasAutomaticGainControl(s)
  }), [s]), N = c || u || I, A = e === m.pM4.VOICE_ACTIVITY && i;
  return (0, a.jsxs)(E.FormSection, {
    className: g.marginBottom20,
    title: h.Z.Messages.FORM_LABEL_VOICE_PROCESSING,
    children: [N && (0, a.jsx)(E.FormText, {
      className: g.marginBottom20,
      type: E.FormText.Types.DESCRIPTION,
      children: h.Z.Messages.FORM_HELP_CERTIFIED_VOICE_PROCESSING
    }), (0, a.jsx)(_.F, {
      setting: O.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
      children: (0, a.jsx)(E.FormSwitch, {
        className: r()(g.marginTop8, g.marginBottom20),
        value: t,
        onChange: e => d.Z.setEchoCancellation(e, {
          page: m.ZY5.USER_SETTINGS,
          section: m.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: c,
        children: h.Z.Messages.ECHO_CANCELLATION
      })
    }), (0, a.jsx)(_.F, {
      setting: O.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
      children: (0, a.jsx)(L, {})
    }), (0, a.jsx)(_.F, {
      setting: O.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
      children: (0, a.jsx)(E.FormSwitch, {
        value: l,
        onChange: s => d.Z.setMode(e, {
          vadUseKrisp: s
        }),
        note: h.Z.Messages.USER_SETTINGS_DISABLE_ADVANCED_VOICE_ACTIVITY,
        disabled: !A,
        children: h.Z.Messages.ADVANCED_VOICE_ACTIVITY
      })
    }), (0, a.jsx)(_.F, {
      setting: O.s6.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
      children: (0, a.jsx)(E.FormSwitch, {
        className: "",
        value: n,
        onChange: e => d.Z.setAutomaticGainControl(e, {
          page: m.ZY5.USER_SETTINGS,
          section: m.jXE.SETTINGS_VOICE_AND_VIDEO
        }),
        note: h.Z.Messages.USER_SETTINGS_AUTOMATIC_GAIN_CONTROL,
        disabled: I,
        children: h.Z.Messages.AUTOMATIC_GAIN_CONTROL
      })
    })]
  })
}