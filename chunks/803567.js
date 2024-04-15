"use strict";
s.r(t), s.d(t, {
  default: function() {
    return M
  }
}), s("653041");
var a, n, l = s("735250");
s("470079");
var i = s("120356"),
  r = s.n(i),
  o = s("442837"),
  d = s("780384"),
  u = s("481060"),
  c = s("846027"),
  S = s("463395"),
  E = s("131951"),
  T = s("285952"),
  f = s("153124"),
  m = s("626135"),
  _ = s("63063"),
  g = s("210887"),
  I = s("981631"),
  h = s("689938"),
  N = s("794711");
let p = s("775322"),
  C = s("853453"),
  A = (0, f.uid)();
(n = a || (a = {}))[n.NONE = 0] = "NONE", n[n.STANDARD = 1] = "STANDARD", n[n.KRISP = 2] = "KRISP";
let O = {
  page: I.AnalyticsPages.USER_SETTINGS,
  section: I.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
};

function x(e) {
  let t = e.currentTarget;
  m.default.track(I.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      page: I.AnalyticsPages.USER_SETTINGS,
      section: I.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function R() {
  let e = (0, o.useStateFromStores)([g.default], () => g.default.theme),
    {
      noiseCancellation: t,
      noiseSuppression: s,
      noiseSuppressionSupported: a,
      noiseCancellationSupported: n
    } = (0, o.useStateFromStoresObject)([E.default], () => ({
      noiseCancellation: E.default.getNoiseCancellation(),
      noiseSuppression: E.default.getNoiseSuppression(),
      noiseSuppressionSupported: E.default.isNoiseSuppressionSupported(),
      noiseCancellationSupported: E.default.isNoiseCancellationSupported()
    }));
  if (!a && !n) return null;
  let i = [];
  return n && i.push({
    name: h.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_KRISP,
    value: 2
  }), a && i.push({
    name: h.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_STANDARD,
    value: 1
  }), i.push({
    name: h.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_DISABLED,
    value: 0
  }), (0, l.jsxs)(u.FormSection, {
    className: N.marginBottom20,
    children: [(0, l.jsx)(u.FormTitle, {
      id: A,
      tag: u.FormTitleTags.H3,
      className: N.marginBottom8,
      children: h.default.Messages.NOISE_SUPPRESSION
    }), (0, l.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: N.marginBottom8,
      children: h.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_DESCRIPTION
    }), (0, l.jsx)(u.RadioGroup, {
      options: i,
      onChange: e => {
        c.default.setNoiseCancellation(2 === e.value, O), c.default.setNoiseSuppression(1 === e.value, O)
      },
      value: t ? 2 : s ? 1 : 0
    }), n && (0, l.jsx)(u.FormNotice, {
      className: N.marginBottom8,
      type: u.FormNoticeTypes.PRIMARY,
      imageData: {
        src: (0, d.isThemeLight)(e) ? p : C,
        width: 70,
        height: 40
      },
      align: T.default.Align.CENTER,
      body: (0, l.jsx)(u.Anchor, {
        href: _.default.getArticleURL(I.HelpdeskArticles.NOISE_SUPPRESSION),
        onClick: x,
        children: h.default.Messages.LEARN_MORE
      })
    }), (0, l.jsx)(u.FormDivider, {})]
  })
}

function M() {
  let {
    inputMode: e,
    inputDeviceId: t,
    echoCancellation: s,
    automaticGainControl: a,
    vadAutoThreshold: n,
    vadUseKrisp: i,
    advancedVoiceActivitySupported: d,
    automaticGainControlSupported: T
  } = (0, o.useStateFromStoresObject)([E.default], () => ({
    inputMode: E.default.getMode(),
    inputDeviceId: E.default.getInputDeviceId(),
    echoCancellation: E.default.getEchoCancellation(),
    automaticGainControl: E.default.getAutomaticGainControl(),
    vadAutoThreshold: E.default.getModeOptions().autoThreshold,
    vadUseKrisp: E.default.getModeOptions().vadUseKrisp,
    advancedVoiceActivitySupported: E.default.isAdvancedVoiceActivitySupported(),
    automaticGainControlSupported: E.default.isAutomaticGainControlSupported()
  })), {
    hasEchoCancellation: f,
    hasNoiseSuppression: m,
    hasAutomaticGainControl: _
  } = (0, o.useStateFromStoresObject)([S.default], () => ({
    hasEchoCancellation: S.default.hasEchoCancellation(t),
    hasNoiseSuppression: S.default.hasNoiseSuppression(t),
    hasAutomaticGainControl: S.default.hasAutomaticGainControl(t)
  }), [t]), g = f || m || _, p = e === I.InputModes.VOICE_ACTIVITY && n;
  return (0, l.jsxs)(u.FormSection, {
    className: N.marginBottom20,
    title: h.default.Messages.FORM_LABEL_VOICE_PROCESSING,
    children: [g && (0, l.jsx)(u.FormText, {
      className: N.marginBottom20,
      type: u.FormText.Types.DESCRIPTION,
      children: h.default.Messages.FORM_HELP_CERTIFIED_VOICE_PROCESSING
    }), (0, l.jsx)(u.FormSwitch, {
      className: r()(N.marginTop8, N.marginBottom20),
      value: s,
      onChange: e => c.default.setEchoCancellation(e, {
        page: I.AnalyticsPages.USER_SETTINGS,
        section: I.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
      }),
      disabled: f,
      children: h.default.Messages.ECHO_CANCELLATION
    }), (0, l.jsx)(R, {}), d && (0, l.jsx)(u.FormSwitch, {
      value: i,
      onChange: t => c.default.setMode(e, {
        vadUseKrisp: t
      }),
      note: h.default.Messages.USER_SETTINGS_DISABLE_ADVANCED_VOICE_ACTIVITY,
      disabled: !p,
      children: h.default.Messages.ADVANCED_VOICE_ACTIVITY
    }), T && (0, l.jsx)(u.FormSwitch, {
      className: "",
      value: a,
      onChange: e => c.default.setAutomaticGainControl(e, {
        page: I.AnalyticsPages.USER_SETTINGS,
        section: I.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
      }),
      disabled: _,
      children: h.default.Messages.AUTOMATIC_GAIN_CONTROL
    })]
  })
}