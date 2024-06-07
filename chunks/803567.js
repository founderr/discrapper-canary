"use strict";
s.r(t), s.d(t, {
  default: function() {
    return x
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
  _ = s("153124"),
  I = s("626135"),
  N = s("63063"),
  g = s("210887"),
  f = s("981631"),
  m = s("689938"),
  C = s("611273");
let A = s("775322"),
  h = s("853453"),
  O = (0, _.uid)();
(n = a || (a = {}))[n.NONE = 0] = "NONE", n[n.STANDARD = 1] = "STANDARD", n[n.KRISP = 2] = "KRISP";
let p = {
  page: f.AnalyticsPages.USER_SETTINGS,
  section: f.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
};

function R(e) {
  let t = e.currentTarget;
  I.default.track(f.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      page: f.AnalyticsPages.USER_SETTINGS,
      section: f.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function M() {
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
    name: m.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_KRISP,
    value: 2
  }), a && i.push({
    name: m.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_STANDARD,
    value: 1
  }), i.push({
    name: m.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_DISABLED,
    value: 0
  }), (0, l.jsxs)(u.FormSection, {
    className: C.marginBottom20,
    children: [(0, l.jsx)(u.FormTitle, {
      id: O,
      tag: u.FormTitleTags.H3,
      className: C.marginBottom8,
      children: m.default.Messages.NOISE_SUPPRESSION
    }), (0, l.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: C.marginBottom8,
      children: m.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_DESCRIPTION
    }), (0, l.jsx)(u.RadioGroup, {
      options: i,
      onChange: e => {
        c.default.setNoiseCancellation(2 === e.value, p), c.default.setNoiseSuppression(1 === e.value, p)
      },
      value: t ? 2 : s ? 1 : 0
    }), n && (0, l.jsx)(u.FormNotice, {
      className: C.marginBottom8,
      type: u.FormNoticeTypes.PRIMARY,
      imageData: {
        src: (0, d.isThemeLight)(e) ? A : h,
        width: 70,
        height: 40
      },
      align: T.default.Align.CENTER,
      body: (0, l.jsx)(u.Anchor, {
        href: N.default.getArticleURL(f.HelpdeskArticles.NOISE_SUPPRESSION),
        onClick: R,
        children: m.default.Messages.LEARN_MORE
      })
    }), (0, l.jsx)(u.FormDivider, {})]
  })
}

function x() {
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
    hasEchoCancellation: _,
    hasNoiseSuppression: I,
    hasAutomaticGainControl: N
  } = (0, o.useStateFromStoresObject)([S.default], () => ({
    hasEchoCancellation: S.default.hasEchoCancellation(t),
    hasNoiseSuppression: S.default.hasNoiseSuppression(t),
    hasAutomaticGainControl: S.default.hasAutomaticGainControl(t)
  }), [t]), g = _ || I || N, A = e === f.InputModes.VOICE_ACTIVITY && n;
  return (0, l.jsxs)(u.FormSection, {
    className: C.marginBottom20,
    title: m.default.Messages.FORM_LABEL_VOICE_PROCESSING,
    children: [g && (0, l.jsx)(u.FormText, {
      className: C.marginBottom20,
      type: u.FormText.Types.DESCRIPTION,
      children: m.default.Messages.FORM_HELP_CERTIFIED_VOICE_PROCESSING
    }), (0, l.jsx)(u.FormSwitch, {
      className: r()(C.marginTop8, C.marginBottom20),
      value: s,
      onChange: e => c.default.setEchoCancellation(e, {
        page: f.AnalyticsPages.USER_SETTINGS,
        section: f.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
      }),
      disabled: _,
      children: m.default.Messages.ECHO_CANCELLATION
    }), (0, l.jsx)(M, {}), d && (0, l.jsx)(u.FormSwitch, {
      value: i,
      onChange: t => c.default.setMode(e, {
        vadUseKrisp: t
      }),
      note: m.default.Messages.USER_SETTINGS_DISABLE_ADVANCED_VOICE_ACTIVITY,
      disabled: !A,
      children: m.default.Messages.ADVANCED_VOICE_ACTIVITY
    }), T && (0, l.jsx)(u.FormSwitch, {
      className: "",
      value: a,
      onChange: e => c.default.setAutomaticGainControl(e, {
        page: f.AnalyticsPages.USER_SETTINGS,
        section: f.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
      }),
      note: m.default.Messages.USER_SETTINGS_AUTOMATIC_GAIN_CONTROL,
      disabled: N,
      children: m.default.Messages.AUTOMATIC_GAIN_CONTROL
    })]
  })
}