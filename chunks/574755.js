"use strict";
s.r(t), s.d(t, {
  default: function() {
    return A
  }
});
var a = s("735250"),
  n = s("470079"),
  l = s("442837"),
  i = s("704215"),
  r = s("481060"),
  o = s("906732"),
  d = s("605236"),
  u = s("441167"),
  c = s("695346"),
  S = s("131951"),
  E = s("924557"),
  T = s("435064"),
  _ = s("779618"),
  I = s("39604"),
  f = s("703288"),
  m = s("491758"),
  N = s("183632"),
  g = s("689938"),
  h = s("477716"),
  C = s("151501"),
  O = s("611273");

function A(e) {
  let {
    className: t,
    showHeader: s = !0
  } = e, A = c.ClipsAllowVoiceRecording.useSetting(), {
    enableViewerClipping: p
  } = u.default.useExperiment({
    location: "Clips Settings"
  }, {
    autoTrackExposure: !1
  }), {
    analyticsLocations: R
  } = (0, o.default)(), x = (0, E.useEnableClips)(), {
    viewerClipsEnabled: M
  } = (0, l.useStateFromStoresObject)([T.default], () => T.default.getSettings()), D = (0, _.default)(S.default);
  return n.useEffect(() => {
    (0, d.markDismissibleContentAsDismissed)(i.DismissibleContent.CLIPS_SETTINGS_BETA_TAG)
  }), (0, a.jsxs)(o.AnalyticsLocationProvider, {
    value: R,
    children: [(x || s) && (0, a.jsx)(r.FormSection, {
      className: t,
      tag: r.FormTitleTags.H1,
      title: s ? (0, a.jsxs)("div", {
        className: h.headerContainer,
        children: [g.default.Messages.CLIPS, (0, a.jsx)(f.default, {})]
      }) : null,
      children: x && (0, a.jsxs)("form", {
        onSubmit: e => e.preventDefault(),
        children: [(0, a.jsx)(m.default, {}), (0, a.jsx)(N.default, {})]
      })
    }), x && (0, a.jsx)(r.FormDivider, {}), (0, a.jsxs)(r.FormSection, {
      className: s || x ? O.marginTop20 : t,
      children: [(0, a.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: C.formItem,
        value: A,
        note: g.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING_DESCRIPTION,
        onChange: e => I.updateAllowVoiceRecording({
          allowVoiceRecording: e
        }),
        children: g.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
      }), p && D && (0, a.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: C.formItem,
        value: M,
        note: g.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
        onChange: e => I.updateViewerClipsEnabled({
          enabled: e,
          trackAnalytics: !0
        }),
        children: g.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
      })]
    })]
  })
}