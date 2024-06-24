t.d(s, {
  Z: function() {
    return R
  }
});
var n = t(735250),
  i = t(470079),
  a = t(442837),
  l = t(704215),
  r = t(481060),
  o = t(906732),
  c = t(605236),
  E = t(441167),
  d = t(695346),
  _ = t(131951),
  T = t(924557),
  S = t(435064),
  u = t(779618),
  I = t(39604),
  N = t(703288),
  A = t(491758),
  C = t(183632),
  O = t(689938),
  m = t(513830),
  h = t(655714),
  g = t(331651);

function R(e) {
  let {
    className: s,
    showHeader: t = !0
  } = e, R = d.tU.useSetting(), {
    enableViewerClipping: M
  } = E.Z.useExperiment({
    location: "Clips Settings"
  }, {
    autoTrackExposure: !1
  }), {
    analyticsLocations: x
  } = (0, o.ZP)(), p = (0, T.Go)(), {
    viewerClipsEnabled: D
  } = (0, a.cj)([S.Z], () => S.Z.getSettings()), L = (0, u.Z)(_.Z);
  return i.useEffect(() => {
    (0, c.EW)(l.z.CLIPS_SETTINGS_BETA_TAG)
  }), (0, n.jsxs)(o.Gt, {
    value: x,
    children: [(p || t) && (0, n.jsx)(r.FormSection, {
      className: s,
      tag: r.FormTitleTags.H1,
      title: t ? (0, n.jsxs)("div", {
        className: m.headerContainer,
        children: [O.Z.Messages.CLIPS, (0, n.jsx)(N.Z, {})]
      }) : null,
      children: p && (0, n.jsxs)("form", {
        onSubmit: e => e.preventDefault(),
        children: [(0, n.jsx)(A.Z, {}), (0, n.jsx)(C.Z, {})]
      })
    }), p && (0, n.jsx)(r.FormDivider, {}), (0, n.jsxs)(r.FormSection, {
      className: t || p ? g.marginTop20 : s,
      children: [(0, n.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: h.formItem,
        value: R,
        note: O.Z.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING_DESCRIPTION,
        onChange: e => I.yg({
          allowVoiceRecording: e
        }),
        children: O.Z.Messages.CLIPS_SETTINGS_OPT_OUT_OF_VOICE_RECORDING
      }), M && L && (0, n.jsx)(r.FormSwitch, {
        hideBorder: !0,
        className: h.formItem,
        value: D,
        note: O.Z.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE_DESCRIPTION,
        onChange: e => I.yl({
          enabled: e,
          trackAnalytics: !0
        }),
        children: O.Z.Messages.CLIPS_SETTINGS_VIEWERSIDE_CLIPS_TOGGLE
      })]
    })]
  })
}