"use strict";
s.r(t), s.d(t, {
  default: function() {
    return L
  }
}), s("653041");
var a, n, i = s("735250");
s("470079");
var l = s("120356"),
  r = s.n(l),
  o = s("442837"),
  d = s("780384"),
  u = s("481060"),
  c = s("846027"),
  S = s("921801"),
  E = s("463395"),
  T = s("131951"),
  _ = s("285952"),
  I = s("153124"),
  N = s("626135"),
  g = s("63063"),
  f = s("210887"),
  m = s("726985"),
  C = s("981631"),
  A = s("689938"),
  O = s("611273");
let h = s("775322"),
  p = s("853453"),
  R = (0, I.uid)();
(n = a || (a = {}))[n.NONE = 0] = "NONE", n[n.STANDARD = 1] = "STANDARD", n[n.KRISP = 2] = "KRISP";
let M = {
  page: C.AnalyticsPages.USER_SETTINGS,
  section: C.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
};

function x(e) {
  let t = e.currentTarget;
  N.default.track(C.AnalyticEvents.NOISE_CANCELLATION_LINK_CLICKED, {
    text: t.text,
    href: t.href,
    location: {
      page: C.AnalyticsPages.USER_SETTINGS,
      section: C.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
    }
  })
}

function D() {
  let e = (0, o.useStateFromStores)([f.default], () => f.default.theme),
    {
      noiseCancellation: t,
      noiseSuppression: s,
      noiseSuppressionSupported: a,
      noiseCancellationSupported: n
    } = (0, o.useStateFromStoresObject)([T.default], () => ({
      noiseCancellation: T.default.getNoiseCancellation(),
      noiseSuppression: T.default.getNoiseSuppression(),
      noiseSuppressionSupported: T.default.isNoiseSuppressionSupported(),
      noiseCancellationSupported: T.default.isNoiseCancellationSupported()
    }));
  if (!a && !n) return null;
  let l = [];
  return n && l.push({
    name: A.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_KRISP,
    value: 2
  }), a && l.push({
    name: A.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_STANDARD,
    value: 1
  }), l.push({
    name: A.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_DISABLED,
    value: 0
  }), (0, i.jsxs)(u.FormSection, {
    className: O.marginBottom20,
    children: [(0, i.jsx)(u.FormTitle, {
      id: R,
      tag: u.FormTitleTags.H3,
      className: O.marginBottom8,
      children: A.default.Messages.NOISE_SUPPRESSION
    }), (0, i.jsx)(u.FormText, {
      type: u.FormText.Types.DESCRIPTION,
      className: O.marginBottom8,
      children: A.default.Messages.USER_SETTINGS_NOISE_CANCELLATION_DESCRIPTION
    }), (0, i.jsx)(u.RadioGroup, {
      options: l,
      onChange: e => {
        c.default.setNoiseCancellation(2 === e.value, M), c.default.setNoiseSuppression(1 === e.value, M)
      },
      value: t ? 2 : s ? 1 : 0
    }), n && (0, i.jsx)(u.FormNotice, {
      className: O.marginBottom8,
      type: u.FormNoticeTypes.PRIMARY,
      imageData: {
        src: (0, d.isThemeLight)(e) ? h : p,
        width: 70,
        height: 40
      },
      align: _.default.Align.CENTER,
      body: (0, i.jsx)(u.Anchor, {
        href: g.default.getArticleURL(C.HelpdeskArticles.NOISE_SUPPRESSION),
        onClick: x,
        children: A.default.Messages.LEARN_MORE
      })
    }), (0, i.jsx)(u.FormDivider, {})]
  })
}

function L() {
  let {
    inputMode: e,
    inputDeviceId: t,
    echoCancellation: s,
    automaticGainControl: a,
    vadAutoThreshold: n,
    vadUseKrisp: l,
    advancedVoiceActivitySupported: d,
    automaticGainControlSupported: _
  } = (0, o.useStateFromStoresObject)([T.default], () => ({
    inputMode: T.default.getMode(),
    inputDeviceId: T.default.getInputDeviceId(),
    echoCancellation: T.default.getEchoCancellation(),
    automaticGainControl: T.default.getAutomaticGainControl(),
    vadAutoThreshold: T.default.getModeOptions().autoThreshold,
    vadUseKrisp: T.default.getModeOptions().vadUseKrisp,
    advancedVoiceActivitySupported: T.default.isAdvancedVoiceActivitySupported(),
    automaticGainControlSupported: T.default.isAutomaticGainControlSupported()
  })), {
    hasEchoCancellation: I,
    hasNoiseSuppression: N,
    hasAutomaticGainControl: g
  } = (0, o.useStateFromStoresObject)([E.default], () => ({
    hasEchoCancellation: E.default.hasEchoCancellation(t),
    hasNoiseSuppression: E.default.hasNoiseSuppression(t),
    hasAutomaticGainControl: E.default.hasAutomaticGainControl(t)
  }), [t]), f = I || N || g, h = e === C.InputModes.VOICE_ACTIVITY && n;
  return (0, i.jsxs)(u.FormSection, {
    className: O.marginBottom20,
    title: A.default.Messages.FORM_LABEL_VOICE_PROCESSING,
    children: [f && (0, i.jsx)(u.FormText, {
      className: O.marginBottom20,
      type: u.FormText.Types.DESCRIPTION,
      children: A.default.Messages.FORM_HELP_CERTIFIED_VOICE_PROCESSING
    }), (0, i.jsx)(S.Subsetting, {
      setting: m.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ECHO_CANCELLATION,
      children: (0, i.jsx)(u.FormSwitch, {
        className: r()(O.marginTop8, O.marginBottom20),
        value: s,
        onChange: e => c.default.setEchoCancellation(e, {
          page: C.AnalyticsPages.USER_SETTINGS,
          section: C.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
        }),
        disabled: I,
        children: A.default.Messages.ECHO_CANCELLATION
      })
    }), (0, i.jsx)(S.Subsetting, {
      setting: m.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_NOISE_SUPPRESSION,
      children: (0, i.jsx)(D, {})
    }), d && (0, i.jsx)(S.Subsetting, {
      setting: m.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_ADVANCED_VOICE_ACTIVITY,
      children: (0, i.jsx)(u.FormSwitch, {
        value: l,
        onChange: t => c.default.setMode(e, {
          vadUseKrisp: t
        }),
        note: A.default.Messages.USER_SETTINGS_DISABLE_ADVANCED_VOICE_ACTIVITY,
        disabled: !h,
        children: A.default.Messages.ADVANCED_VOICE_ACTIVITY
      })
    }), _ && (0, i.jsx)(S.Subsetting, {
      setting: m.WebSetting.VOICE_AND_VIDEO_ADVANCED_PROCESSING_AUTOMATIC_GAIN_CONTROL,
      children: (0, i.jsx)(u.FormSwitch, {
        className: "",
        value: a,
        onChange: e => c.default.setAutomaticGainControl(e, {
          page: C.AnalyticsPages.USER_SETTINGS,
          section: C.AnalyticsSections.SETTINGS_VOICE_AND_VIDEO
        }),
        note: A.default.Messages.USER_SETTINGS_AUTOMATIC_GAIN_CONTROL,
        disabled: g,
        children: A.default.Messages.AUTOMATIC_GAIN_CONTROL
      })
    })]
  })
}