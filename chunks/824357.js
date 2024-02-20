"use strict";
s.r(t), s.d(t, {
  default: function() {
    return p
  }
});
var a = s("37983"),
  n = s("884691"),
  l = s("446674"),
  i = s("151426"),
  r = s("77078"),
  o = s("685665"),
  d = s("10641"),
  u = s("103979"),
  c = s("845579"),
  S = s("56947"),
  E = s("386045"),
  T = s("803725"),
  f = s("311207"),
  m = s("653485"),
  _ = s("462491"),
  g = s("782340"),
  h = s("416255"),
  N = s("824905"),
  I = s("890957");

function p() {
  let e = c.ClipsAllowVoiceRecording.useSetting(),
    {
      enableViewerClipping: t
    } = u.default.useExperiment({
      location: "Clips Settings"
    }, {
      autoTrackExposure: !1
    }),
    {
      AnalyticsLocationProvider: s
    } = (0, o.default)(),
    p = (0, S.useEnableClips)(),
    {
      viewerClipsEnabled: C
    } = (0, l.useStateFromStoresObject)([E.default], () => E.default.getSettings());
  return n.useEffect(() => {
    (0, d.markDismissibleContentAsDismissed)(i.DismissibleContent.CLIPS_SETTINGS_BETA_TAG)
  }), (0, a.jsxs)(s, {
    children: [(0, a.jsx)(r.FormSection, {
      tag: r.FormTitleTags.H1,
      title: (0, a.jsxs)("div", {
        className: h.headerContainer,
        children: [g.default.Messages.CLIPS, (0, a.jsx)(f.default, {})]
      }),
      children: p && (0, a.jsxs)("form", {
        onSubmit: e => e.preventDefault(),
        children: [(0, a.jsx)(m.default, {}), (0, a.jsx)(_.default, {})]
      })
    }), p && (0, a.jsx)(r.FormDivider, {}), (0, a.jsxs)(r.FormSection, {
      className: I.marginTop20,
      children: [(0, a.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: N.formItem,
        value: e,
        note: g.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING_DESCRIPTION,
        onChange: e => T.updateAllowVoiceRecording({
          allowVoiceRecording: e
        }),
        children: g.default.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
      }), t && (0, a.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: N.formItem,
        value: C,
        note: g.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
        onChange: e => T.updateViewerClipsEnabled(e),
        children: g.default.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
      })]
    })]
  })
}