"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("524437"),
  r = s("481060"),
  o = s("906732"),
  d = s("605236"),
  u = s("441167"),
  c = s("695346"),
  S = s("131951"),
  E = s("924557"),
  T = s("435064"),
  _ = s("779618"),
  f = s("39604"),
  m = s("703288"),
  g = s("491758"),
  I = s("183632"),
  N = s("689938"),
  h = s("477716"),
  C = s("151501"),
  A = s("611273");

function p(e) {
  let {
    className: t,
    showHeader: s = !0
  } = e, p = c.ClipsAllowVoiceRecording.useSetting(), {
    enableViewerClipping: O
  } = u.default.useExperiment({
    location: "Clips Settings"
  }, {
    autoTrackExposure: !1
  }), {
    analyticsLocations: R
  } = (0, o.default)(), x = (0, E.useEnableClips)(), {
    viewerClipsEnabled: M
  } = (0, l.useStateFromStoresObject)([T.default], () => T.default.getSettings()), v = (0, _.default)(S.default);
  return n.useEffect(() => {
    (0, d.markDismissibleContentAsDismissed)(i.DismissibleContent.CLIPS_SETTINGS_BETA_TAG)
  }), (0, a.jsxs)(o.AnalyticsLocationProvider, {
    value: R,
    children: [(x || s) && (0, a.jsx)(r.FormSection, {
      className: t,
      tag: r.FormTitleTags.H1,
      title: s ? (0, a.jsxs)("div", {
        className: h.headerContainer,
        children: [N.default.Messages.CLIPS, (0, a.jsx)(m.default, {})]
      }) : null,
      children: x && (0, a.jsxs)("form", {
        onSubmit: e => e.preventDefault(),
        children: [(0, a.jsx)(g.default, {}), (0, a.jsx)(I.default, {})]
      })
    }), x && (0, a.jsx)(r.FormDivider, {}), (0, a.jsxs)(r.FormSection, {
      className: s || x ? A.marginTop20 : t,
      children: [(0, a.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: C.formItem,
        value: p,
        note: N.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING_DESCRIPTION,
        onChange: e => f.updateAllowVoiceRecording({
          allowVoiceRecording: e
        }),
        children: N.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
      }), O && v && (0, a.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: C.formItem,
        value: M,
        note: N.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
        onChange: e => f.updateViewerClipsEnabled({
          enabled: e,
          trackAnalytics: !0
        }),
        children: N.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
      })]
    })]
  })
}